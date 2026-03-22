import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function LocalSeoGuidePage() {
  useEffect(() => {
    document.title = "Local SEO Guide for Guntur Businesses | SVS Blog";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Complete local SEO guide for businesses in Guntur and Hyderabad. Step-by-step strategies to rank on Google Maps and dominate local search.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Local SEO Guide" },
            ]}
          />
          <Badge className="mb-4 bg-green-100 text-green-600 border-green-200">
            Local SEO
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Local SEO Guide for Guntur Businesses
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Mar 8, 2026</span>
            <span>·</span>
            <span>9 min read</span>
            <span>·</span>
            <span>By Sri Vasundhara Solutions</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            If you run a local business in Guntur or Hyderabad,{" "}
            <strong>Local SEO</strong> is your most powerful tool for attracting
            nearby customers. When someone searches{" "}
            <em>"digital marketing agency near me"</em> or{" "}
            <em>"best restaurant in Guntur"</em>, Google shows local results
            based on proximity, relevance, and prominence. This guide will show
            you exactly how to rank in those local results.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            What is Local SEO?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Local SEO is the process of optimizing your online presence to
            appear in location-based searches. Unlike regular SEO which targets
            national or global audiences, Local SEO focuses on ranking your
            business for searches made by people in your geographic area –
            Guntur, Hyderabad, KPHB, Vijayawada, etc.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            The 3 Pillars of Local SEO Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: "Proximity",
                icon: "📍",
                desc: "How close your business is to the searcher. You can't control this, but optimizing your service area in Google Business Profile helps.",
              },
              {
                title: "Relevance",
                icon: "🎯",
                desc: "How well your business matches the search query. Optimize your GBP categories, website content, and keywords for maximum relevance.",
              },
              {
                title: "Prominence",
                icon: "⭐",
                desc: "How well-known your business is online. Reviews, citations, backlinks, and mentions all contribute to prominence.",
              },
            ].map(({ title, icon, desc }, i) => (
              <div
                key={i}
                className="bg-green-50 border border-green-200 rounded-xl p-5 text-center"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            Step-by-Step Local SEO Guide for Guntur Businesses
          </h2>
          <div className="space-y-6 mb-8">
            {[
              {
                step: "Step 1: Claim and Optimize Your Google Business Profile",
                details: [
                  "Claim your Google Business Profile (GBP) at business.google.com",
                  "Add complete business information: name, address, phone (NAP), website, hours",
                  "Choose the most specific business categories (e.g., 'Digital Marketing Agency')",
                  "Add high-quality photos of your business, team, and work",
                  "Write a keyword-rich business description including 'Guntur' and 'Hyderabad'",
                  "Add your products/services with descriptions and prices",
                  "Enable messaging and Q&A features",
                ],
              },
              {
                step: "Step 2: Build Local Citations",
                details: [
                  "List your business on Justdial, Sulekha, IndiaMART, and TradeIndia",
                  "Ensure NAP consistency across all directories",
                  "Submit to industry-specific directories relevant to your business",
                  "Add your business to Google Maps, Apple Maps, and Bing Maps",
                  "Build citations on local Guntur and Hyderabad business directories",
                ],
              },
              {
                step: "Step 3: Generate and Manage Reviews",
                details: [
                  "Ask satisfied customers to leave Google reviews",
                  "Create a simple review request process (WhatsApp message with direct link)",
                  "Respond to every review – positive and negative – professionally",
                  "Aim for a minimum of 10 reviews with a 4.5+ star rating",
                  "Monitor and respond to reviews on Justdial, Facebook, and other platforms",
                ],
              },
              {
                step: "Step 4: Create Location-Specific Website Content",
                details: [
                  "Create dedicated pages for each city you serve (Guntur, Hyderabad, Vijayawada)",
                  "Include location keywords naturally: 'digital marketing agency in Guntur'",
                  "Add your complete address and Google Maps embed to your contact page",
                  "Create content about local events, news, and community involvement",
                  "Use structured data markup (LocalBusiness schema) on your website",
                ],
              },
            ].map(({ step, details }, i) => (
              <div key={i} className="border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-3">{step}</h3>
                <ul className="space-y-2">
                  {details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <FAQItem
            q="How do I rank my business on Google Maps in Guntur?"
            a="To rank on Google Maps in Guntur: claim and fully optimize your Google Business Profile, build consistent citations on major directories, generate positive customer reviews, create location-specific content on your website, and build local backlinks from Guntur-based websites and news portals."
          />
          <FAQItem
            q="How long does Local SEO take to show results in Hyderabad?"
            a="Local SEO typically shows results faster than organic SEO. Most businesses in Hyderabad see improvements in Google Maps rankings within 4-8 weeks of optimization. Significant ranking improvements take 3-4 months of consistent effort."
          />
          <FAQItem
            q="What is the difference between Local SEO and regular SEO?"
            a="Regular SEO targets national/global rankings for broad keywords. Local SEO targets geographic-specific rankings like 'near me' searches and Google Maps results. Local SEO uses Google Business Profile optimization, local citations, and location-specific content, which regular SEO doesn't focus on."
          />

          <div className="mt-8 bg-secondary/30 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-3 font-display">
              Need Help with Local SEO?
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/local-seo-services"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                Local SEO Services
              </Link>
              <Link
                to="/seo-services"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                Full SEO Services
              </Link>
              <Link
                to="/contact-us"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                Get Free Local SEO Audit
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Dominate Local Search in Guntur &amp; Hyderabad
          </h2>
          <p className="text-white/80 mb-8">
            Get expert Local SEO help and start ranking on Google Maps today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-white text-green-700 hover:bg-white/90 font-bold px-8 py-4">
                Get Free Local SEO Audit 🚀
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
