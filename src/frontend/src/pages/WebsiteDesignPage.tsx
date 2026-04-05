import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function WebsiteDesignPage() {
  useEffect(() => {
    document.title = "Website Design Company in Guntur & Hyderabad | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Professional website design in Guntur and Hyderabad. Fast, SEO-friendly, mobile-first websites for small businesses. Get a free quote.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Website Design" },
            ]}
          />
          <Badge className="mb-4 bg-[#E6F7F8] text-[#4FC3C7] border-[#4FC3C7]/30">
            Website Design
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Website Design Company in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Fast, mobile-first, SEO-friendly websites that convert visitors into
            customers. Professional{" "}
            <strong>website design services in Guntur</strong> for businesses of
            all sizes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">
                Websites That Drive Business Growth
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We build professional, SEO-optimized websites for businesses in
                Guntur and Hyderabad. Every website is mobile-responsive,
                fast-loading, and built to convert visitors into customers.
                Whether you need a business website, landing page, or e-commerce
                store, our team delivers a complete solution from design to
                launch.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Mobile-first design",
                  "Fast loading speeds",
                  "SEO-ready structure",
                  "Lead capture forms",
                  "Affordable pricing",
                  "Post-launch support",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-[#16A34A] shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us">
                <Button
                  style={{ backgroundColor: "#DC2626" }}
                  className="text-white font-bold hover:opacity-90"
                  data-ocid="web_design.cta_button"
                >
                  Get Website Quote
                </Button>
              </Link>
              <div className="mt-6 p-4 bg-[#E6F7F8] border border-[#4FC3C7]/20 rounded-xl">
                <p className="text-sm font-medium text-primary mb-2">
                  Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/seo-services"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    SEO Services in Guntur
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/local-seo-services"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    Local SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/contact-us"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-card">
                <h3 className="font-bold text-foreground mb-3 font-display">
                  What We Build
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      title: "Business Websites",
                      desc: "Professional, fast-loading websites that showcase your business and convert visitors into customers.",
                      to: "/business-website-design",
                    },
                    {
                      title: "E-Commerce Websites",
                      desc: "Full-featured online stores with product management, payment gateway integration, and SEO optimization.",
                      to: "/ecommerce-website-design",
                    },
                    {
                      title: "Landing Pages",
                      desc: "High-converting landing pages designed for Google Ads and lead generation campaigns.",
                      to: "/contact-us",
                    },
                    {
                      title: "SEO-Optimized Design",
                      desc: "Every website includes proper heading structure, meta tags, schema markup, fast load times, and internal linking from day one.",
                      to: "/seo-services",
                    },
                  ].map(({ title, desc, to }) => (
                    <div
                      key={title}
                      className="p-3 rounded-lg border border-border"
                    >
                      <Link
                        to={to}
                        className="font-semibold text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {title}
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                Frequently Asked Questions
              </h3>
              <FAQItem
                q="How much does a website cost in Guntur?"
                a="Website pricing depends on the scope and requirements. Basic business websites, e-commerce stores, and landing pages are available at different price points. Contact us for a free quote tailored to your specific needs."
              />
              <FAQItem
                q="How long does it take to build a website?"
                a="A standard business website takes 7–14 days. E-commerce websites take 15–30 days. Landing pages can be delivered within 3–5 days. The timeline depends on content readiness and revision cycles."
              />
              <FAQItem
                q="Do you provide website maintenance?"
                a="Yes, we offer monthly website maintenance packages including security updates, performance optimization, content updates, and technical support."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Website Design Sub-Services */}
      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Website Design Services</h2>
            <p className="section-subheading">
              Choose the right website type for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                title: "Business Website Design",
                to: "/business-website-design",
                desc: "Professional, SEO-ready business websites for local businesses, service providers, and consultants in Guntur and Hyderabad.",
              },
              {
                title: "E-commerce Website Design",
                to: "/ecommerce-website-design",
                desc: "Feature-rich online stores with secure payments, product management, and mobile shopping optimization.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-foreground mb-3 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  to={item.to}
                  className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Get Your Website Built Today
          </h2>
          <p className="text-white/80 mb-8">
            Fast, professional, SEO-optimized websites for businesses in Guntur
            and Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button
                style={{ backgroundColor: "#DC2626" }}
                className="text-white font-bold px-8 py-4 hover:opacity-90"
              >
                Get Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/919398241974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
