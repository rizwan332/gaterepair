'use client'

import { useState, useEffect, cloneElement } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, CheckCircle2 } from 'lucide-react'
import { business } from '@/content/business'
import { pushEvent } from '@/components/analytics'

/**
 * Service request form.
 *
 * Simplified 6 Aug 2026 to the client's specification: name and phone required,
 * email, address and message optional, everything else removed.
 *
 * What went: a gate-type selector, a guided problem picker with a likely-cause
 * hint, an operator-brand list and an urgency selector. The hint in particular
 * was a real asset — it demonstrated competence before asking for a phone
 * number — but five fields ahead of the phone number is five chances to leave,
 * and on paid traffic the shortest path to a callable number usually wins.
 *
 * The API still accepts the removed fields as optional, so reinstating any of
 * them is a UI change only.
 */

const schema = z.object({
  name: z.string().min(1, 'Please add your name'),
  phone: z.string().min(7, 'We need a number to call you back on'),
  email: z.string().email('Check the email address').optional().or(z.literal('')),
  address: z.string().max(300).optional(),
  message: z.string().max(4000).optional(),
  company: z.string().optional(), // honeypot
})

type FormValues = z.infer<typeof schema>

export function GateProblemForm({ sourcePage }: { sourcePage?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [attribution, setAttribution] = useState<Record<string, string>>({})

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  // Capture ad attribution client-side so keyword-level ROI is reportable.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const grab = (k: string) => p.get(k) ?? ''
    setAttribution({
      gclid: grab('gclid'),
      utmSource: grab('utm_source'),
      utmMedium: grab('utm_medium'),
      utmCampaign: grab('utm_campaign'),
      utmTerm: grab('utm_term'),
      sourcePage: sourcePage ?? window.location.pathname,
    })
  }, [sourcePage])

  async function onSubmit(values: FormValues) {
    setServerError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, ...attribution }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setServerError(data.error ?? 'Something went wrong. Please call us.')
        return
      }
      /**
       * `user_data` feeds the container's Enhanced Conversions setup, whose
       * variables now read `user_data.email` and `user_data.phone_number`.
       *
       * They previously read Elementor's shape — `inputs.form_fields[email]`
       * and `inputs.form_fields[field_b7ee638]` — which is why enhanced
       * conversions had been silently contributing nothing since the rebuild.
       * See GTM-AUDIT.md and scripts/modernize-gtm.ts.
       *
       * This is the documented Enhanced Conversions flow: the tag hashes these
       * values before they leave the browser, and uses them to match a
       * conversion back to an ad click. Fired only after the server confirms
       * the lead was stored, so it counts real leads rather than attempts.
       */
      pushEvent('generate_lead', {
        event_category: 'conversion',
        user_data: { email: values.email ?? '', phone_number: values.phone },
      })
      setSubmitted(true)
    } catch {
      setServerError('We could not send that. Please call us — someone always answers.')
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] border border-success-500/30 bg-success-500/5 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 size-12 text-success-600" aria-hidden />
        <h3 className="font-display text-2xl font-semibold text-ink-950">Got it — we&rsquo;ll call you.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-700">
          A technician will call you back on the number you gave us. If it&rsquo;s an emergency and
          you&rsquo;d rather not wait, call {business.phone.display} &mdash; someone always answers.
        </p>
        <a
          href={business.phone.href}
          className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-gold-500 px-6 font-semibold text-ink-950"
        >
          <Phone className="size-4" aria-hidden />
          Call now instead
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      // method="post" matters even though submission is handled in JS. If
      // someone taps Send before React hydrates — easy on a slow phone, which
      // is most of this site's traffic — the browser performs a NATIVE submit.
      // The default method is GET, which puts their name, phone number and
      // email straight into the URL, and from there into browser history, the
      // Referer header on the next request, and any access log in between.
      // POST keeps the values in the request body.
      method="post"
      className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
      noValidate
    >
      {/* Honeypot — visually and programmatically hidden from real users. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <div className="grid gap-x-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name?.message} required>
          <input {...register('name')} className={inputClass} autoComplete="name" />
        </Field>
        <Field
          id="phone"
          label="Phone"
          error={errors.phone?.message}
          required
          help="We'll call you back on this number — we don't sell your details to anyone."
        >
          <input {...register('phone')} type="tel" className={inputClass} autoComplete="tel" />
        </Field>
      </div>

      <Field id="email" label="Email (optional)" error={errors.email?.message}>
        <input {...register('email')} type="email" className={inputClass} autoComplete="email" />
      </Field>

      <Field id="address" label="Address of the gate (optional)" error={errors.address?.message}>
        <input
          {...register('address')}
          className={inputClass}
          autoComplete="street-address"
          placeholder="Street, city"
        />
      </Field>

      <Field id="message" label="What's the gate doing? (optional)" error={errors.message?.message}>
        <textarea {...register('message')} rows={3} className={inputClass} />
      </Field>

      {serverError && (
        <p role="alert" className="mb-5 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-gold-500 font-semibold text-ink-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Request Service'}
      </button>

      <p className="mt-4 text-center text-sm text-ink-600">
        Or call{' '}
        <a href={business.phone.href} className="font-semibold text-ink-900 underline decoration-gold-400 underline-offset-2">
          {business.phone.display}
        </a>{' '}
        — someone always answers.
      </p>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-950 placeholder:text-ink-400 focus:border-ink-400'
const selectClass = `${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27 fill=%27%236b7f96%27%3E%3Cpath d=%27M5.5 7.5 10 12l4.5-4.5%27 stroke=%27%236b7f96%27 stroke-width=%271.5%27 fill=%27none%27 stroke-linecap=%27round%27/%3E%3C/svg%3E")] bg-[length:20px] bg-[right_0.85rem_center] bg-no-repeat pr-11`

/**
 * The label must resolve to the actual control, not to a wrapper.
 *
 * The previous version put the generated id on a surrounding <div>, so
 * `htmlFor` pointed at a non-form element: screen readers announced the fields
 * unlabelled and tapping a label did not focus its input — real friction on
 * mobile, which is where most emergency traffic arrives. WCAG 2.2 AA 1.3.1 and
 * 3.3.2. `children` is cloned so the id, aria-invalid and aria-describedby all
 * land on the input itself.
 */
function Field({
  id,
  label,
  error,
  required,
  help,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  help?: string
  children: React.ReactElement
}) {
  const helpId = help ? `${id}-help` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [errorId, helpId].filter(Boolean).join(' ') || undefined

  const control = cloneElement(children as React.ReactElement<Record<string, unknown>>, {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': required || undefined,
  })

  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-900">
        {label}
        {required && (
          <span className="ml-1 text-red-600" aria-hidden>
            *
          </span>
        )}
      </label>
      {control}
      {help && !error && (
        <p id={helpId} className="mt-1.5 text-xs text-ink-500">
          {help}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}
