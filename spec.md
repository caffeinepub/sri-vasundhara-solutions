# Sri Vasundhara Solutions

## Current State
Single-page React app with all content in one App.tsx component. Navigation uses anchor links or section scrolling. No client-side routing — all content is rendered on `/` regardless of user intent. TanStack Router is installed but not used.

## Requested Changes (Diff)

### Add
- TanStack Router setup with clean, keyword-rich URL routes:
  - `/` — Home
  - `/about-us` — About Us
  - `/seo-services` — SEO Services
  - `/google-ads-services` — Google Ads Services
  - `/social-media-marketing` — Social Media Marketing
  - `/website-design` — Website Design
  - `/local-seo-services` — Local SEO Services
  - `/contact-us` — Contact Us
  - `/blog` — Blog listing
  - `/what-is-seo` — Blog post
  - `/google-ads-guide` — Blog post
  - `/social-media-tips` — Blog post
  - `/local-seo-guide` — Blog post
  - `/digital-marketing-strategies` — Blog post
- Breadcrumb navigation on all inner pages: Home > Services > SEO Services
- Canonical meta tags per page
- `<title>` and `<meta name="description">` dynamically set per route
- Internal links use keyword anchor text pointing to correct route paths

### Modify
- Refactor App.tsx to use TanStack Router: extract each section into a dedicated page component (HomePage, AboutPage, SeoServicesPage, GoogleAdsPage, SocialMediaPage, WebsiteDesignPage, LocalSeoPage, ContactPage, BlogPage, individual blog post pages)
- Header navigation links updated to use router `<Link>` components with the clean URL paths above
- Footer links updated to match new clean URL structure
- All internal CTAs like "Learn More about SEO Services" point to `/seo-services` etc.
- Remove any hash parameters, token strings, or dynamic query params from any links
- main.tsx updated to wrap app in TanStack Router provider

### Remove
- Anchor scroll-based navigation (replace with router navigation)
- Any URLs containing `#caffeineAdminToken`, `?id=`, or dynamic/random strings

## Implementation Plan
1. Set up TanStack Router in main.tsx with a root route and all child routes
2. Create page components by extracting existing section content:
   - HomePage: Hero + ServicesOverview + WhyChooseUs + Process + Testimonials + CTA
   - AboutPage: About section content
   - SeoServicesPage: SEO section with FAQ, breadcrumb
   - GoogleAdsPage: Google Ads section with FAQ, breadcrumb
   - SocialMediaPage: Social Media section with FAQ, breadcrumb
   - WebsiteDesignPage: Website Design section with FAQ, breadcrumb
   - LocalSeoPage: Local SEO section with FAQ, breadcrumb
   - ContactPage: Contact form + map
   - BlogPage: Blog listing with links to post pages
   - Blog post pages: what-is-seo, google-ads-guide, social-media-tips, local-seo-guide, digital-marketing-strategies
3. Update Header with router Links using clean paths
4. Update Footer links to clean paths
5. Add breadcrumb component shown on all non-home pages
6. Set page title and meta description per route using useEffect
7. Validate and build
