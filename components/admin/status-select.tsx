'use client'

import { useState, useTransition } from 'react'
import { updateLeadStatus } from '@/app/admin/actions'
import type { LeadStatus } from '@/lib/lead-report'

const STYLE: Record<LeadStatus, string> = {
  new: 'bg-blue-50 text-blue-800 ring-blue-200',
  contacted: 'bg-amber-50 text-amber-900 ring-amber-200',
  booked: 'bg-success-500/10 text-success-600 ring-success-500/25',
  closed: 'bg-ink-100 text-ink-700 ring-ink-200',
  lost: 'bg-red-50 text-red-800 ring-red-200',
}

const LABEL: Record<LeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  booked: 'Booked',
  closed: 'Closed',
  lost: 'Lost',
}

export function StatusSelect({ id, status }: { id: string; status: LeadStatus }) {
  const [value, setValue] = useState<LeadStatus>(status)
  const [pending, start] = useTransition()
  const [failed, setFailed] = useState(false)

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">Lead status</span>
      <select
        id={`status-${id}`}
        value={value}
        disabled={pending}
        onChange={(e) => {
          const next = e.target.value as LeadStatus
          const previous = value
          setValue(next)
          setFailed(false)
          start(async () => {
            const res = await updateLeadStatus(id, next)
            if (!res.ok) {
              setValue(previous)
              setFailed(true)
            }
          })
        }}
        className={`cursor-pointer rounded-full border-0 py-1 pl-3 pr-7 text-xs font-semibold ring-1 ring-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 disabled:opacity-60 ${STYLE[value]}`}
      >
        {(Object.keys(LABEL) as LeadStatus[]).map((s) => (
          <option key={s} value={s}>
            {LABEL[s]}
          </option>
        ))}
      </select>
      {failed && <span className="text-xs text-red-700">Not saved, try again</span>}
    </label>
  )
}
