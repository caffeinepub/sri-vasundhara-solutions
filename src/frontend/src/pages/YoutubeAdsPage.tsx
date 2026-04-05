import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function YoutubeAdsPage() {
  useEffect(() => {
    document.title =
      "YouTube Ads Services for Businesses in India | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Grow your brand with YouTube Ads. Video advertising, audience targeting, and brand storytelling for businesses in Hyderabad and Guntur.",
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
              { label: "YouTube Ads" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            YouTube Ads Services for Businesses in India
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tell your brand&apos;s story through video and reach your audience
            on the world&apos;s second-largest search engine.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Are YouTube Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            YouTube Ads are video advertisements that appear before, during, or
            alongside YouTube videos. With over 460 million monthly active users
            in India, YouTube offers unparalleled reach for businesses in
            Hyderabad and Guntur. Sri Vasundhara Solutions creates and manages
            YouTube ad campaigns including skippable in-stream ads, bumper ads,
            and video discovery ads. We handle audience targeting by
            demographics, interests, search behavior, and geographic location
            &mdash; ensuring your video reaches the right people at the right
            moment. YouTube Ads are one of the most cost-effective channels for
            brand storytelling and building lasting recall.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of YouTube Ads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "High video engagement that builds emotional brand connection with viewers",
              "Massive reach across India with over 460 million monthly YouTube users",
              "Precise audience targeting by demographics, interests, and search history",
              "Strong brand recall - video content is remembered far longer than text",
              "Affordable CPM (cost per thousand views) compared to traditional media",
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
          <h2 className="section-heading mb-6">Who Should Use YouTube Ads?</h2>
          <p className="text-muted-foreground leading-relaxed">
            YouTube Ads are particularly effective for businesses wanting to
            build brand awareness, demonstrate products visually, or reach a
            younger demographic. Fashion retailers, food businesses, education
            providers, healthcare clinics, and real estate developers in
            Hyderabad and Guntur all benefit from YouTube&apos;s video format.
            Businesses launching new products or services find YouTube Ads an
            excellent channel for generating initial market awareness.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Start Your YouTube Ads Campaign
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="youtube_ads.primary_button"
            />
            <WhatsAppButton ocid="youtube_ads.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
