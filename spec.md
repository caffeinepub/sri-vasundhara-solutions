# Sri Vasundhara Solutions – Full SEO & Technical Audit Fix

## Current State

The site is a React SPA deployed on Caffeine. It has:
- `index.html` with GA4 (G-97CDFPRMHZ), GSC verification meta tag, LocalBusiness JSON-LD schema (Gorantla, Guntur address), Open Graph/Twitter Card tags, and canonical URL.
- Pages: HomePage, AboutPage, ContactPage, SeoServicesPage, GoogleAdsPage, SocialMediaPage, WebsiteDesignPage, LocalSeoPage, BlogPage, and several blog post pages.
- Layout.tsx (footer with social links, NAP – Gorantla, Guntur).
- ContactForm.tsx with proper labels already on text inputs, but Select components lack `id`/`htmlFor` label associations.
- Sitemap.xml with 14 URLs (no trailing slashes). robots.txt correctly points to sitemap.
- `.ic-assets.json5` for HTTP headers (Content-Type for sitemap, caching).
- Floating WhatsApp + Call buttons already present in Layout.
- Hero section uses a generated PNG image (not WebP, no srcset, no explicit width/height, no fetchpriority).
- Heading structure: needs audit – some pages may skip H2→H4.
- No explicit security headers (CSP, X-Frame-Options, etc.) in `.ic-assets.json5`.
- Meta description does NOT include phone number (audit requirement).
- GA4 tracking ID is G-97CDFPRMHZ but user's latest request uses G-7QR6GE2QS4 – keep G-97CDFPRMHZ (already verified).
- Privacy Policy and Terms & Conditions pages exist (per project context).
- Author section (Gajjalakonda Srinu) exists on homepage.
- Old location (Amaravati Road / Nidamukkala) already removed.

## Requested Changes (Diff)

### Add
- Security headers in `.ic-assets.json5`: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- Updated meta description with phone number: "Best digital marketing agency in Guntur & Hyderabad. Get SEO, Google Ads, and website design services. Call +91 9398241974"
- `fetchpriority="high"` and `loading="eager"` on hero/above-fold image; add explicit `width` and `height` attributes; add `srcset` for responsive sizes.
- WebP versions of hero image (use picture element with WebP + PNG fallback).
- `id` attributes on Select-based form fields + associated `htmlFor` on their Label elements for full accessibility.
- Heading hierarchy audit: ensure all pages strictly follow H1→H2→H3→H4 (no skipping levels).
- Natural keyword density enforcement across homepage content (0.8–1.5% for primary keywords).
- Text-to-HTML ratio improvement: expand homepage content to 1200+ words with richer natural prose.
- sitemap.xml: add trailing slashes to all URLs for canonical consistency, update lastmod to 2026-04-05.
- `<link rel="alternate" hreflang="en-IN">` tag in index.html head.
- Breadcrumb schema (BreadcrumbList) on service pages.

### Modify
- `index.html` – update meta description to include phone number; add hreflang; ensure single canonical with trailing slash.
- `.ic-assets.json5` – add security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) for all HTML responses.
- Hero image in `HomePage.tsx` – wrap in `<picture>` with WebP source, add `width`, `height`, `loading="eager"`, `fetchpriority="high"`.
- `ContactForm.tsx` – fix Select label associations with proper `id` on SelectTrigger and `htmlFor` on Label.
- All anchor text using "click here" or weak text → replace with keyword-rich anchors.
- Heading levels on all pages: fix any H2→H4 skips, ensure H1→H2→H3 only.
- Homepage testimonials and benefits copy: reduce repetitive keyword use, make it more natural.
- Footer: verify location shows Gorantla, Guntur (no Amaravati/Nidamukkala anywhere).
- robots.txt: ensure `Disallow: /src/` is present (already is).

### Remove
- Any remaining references to "Amaravati Road" or "Nidamukkala" anywhere in all files.
- Duplicate keyword stuffing in homepage hero and service descriptions.
- `loading="lazy"` from above-the-fold hero image.

## Implementation Plan

1. **`index.html`** – Update meta description to include phone number. Add `hreflang` link. Verify trailing slash canonical.
2. **`.ic-assets.json5`** – Add security headers block for `/**/*.html` and `/*` routes: CSP (permissive for inline scripts/styles needed by Vite SPA), X-Frame-Options: SAMEORIGIN, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy: camera=(), microphone=(), geolocation=().
3. **`public/sitemap.xml`** – Add trailing slashes to all 14 URLs, update lastmod to 2026-04-05.
4. **`HomePage.tsx`** – Fix hero image: use `<picture>` with WebP + PNG fallback, add width/height/fetchpriority/eager. Fix heading structure (no H4 skips). Expand text content naturally to 1200+ words. Fix weak anchor texts. Ensure keyword density is natural (< 1.5%).
5. **`ContactForm.tsx`** – Add `id` to Select trigger components, add `htmlFor` to their Labels.
6. **All service pages** – Audit and fix heading levels (H1→H2→H3 strict). Replace any weak anchor text. Verify no Amaravati/Nidamukkala references.
7. **`Layout.tsx`** – Verify footer NAP, check for old location text.
8. **Generate WebP** hero image asset for performance.
