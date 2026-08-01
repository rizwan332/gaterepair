import { ImageResponse } from 'next/og'
import { business } from '@/content/business'

/**
 * Social preview card.
 *
 * Without this, every link shared to WhatsApp, SMS or Facebook renders with no
 * image — and "let me send this to my husband" is a real step in how homeowners
 * choose a contractor. A blank preview reads as a dead link.
 */
export const runtime = 'edge'
export const alt = 'Shield Gate Repair — Same-day automatic gate repair across Dallas–Fort Worth'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B0C0E',
          padding: 72,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#16A34A',
              display: 'flex',
            }}
          />
          <div style={{ color: '#B4B8BF', fontSize: 26, display: 'flex' }}>
            {business.availability}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              color: '#FFFFFF',
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: 'flex',
            }}
          >
            Gate Stuck?
          </div>
          <div
            style={{
              color: '#F5B32A',
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: 'flex',
            }}
          >
            We&rsquo;ll Have It Working Today.
          </div>
          <div style={{ color: '#B4B8BF', fontSize: 30, marginTop: 24, display: 'flex' }}>
            Same-day automatic gate repair across Dallas&ndash;Fort Worth
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: '#FFFFFF', fontSize: 38, fontWeight: 700, display: 'flex' }}>
            {business.name}
          </div>
          <div
            style={{
              color: '#0B0C0E',
              background: '#F5B32A',
              fontSize: 34,
              fontWeight: 700,
              padding: '16px 32px',
              borderRadius: 14,
              display: 'flex',
            }}
          >
            {business.phone.display}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
