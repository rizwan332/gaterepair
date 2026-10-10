/**
 * Rewrites the exported GTM container so its tags actually fire on this site.
 *
 *   npx tsx scripts/modernize-gtm.ts
 *   → GTM-MBBT87D8-modernized.json   (import into Tag Manager)
 *
 * ── WHY ─────────────────────────────────────────────────────────────────────
 * The container was built for the WordPress site. Every conversion tag in it
 * is dead on the Next.js build, for three independent reasons — see
 * GTM-AUDIT.md. This applies the fixes as a file the client can import, rather
 * than as a list of clicks to perform by hand in the UI.
 *
 * ── WHAT IT CHANGES ─────────────────────────────────────────────────────────
 * 1. "phone clicks" LINK_CLICK matching `tel:+18007709642` → CUSTOM_EVENT on
 *    `call_click`. The number moved to the local DFW line, so the old string
 *    matches nothing; and matching on a phone number at all breaks again the
 *    next time it changes. `call_click` fires on any tel: link anywhere.
 * 2. "form_submit" waiting on `gtm.formSubmit` → CUSTOM_EVENT on
 *    `generate_lead`. React calls preventDefault(), so no native form
 *    submission ever occurs.
 * 3. Deletes the Elementor listener, which patches XMLHttpRequest on every
 *    page to watch for admin-ajax.php calls that cannot happen here.
 * 4. Re-points the Enhanced Conversions variables from Elementor's field ids
 *    to `user_data.email` / `user_data.phone_number`.
 * 5. Deletes two unattached triggers.
 * 6. Adds SMS tracking, which never existed in the container: an "sms clicks"
 *    trigger on `sms_click`, a GA4 event tag, and — when SMS_CONVERSION_LABEL
 *    is set — a Google Ads conversion tag. The label comes from the "SMS
 *    click" conversion action in Google Ads, so it cannot be invented here:
 *
 *      SMS_CONVERSION_LABEL=AbCdEf123 npx tsx scripts/modernize-gtm.ts
 *
 * 7. The call/form triggers also accept the landing page's event names. The
 *    landing page (calltoaction-landing-page) loads this same container but
 *    pushes `phone_click` / `form_submit` rather than `call_click` /
 *    `generate_lead`, so its leads were never counted. The two sites' event
 *    names do not overlap, so matching both cannot double count.
 * 8. Sets `rdp` (Restricted Data Processing) on the form conversion tag back
 *    to false. It held {{User-Provided Data}} — an object, so truthy — which
 *    silently switched restricted processing on for form conversions.
 *
 * ── SAFETY ──────────────────────────────────────────────────────────────────
 * Renaming a variable is only safe if every reference to it is updated too —
 * GTM resolves them by name, so a missed `{{...}}` silently becomes an empty
 * string. The rename pass rewrites references across every tag, trigger and
 * variable, and the script asserts no stale reference survives.
 *
 * Fingerprints are left alone; Tag Manager reassigns them on import.
 */

import { readFileSync, writeFileSync } from 'node:fs'

/** The live published version (v13, 8 Oct), which already carries fixes 1, 2 and 4. */
const SOURCE = '08-otober-GTM-MBBT87D8_v13.json'
const OUT = 'GTM-MBBT87D8-modernized.json'

type Param = { type: string; key?: string; value?: string; list?: unknown; map?: unknown }
type Entity = {
  name?: string
  type?: string
  triggerId?: string
  variableId?: string
  parameter?: Param[]
  filter?: { type: string; parameter: Param[] }[]
  customEventFilter?: { type: string; parameter: Param[] }[]
  firingTriggerId?: string[]
  [k: string]: unknown
}

const doc = JSON.parse(readFileSync(SOURCE, 'utf8'))
const c = doc.containerVersion
const log: string[] = []

/**
 * Build a CUSTOM_EVENT trigger body, preserving identity fields. Matches any
 * of `eventNames` exactly, via an anchored regex.
 */
