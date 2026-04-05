import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  Globe,
  MapPin,
  Monitor,
  Search,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

const mainServices = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Rank higher on Google with keyword research, on-page optimization, technical SEO, and quality link building tailored for businesses in Guntur and Hyderabad.",
    to: "/seo-services",
  },
  {
    icon: Target,
    title: "Google Ads & PPC",
    desc: "Generate high-quality leads fast with targeted Google Ads campaigns. We manage Search, Display, and Remarketing ads to maximize your ROI.",
    to: "/google-ads-services",
  },
  {
    icon: Monitor,
    title: "Website Design",
    desc: "We design professional, mobile-responsive, SEO-friendly websites that convert visitors into leads and reflect your brand quality.",
    to: "/website-design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness and generate leads on Facebook and Instagram with creative content and targeted ad campaigns.",
    to: "/social-media-marketing",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Appear at the top of local searches in Guntur and Hyderabad. We optimize your Google Business Profile and build local citations.",
    to: "/local-seo-services",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    desc: "Drive consistent, qualified leads through SEO, Google Ads, social media, and high-converting landing pages tailored to your business.",
    to: "/lead-generation",
  },
];

const subServiceGroups = [
  {
    parent: "SEO Services",
    parentTo: "/seo-services",
    icon: Search,
    items: [
      { label: "On-Page SEO", to: "/on-page-seo" },
      { label: "Off-Page SEO", to: "/off-page-seo" },
      { label: "Technical SEO", to: "/technical-seo" },
    ],
  },
  {
    parent: "Google Ads",
    parentTo: "/google-ads-services",
    icon: Target,
    items: [
      { label: "Search Ads", to: "/search-ads" },
      { label: "Display Ads", to: "/display-ads" },
      { label: "YouTube Ads", to: "/youtube-ads" },
    ],
  },
  {
    parent: "Website Design",
    parentTo: "/website-design",
    icon: Monitor,
    items: [
      { label: "Business Website", to: "/business-website-design" },
      { label: "E-commerce Website", to: "/ecommerce-website-design" },
    ],
  },
  {
    parent: "Social Media",
    parentTo: "/social-media-marketing",
    icon: Share2,
    items: [
      { label: "Facebook Marketing", to: "/facebook-marketing" },
      { label: "Instagram Marketing", to: "/instagram-marketing" },
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    document.title =
      "Digital Marketing Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Complete digital marketing services in Guntur and Hyderabad: SEO, Google Ads, website design, social media, local SEO, and lead generation.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-[#E6F7F8] py-16" data-ocid="services_page.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Our Digital Marketing Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Sri Vasundhara Solutions offers a full suite of digital marketing
            services for businesses in Guntur and Hyderabad. From SEO and Google
            Ads to website design and lead generation, we deliver measurable
            results tailored to your growth goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">All Services</h2>
            <p className="section-subheading">
              Explore our complete range of digital marketing solutions.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services_page.list"
          >
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card group"
                  data-ocid={`services_page.item.${i + 1}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 font-display text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    to={service.to}
                    className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    data-ocid={`services_page.link.${i + 1}`}
                  >
                    Read More &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-Services Breakdown */}
      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Service Specialisations</h2>
            <p className="section-subheading">
              Explore the specific solutions within each service area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServiceGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.parent}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm"
                  data-ocid={`services_page.subgroup.${i + 1}`}
                >
                  <div className="h-10 w-10 rounded-xl bg-[#E6F7F8] flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-[#4FC3C7]" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1 font-display">
                    <Link
                      to={group.parentTo}
                      className="hover:text-primary transition-colors"
                    >
                      {group.parent}
                    </Link>
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <span className="text-[#16A34A] font-bold">
                            &rsaquo;
                          </span>{" "}
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading">
            Ready to Grow Your Business Online?
          </h2>
          <p className="section-subheading mb-8">
            Get a free consultation with our digital marketing experts in Guntur
            and Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="services_page.primary_button"
            />
            <WhatsAppButton ocid="services_page.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
