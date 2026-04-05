import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function OnPageSeoPage() {
  useEffect(() => {
    document.title =
      "On-Page SEO Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Expert on-page SEO services in Guntur. Title optimization, meta descriptions, heading structure, keyword placement, and internal linking.",
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
              { label: "On-Page SEO" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            On-Page SEO Services in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Optimize every page of your website to rank higher for the keywords
            your customers are searching for in Guntur and Hyderabad.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Is On-Page SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            On-page SEO refers to the practice of optimizing individual web
            pages so they rank higher and earn more relevant traffic from search
            engines. At Sri Vasundhara Solutions, our SEO services in Guntur
            cover every on-page factor: title tags, meta descriptions, heading
            hierarchy, keyword placement, image alt text, internal linking, and
            content quality. A well-optimized page communicates clearly to
            Google what your business offers and whom it serves &mdash; whether
            you are a local shop in Guntur or a growing enterprise in Hyderabad.
            Our on-page audits identify what is holding your pages back and our
            optimization work delivers lasting ranking improvements.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of On-Page SEO Optimization
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Improved title and meta descriptions that increase click-through rates",
              "Correct heading structure (H1-H2-H3) that helps Google understand your content",
              "Strategic keyword placement without stuffing for natural relevance",
              "Optimized internal linking that distributes page authority across your site",
              "Higher content quality scores that improve topical authority",
              "Faster indexing as search engines clearly understand each page's purpose",
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
          <h2 className="section-heading mb-6">Who Needs On-Page SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            On-page SEO is essential for any business with a website. Local
            businesses in Guntur that want to appear in nearby searches,
            startups building their first online presence, and e-commerce stores
            competing for product keywords all benefit significantly from
            professional on-page optimization. If your website is receiving
            traffic but not converting, or if you are not ranking for your
            primary keywords, on-page SEO is typically the first place to start.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Improve Your On-Page SEO Today
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="on_page_seo.primary_button"
            />
            <WhatsAppButton ocid="on_page_seo.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
