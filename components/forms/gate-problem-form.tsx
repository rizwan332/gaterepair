'use client'

import { useState, useEffect, cloneElement } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, CheckCircle2, Lightbulb } from 'lucide-react'
import { business } from '@/content/business'
import { cities } from '@/content/cities'
import { brands } from '@/content/brands'
import { trackEvent } from '@/components/analytics'

/**
 * "Describe Your Gate Problem" — guided intake.
 *
 * Converts considerably better than a blank textarea, and no competitor in this
 * market has anything comparable. The likely-cause hint after step two is the
 * point: it demonstrates competence before asking for a phone number, which is
 * the moment trust is actually won.
 */

const schema = z.object({
  gateType: z.enum(['swing', 'slide', 'barrier-arm', 'unsure']),
  problem: z.string().min(1, 'Let us know what the gate is doing'),
  brand: z.string().optional(),
  urgency: z.enum(['emergency', 'this-week', 'quoting']),
  city: z.string().optional(),
  name: z.string().min(1, 'Please add your name'),
  phone: z.string().min(7, 'We need a number to call you back on'),
  email: z.string().email('Check the email address').optional().or(z.literal('')),
  message: z.string().max(4000).optional(),
  company: z.string().optional(), // honeypot
})

type FormValues = z.infer<typeof schema>

const PROBLEMS: { value: string; label: string; hint: string }[] = [
  { value: 'wont-open', label: 'Won’t open', hint: 'Usually power, a control board, a capacitor, or a jammed track. Most are same-visit repairs.' },
  { value: 'wont-close', label: 'Won’t close', hint: 'Nine times out of ten this is a safety sensor seeing something that isn’t there — one of the least expensive faults we fix.' },
  { value: 'noise-no-move', label: 'Makes noise but doesn’t move', hint: 'Typically a failed capacitor or a seized gearbox — or the gate is binding and the operator can’t overcome it.' },
  { value: 'partial', label: 'Opens partway then stops', hint: 'Usually a limit switch out of adjustment, or a safety sensor triggering mid-travel.' },
  { value: 'remote-keypad', label: 'Remote or keypad not working', hint: 'Normally the receiver or the remote itself rather than the operator. Often the cheapest call we take.' },
  { value: 'off-track', label: 'Off track or physically damaged', hint: 'We look at the gate, rollers and posts before the operator — a gate that no longer travels true will destroy a new operator too.' },
  { value: 'other', label: 'Something else', hint: 'Tell us below and we’ll work it out on the phone.' },
]

export function GateProblemForm({ sourcePage }: { sourcePage?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [attribution, setAttribution] = useState<Record<string, string>>({})

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { gateType: 'unsure', urgency: 'this-week' },
  })

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

  const selectedProblem = watch('problem')
  const hint = PROBLEMS.find((p) => p.value === selectedProblem)?.hint

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
      trackEvent('generate_lead', {
        event_category: 'conversion',
        urgency: values.urgency,
        problem: values.problem,
        city: values.city,
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
      className="rounded-[var(--radius-card)] border border-ink-100 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
      noValidate
    >
      {/* Honeypot — visually and programmatically hidden from real users. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register('company')} />
      </div>

      <Field id="gate-type" label="What kind of gate?" error={errors.gateType?.message}>
        <select {...register('gateType')} className={selectClass}>
          <option value="unsure">Not sure</option>
          <option value="swing">Swing gate</option>
          <option value="slide">Sliding gate</option>
          <option value="barrier-arm">Barrier arm</option>
        </select>
      </Field>

      <Field id="problem" label="What's it doing?" error={errors.problem?.message} required>
        <select {...register('problem')} className={selectClass} defaultValue="">
          <option value="" disabled>
            Choose the closest match
          </option>
          {PROBLEMS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </Field>

      {hint && (
        <p className="-mt-2 mb-5 flex gap-2.5 rounded-lg bg-ink-50 p-4 text-sm leading-relaxed text-ink-700">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
          <span>{hint}</span>
        </p>
      )}

      <div className="grid gap-x-5 sm:grid-cols-2">
        <Field id="brand" label="Know the operator brand?" error={errors.brand?.message}>
          <select {...register('brand')} className={selectClass} defaultValue="">
            <option value="">Not sure</option>
            {brands.map((b) => (
              <option key={b.slug} value={b.name}>
                {b.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </Field>

        <Field id="urgency" label="How urgent?" error={errors.urgency?.message}>
          <select {...register('urgency')} className={selectClass}>
            <option value="emergency">Today — it&rsquo;s an emergency</option>
            <option value="this-week">This week</option>
            <option value="quoting">Just getting quotes</option>
          </select>
        </Field>
      </div>

      <Field id="city" label="Where is the gate?" error={errors.city?.message}>
        <input list="city-list" {...register('city')} className={inputClass} placeholder="Start typing your city" />
      </Field>
      {/* Outside <Field> so the label still resolves to a single control. Every
          city in the service area is suggested here, including the ones that do
          not yet have their own page. */}
      <datalist id="city-list">
        {cities.map((c) => (
          <option key={c.slug} value={c.name} />
        ))}
      </datalist>

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

      <Field id="message" label="Anything else? (optional)" error={errors.message?.message}>
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
        {isSubmitting ? 'Sending…' : 'Get my free estimate'}
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
