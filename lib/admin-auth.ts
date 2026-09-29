import { createHmac, timingSafeEqual, randomBytes, scryptSync } from 'node:crypto'
import { cookies } from 'next/headers'

/**
 * Authentication for /admin.
 *
 * ── WHY NOT AN AUTH LIBRARY ─────────────────────────────────────────────────
 * There is one operator and no self-service signup, no password reset flow, no
 * social login and no multi-tenant model. NextAuth or similar would add a
 * dependency, a database collection and a migration path to solve problems
 * this site does not have. A signed cookie over a single hashed password is
 * proportionate, and it is small enough to be read and checked in full.
 *
 * If a second user ever needs their own login, or the dashboard starts holding
 * anything more sensitive than lead counts, this should be revisited rather
 * than extended.
 *
 * ── HOW IT WORKS ────────────────────────────────────────────────────────────
 * The password is never stored. ADMIN_PASSWORD_HASH holds a scrypt hash with
 * its salt; login compares against it in constant time. On success the browser
 * gets an HttpOnly, Secure, SameSite=Strict cookie containing an expiry and an
 * HMAC over it, signed with ADMIN_SESSION_SECRET. Nothing in the cookie is
 * secret, and nothing in it can be altered without the secret.
 *
 * ── SET-UP ──────────────────────────────────────────────────────────────────
 *   npx tsx scripts/hash-admin-password.ts 'your password here'
 * puts ADMIN_PASSWORD_HASH on stdout. Add it and a long random
 * ADMIN_SESSION_SECRET to the Netlify environment. Neither belongs in the repo
 * — see the warning in .env.example about credentials that have reached git.
 */

const COOKIE = 'sgr_admin'
const MAX_AGE_SECONDS = 60 * 60 * 12

const secret = () => process.env.ADMIN_SESSION_SECRET ?? ''
const passwordHash = () => process.env.ADMIN_PASSWORD_HASH ?? ''

/** `scrypt$<salt hex>$<derived hex>` */
export function hashPassword(password: string): string {
  const salt = randomBytes(16)
  const derived = scryptSync(password, salt, 64)
  return `scrypt$${salt.toString('hex')}$${derived.toString('hex')}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split('$')
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false
  try {
    const salt = Buffer.from(parts[1], 'hex')
    const expected = Buffer.from(parts[2], 'hex')
    const actual = scryptSync(password, salt, expected.length)
    return timingSafeEqual(expected, actual)
  } catch {
    return false
  }
}

const sign = (value: string) => createHmac('sha256', secret()).update(value).digest('hex')

function makeToken(): string {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000
  const payload = String(expires)
  return `${payload}.${sign(payload)}`
}

function tokenValid(token: string | undefined): boolean {
  if (!token || !secret()) return false
  const [payload, signature] = token.split('.')
  if (!payload || !signature) return false

  const expected = sign(payload)
  // Both hex of the same length, so a length mismatch means tampering.
  if (expected.length !== signature.length) return false
  if (!timingSafeEqual(Buffer.from(expected), Buffer.from(signature))) return false

  const expires = Number(payload)
  return Number.isFinite(expires) && expires > Date.now()
}

/**
 * True when the request carries a valid session.
 *
 * Returns false when ADMIN_SESSION_SECRET or ADMIN_PASSWORD_HASH are unset,
 * which is deliberate: an unconfigured deployment must fail closed and show a
 * locked dashboard, not an open one.
 */
export async function isAuthenticated(): Promise<boolean> {
  if (!secret() || !passwordHash()) return false
  const store = await cookies()
  return tokenValid(store.get(COOKIE)?.value)
}

export async function createSession(password: string): Promise<boolean> {
  const stored = passwordHash()
  if (!stored || !secret()) return false
  if (!verifyPassword(password, stored)) return false

  const store = await cookies()
  store.set(COOKIE, makeToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  })
  return true
}

export async function destroySession(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE)
}

/** Whether the deployment has been given what it needs to allow a login at all. */
export const adminConfigured = () => Boolean(secret() && passwordHash())
