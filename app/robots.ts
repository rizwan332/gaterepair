import type { MetadataRoute } from 'next'
import { business } from '@/content/business'

/**
 * AI crawlers are allowed, deliberately and explicitly.
 *
 * The wildcard rule below already permits them, so the named group changes no
 * behaviour — it records the decision. A gate repair company wants to be the
 * answer when someone asks ChatGPT or Perplexity who repairs a LiftMaster
 * LA500 in Plano, and the model pages exist precisely to be that answer.
 * Blocking these agents to "protect content" would remove the site from the
 * surfaces its customers are starting to ask.
 *
 * Google-Extended is listed on purpose: it governs Gemini and AI Overview
 * grounding, and it is separate from Googlebot — blocking it does not affect
 * normal Search ranking, and allowing it does not change it either.
 *
 * Each named group repeats `disallow`, because a user-agent that matches a
 * specific group ignores the wildcard group entirely. Leaving it out would
 * quietly open /api/ to exactly these crawlers.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${business.url}/sitemap.xml`,
    host: business.url,
  }
}
