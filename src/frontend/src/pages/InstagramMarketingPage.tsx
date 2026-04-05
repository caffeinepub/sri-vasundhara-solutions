import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function InstagramMarketingPage() {
  useEffect(() => {
    document.title =
      "Instagram Marketing Services for Businesses | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Grow your brand on Instagram with professional marketing services in Guntur and Hyderabad. Posts, Reels, Stories, and targeted ads.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              {
                label: "Social Media Marketing",
                href: "/social-media-marketing",
              },
              { label: "Instagram Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Instagram Marketing Services for Businesses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build a compelling visual brand on Instagram and engage a highly
            active audience through creative posts, Reels, and targeted ads.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">
            Professional Instagram Marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Instagram is one of the fastest-growing social media platforms in
            India, particularly among audiences aged 18-35. Sri Vasundhara
            Solutions manages Instagram accounts for businesses in Guntur and
            Hyderabad with a comprehensive approach: content creation (posts,
            Reels, Stories, and Highlights), audience engagement, hashtag
            strategy, and paid Instagram advertising. Our creative team produces
            visually consistent content that reflects your brand identity while
            maximizing organic reach. Instagram&apos;s shopping features also
            allow product-based businesses to drive direct sales from their
            profiles.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Instagram Marketing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Strong visual branding that builds instant recognition and trust",
              "Access to a younger, highly engaged audience aged 18-35",
              "High engagement rates compared to other social platforms",
              "Instagram Shopping features that enable direct product discovery and sales",
              "Influencer collaboration opportunities for rapid reach expansion",
            ].map((benefit) => (
              <div
                key={benefit}
                className="bg-white rounded-xl p-5 border border-border flex gap-3"
              >
                <CheckCircle className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">
            Who Should Use Instagram Marketing?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Instagram is an ideal platform for fashion boutiques, food and
            beverage businesses, beauty and wellness brands, lifestyle products,
            fitness centers, and interior designers in Guntur and Hyderabad. Any
            business with a visually appealing product or service can build a
            strong following and generate genuine business inquiries through
            consistent, high-quality Instagram content and targeted advertising.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">Grow Your Brand on Instagram</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="instagram_marketing.primary_button"
            />
            <WhatsAppButton ocid="instagram_marketing.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
