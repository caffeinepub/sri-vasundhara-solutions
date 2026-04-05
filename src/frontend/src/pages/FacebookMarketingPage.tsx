import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function FacebookMarketingPage() {
  useEffect(() => {
    document.title =
      "Facebook Marketing Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Professional Facebook marketing services in Guntur and Hyderabad. Targeted ads, lead generation, and brand awareness campaigns.",
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
              { label: "Facebook Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Facebook Marketing Services in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Reach your ideal audience on Facebook with targeted ad campaigns,
            engaging page management, and measurable lead generation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">
            Professional Facebook Marketing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Facebook remains India&apos;s most widely used social media
            platform, making it an essential channel for businesses in Guntur
            and Hyderabad. Sri Vasundhara Solutions manages Facebook business
            pages, creates engaging content, and runs targeted ad campaigns that
            reach your ideal customers based on location, age, interests, and
            behavior. Our Facebook Lead Ads capture prospect information
            directly within the platform, reducing friction and increasing
            conversion rates. We also run retargeting campaigns to re-engage
            users who have visited your website, ensuring no prospect is left
            behind.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Facebook Marketing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Precise audience targeting by location, age, income, interests, and behavior",
              "Lead Ads that collect inquiries without users leaving the Facebook app",
              "Brand awareness campaigns that keep your business top-of-mind locally",
              "Retargeting to convert website visitors who did not contact you initially",
              "Affordable reach - one of the most cost-effective advertising platforms in India",
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
            Who Should Use Facebook Marketing?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Facebook marketing is effective for local businesses, event
            organizers, and product launches in Guntur and Hyderabad. Retailers,
            clinics, coaching institutes, real estate developers, and
            restaurants all see strong results from Facebook advertising due to
            the platform&apos;s ability to target hyper-local audiences. If your
            target customers are between 25-55 years old, Facebook is likely one
            of your most valuable marketing channels.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Grow Your Business on Facebook
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="facebook_marketing.primary_button"
            />
            <WhatsAppButton ocid="facebook_marketing.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
