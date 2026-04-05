import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BusinessWebsitePage from "./pages/BusinessWebsitePage";
import ContactPage from "./pages/ContactPage";
import DigitalMarketingStrategiesPage from "./pages/DigitalMarketingStrategiesPage";
import DisplayAdsPage from "./pages/DisplayAdsPage";
import EcommerceWebsitePage from "./pages/EcommerceWebsitePage";
import FacebookMarketingPage from "./pages/FacebookMarketingPage";
import GoogleAdsGuidePage from "./pages/GoogleAdsGuidePage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import HomePage from "./pages/HomePage";
import InstagramMarketingPage from "./pages/InstagramMarketingPage";
import LeadGenerationPage from "./pages/LeadGenerationPage";
import LocalSeoGuidePage from "./pages/LocalSeoGuidePage";
import LocalSeoPage from "./pages/LocalSeoPage";
import OffPageSeoPage from "./pages/OffPageSeoPage";
import OnPageSeoPage from "./pages/OnPageSeoPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SearchAdsPage from "./pages/SearchAdsPage";
import SeoServicesPage from "./pages/SeoServicesPage";
import ServicesPage from "./pages/ServicesPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import SocialMediaTipsPage from "./pages/SocialMediaTipsPage";
import TechnicalSeoPage from "./pages/TechnicalSeoPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";
import WebsiteDesignPage from "./pages/WebsiteDesignPage";
import WhatIsSeoPage from "./pages/WhatIsSeoPage";
import YoutubeAdsPage from "./pages/YoutubeAdsPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about-us",
  component: AboutPage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const seoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/seo-services",
  component: SeoServicesPage,
});
const googleAdsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/google-ads-services",
  component: GoogleAdsPage,
});
const socialMediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media-marketing",
  component: SocialMediaPage,
});
const websiteDesignRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/website-design",
  component: WebsiteDesignPage,
});
const localSeoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/local-seo-services",
  component: LocalSeoPage,
});
const leadGenerationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/lead-generation",
  component: LeadGenerationPage,
});
const onPageSeoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/on-page-seo",
  component: OnPageSeoPage,
});
const offPageSeoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/off-page-seo",
  component: OffPageSeoPage,
});
const technicalSeoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technical-seo",
  component: TechnicalSeoPage,
});
const searchAdsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/search-ads",
  component: SearchAdsPage,
});
const displayAdsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/display-ads",
  component: DisplayAdsPage,
});
const youtubeAdsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/youtube-ads",
  component: YoutubeAdsPage,
});
const businessWebsiteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/business-website-design",
  component: BusinessWebsitePage,
});
const ecommerceWebsiteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ecommerce-website-design",
  component: EcommerceWebsitePage,
});
const facebookMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/facebook-marketing",
  component: FacebookMarketingPage,
});
const instagramMarketingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/instagram-marketing",
  component: InstagramMarketingPage,
});
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicyPage,
});
const termsConditionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms-and-conditions",
  component: TermsConditionsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact-us",
  component: ContactPage,
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogPage,
});
const whatIsSeoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/what-is-seo",
  component: WhatIsSeoPage,
});
const googleAdsGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/google-ads-guide",
  component: GoogleAdsGuidePage,
});
const socialMediaTipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/social-media-tips",
  component: SocialMediaTipsPage,
});
const localSeoGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/local-seo-guide",
  component: LocalSeoGuidePage,
});
const digitalMarketingStrategiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/digital-marketing-strategies",
  component: DigitalMarketingStrategiesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  seoRoute,
  googleAdsRoute,
  socialMediaRoute,
  websiteDesignRoute,
  localSeoRoute,
  leadGenerationRoute,
  onPageSeoRoute,
  offPageSeoRoute,
  technicalSeoRoute,
  searchAdsRoute,
  displayAdsRoute,
  youtubeAdsRoute,
  businessWebsiteRoute,
  ecommerceWebsiteRoute,
  facebookMarketingRoute,
  instagramMarketingRoute,
  privacyPolicyRoute,
  termsConditionsRoute,
  contactRoute,
  blogRoute,
  whatIsSeoRoute,
  googleAdsGuideRoute,
  socialMediaTipsRoute,
  localSeoGuideRoute,
  digitalMarketingStrategiesRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
