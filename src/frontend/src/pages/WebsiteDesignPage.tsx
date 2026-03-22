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
        "Affordable website design in Guntur and Hyderabad. Fast, SEO-friendly, mobile-first websites for small businesses. Get a free quote.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "Website Design" },
            ]}
          />
          <Badge className="mb-4 bg-purple-50 text-purple-600 border-purple-200">
            Website Design
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Affordable Website Design Company in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Fast, mobile-first, SEO-friendly websites that convert visitors into
            customers.{" "}
            <strong>Affordable website design with SEO in Guntur</strong> for
            small businesses and startups.
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
                Looking for a{" "}
                <strong>website design company in Guntur affordable</strong>? We
                build fast, mobile-first, SEO-friendly websites that convert
                visitors into customers. Our{" "}
                <strong>affordable website design with SEO in Guntur</strong> is
                perfect for startups, small businesses, clinics, restaurants,
                and retail stores. Every website we deliver is optimized for
                speed, search engines, and lead generation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Mobile-first design",
                  "Fast loading (<3s)",
                  "SEO-ready structure",
                  "Lead capture forms",
                  "Affordable pricing",
                  "3 months support",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-bold"
                  data-ocid="web_design.cta_button"
                >
                  Get Website Quote
                </Button>
              </Link>
              <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                <p className="text-sm font-medium text-purple-600 mb-2">
                  🔗 Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/seo-services"
                    className="text-purple-600 text-sm underline hover:no-underline"
                  >
                    SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/local-seo-services"
                    className="text-purple-600 text-sm underline hover:no-underline"
                  >
                    Local SEO
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/contact-us"
                    className="text-purple-600 text-sm underline hover:no-underline"
                  >
                    Free Quote
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
                      desc: "Professional, fast-loading websites that showcase your business and convert visitors to customers.",
                    },
                    {
                      title: "E-Commerce Development",
                      desc: "Full-featured online stores with product management, payment gateway integration, and SEO optimization.",
                    },
                    {
                      title: "Landing Pages",
                      desc: "High-converting landing pages designed specifically for Google Ads and lead generation campaigns.",
                    },
                    {
                      title: "SEO-Optimized Design",
                      desc: "Every website we build is SEO-ready from day one — fast load times, proper schema markup, and mobile-first design.",
                    },
                  ].map(({ title, desc }, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg border border-border"
                    >
                      <p className="font-semibold text-sm text-foreground">
                        {title}
                      </p>
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
                a="A basic business website starts from ₹8,999. E-commerce websites start from ₹19,999. All websites include mobile-responsive design, basic SEO setup, and 3 months of free support. We offer the most affordable website design with SEO in Guntur."
              />
              <FAQItem
                q="How long does it take to build a website?"
                a="A standard business website takes 7–14 days. E-commerce websites take 15–30 days. Landing pages can be delivered within 3–5 days. Timeline depends on content readiness and revision cycles."
              />
              <FAQItem
                q="Do you provide website maintenance?"
                a="Yes, we offer monthly website maintenance packages starting from ₹1,999/month including security updates, performance optimization, content updates, and technical support."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Get Your Website Built Today
          </h2>
          <p className="text-white/80 mb-8">
            Fast, affordable, SEO-optimized websites for small businesses in
            Guntur and Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4">
                Get Free Quote 🚀
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
