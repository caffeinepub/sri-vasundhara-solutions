import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function LocalSeoPage() {
  useEffect(() => {
    document.title = "Local SEO Services for Small Businesses | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Dominate local search results in Guntur and Hyderabad. Local SEO services to rank on Google Maps and attract nearby customers.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "Local SEO Services" },
            ]}
          />
          <Badge className="mb-4 bg-green-50 text-green-600 border-green-200">
            Local SEO
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Local SEO Services for Small Businesses in Andhra Pradesh &amp;
            Telangana
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Dominate local search and Google Maps in Guntur and Hyderabad.{" "}
            <strong>
              Local SEO services for small businesses in Andhra Pradesh
            </strong>{" "}
            that drive real foot traffic and calls.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">
                Rank #1 in Local Search Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dominate local search results with our{" "}
                <strong>
                  local SEO services for small businesses in Andhra Pradesh
                </strong>
                . We optimize your Google Business Profile, build local
                citations, and help your business appear in the 'near me'
                searches in Guntur, Hyderabad, and across India. As a leading{" "}
                <strong>digital marketing agency in KPHB Hyderabad</strong>, we
                understand the local market and help businesses stand out from
                competitors.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Google Business Profile Optimization",
                    desc: "Complete optimization of your GBP listing including photos, posts, Q&A, categories, and attributes to rank in the Google Maps 3-pack.",
                  },
                  {
                    title: "Local Citation Building",
                    desc: "Build consistent NAP (Name, Address, Phone) citations across major directories like Justdial, Sulekha, IndiaMART, and 50+ local directories.",
                  },
                  {
                    title: "'Near Me' SEO",
                    desc: "Optimize your website and content for location-based 'near me' searches in Guntur, Hyderabad, KPHB, and surrounding areas.",
                  },
                  {
                    title: "Review Management",
                    desc: "Develop a systematic approach to generating and responding to Google reviews to build trust and improve local ranking signals.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact-us">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold"
                  data-ocid="local_seo.cta_button"
                >
                  Get Local SEO Quote
                </Button>
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: MapPin,
                    label: "Top 3 Google Maps pack",
                    color: "text-green-600",
                  },
                  {
                    icon: Phone,
                    label: "More local phone calls",
                    color: "text-primary",
                  },
                  {
                    icon: TrendingUp,
                    label: "Drive foot traffic",
                    color: "text-accent",
                  },
                  {
                    icon: Star,
                    label: "Build local trust",
                    color: "text-yellow-500",
                  },
                ].map(({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="bg-secondary/50 rounded-xl p-4 text-center"
                  >
                    <Icon className={`h-6 w-6 ${color} mx-auto mb-2`} />
                    <p className="text-xs font-medium text-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                Frequently Asked Questions
              </h3>
              <FAQItem
                q="What is Local SEO?"
                a="Local SEO is the process of optimizing your online presence to attract more business from local searches. It includes Google Business Profile optimization, local citation building, and creating location-specific content to rank in searches like 'digital marketing agency near me'."
              />
              <FAQItem
                q="How do I rank on Google Maps in Guntur?"
                a="To rank on Google Maps in Guntur, you need an optimized Google Business Profile, consistent NAP citations across directories, positive customer reviews, location-specific content on your website, and regular posts on your GBP listing."
              />
              <FAQItem
                q="How long does Local SEO take?"
                a="Local SEO shows faster results than organic SEO. Most businesses see improvements in Google Maps rankings within 4–8 weeks. Full results with significant ranking improvements typically take 3–4 months of consistent optimization."
              />
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm font-medium text-green-600 mb-2">
                  🔗 Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/seo-services"
                    className="text-green-600 text-sm underline hover:no-underline"
                  >
                    Full SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/website-design"
                    className="text-green-600 text-sm underline hover:no-underline"
                  >
                    Website Design
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/contact-us"
                    className="text-green-600 text-sm underline hover:no-underline"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Dominate Local Search in Guntur &amp; Hyderabad
          </h2>
          <p className="text-white/80 mb-8">
            Get found by local customers searching for your business. Start your
            Local SEO journey today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-white text-green-700 hover:bg-white/90 font-bold px-8 py-4">
                Get Local SEO Quote 🚀
              </Button>
            </Link>
            <a
              href="https://wa.me/919398241974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-900 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
