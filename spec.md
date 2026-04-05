# Sri Vasundhara Solutions – Sitemap & Technical SEO Fix

## Current State

The website is a React SPA deployed on ICP (Internet Computer) asset canister at:
- https://sri-vasundhara-solutions-382.caffeine.xyz/

Existing files:
- `src/frontend/public/sitemap.xml` -- exists but Google Search Console reports "Sitemap Could Not Be Read"
- `src/frontend/public/robots.txt` -- exists with correct Allow: / and Sitemap reference
- `src/frontend/index.html` -- has GA4, schema, canonical, meta tags
- No `.ic-assets.json` exists -- so no explicit Content-Type headers are set for static files

Root cause of "Sitemap Could Not Be Read" error:
1. ICP asset canister may serve sitemap.xml with wrong Content-Type (text/plain or no type)
2. SPA fallback routing may intercept /sitemap.xml requests and serve index.html HTML instead of the XML
3. Missing explicit HTTP headers configuration for XML and text files

## Requested Changes (Diff)

### Add
- `.ic-assets.json` in `src/frontend/public/` to set explicit Content-Type headers:
  - `sitemap.xml` → `application/xml; charset=utf-8`
  - `robots.txt` → `text/plain; charset=utf-8`
  - `google4f720aed7aaa335c.html` → `text/html; charset=utf-8`
  - All HTML files → `text/html; charset=utf-8`
  - Prevent SPA fallback for these specific files

### Modify
- `sitemap.xml` -- Rebuild from scratch with clean UTF-8 encoding, no BOM, proper XML declaration, all 14 page URLs with trailing slashes, correct lastmod dates
- `robots.txt` -- Ensure clean UTF-8, no BOM, correct format
- `index.html` -- Fix canonical URL to match primary domain, ensure no noindex tags

### Remove
- Nothing to remove

## Implementation Plan

1. Create `src/frontend/public/.ic-assets.json` with explicit Content-Type headers for sitemap.xml (application/xml) and robots.txt (text/plain)
2. Rewrite `src/frontend/public/sitemap.xml` with clean XML, all 14 routes, correct lastmod
3. Verify robots.txt is clean with correct sitemap reference
4. Fix index.html canonical URL
5. Build and deploy
