import { NextResponse } from 'next/server'
import { createSession, destroySession, adminConfigured } from '@/lib/admin-auth'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Login and logout for /admin.
 *
 * Deliberately slow to fail and vague about why: a wrong password and an
 * unconfigured deployment return the same message, so this endpoint cannot be
 * used to work out whether an admin exists.
 */

const recent = new Map<string, number[]>()
const WINDOW_MS = 15 * 60_000
const MAX_ATTEMPTS = 8

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  hits.push(now)
  recent.set(ip, hits)
  return hits.length > MAX_ATTEMPTS
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'Too many attempts. Wait 15 minutes.' }, { status: 429 })
  }

  let password = ''
  try {
    const body = (await request.json()) as { password?: string }
    password = typeof body.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ ok: false, error: 'Sign in failed.' }, { status: 400 })
  }

  // Constant-ish delay so a wrong password is not distinguishable by timing.
  await new Promise((r) => setTimeout(r, 400))

  if (!adminConfigured() || !(await createSession(password))) {
    return NextResponse.json({ ok: false, error: 'Sign in failed.' }, { status: 401 })
  }
  return NextResponse.json({ ok: true })
}

export async function DELETE() {
  await destroySession()
  return NextResponse.json({ ok: true })
}
