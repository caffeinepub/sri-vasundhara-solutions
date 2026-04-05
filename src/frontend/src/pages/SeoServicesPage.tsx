import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function SeoServicesPage() {
  useEffect(() => {
    document.title =
      "SEO Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Affordable SEO services in Guntur and Hyderabad. Get on-page, off-page and technical SEO to rank higher on Google. Free SEO audit available.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "SEO Services" },
            ]}
          />
          <Badge className="mb-4 bg-blue-50 text-primary border-primary/20">
            SEO Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            SEO Services in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Improve your Google rankings with professional{" "}
            <strong>SEO services in Guntur</strong> and Hyderabad. Data-driven,
            result-focused SEO for small businesses and growing enterprises.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">
                Rank Your Business Higher on Google
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sri Vasundhara Solutions offers comprehensive SEO services in
                Guntur and Hyderabad that deliver consistent, measurable
                results. Our SEO approach combines keyword research, on-page
                optimization, technical audits, and quality link building to
                help your business attract more organic traffic and generate
                qualified leads.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "On-Page SEO Optimization",
                    desc: "We optimize title tags, meta descriptions, keyword placement, content structure, and internal linking to improve your relevance for target keywords in Guntur and Hyderabad.",
                  },
                  {
                    title: "Off-Page SEO & Link Building",
                    desc: "Build domain authority with high-quality backlinks from relevant, authoritative websites. Our link-building strategies improve your site's credibility and search rankings.",
                  },
                  {
                    title: "Technical SEO",
                    desc: "We audit and fix technical issues including site speed, mobile optimization, crawlability, Core Web Vitals, structured data, and XML sitemap to ensure search engines can effectively index your site.",
                  },
                  {
                    title: "Local SEO Integration",
                    desc: "Optimize your Google Business Profile, build local citations, and maintain NAP consistency to appear in local searches and Google Maps for Guntur and Hyderabad.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  "Increased organic traffic",
                  "Higher Google rankings",
                  "More qualified leads",
                  "Brand credibility",
                  "Long-term results",
                  "Monthly reporting",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us">
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-bold"
                  data-ocid="seo.cta_button"
                >
                  Get Free SEO Audit
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4 font-display">
                  Our SEO Process
                </h3>
                <div className="space-y-3">
                  {[
                    "Website Audit",
                    "Keyword Research",
                    "On-Page Optimization",
                    "Link Building",
                    "Monthly Reporting",
                  ].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                Frequently Asked Questions
              </h3>
              <FAQItem
                q="How long does SEO take to show results?"
                a="SEO typically takes 3–6 months to show significant results. Initial improvements in rankings and traffic can appear within 4–8 weeks for less competitive keywords. Local SEO for Guntur businesses often shows faster results."
              />
              <FAQItem
                q="How much do SEO services cost in Guntur?"
                a="Our affordable SEO packages start from a competitive monthly rate for basic local SEO. Full SEO packages including on-page, off-page, and technical SEO are available at customized pricing based on your business needs."
              />
              <FAQItem
                q="Do you provide local SEO for Guntur businesses?"
                a="Yes. We specialize in local SEO services for businesses in Guntur, Hyderabad, and across Andhra Pradesh and Telangana. We optimize your Google Business Profile, build local citations, and target location-specific keywords."
              />
              <FAQItem
                q="What is included in your SEO package?"
                a="Our SEO packages include complete on-page optimization, off-page link building, technical SEO audit and fixes, local SEO optimization, Google Business Profile management, keyword tracking, and detailed monthly reports."
              />
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm font-medium text-primary mb-2">
                  Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/local-seo-services"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    Local SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/google-ads-services"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    Google Ads Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/website-design"
                    className="text-primary text-sm underline hover:no-underline"
                  >
                    Website Design
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Get Your Free SEO Audit Today
          </h2>
          <p className="text-white/80 mb-8">
            Discover how we can help your business rank higher on Google in
            Guntur and Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4">
                Get Free SEO Audit
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
