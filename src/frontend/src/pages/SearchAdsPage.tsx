import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function SearchAdsPage() {
  useEffect(() => {
    document.title =
      "Google Search Ads Services in Hyderabad & Guntur | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Drive immediate leads with targeted Google Search Ads in Hyderabad and Guntur. Expert PPC campaign management for maximum ROI.",
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
              { label: "Search Ads" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Google Search Ads Services in Hyderabad &amp; Guntur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Appear at the top of Google search results instantly and generate
            qualified leads from customers actively searching for your services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Are Google Search Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Google Search Ads are pay-per-click (PPC) advertisements that appear
            at the top of Google search results when users search for specific
            keywords. Unlike SEO which takes months to deliver results, Search
            Ads provide immediate visibility the moment your campaign goes live.
            Sri Vasundhara Solutions manages Search Ad campaigns for businesses
            in Hyderabad and Guntur with a focus on keyword targeting,
            compelling ad copy, optimized landing pages, and continuous bid
            management. Every rupee of your ad spend is tracked and optimized
            for the lowest possible cost-per-lead.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Google Search Ads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Instant visibility at the top of Google for your target keywords",
              "Highly targeted traffic from users actively searching for what you offer",
              "Pay only per click - no wasted budget on uninterested audiences",
              "Measurable ROI with detailed conversion tracking and reporting",
              "Full keyword control to target exact match, phrase, or broad terms",
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
          <h2 className="section-heading mb-6">Who Should Use Search Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Google Search Ads are ideal for businesses that need immediate leads
            from Google and cannot wait months for SEO results. Service
            businesses in Guntur and Hyderabad &mdash; including doctors,
            lawyers, contractors, real estate agents, and education providers
            &mdash; benefit greatly because their customers actively search
            Google before making a decision. Search Ads also complement ongoing
            SEO, ensuring visibility for new keywords before organic rankings
            are established.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Launch Your Search Ads Campaign
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="search_ads.primary_button"
            />
            <WhatsAppButton ocid="search_ads.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
