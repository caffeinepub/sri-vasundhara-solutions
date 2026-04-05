import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function DisplayAdsPage() {
  useEffect(() => {
    document.title =
      "Google Display Ads Services Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Reach millions with Google Display Ads in Hyderabad and Guntur. Banner ads, remarketing, and brand awareness campaigns that convert.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Google Ads Services", href: "/google-ads-services" },
              { label: "Display Ads" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Google Display Ads Services Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Build brand awareness and re-engage past visitors with visually
            compelling banner ads across the Google Display Network.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Are Google Display Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Google Display Ads are visual banner advertisements shown across
            millions of websites, apps, and Google-owned properties such as
            Gmail and YouTube. The Google Display Network (GDN) reaches over 90%
            of internet users globally, making it one of the most powerful
            platforms for brand awareness. Sri Vasundhara Solutions designs and
            manages Display Ad campaigns for businesses in Hyderabad and Guntur
            with a focus on audience targeting, creative design, and remarketing
            &mdash; bringing back website visitors who did not convert on their
            first visit.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Google Display Ads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Massive brand awareness across millions of websites and apps",
              "Visual impact through eye-catching banner and responsive display ads",
              "Wide reach targeting users by interest, behavior, and demographics",
              "Remarketing to re-engage past website visitors and reduce abandonment",
              "Cost-effective impressions at a much lower CPM than traditional advertising",
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
          <h2 className="section-heading mb-6">Who Should Use Display Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Display Ads are particularly effective for brand awareness campaigns
            and product launches. Businesses in Hyderabad and Guntur looking to
            expand their market presence, introduce new products or services, or
            re-engage existing website visitors will find Display Ads a
            cost-efficient complement to Search Ads and SEO. They are also
            excellent for seasonal promotions and event marketing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Start Your Display Ads Campaign
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="display_ads.primary_button"
            />
            <WhatsAppButton ocid="display_ads.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
