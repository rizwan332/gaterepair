/**
 * Generates ADMIN_PASSWORD_HASH for the dashboard.
 *
 *   npx tsx scripts/hash-admin-password.ts 'the password'
 *
 * Put the output in the Netlify environment, never in the repo. The password
 * itself is never stored anywhere — only this hash, which cannot be reversed.
 */
import { hashPassword } from '../lib/admin-auth'

const password = process.argv[2]
if (!password || password.length < 12) {
  console.error('Usage: npx tsx scripts/hash-admin-password.ts <password>')
  console.error('Use at least 12 characters — this guards every lead the site has taken.')
  process.exit(1)
}

console.log('\nAdd these to the Netlify environment (Site settings → Environment variables):\n')
console.log(`ADMIN_PASSWORD_HASH=${hashPassword(password)}`)
console.log(`ADMIN_SESSION_SECRET=${require('node:crypto').randomBytes(32).toString('hex')}`)
console.log(`EVENT_SALT=${require('node:crypto').randomBytes(16).toString('hex')}`)
console.log('\nDo not commit these. Do not paste them into chat or email.\n')