function toCustomEvent(trigger: Entity, eventNames: string[]) {
  const { accountId, containerId, triggerId, name } = trigger
  return {
    accountId,
    containerId,
    triggerId,
    name,
    type: 'CUSTOM_EVENT',
    customEventFilter: [
      {
        type: 'MATCH_REGEX',
        parameter: [
          { type: 'TEMPLATE', key: 'arg0', value: '{{_event}}' },
          { type: 'TEMPLATE', key: 'arg1', value: `^(${eventNames.join('|')})$` },
        ],
      },
    ],
  }
}

// ── 1 + 2 + 7. Re-point the two conversion triggers ────────────────────────
c.trigger = (c.trigger as Entity[]).map((t) => {
  if (t.name === 'phone clicks') {
    log.push(`trigger "${t.name}": → CUSTOM_EVENT call_click | phone_click`)
    return toCustomEvent(t, ['call_click', 'phone_click'])
  }
  if (t.name === 'form_submit') {
    log.push(`trigger "${t.name}": → CUSTOM_EVENT generate_lead | form_submit`)
    return toCustomEvent(t, ['generate_lead', 'form_submit'])
  }
  return t
})

// ── 5. Drop triggers attached to no tag ────────────────────────────────────
const referenced = new Set(
  (c.tag as Entity[]).flatMap((t) => [...(t.firingTriggerId ?? []), ...((t.blockingTriggerId as string[]) ?? [])]),
)
const before = c.trigger.length
c.trigger = (c.trigger as Entity[]).filter((t) => {
  const keep = referenced.has(t.triggerId!)
  if (!keep) log.push(`trigger "${t.name}": deleted (attached to no tag)`)
  return keep
})
if (c.trigger.length === before) log.push('no unattached triggers found')

// ── 3. Delete the Elementor listener ───────────────────────────────────────
c.tag = (c.tag as Entity[]).filter((t) => {
  const isElementor =
    t.type === 'html' &&
    (t.parameter ?? []).some((p) => typeof p.value === 'string' && p.value.includes('elementor_pro_forms_send_form'))
  if (isElementor) log.push(`tag "${t.name}": deleted (WordPress/Elementor XHR listener)`)
  return !isElementor
})

// ── 8. Restricted Data Processing back to false on the form tag ────────────
for (const t of c.tag as Entity[]) {
  if (t.type !== 'awct') continue
  for (const p of t.parameter ?? []) {
    if (p.key === 'rdp' && p.value !== 'false') {
      log.push(`tag "${t.name}": rdp "${p.value}" → false`)
      p.type = 'BOOLEAN'
      p.value = 'false'
    }
  }
}

// ── 6. SMS: trigger, GA4 event, and (with a label) an Ads conversion ───────
const nextId = (items: Entity[], key: string) =>
  String(Math.max(0, ...items.map((i) => Number(i[key]) || 0)) + 1)

/** Copy an existing tag as a new one: fresh id, no fingerprint. */
function cloneTag(source: Entity, name: string, firingTriggerId: string, overrides: Record<string, string>) {
  const { fingerprint: _fp, ...rest } = structuredClone(source)
  return {
    ...rest,
    tagId: nextId(c.tag, 'tagId'),
    name,
    firingTriggerId: [firingTriggerId],
    parameter: (rest.parameter as Param[]).map((p) => (p.key! in overrides ? { ...p, value: overrides[p.key!] } : p)),
  }
}

const phoneTrigger = (c.trigger as Entity[]).find((t) => t.name === 'phone clicks')!
const smsTrigger = {
  ...toCustomEvent({ ...phoneTrigger, name: 'sms clicks', triggerId: nextId(c.trigger, 'triggerId') }, ['sms_click']),
}
c.trigger.push(smsTrigger)
log.push(`trigger "sms clicks": added, CUSTOM_EVENT sms_click`)

const ga4Phone = (c.tag as Entity[]).find((t) => t.name === 'GA4 - Phone click - Tag')!
c.tag.push(cloneTag(ga4Phone, 'GA4 - SMS click - Tag', smsTrigger.triggerId!, { eventName: 'sms_click' }))
log.push(`tag "GA4 - SMS click - Tag": added`)

