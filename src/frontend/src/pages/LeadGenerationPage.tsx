import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";
import FAQItem from "../components/FAQItem";

export default function LeadGenerationPage() {
  useEffect(() => {
    document.title =
      "Lead Generation Services in Guntur & Hyderabad | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Consistent, qualified lead generation in Guntur and Hyderabad. SEO, Google Ads, and social media campaigns designed to grow your business.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-[#E6F7F8] py-16" data-ocid="lead_gen.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Lead Generation" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Lead Generation Services in Guntur &amp; Hyderabad
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Drive a consistent stream of qualified prospects through proven
            digital strategies built for businesses in Guntur and Hyderabad.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">What Is Lead Generation?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lead generation is the process of attracting potential customers and
            converting their interest into actionable inquiries. As a trusted
            digital marketing agency in Guntur, Sri Vasundhara Solutions
            combines SEO, Google Ads, social media, and optimized landing pages
            to build a reliable pipeline of prospects for your business. Our
            lead generation strategies for Hyderabad and Guntur are designed to
            deliver measurable results &mdash; not just traffic, but genuine
            business opportunities. We track every lead source, refine what
            works, and eliminate what doesn&apos;t, ensuring your marketing
            budget delivers the highest possible return.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Key Benefits of Lead Generation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Consistent Lead Flow",
                desc: "Maintain a steady pipeline of prospects even during slow seasons.",
              },
              {
                title: "Higher Quality Prospects",
                desc: "Targeted strategies attract people actively looking for your services.",
              },
              {
                title: "Measurable ROI",
                desc: "Every campaign is tracked so you know exactly what your investment returns.",
              },
              {
                title: "Multi-Channel Reach",
                desc: "Combine SEO, PPC, and social media to reach prospects across all touchpoints.",
              },
              {
                title: "Faster Business Growth",
                desc: "More leads mean more sales conversations and accelerated revenue growth.",
              },
              {
                title: "Cost Efficiency",
                desc: "Data-driven optimization continuously reduces cost-per-lead over time.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm flex gap-4"
              >
                <CheckCircle className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Our Lead Generation Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "Business Analysis",
                desc: "Understand your target audience, competitors, and current lead sources.",
              },
              {
                num: "02",
                title: "Strategy Design",
                desc: "Build a multi-channel plan with defined KPIs and budget allocation.",
              },
              {
                num: "03",
                title: "Campaign Launch",
                desc: "Deploy SEO content, Google Ads, and social campaigns simultaneously.",
              },
              {
                num: "04",
                title: "Conversion Optimization",
                desc: "Improve landing pages and CTAs to turn traffic into form submissions.",
              },
              {
                num: "05",
                title: "Report & Scale",
                desc: "Analyze results, eliminate underperformers, and scale what works.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="h-14 w-14 rounded-full bg-[#4FC3C7] text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold font-display">
                  {step.num}
                </div>
                <h3 className="font-bold text-foreground mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Generate Leads */}
      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            How We Generate Leads
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "SEO-Driven Leads",
                desc: "Rank for high-intent keywords so prospects find you organically.",
              },
              {
                label: "Google Ads Leads",
                desc: "Instant visibility on Google search through targeted PPC campaigns.",
              },
              {
                label: "Social Media Leads",
                desc: "Facebook and Instagram lead ads that collect inquiries without leaving the platform.",
              },
              {
                label: "Landing Page Optimization",
                desc: "High-converting pages designed to turn visitors into qualified leads.",
              },
              {
                label: "WhatsApp & Call Funnels",
                desc: "Frictionless click-to-WhatsApp and click-to-call buttons across all channels.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-5 border border-border flex gap-3"
              >
                <span className="text-[#16A34A] font-bold text-lg shrink-0">
                  &rsaquo;
                </span>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
            <FAQItem
              q="How soon can I expect leads from your campaigns?"
              a="Google Ads campaigns typically generate leads within 24-48 hours of launch. SEO-driven leads begin appearing within 3-4 months. We recommend combining both strategies for immediate and long-term results."
            />
            <FAQItem
              q="Do you guarantee lead volumes?"
              a="We cannot guarantee specific lead numbers as results depend on industry, budget, and competition. What we guarantee is transparent reporting, continuous optimization, and best-practice execution to maximize your lead volume."
            />
            <FAQItem
              q="What industries do you serve for lead generation in Guntur?"
              a="We serve a wide range of industries including real estate, healthcare, education, retail, hospitality, and professional services in Guntur, Hyderabad, and across Andhra Pradesh."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">Start Generating Leads Today</h2>
          <p className="section-subheading mb-8">
            Book a free consultation to discover how we can grow your business
            pipeline in Guntur and Hyderabad.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="lead_gen.primary_button"
            />
            <WhatsAppButton ocid="lead_gen.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
