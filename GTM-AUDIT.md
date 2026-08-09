# GTM Container Audit — GTM-MBBT87D8

Reviewed from the container export (`workspace13`, and live `v12` — identical: 9 tags, 4 triggers, 3 variables).

## Verdict

**Every conversion tag in this container is currently dead.** Not misconfigured at the edges — none of them fire on the Next.js site. If Google Ads is spending, it is spending blind.

There are three independent causes, and each one alone would be enough.

---

## 🔴 1. Phone conversions: the trigger is looking for the old number

```
Trigger [12] "phone clicks"  (LINK_CLICK)
    Click URL CONTAINS  tel:+18007709642
```

The site's number changed to the local DFW line on 3 Aug. Every phone link on the site is now `tel:+12147354314`.

**`tel:+18007709642` appears nowhere on the site any more**, so the trigger never matches.

Dead as a result:
- `GA4 - Phone click - Tag`
- `Google Ads Conversion Tracking - Phone Clicks - Tag`

Calls are the primary conversion on this site — most emergency traffic dials rather than fills in a form — so this is the single most expensive thing in this document.

### Fix — and don't just swap the number

Swapping in `tel:+12147354314` works until the number changes again, and it already has once. The site now emits a `call_click` dataLayer event on any `tel:` link anywhere — header, hero, sticky bars, footer, city pages — with the number in `link_url`.

**Replace trigger [12] with:**

| | |
|---|---|
| Type | Custom Event |
| Event name | `call_click` |
| Fires on | All Custom Events |

Then point both phone tags at it. Number-agnostic, and it already covers every phone link on the site rather than the ones that happen to match a string.

---

## 🔴 2. Form conversions: the listener is WordPress-only

Two separate mechanisms, both dead.

**`cHTML - elemntor listener`** monkey-patches `XMLHttpRequest` to watch for calls to `admin-ajax.php` with `action === "elementor_pro_forms_send_form"`, then pushes `elementor_form_submit`.

There is no `admin-ajax.php` on this site and no Elementor. It fires on every page, patches XHR globally for nothing, and pushes its event never.

**Trigger [8] `form_submit`** waits on `gtm.formSubmit`, GTM's native form-submission listener. The React form calls `preventDefault()`, so no native submission occurs and that event never fires either.

Dead as a result:
- `GA4 - form submit - Tag`
- `Google Ads Conversion Tracking - contact form - Tag`
- `Enhanced conversion - form submit - Tag`

### Fix

**Change trigger [8] to:**

| | |
|---|---|
| Type | Custom Event |
| Event name | `generate_lead` |

The site already pushes `generate_lead` on a successful form submission — after the server confirms the lead was stored, so it counts real leads rather than attempts.

**Then delete `cHTML - elemntor listener`.** It cannot work here and it patches `XMLHttpRequest` on every page load to do it.

---

## 🔴 3. Enhanced Conversions: variables read Elementor field IDs

```
form_fields[email]  →  inputs.form_fields[email]
form_fields[phone]  →  inputs.form_fields[field_b7ee638]
User-Provided Data  →  { email, phone_number } from the two above
```

`field_b7ee638` is an Elementor-generated field ID. It does not exist on this site, so `User-Provided Data` resolves empty and Enhanced Conversions contributes nothing — which measurably weakens Ads conversion matching.

### Fix — already done in code, no GTM change needed

Rather than have you re-point two variables and risk breaking a working conversion, **the site now emits exactly the shape these variables expect**:

```js
dataLayer.push({
  event: 'generate_lead',
  inputs: {
    'form_fields[email]': '…',
    'form_fields[field_b7ee638]': '…',   // phone, Elementor's old key
  },
  user_data: { email: '…', phone_number: '…' },   // same values, sane names
})
```

So Enhanced Conversions starts working the moment trigger [8] is switched to `generate_lead`.

`user_data` carries the same values under sensible names. When you want to clean up, re-point the two variables at `user_data.email` and `user_data.phone_number` and the Elementor-shaped keys can be dropped from the code.

---

## 🟡 4. Unused triggers

`[4] All Elements` (CLICK, no filter) and `[5] Just Links` (LINK_CLICK, no filter) are attached to no tag. Harmless, but they are the kind of thing someone later attaches a tag to by accident. Delete unless you know why they are there.

---

## What is actually correct

Worth saying, since the above is unrelieved bad news:

- **`Google ads - Conversion Linker`** — present and firing on all pages. This is the one that most often gets missed, and without it Ads cannot attribute conversions across pages at all.
- **`GA4 - pageview`** (`G-BFR37L657V`) and **`Google ads - configuration`** (`AW-18000649811`) both fire on Initialisation, which is correct.
- **Only one GA4 config tag.** No double-counting — and now that the site's standalone gtag.js is gone, there is exactly one source of GA4 pageviews.
- Enhanced Conversions is *configured* correctly; it was only ever missing its input data.

---

## Checklist

In Tag Manager, in this order:

- [ ] **Trigger [12] "phone clicks"** → Custom Event, event name `call_click`
- [ ] **Trigger [8] "form_submit"** → Custom Event, event name `generate_lead`
- [ ] **Delete** `cHTML - elemntor listener`
- [ ] Delete unused triggers [4] and [5]
- [ ] **Preview** on the live site: click a phone link, submit the form, confirm both fire and that `User-Provided Data` is populated on the form event
- [ ] **Submit / publish** the container
- [ ] In Google Ads, confirm both conversion actions leave "No recent conversions"

Nothing here needs a code deploy. The site side is done.

## One thing to check outside GTM

The GA4 data stream URL should be `https://www.shieldgaterepair.com` — with `www`. The site's canonicals were pointing at the apex until today, and the apex 301s, so it is worth confirming the stream was not set up against the redirecting hostname.
