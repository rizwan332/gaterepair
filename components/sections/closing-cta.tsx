import { Phone } from 'lucide-react'
import { business } from '@/content/business'
import { fact } from '@/lib/business'
import { Button } from '@/components/ui/button'

export function ClosingCTA() {
  const responseBand = fact(business.responseBand)

  return (
    <section className="bg-gold-500">
      <div className="container-page py-14 md:py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">
              Gate Not Working Right Now?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-900">
              We answer the phone 24/7
              {responseBand ? `, and most of Dallas–Fort Worth is within ${responseBand} of a Shield truck.` : '.'}{' '}
              If you are stuck, call and we will talk you through the manual release before anyone arrives.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={business.phone.href} variant="dark" size="lg">
              <Phone className="size-5" aria-hidden />
              {business.phone.display}
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Request a callback
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
