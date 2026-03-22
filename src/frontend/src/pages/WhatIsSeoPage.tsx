import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function WhatIsSeoPage() {
  useEffect(() => {
    document.title = "What is SEO and How Does It Work in 2026? | SVS Blog";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Complete guide to SEO in 2026. Learn how search engine optimization works and how to rank your business on Google in Guntur and Hyderabad.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "What is SEO" },
            ]}
          />
          <Badge className="mb-4 bg-blue-100 text-primary border-primary/20">
            SEO
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            What is SEO and How Does It Work in 2026?
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Mar 15, 2026</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>By Sri Vasundhara Solutions</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong>SEO (Search Engine Optimization)</strong> is the process
              of optimizing your website to rank higher on search engines like
              Google, Bing, and Yahoo. For businesses in{" "}
              <strong>Guntur and Hyderabad</strong>, SEO is the most
              cost-effective way to attract customers who are actively searching
              for your products or services online.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              How Does SEO Work?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Search engines use complex algorithms to rank websites. These
              algorithms consider hundreds of factors, but the three most
              important pillars of SEO are:
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "1. On-Page SEO",
                  desc: "Optimizing the content and HTML source code of your website. This includes keyword optimization, meta tags, heading structure, internal linking, and content quality. For a digital marketing agency in Guntur to rank, their on-page elements must signal relevance to Google's crawlers.",
                },
                {
                  title: "2. Off-Page SEO",
                  desc: "Building authority and trust through external signals, primarily backlinks from other websites. The more high-quality websites that link to your site, the more Google trusts it. This is why link building is a core part of any SEO strategy for businesses in Hyderabad.",
                },
                {
                  title: "3. Technical SEO",
                  desc: "Ensuring your website is technically sound: fast loading speed, mobile-friendly design, proper URL structure, XML sitemaps, robots.txt, Core Web Vitals, and structured data markup. Technical SEO is the foundation that allows Google to crawl and index your site effectively.",
                },
              ].map(({ title, desc }, i) => (
                <div key={i} className="bg-secondary/30 rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              Why is SEO Important for Guntur &amp; Hyderabad Businesses?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 5 billion Google searches per day, your potential
              customers in Guntur and Hyderabad are searching for businesses
              like yours right now. Consider these facts:
            </p>
            <ul className="space-y-2 mb-8 list-none">
              {[
                "📍 75% of users never scroll past the first page of Google results",
                "📍 The top 3 organic results get over 54% of all clicks",
                "📍 SEO leads have a 14.6% close rate vs. 1.7% for outbound leads",
                "📍 Local searches result in a purchase 28% of the time",
                "📍 46% of all Google searches have local intent",
              ].map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span>{fact}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              SEO Best Practices for 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The SEO landscape is constantly evolving. Here are the most
              important best practices for ranking your business on Google in
              2026:
            </p>
            <div className="space-y-3 mb-8">
              {[
                {
                  title: "E-E-A-T (Experience, Expertise, Authority, Trust)",
                  desc: "Google now prioritizes content that demonstrates real experience and expertise. Create in-depth, accurate content that establishes your business as an authority in your field.",
                },
                {
                  title: "Core Web Vitals",
                  desc: "Page speed, visual stability, and interactivity are now ranking factors. Ensure your website loads in under 3 seconds, especially on mobile devices used by Hyderabad customers.",
                },
                {
                  title: "AI-Optimized Content",
                  desc: "With Google's AI Overviews, content must be structured to answer specific questions clearly. Use FAQ sections, clear headings, and concise, factual answers.",
                },
                {
                  title: "Local SEO Optimization",
                  desc: "For businesses in Guntur and Hyderabad, local SEO is critical. Optimize your Google Business Profile, build local citations, and create location-specific content.",
                },
                {
                  title: "Mobile-First Indexing",
                  desc: "Google primarily uses the mobile version of your website for indexing and ranking. Ensure your website is fully responsive and mobile-optimized.",
                },
              ].map(({ title, desc }, i) => (
                <div key={i} className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-foreground text-sm">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              How to Get Started with SEO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Starting with SEO can feel overwhelming, but here's a simple
              roadmap for businesses in Guntur and Hyderabad:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <ol className="space-y-3">
                {[
                  "Conduct a comprehensive website audit to identify technical issues",
                  "Research keywords your target customers in Guntur and Hyderabad are searching for",
                  "Optimize your existing pages for primary keywords",
                  "Create high-quality, SEO-optimized content regularly",
                  "Build local citations and optimize your Google Business Profile",
                  "Earn backlinks from relevant, authoritative websites",
                  "Monitor rankings and traffic using Google Search Console and Analytics",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <span className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              Frequently Asked Questions About SEO
            </h2>
            <div className="space-y-0 mb-8">
              <FAQItem
                q="How long does SEO take to show results?"
                a="SEO typically takes 3-6 months to show significant results. For local SEO in Guntur and Hyderabad, you may see improvements in 4-8 weeks for less competitive keywords. Consistency and quality are key to long-term SEO success."
              />
              <FAQItem
                q="What is the difference between SEO and Google Ads?"
                a="SEO generates organic (free) traffic over time, while Google Ads generates paid traffic immediately. SEO has a higher long-term ROI but requires patience. Google Ads is better for quick results and specific campaigns. Most successful businesses in Hyderabad use both."
              />
              <FAQItem
                q="Can I do SEO myself?"
                a="Basic on-page SEO can be done yourself, but technical SEO, link building, and competitive keyword strategies require expertise and tools. For businesses in Guntur and Hyderabad competing for valuable keywords, professional SEO services typically deliver better ROI."
              />
            </div>

            <div className="bg-secondary/30 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3 font-display">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/seo-services"
                  className="text-primary text-sm font-medium underline hover:no-underline"
                >
                  SEO Services in Guntur & Hyderabad
                </Link>
                <Link
                  to="/local-seo-services"
                  className="text-primary text-sm font-medium underline hover:no-underline"
                >
                  Local SEO Services
                </Link>
                <Link
                  to="/google-ads-guide"
                  className="text-primary text-sm font-medium underline hover:no-underline"
                >
                  Google Ads vs SEO Guide
                </Link>
                <Link
                  to="/contact-us"
                  className="text-primary text-sm font-medium underline hover:no-underline"
                >
                  Get Free SEO Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Ready to Rank Your Business on Google?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free SEO audit and discover how to drive organic traffic to
            your business in Guntur or Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4">
                Get Free SEO Audit 🚀
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
