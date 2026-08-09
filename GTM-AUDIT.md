# GTM Container Audit — GTM-MBBT87D8

Reviewed from the container export (`workspace13`, and live `v12` — identical: 9 tags, 4 triggers, 3 variables).

## Verdict

**Every conversion tag in this container is currently dead.** Not misconfigured at the edges — none of them fire on the Next.js site. If Google Ads is spending, it is spending blind.

There are three independent causes, and each one alone would be enough.

---

## 🔴 1. Phone conversions: the trigger is looking for the old number

```
Trigger [12] "phone clicks"  (LINK_CLICK)
    Click URL CONTAINS  tel:+18007709642
```

The site's number changed to the local DFW line on 3 Aug. Every phone link on the site is now `tel:+12147354314`.

**`tel:+18007709642` appears nowhere on the site any more**, so the trigger never matches.

Dead as a result:
- `GA4 - Phone click - Tag`
- `Google Ads Conversion Tracking - Phone Clicks - Tag`

Calls are the primary conversion on this site — most emergency traffic dials rather than fills in a form — so this is the single most expensive thing in this document.

### Fix — and don't just swap the number

Swapping in `tel:+12147354314` works until the number changes again, and it already has once. The site now emits a `call_click` dataLayer event on any `tel:` link anywhere — header, hero, sticky bars, footer, city pages — with the number in `link_url`.

**Replace trigger [12] with:**

| | |
|---|---|
| Type | Custom Event |
| Event name | `call_click` |
| Fires on | All Custom Events |

Then point both phone tags at it. Number-agnostic, and it already covers every phone link on the site rather than the ones that happen to match a string.

---

## 🔴 2. Form conversions: the listener is WordPress-only

Two separate mechanisms, both dead.

**`cHTML - elemntor listener`** monkey-patches `XMLHttpRequest` to watch for calls to `admin-ajax.php` with `action === "elementor_pro_forms_send_form"`, then pushes `elementor_form_submit`.

There is no `admin-ajax.php` on this site and no Elementor. It fires on every page, patches XHR globally for nothing, and pushes its event never.

**Trigger [8] `form_submit`** waits on `gtm.formSubmit`, GTM's native form-submission listener. The React form calls `preventDefault()`, so no native submission occurs and that event never fires either.

Dead as a result:
- `GA4 - form submit - Tag`
- `Google Ads Conversion Tracking - contact form - Tag`
- `Enhanced conversion - form submit - Tag`

### Fix

**Change trigger [8] to:**

| | |
|---|---|
| Type | Custom Event |
| Event name | `generate_lead` |

The site already pushes `generate_lead` on a successful form submission — after the server confirms the lead was stored, so it counts real leads rather than attempts.

**Then delete `cHTML - elemntor listener`.** It cannot work here and it patches `XMLHttpRequest` on every page load to do it.

---

## 🔴 3. Enhanced Conversions: variables read Elementor field IDs

```
form_fields[email]  →  inputs.form_fields[email]
form_fields[phone]  →  inputs.form_fields[field_b7ee638]
User-Provided Data  →  { email, phone_number } from the two above
```

`field_b7ee638` is an Elementor-generated field ID. It does not exist on this site, so `User-Provided Data` resolves empty and Enhanced Conversions contributes nothing — which measurably weakens Ads conversion matching.

### Fix — both halves done

The variables are re-pointed in the import file, and the site emits matching data:

```js
dataLayer.push({
  event: 'generate_lead',
  user_data: { email: '…', phone_number: '…' },
})
```

| Variable | Was | Now |
|---|---|---|
| `form_fields[email]` | `inputs.form_fields[email]` | **`DLV - user email`** → `user_data.email` |
| `form_fields[phone]` | `inputs.form_fields[field_b7ee638]` | **`DLV - user phone`** → `user_data.phone_number` |

Renaming a variable is only safe if every reference is updated with it — GTM
resolves them by name, so a missed `{{...}}` silently becomes an empty string.
`scripts/modernize-gtm.ts` rewrites references across every tag, trigger and
variable, and asserts that no stale reference survives before writing the file.

The tag hashes these values in the browser before they leave it; they are used
to match a conversion back to an ad click and are not retained in the dataLayer
beyond the page view.

---

## 🟡 4. Unused triggers

`[4] All Elements` (CLICK, no filter) and `[5] Just Links` (LINK_CLICK, no filter) are attached to no tag. Harmless, but they are the kind of thing someone later attaches a tag to by accident. Delete unless you know why they are there.

---

## What is actually correct

Worth saying, since the above is unrelieved bad news:

- **`Google ads - Conversion Linker`** — present and firing on all pages. This is the one that most often gets missed, and without it Ads cannot attribute conversions across pages at all.
- **`GA4 - pageview`** (`G-BFR37L657V`) and **`Google ads - configuration`** (`AW-18000649811`) both fire on Initialisation, which is correct.
- **Only one GA4 config tag.** No double-counting — and now that the site's standalone gtag.js is gone, there is exactly one source of GA4 pageviews.
- Enhanced Conversions is *configured* correctly; it was only ever missing its input data.

---

## All of the above is already applied — import the fixed container

`GTM-MBBT87D8-modernized.json`, generated by `scripts/modernize-gtm.ts` from
your own export. Every fix in this document is in it.

**Tag Manager → Admin → Import Container**

| Setting | Choose |
|---|---|
| File | `GTM-MBBT87D8-modernized.json` |
| Workspace | **New** — keeps your current draft untouched |
| Import option | **Overwrite** |

**Overwrite, not Merge.** Merge only adds and updates: entities present in the
container but absent from the file are left alone, so the Elementor listener
and the two dead triggers would survive it. Deletions only apply on Overwrite.

Overwrite is safe here because the file *is* the container — generated from
the client's own `workspace13` export with three dead entities removed and
nothing else touched. Importing into a **New** workspace leaves the existing
one intact, so a bad import can be discarded by deleting the workspace.

The preview screen should report:

```
8 tags        (was 9 — Elementor listener deleted)
2 triggers    (was 4 — two unattached deleted)
3 variables   (2 renamed)
```

9 tags or 4 triggers means the deletions did not apply — that is Merge.

### What the imported container looks like

```
TRIGGERS
  [8]  form_submit    CUSTOM_EVENT → generate_lead
  [12] phone clicks   CUSTOM_EVENT → call_click

TAGS
  GA4 - pageview                                ← Initialisation
  Google ads - configuration                    ← Initialisation
  Google ads - Conversion Linker                ← Initialisation
  GA4 - form submit                             ← form_submit
  Google Ads Conversion - contact form          ← form_submit
  Enhanced conversion - form submit             ← form_submit
  GA4 - Phone click                             ← phone clicks
  Google Ads Conversion - Phone Clicks          ← phone clicks

VARIABLES
  DLV - user email      user_data.email
  DLV - user phone      user_data.phone_number
  User-Provided Data    { email, phone_number }
```

### Then

- [ ] **Preview** on the live site — click a phone link, submit the form.
      Confirm `call_click` and `generate_lead` both fire, and that
      `User-Provided Data` is populated on the form event.
- [ ] **Submit** to publish
- [ ] In Google Ads, confirm both conversion actions stop saying
      "No recent conversions"

Nothing here needs a code deploy. The site side is already live.

## One thing to check outside GTM

The GA4 data stream URL should be `https://www.shieldgaterepair.com` — with `www`. The site's canonicals were pointing at the apex until today, and the apex 301s, so it is worth confirming the stream was not set up against the redirecting hostname.
