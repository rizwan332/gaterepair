/**
 * Rebuilds the site once a day so blog posts dated ahead go live on their date
 * (content/blog/index.ts only lists posts whose publishedAt has come).
 *
 * Needs BLOG_BUILD_HOOK_URL in Netlify's environment variables: a build hook
 * for the main branch, from Site configuration → Build & deploy → Build hooks.
 * Scheduled functions run only on the published production deploy.
 */

export default async () => {
  const hook = process.env.BLOG_BUILD_HOOK_URL
  if (!hook) {
    console.log('BLOG_BUILD_HOOK_URL is not set, skipping the daily rebuild')
    return
  }
  const res = await fetch(hook, { method: 'POST' })
  console.log(`build hook responded ${res.status}`)
}

// 06:15 UTC = 00:15 in Dallas (CST), so the day's post is up before morning.
export const config = { schedule: '15 6 * * *' }
