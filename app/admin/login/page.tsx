'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

/**
 * The admin sign-in page.
 *
 * A client component because it posts a password and shows an error without a
 * round trip. Nothing about the dashboard is rendered here, and nothing is
 * fetched until the server has verified the session — an unauthenticated
 * visitor gets this form and no data at all.
 */
export default function AdminLogin() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (data.ok) {
        router.replace('/admin')
        router.refresh()
      } else {
        setError(data.error ?? 'Sign in failed.')
      }
    } catch {
      setError('Sign in failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-[var(--radius-card)] border border-ink-100 bg-white p-8 shadow-[var(--shadow-card)]"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
            <Lock className="size-5" aria-hidden />
          </span>
          <div>
            <h1 className="font-display text-lg font-semibold text-ink-950">Lead dashboard</h1>
            <p className="text-sm text-ink-500">Shield Gate Repair</p>
          </div>
        </div>

        <label htmlFor="password" className="mb-2 block text-sm font-medium text-ink-900">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-950 focus:border-ink-400"
          required
        />

        {error && (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-800">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-gold-500 font-semibold text-ink-950 transition-colors hover:bg-gold-400 disabled:opacity-60"
        >
          {busy ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </main>
  )
}
