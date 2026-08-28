# SEO — diarchfoodcourt.com

Implementation notes for the SEO fix plan (audit baseline 74/100). Steps 1–6 and 8–9
are implemented in code; the items under "Still needs a human" cannot be done from the
repository alone.

## Where things live

| Concern | File |
| --- | --- |
| Canonical site URL, NAP, cuisines, price range, hours | `src/data/siteConfig.ts` |
| Default title/description, Open Graph, Twitter, canonical | `src/app/layout.tsx` |
| `Restaurant` + `WebSite` JSON-LD | `src/lib/structured-data.ts` |
| Per-page titles, descriptions, canonicals | `src/app/**/page.tsx` |
| `robots.txt` | `src/app/robots.ts` |
| `sitemap.xml` | `src/app/sitemap.ts` |
| Image optimizer settings | `next.config.ts` |

`siteConfig.url` is the single source of truth for the canonical origin — metadata,
JSON-LD, robots and sitemap all derive from it. Changing the domain means changing that
one value.

## What changed

1. **Titles** — the homepage no longer renders as "Home". It is
   `Diarch Food Court | Biryani & Family Restaurant in Danapur, Patna`, and every inner
   page has its own keyword-rich, location-bearing title.
2. **Restaurant schema** — `Restaurant` JSON-LD with address, phone, hours, cuisines,
   price range, reservation link, and a `Menu` section carrying the three featured
   dishes with prices. A `WebSite` node points back at it via `@id`.
3. **og:url** — was `https://thearchrestaurant.in`; now derived from `siteConfig.url`.
   `metadataBase` moved with it, so every relative metadata URL resolves to the right
   domain.
4. **Contact email** — `info@thearchrestaurant.in` → `info@diarchfoodcourt.com`, in the
   footer, contact page, JSON-LD and the reservation form action.
5. **Canonical tags** — every route declares one via `alternates.canonical`.
6. **Rebrand leftovers** — "Arch Special Chicken (Full)" is now "Diarch Special Chicken
   (Full)" (its slug changed to `diarch-special-chicken-full` and the featured-dish list
   follows). No `thearchrestaurant` string remains in `src/`.
7. **Image weight** — `unoptimized` was bypassing the Next.js optimizer entirely, so
   full-size Unsplash originals were being shipped. It is removed; the optimizer now
   serves AVIF/WebP, the largest generated width is capped at 1920 (down from the 3840
   default), and gallery images past the first row are lazy-loaded. Every image uses
   `fill` inside a fixed-height box, so intrinsic width/height are not needed to avoid
   layout shift.

## Still needs a human

- **Real photography (step 7).** Every hero, gallery and dish image is still a generic
  Unsplash stock photo. Replace the `src` values in `src/data/siteConfig.ts` (hero,
  `about.interiorImages`) and `src/data/galleryData.ts` with real photos of the dishes,
  dining hall and the NH-98 storefront, and update the alt text to match what is actually
  in each new picture. Once the images are local, the `images.unsplash.com` entry in
  `next.config.ts` can be dropped.
- **Submit the sitemap** in Google Search Console at
  `https://www.diarchfoodcourt.com/sitemap.xml`.
- **301-redirect `thearchrestaurant.in` → `diarchfoodcourt.com`** at the DNS/host level
  if the old domain still resolves, to preserve any existing rankings.
- **Keep NAP identical** across the site, Google Business Profile, Zomato/Swiggy and
  Facebook — including the new `info@diarchfoodcourt.com` address.
- **Re-run PageSpeed Insights** after the real photos land to confirm LCP.