const smsLabel = process.env.SMS_CONVERSION_LABEL?.trim()
if (smsLabel) {
  const adsPhone = (c.tag as Entity[]).find((t) => t.name === 'Google Ads Conversion Tracking - Phone Clicks - Tag')!
  c.tag.push(
    cloneTag(adsPhone, 'Google Ads Conversion Tracking - SMS Clicks - Tag', smsTrigger.triggerId!, {
      conversionLabel: smsLabel,
    }),
  )
  log.push(`tag "Google Ads Conversion Tracking - SMS Clicks - Tag": added, label ${smsLabel}`)
} else {
  log.push('⚠ SMS_CONVERSION_LABEL not set — no Google Ads SMS conversion tag written')
}

// ── 4. Modernise the Enhanced Conversions variables ────────────────────────
const renames: Record<string, string> = {
  'form_fields[email]': 'DLV - user email',
  'form_fields[phone]': 'DLV - user phone',
}
const paths: Record<string, string> = {
  'DLV - user email': 'user_data.email',
  'DLV - user phone': 'user_data.phone_number',
}

// A source that was already partly fixed (v13) has both the old and new
// variables. Renaming the old one would then create a duplicate name, so drop
// it instead; the reference rewrite below still repoints anything using it.
const existingNames = new Set((c.variable as Entity[]).map((v) => v.name))
c.variable = (c.variable as Entity[]).filter((v) => {
  const newName = renames[v.name!]
  const dup = newName !== undefined && existingNames.has(newName)
  if (dup) log.push(`variable "${v.name}": deleted ("${newName}" already exists)`)
  return !dup
})

c.variable = (c.variable as Entity[]).map((v) => {
  const newName = renames[v.name!]
  if (!newName) return v
  const path = paths[newName]
  log.push(`variable "${v.name}" → "${newName}", now reads ${path}`)
  return {
    ...v,
    name: newName,
    parameter: (v.parameter ?? []).map((p) => (p.key === 'name' ? { ...p, value: path } : p)),
  }
})

/** Rewrite {{old}} → {{new}} everywhere, since GTM resolves variables by name. */
function rewriteRefs(node: unknown): unknown {
  if (typeof node === 'string') {
    let out = node
    for (const [oldName, newName] of Object.entries(renames)) {
      out = out.split(`{{${oldName}}}`).join(`{{${newName}}}`)
    }
    return out
  }
  if (Array.isArray(node)) return node.map(rewriteRefs)
  if (node && typeof node === 'object') {
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, rewriteRefs(v)]))
  }
  return node
}
doc.containerVersion = rewriteRefs(c)

// ── Assertions: fail loudly rather than emit a subtly broken container ─────
const serialized = JSON.stringify(doc)
for (const oldName of Object.keys(renames)) {
  if (serialized.includes(`{{${oldName}}}`)) throw new Error(`stale reference to {{${oldName}}} survived`)
}
if (serialized.includes('tel:+18007709642')) throw new Error('old phone number still present')
if (serialized.includes('gtm.formSubmit')) throw new Error('gtm.formSubmit trigger still present')
if (serialized.includes('elementor_pro_forms_send_form')) throw new Error('Elementor listener still present')
if (serialized.includes('"key":"rdp","value":"{{')) throw new Error('rdp still bound to a variable')
const varNames = (doc.containerVersion.variable as Entity[]).map((v) => v.name)
if (new Set(varNames).size !== varNames.length) throw new Error('duplicate variable name')
const tagIds = (doc.containerVersion.tag as Entity[]).map((t) => t.tagId)
if (new Set(tagIds).size !== tagIds.length) throw new Error('duplicate tagId')

writeFileSync(OUT, JSON.stringify(doc, null, 2) + '\n', 'utf8')

console.log('Changes:')
for (const line of log) console.log('  •', line)
console.log(`\nTags ${c.tag.length} · Triggers ${c.trigger.length} · Variables ${c.variable.length}`)
console.log(`\nWrote ${OUT}`)
