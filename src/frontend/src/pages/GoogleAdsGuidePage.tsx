import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function GoogleAdsGuidePage() {
  useEffect(() => {
    document.title = "Google Ads vs SEO – Which is Better? | SVS Blog";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Google Ads vs SEO comparison for businesses in Hyderabad and Guntur. Which digital marketing strategy delivers better ROI for your business?",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/5 via-white to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Google Ads Guide" },
            ]}
          />
          <Badge className="mb-4 bg-orange-100 text-accent border-accent/20">
            Google Ads
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Google Ads vs SEO – Which is Better for Your Business?
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Mar 12, 2026</span>
            <span>·</span>
            <span>7 min read</span>
            <span>·</span>
            <span>By Sri Vasundhara Solutions</span>
          </div>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            One of the most common questions we get from businesses in Guntur
            and Hyderabad is:{" "}
            <strong>"Should I invest in Google Ads or SEO?"</strong> The answer
            depends on your goals, budget, and timeline. Let's break down both
            strategies so you can make an informed decision.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            What is Google Ads (PPC)?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Google Ads is a paid advertising platform where you pay to appear at
            the top of Google search results. You bid on keywords like{" "}
            <strong>"digital marketing agency in Hyderabad"</strong> and your ad
            appears when users search for those terms. You pay only when someone
            clicks your ad (Pay-Per-Click / PPC).
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            Google Ads vs SEO: Key Differences
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left text-sm">Factor</th>
                  <th className="p-3 text-left text-sm">Google Ads</th>
                  <th className="p-3 text-left text-sm">SEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Cost",
                    "Pay per click (₹5–₹500/click)",
                    "Time investment + agency fees",
                  ],
                  ["Speed", "Immediate (24-48 hours)", "3-6 months"],
                  ["Traffic", "Stops when budget ends", "Continues long-term"],
                  [
                    "Trust",
                    "Ad label reduces trust slightly",
                    "Organic = higher trust",
                  ],
                  ["ROI", "Measurable, immediate", "Higher long-term ROI"],
                  [
                    "Best For",
                    "Quick leads, product launches",
                    "Long-term growth, brand building",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-secondary/30" : "bg-white"}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="p-3 text-sm text-muted-foreground border-b border-border"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            When to Use Google Ads
          </h2>
          <div className="space-y-3 mb-8">
            {[
              {
                title: "You need leads immediately",
                desc: "Google Ads generates traffic within 24-48 hours. Perfect for businesses in Hyderabad that need quick results for a new service launch or seasonal promotion.",
              },
              {
                title: "You have a specific campaign goal",
                desc: "Product launches, event promotion, or limited-time offers benefit from the precise targeting and budget control Google Ads provides.",
              },
              {
                title: "Highly competitive markets",
                desc: "In competitive industries where SEO takes longer, Google Ads can capture valuable leads while your organic rankings build up.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-orange-50 border border-orange-200 rounded-xl p-4"
              >
                <h3 className="font-bold text-foreground text-sm mb-1">
                  ✅ {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            When to Use SEO
          </h2>
          <div className="space-y-3 mb-8">
            {[
              {
                title: "Building long-term organic traffic",
                desc: "SEO builds a compounding asset. Once you rank for 'SEO services in Guntur', you receive free organic traffic month after month without paying per click.",
              },
              {
                title: "Brand credibility and authority",
                desc: "Organic rankings signal trustworthiness. Customers trust organic results more than ads, leading to higher quality leads and better conversion rates.",
              },
              {
                title: "Content marketing and thought leadership",
                desc: "For businesses that want to establish expertise in their industry, SEO-driven content marketing builds authority and attracts ideal customers.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-200 rounded-xl p-4"
              >
                <h3 className="font-bold text-foreground text-sm mb-1">
                  ✅ {title}
                </h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-2xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-3 font-display">
              🏆 Our Recommendation for Guntur &amp; Hyderabad Businesses
            </h2>
            <p className="text-white/90 leading-relaxed">
              The most effective strategy is{" "}
              <strong className="text-accent">using both together</strong>. Use
              Google Ads for immediate lead generation while building your SEO
              for long-term organic growth. Most of our clients who combine both
              strategies see 3-5x better overall results than using either
              alone.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <FAQItem
            q="How much should I budget for Google Ads in Hyderabad?"
            a="For small businesses in Hyderabad and Guntur, a minimum budget of ₹10,000-₹20,000/month is recommended to see meaningful results. Competitive industries like real estate or healthcare may require ₹50,000+ per month. Our low cost Google Ads services Hyderabad are designed to maximize results at any budget."
          />
          <FAQItem
            q="Can SEO and Google Ads work together?"
            a="Absolutely! Running both simultaneously is the best strategy. Google Ads provides immediate traffic and data on which keywords convert best, while SEO builds long-term organic rankings for those same keywords. The data from your Ads campaigns can directly inform your SEO strategy."
          />
          <FAQItem
            q="How do I know if my Google Ads are working?"
            a="Key metrics to monitor: Click-Through Rate (CTR), Cost Per Click (CPC), Conversion Rate, Cost Per Lead, and Return on Ad Spend (ROAS). We provide detailed monthly reports for all our clients showing exactly how their campaigns are performing."
          />

          <div className="mt-8 bg-secondary/30 rounded-2xl p-6">
            <h3 className="font-bold text-foreground mb-3 font-display">
              Explore Our Services
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/google-ads-services"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                Google Ads Services
              </Link>
              <Link
                to="/seo-services"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                SEO Services in Guntur
              </Link>
              <Link
                to="/contact-us"
                className="text-primary text-sm font-medium underline hover:no-underline"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-r from-accent to-accent/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Start Your Google Ads Campaign Today
          </h2>
          <p className="text-white/80 mb-8">
            Get expert Google Ads management for your business in Hyderabad or
            Guntur.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-white text-accent hover:bg-white/90 font-bold px-8 py-4">
                Get Free Consultation 🚀
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
