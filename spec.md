# Sri Vasundhara Solutions – Website Rebuild & SEO Optimization

## Current State

The website is a fully-built React SPA with:
- Multiple pages: Home, About, Services (SEO, Google Ads, Social Media, Website Design, Local SEO), Blog, Contact
- Existing color theme: Blue primary (#1e40af), Orange accent (#f97316), white background — defined in OKLCH tokens
- Layout with sticky header, footer with NAP, floating WhatsApp + call buttons
- Privacy Policy and Terms & Conditions as footer dialogs
- Schema markup, GA4, sitemap.xml, robots.txt all in place
- Issues: emojis scattered in content, spammy/redundant sections like "Serving Businesses in Gorantla, Guntur & Hyderabad", keyword-stuffed text, overly promotional phrasing, inconsistent heading levels (H2 skipping to H4 in some sections), announcement banners removed in v18/v19

## Requested Changes (Diff)

### Add
- Clean 150–200 word service descriptions for all 6 services (SEO, Google Ads, Website Design, Social Media Marketing, Local SEO, Lead Generation) on homepage — natural keyword usage, no stuffing
- Lead Generation as a 6th service on homepage (currently missing)
- Our Process section (5 steps: Business Analysis → Strategy Planning → Execution → Optimization → Growth)
- Clean professional testimonials (3–5, short format, no copyright issues)
- Updated FAQ: "How to rank business on Google?", "What services do you provide?", "Do you work with small businesses?"
- Author/E-E-A-T section: Gajjalakonda Srinu, Digital Marketing Analyst

### Modify
- Homepage H1: "Best Digital Marketing Agency in Guntur & Hyderabad" (keep exact)
- Homepage intro paragraph: Replace with clean version provided (no keyword stuffing)
- Remove ALL emojis sitewide (🔥 🚀 📍 🏆 etc.)
- Remove section "Serving Businesses in Gorantla, Guntur & Hyderabad" from homepage
- Remove all duplicate or spammy content from all pages
- Improve spacing and alignment throughout — section padding consistency
- Fix heading hierarchy: H1 → H2 → H3 only, no skipped levels
- Keyword density: 0.8%–1.5%, natural variations only
- CTA buttons: "Get Free Consultation", "Call Now: +91 9398241974", "WhatsApp Us" (consistent across site)
- Contact section on homepage: phone +91 9398241974, location Gorantla, Guntur, Andhra Pradesh, India
- Service pages: clean each with 150–200 word intros, remove keyword stuffing

### Remove
- All emoji characters from all page content
- "Serving Businesses in Gorantla, Guntur & Hyderabad" section
- Duplicate content blocks
- Keyword-stuffed or over-optimized text
- Any announcement banners with emojis or promotional copy

## Implementation Plan

1. **HomePage.tsx** — Full content rewrite:
   - Keep H1 exact, replace intro with clean version
   - Services section: 6 service cards with 150–200 word clean descriptions
   - Why Choose Us: 4 clean bullet points
   - Our Process: 5-step numbered section (new)
   - Testimonials: 3–5 short professional (AI-named, no copyright)
   - FAQ: 3–5 clean questions per spec
   - Contact mini-section: phone + location
   - Remove all emojis, remove "Serving Businesses" section
   - Ensure H1 → H2 → H3 hierarchy, no skips

2. **Layout.tsx** — Remove any emojis in nav/footer

3. **Service pages** (SeoServicesPage, GoogleAdsPage, SocialMediaPage, WebsiteDesignPage, LocalSeoPage) — Remove emojis, fix heading hierarchy, clean up keyword stuffing

4. **AboutPage.tsx** — Add/update author section for Gajjalakonda Srinu, remove emojis

5. **ContactPage.tsx** — Verify clean content, correct address (Gorantla, Guntur)

6. **BlogPage.tsx** — Remove emojis if present, clean content

7. Keep index.html, sitemap.xml, robots.txt, index.css, tailwind.config.js EXACTLY AS-IS (already optimized)
