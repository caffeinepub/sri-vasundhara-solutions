import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import FAQItem from "../components/FAQItem";

export default function SocialMediaPage() {
  useEffect(() => {
    document.title = "Social Media Marketing Agency in Hyderabad | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Professional social media marketing in Hyderabad and Guntur. Grow followers, increase engagement and generate leads. Free strategy call.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-50 via-white to-pink-50/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
              { label: "Social Media Marketing" },
            ]}
          />
          <Badge className="mb-4 bg-pink-50 text-pink-600 border-pink-200">
            Social Media Marketing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Social Media Marketing Services for Businesses in Hyderabad &amp;
            Guntur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Grow your brand with{" "}
            <strong>
              social media marketing for local businesses in Hyderabad
            </strong>
            . Engaging content, targeted ads, and proven growth strategies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-4">
                Build Your Brand on Social Media
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Grow your brand with{" "}
                <strong>
                  social media marketing for local businesses in Hyderabad
                </strong>
                . Our team creates engaging content, manages your social
                profiles, and runs targeted ad campaigns on Facebook, Instagram,
                LinkedIn, and YouTube. As a leading{" "}
                <strong>social media marketing agency Hyderabad</strong>, we
                help businesses build a strong online presence and connect with
                their local audience.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Facebook & Instagram Marketing",
                    desc: "Create scroll-stopping content and run targeted ad campaigns to reach your ideal customers in Guntur, Hyderabad, and across India.",
                  },
                  {
                    title: "LinkedIn Marketing for B2B",
                    desc: "Build professional credibility and generate B2B leads with LinkedIn content marketing and sponsored campaigns.",
                  },
                  {
                    title: "YouTube Marketing",
                    desc: "Create engaging video content and run YouTube ads to build brand awareness and drive traffic to your website.",
                  },
                  {
                    title: "Content Creation & Scheduling",
                    desc: "We create, schedule, and publish SEO-friendly content in both English and Telugu, tailored for your local audience.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-1 shrink-0" />
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
                  className="bg-primary hover:bg-primary/90 text-white font-bold"
                  data-ocid="social_media.cta_button"
                >
                  Grow My Social Media
                </Button>
              </Link>
            </div>
            <div>
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-3 font-display">
                  Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Brand awareness",
                    "Customer engagement",
                    "Lead generation",
                    "Cost-effective reach",
                    "Analytics & insights",
                    "Telugu & English content",
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                Frequently Asked Questions
              </h3>
              <FAQItem
                q="Which social media platforms do you manage?"
                a="We manage Facebook, Instagram, LinkedIn, YouTube, and Twitter/X. We recommend the best platforms based on your business type and target audience in Guntur and Hyderabad."
              />
              <FAQItem
                q="How do you measure social media ROI?"
                a="We track key metrics including reach, engagement rate, follower growth, website traffic from social, lead form submissions, and conversion rates. Monthly reports clearly show the ROI of your social media investment."
              />
              <FAQItem
                q="Do you create content in Telugu and English?"
                a="Yes! We create engaging content in both Telugu and English to connect with local audiences in Guntur, Hyderabad, and Andhra Pradesh. Bilingual content significantly improves engagement for local businesses."
              />
              <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-xl">
                <p className="text-sm font-medium text-pink-600 mb-2">
                  🔗 Also explore our services:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to="/seo-services"
                    className="text-pink-600 text-sm underline hover:no-underline"
                  >
                    SEO Services
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/google-ads-services"
                    className="text-pink-600 text-sm underline hover:no-underline"
                  >
                    Google Ads
                  </Link>
                  <span className="text-muted-foreground">|</span>
                  <Link
                    to="/contact-us"
                    className="text-pink-600 text-sm underline hover:no-underline"
                  >
                    Free Strategy Call
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
            Ready to Grow Your Social Media Presence?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free social media strategy consultation for your business in
            Guntur or Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4">
                Get Free Strategy Call 🚀
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
