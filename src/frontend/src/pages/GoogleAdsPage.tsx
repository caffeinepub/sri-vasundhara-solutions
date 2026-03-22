import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function GoogleAdsPage() {
  useEffect(() => {
    document.title = "Google Ads Services in Hyderabad & Guntur | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "High-ROI Google Ads campaigns in Hyderabad and Guntur. Expert PPC management for lead generation. Start with a free consultation.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-accent/5 via-white to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "Google Ads Services" },
            ]}
          />
          <Badge className="mb-4 bg-orange-50 text-accent border-accent/20">
            Google Ads / PPC
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Google Ads &amp; PPC Management Services in Hyderabad &amp; Guntur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            High-ROI{" "}
            <strong>Google Ads services in Hyderabad and Guntur</strong>. Expert
            PPC management that generates qualified leads and maximizes your
            advertising ROI.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">
                Generate Leads Instantly with Google Ads
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Need a{" "}
                <strong>
                  Google Ads expert in Hyderabad for lead generation
                </strong>
                ? We manage high-ROI Google Ads campaigns for businesses in
                Guntur and Hyderabad. Our{" "}
                <strong>low cost Google Ads services Hyderabad</strong> are
                designed to maximize your advertising budget and deliver
                qualified leads. Whether you need Search Ads, Display Ads, or
                Shopping campaigns, we create data-driven strategies that
                generate real business results.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Search Ads Campaigns",
                    desc: "Appear at the top of Google search results when potential customers in Guntur and Hyderabad search for your services. Highly targeted, intent-driven traffic.",
                  },
                  {
                    title: "Display & Remarketing Ads",
                    desc: "Re-engage website visitors with targeted display ads across Google's network. Keep your brand top-of-mind and bring back potential customers.",
                  },
                  {
                    title: "Shopping Campaigns",
                    desc: "For e-commerce businesses, Google Shopping campaigns showcase your products directly in search results with images and prices.",
                  },
                  {
                    title: "YouTube Ads",
                    desc: "Reach your audience with video advertising on YouTube, the world's second-largest search engine. Cost-effective brand awareness for Hyderabad businesses.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
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
                  "Immediate visibility",
                  "Pay only for clicks",
                  "Measurable ROI",
                  "Budget control",
                  "Geographic targeting",
                  "Detailed analytics",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact-us">
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-bold"
                  data-ocid="google_ads.cta_button"
                >
                  Start Google Ads Campaign
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-white border border-border rounded-2xl p-6 mb-6 shadow-card">
                <h3 className="font-bold text-foreground mb-4 font-display">
                  Google Ads Campaign Process
                </h3>
                <div className="space-y-3">
                  {[
                    "Campaign Setup",
                    "Keyword Research",
                    "Ad Copywriting",
                    "Bid Management",
                    "Optimization",
                    "Reporting",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
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
                q="How much budget do I need for Google Ads?"
                a="For small businesses in Guntur and Hyderabad, we recommend starting with ₹5,000–₹10,000/month. Most businesses see good results with ₹15,000–₹50,000/month depending on industry and competition. The more competitive your market, the higher the budget needed."
              />
              <FAQItem
                q="How soon will I see results with Google Ads?"
                a="Google Ads shows results within 24–48 hours of campaign launch. You'll start seeing clicks and leads immediately, unlike SEO which takes months. This makes Google Ads ideal for businesses needing quick lead generation."
              />
              <FAQItem
                q="Do you manage Google Ads for small businesses in Hyderabad?"
                a="Yes! We specialize in Google Ads management for small and medium businesses in Hyderabad, Guntur, and across India. Our low cost Google Ads services Hyderabad are designed to maximize ROI for businesses with limited budgets."
              />
              <FAQItem
                q="What is your Google Ads management fee?"
                a="Our Google Ads management fee starts from ₹4,999/month. The management fee is separate from the ad spend budget. We offer transparent pricing with no hidden charges and detailed monthly reporting."
              />
              <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-sm font-medium text-accent mb-2">
                  🔗 Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/seo-services"
                    className="text-accent text-sm underline hover:no-underline"
                  >
                    SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/social-media-marketing"
                    className="text-accent text-sm underline hover:no-underline"
                  >
                    Social Media Marketing
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/contact-us"
                    className="text-accent text-sm underline hover:no-underline"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-accent to-accent/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Ready to Launch Your Google Ads Campaign?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free Google Ads audit and discover how to generate more leads
            in Hyderabad and Guntur.
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
