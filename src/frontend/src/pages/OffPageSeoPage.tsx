import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function OffPageSeoPage() {
  useEffect(() => {
    document.title =
      "Off-Page SEO & Link Building Services | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Build domain authority and Google trust with professional off-page SEO and link building services in Guntur and Hyderabad.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "SEO Services", href: "/seo-services" },
              { label: "Off-Page SEO" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Off-Page SEO &amp; Link Building Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Strengthen your website&apos;s authority and Google trust through
            strategic backlink acquisition, brand mentions, and off-site
            optimization.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Is Off-Page SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Off-page SEO encompasses all activities performed outside your
            website to improve its authority and rankings. The most impactful
            off-page factor is backlinks &mdash; links from other websites that
            signal to Google your content is trustworthy and valuable. Sri
            Vasundhara Solutions builds high-quality backlinks from relevant,
            authoritative sources through guest posting, directory listings,
            local citations, and digital PR. We also cultivate brand mentions
            across the web, which contribute to your overall domain authority.
            Consistent off-page SEO work builds the credibility needed to rank
            for competitive keywords in Guntur, Hyderabad, and across Andhra
            Pradesh.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Off-Page SEO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Higher domain authority that makes all pages easier to rank",
              "Referral traffic from authoritative sites in your niche",
              "Stronger brand credibility and recognition online",
              "Increased Google trust leading to faster indexing of new pages",
              "Competitive advantage in high-competition keyword spaces",
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
          <h2 className="section-heading mb-6">Who Needs Off-Page SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Businesses in competitive industries where multiple companies are
            targeting the same keywords need off-page SEO to stand out. If your
            on-page SEO is well-optimized but rankings are still lagging, the
            gap is almost always in domain authority. Industries such as real
            estate, healthcare, education, and finance in Guntur and Hyderabad
            are highly competitive &mdash; off-page SEO gives you the edge
            needed to outrank established competitors.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">Build Your Authority Today</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="off_page_seo.primary_button"
            />
            <WhatsAppButton ocid="off_page_seo.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
