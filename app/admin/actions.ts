'use server'

import { revalidatePath } from 'next/cache'
import { isAuthenticated } from '@/lib/admin-auth'
import { setFormLeadStatus, type LeadStatus } from '@/lib/lead-report'

/**
 * Moves a form lead along the pipeline (new → contacted → booked → closed).
 *
 * Server actions are reachable by POST from anywhere, exactly like a route
 * handler, so the session is checked here rather than trusted from the page.
 */
export async function updateLeadStatus(id: string, status: LeadStatus): Promise<{ ok: boolean }> {
  if (!(await isAuthenticated())) return { ok: false }
  const ok = await setFormLeadStatus(id, status)
  if (ok) revalidatePath('/admin')
  return { ok }
}
