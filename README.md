# coswheel-ebike-landing

Next.js 14 (App Router, JavaScript) + Tailwind 3. Served under `/coswheel-ebike` (basePath + assetPrefix).

## Deploy
1. Push to GitHub, import in Vercel (framework: Next.js). `npm install && npm run build`.
2. Spoke URL: `https://<project>.vercel.app/coswheel-ebike` (the bare domain redirects there).
3. Hub rewrite (primegearlab-main) must forward the sub-paths too, so CSS/JS/images load:
   - source `/coswheel-ebike`           -> destination `https://<project>.vercel.app/coswheel-ebike`
   - source `/coswheel-ebike/:path*`    -> destination `https://<project>.vercel.app/coswheel-ebike/:path*`

## Where things live
- `lib/affiliate.js`  merchant URLs (server/edge only), `lib/links.js` client-safe keys
- `app/api/out/[slug]/route.js` cloaked 302 redirect (edge, noindex)
- `lib/products.js`   product manifest (prices/stock checked Oct 20, 2026)
- `lib/config.js`     site settings, OG image, Brevo form URL, GA4 id (override with NEXT_PUBLIC_GA4_ID)
- `public/logo.png` = transparent padding trimmed; `public/logo-original.png` = untouched upload

## Environment variables
- `NEXT_PUBLIC_GA4_ID` : GA4 measurement id (see `.env.example`). If unset, the GA script is not loaded.

## Hub rewrite (vercel.json in primegearlab-main)
```json
{ "rewrites": [
  { "source": "/coswheel-ebike", "destination": "https://<spoke>.vercel.app/coswheel-ebike" },
  { "source": "/coswheel-ebike/:path*", "destination": "https://<spoke>.vercel.app/coswheel-ebike/:path*" }
] }
```

## v2 notes
- `lib/products.js`: GT20 / GT20 PRO set to AVAILABLE_OBSERVED (owner-confirmed in stock). Set back to `UNAVAILABLE_OBSERVED` to show "Check Restock".
- `all-ebikes` outbound key powers the promo popup (`components/ExitPopup.jsx`).
- 4 social icons: `components/SocialIcons.jsx` (footer) + `SocialWidget.jsx` (sticky, md and up).
- Brevo iframe heights are the `h-[...]` classes in `components/Footer.jsx`; tune them if the form clips or leaves a gap.
