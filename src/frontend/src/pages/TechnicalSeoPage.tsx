import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function TechnicalSeoPage() {
  useEffect(() => {
    document.title =
      "Technical SEO Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Fix crawl errors, improve site speed, and optimize Core Web Vitals with professional technical SEO services in Guntur and Hyderabad.",
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
              { label: "Technical SEO" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Technical SEO Services in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ensure search engines can crawl, index, and rank your website with
            comprehensive technical SEO audits and fixes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Is Technical SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Technical SEO addresses the non-content factors that affect how
            search engines discover, crawl, and index your website. Core
            elements include site speed, Core Web Vitals (LCP, CLS, INP),
            mobile-friendliness, XML sitemaps, robots.txt, structured data
            (schema markup), HTTPS security, and crawlability. Sri Vasundhara
            Solutions performs deep technical audits for businesses in Guntur
            and Hyderabad, identifying and fixing issues that silently suppress
            rankings. Even the best content will not rank if Google cannot
            properly access and understand your website&apos;s structure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Technical SEO
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Faster page load times that reduce bounce rates and improve rankings",
              "Better crawlability so all your important pages are indexed by Google",
              "Mobile optimization that improves usability and Core Web Vitals scores",
              "Structured data (schema) that enables rich snippets in search results",
              "Fixed crawl errors, broken links, and redirect chains that waste crawl budget",
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
          <h2 className="section-heading mb-6">Who Needs Technical SEO?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Any business with a website that has slow load times, crawl errors
            in Google Search Console, or pages that fail to index correctly
            needs technical SEO. Businesses in Guntur and Hyderabad that have
            undergone website redesigns, platform migrations, or those running
            on older CMS versions often accumulate significant technical debt.
            Resolving these issues provides an immediate improvement in search
            visibility and user experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Fix Your Technical SEO Issues
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="technical_seo.primary_button"
            />
            <WhatsAppButton ocid="technical_seo.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
