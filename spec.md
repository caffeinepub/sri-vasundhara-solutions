# Sri Vasundhara Solutions

## Current State

A single-page React website for Sri Vasundhara Solutions, a digital marketing agency. The site contains: sticky header with logo, bilingual EN/Telugu toggle, hero section, about, services (10 cards), why-us, pricing (3 plans), testimonials (3), portfolio (5 items from backend), blog (3 posts from backend), CTA banner, contact form with info, and a footer. The app is connected to a Motoko backend for portfolio items, blog posts, and contact form submissions.

**Issues with current state:**
- Logo is the old generated placeholder (`/assets/generated/logo-mark-transparent.dim_200x200.png`) — needs replacing with uploaded logo `/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png`
- Contact details are outdated: phone `+91 98765 43210`, email `hello@srivasundhara.in`, address `Hyderabad, Telangana, India — 500001`
- WhatsApp links use wrong number `919876543210`
- Missing: Privacy Policy page, Terms & Conditions page, full About page, detailed Services page
- Hero headline doesn't match the requested headline
- Footer copyright year should be 2026
- Missing the two business locations (KPHB Colony Hyderabad and Guntur)
- No "Process" section on the homepage
- Missing SEO meta tags in index.html

## Requested Changes (Diff)

### Add
- Replace logo with uploaded logo `/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png` in header and footer
- Update all contact details: phone `+91 9398241974`, email `srivasundharasolutions@gmail.com`, WhatsApp `919398241974`
- Two business locations: (1) KPHB Colony, Hyderabad, Telangana – 500072; (2) Amaravati Road, Guntur, Andhra Pradesh – 522034
- "Process" section on homepage: Business Analysis → Strategy Planning → Campaign Execution → Performance Optimization → Growth Scaling
- Privacy Policy modal/page (accessible from footer)
- Terms & Conditions modal/page (accessible from footer)
- Meta tags in index.html for all major SEO signals
- Add more detailed content to each section for SEO richness
- Hero headline: "Digital Marketing Agency Helping Businesses Grow Online"
- Update About section with "Online Consultant" note for both locations

### Modify
- Hero headline text to match the new copy
- All phone/email/WhatsApp references site-wide
- Footer copyright to "© 2026 Sri Vasundhara Solutions. All Rights Reserved."
- Contact section to show both location addresses and WhatsApp chat button
- About section to reflect "Online Consultant" services in Hyderabad and Guntur
- Services section: add "Google Business Profile Optimization" as distinct service
- Testimonials: keep existing 3 sample reviews
- Pricing plans: update to Starter Plan / Growth Plan / Pro Plan with richer feature lists
- Blog posts: expand to include more topic relevance for SEO

### Remove
- Old generated logo references
- Old placeholder phone/email/address

## Implementation Plan

1. Update `src/frontend/index.html` with proper meta title, description, and SEO keywords
2. In `App.tsx`:
   a. Replace all logo `src` references to `/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png`
   b. Update phone: `+91 9398241974`, tel link: `tel:+919398241974`
   c. Update email: `srivasundharasolutions@gmail.com`, mailto link
   d. Update WhatsApp links: `https://wa.me/919398241974`
   e. Update hero headline to: "Digital Marketing Agency Helping Businesses Grow Online"
   f. Add Process section (5-step workflow) after Why Choose Us
   g. Update contact info section to show both locations
   h. Update footer copyright to "© 2026 Sri Vasundhara Solutions. All Rights Reserved."
   i. Update footer with both addresses
   j. Add Privacy Policy and Terms & Conditions modal dialogs triggered from footer links
   k. Enrich content in all sections for SEO depth
   l. Update bilingual translations accordingly
