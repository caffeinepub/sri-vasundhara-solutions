# Sri Vasundhara Solutions — Complete Website Rebuild (Version 22)

## Current State

The site is a React SPA (TanStack Router) with:
- Homepage, About, SEO Services, Google Ads, Social Media, Website Design, Local SEO, Contact, Blog, and 4 blog post pages
- Layout.tsx with sticky header, footer with NAP, floating WhatsApp + call buttons
- Privacy Policy and Terms & Conditions in footer dialogs
- Brand colors partially applied: teal #4FC3C7, green #16A34A, red #DC2626 for CTAs
- Technical SEO: sitemap.xml, robots.txt, .ic-assets.json5 with security headers, JSON-LD schema in index.html
- Google Analytics GA4 (G-97CDFPRMHZ) and Search Console verification
- Missing pages: Services overview page, individual sub-service pages (On-Page SEO, Off-Page SEO, Technical SEO, Search Ads, Display Ads, YouTube Ads, Business Website, E-commerce Website, Facebook Marketing, Instagram Marketing), Lead Generation page, Privacy Policy and Terms as standalone pages
- The current services section on homepage shows 150-200 word cards which are too long for homepage cards (should be 2-3 lines with Read More link)
- No dedicated services overview page
- Privacy Policy / Terms are in dialogs, not standalone pages (bad for SEO)
- No sub-service pages at all
- Missing: Lead Generation standalone service page

## Requested Changes (Diff)

### Add
- `/services/` — Services overview page listing all 6 main services with short descriptions and links
- `/lead-generation/` — Lead Generation dedicated service page
- `/on-page-seo/` — Sub-service page: On-Page SEO
- `/off-page-seo/` — Sub-service page: Off-Page SEO  
- `/technical-seo/` — Sub-service page: Technical SEO
- `/search-ads/` — Sub-service page: Search Ads
- `/display-ads/` — Sub-service page: Display Ads
- `/youtube-ads/` — Sub-service page: YouTube Ads
- `/business-website-design/` — Sub-service page: Business Website Design
- `/ecommerce-website-design/` — Sub-service page: E-commerce Website Design
- `/facebook-marketing/` — Sub-service page: Facebook Marketing
- `/instagram-marketing/` — Sub-service page: Instagram Marketing
- `/privacy-policy/` — Standalone Privacy Policy page (SEO-indexable)
- `/terms-and-conditions/` — Standalone Terms & Conditions page (SEO-indexable)
- All new routes registered in App.tsx
- All new URLs added to sitemap.xml
- Navigation updated: Services dropdown links to /services/ and shows sub-service categories

### Modify
- Homepage services section: Shorten each card to 2-3 lines max + "Read More" link to service page (remove 150-200 word walls)
- SeoServicesPage: Add sub-services list section linking to On-Page, Off-Page, Technical SEO sub-pages
- GoogleAdsPage: Add sub-services list linking to Search Ads, Display Ads, YouTube Ads
- WebsiteDesignPage: Add sub-services list linking to Business Website, E-commerce pages
- SocialMediaPage: Add sub-services list linking to Facebook Marketing, Instagram Marketing
- App.tsx: Add all new routes
- sitemap.xml: Add all new page URLs
- Layout.tsx: Services nav dropdown includes all service categories; Privacy Policy and Terms links in footer now route to standalone pages instead of dialogs
- index.html: Canonical stays same, sitemap reference updated for new pages

### Remove
- Privacy Policy and Terms & Conditions dialog components from Layout.tsx footer (replaced with route links)
- Overly long service descriptions from homepage service cards (replaced with 2-3 line summaries)

## Implementation Plan

1. Update App.tsx — add 14 new routes
2. Create ServicesPage.tsx — overview grid of all 6 main services
3. Create LeadGenerationPage.tsx — full service page with H1, intro, benefits, process, CTA
4. Create 10 sub-service pages (OnPageSeoPage, OffPageSeoPage, TechnicalSeoPage, SearchAdsPage, DisplayAdsPage, YoutubeAdsPage, BusinessWebsitePage, EcommerceWebsitePage, FacebookMarketingPage, InstagramMarketingPage)
5. Create PrivacyPolicyPage.tsx and TermsConditionsPage.tsx as standalone pages
6. Update SeoServicesPage — add sub-services section
7. Update GoogleAdsPage — add sub-services section
8. Update WebsiteDesignPage — add sub-services section
9. Update SocialMediaPage — add sub-services section
10. Update HomePage.tsx — shorten service cards to 2-3 lines + Read More links
11. Update Layout.tsx — footer Privacy/Terms become route links; services nav updated
12. Update sitemap.xml — all new URLs added
13. Validate build

### Design constraints
- Strict brand palette: #4FC3C7 teal, #16A34A green, #DC2626 red (CTA only), #15803D dark green hover, #E6F7F8 light teal bg, #F5F5F5 light gray, #1F2937 text, #FFFFFF white
- No emojis anywhere
- Alternating section backgrounds: white / #E6F7F8
- Red only for CTA buttons, green for icons/highlights
- H1 → H2 → H3 hierarchy only, no skips
- Mobile responsive
- All sub-service pages: short explanation (100-150 words), Benefits section, Use Case section, CTA
- Service pages: H1, 100-150 word intro, Key Benefits, Process, Sub-services list, CTA
