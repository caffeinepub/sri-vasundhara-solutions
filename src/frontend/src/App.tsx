import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DigitalMarketingStrategiesPage from "./pages/DigitalMarketingStrategiesPage";
import GoogleAdsGuidePage from "./pages/GoogleAdsGuidePage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import HomePage from "./pages/HomePage";
import LocalSeoGuidePage from "./pages/LocalSeoGuidePage";
import LocalSeoPage from "./pages/LocalSeoPage";
import SeoServicesPage from "./pages/SeoServicesPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import SocialMediaTipsPage from "./pages/SocialMediaTipsPage";
import WebsiteDesignPage from "./pages/WebsiteDesignPage";
import WhatIsSeoPage from "./pages/WhatIsSeoPage";

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
  seoRoute,
  googleAdsRoute,
  socialMediaRoute,
  websiteDesignRoute,
  localSeoRoute,
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
