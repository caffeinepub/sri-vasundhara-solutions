import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function BusinessWebsitePage() {
  useEffect(() => {
    document.title =
      "Business Website Design Company in Guntur | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Professional business website design in Guntur. SEO-friendly, mobile-responsive websites that generate leads. Get a free quote today.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Website Design", href: "/website-design" },
              { label: "Business Website Design" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Business Website Design Company in Guntur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A professional website is your strongest 24/7 marketing tool. We
            design fast, beautiful, SEO-ready business websites tailored for
            Guntur and Hyderabad businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">
            Professional Business Website Design
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sri Vasundhara Solutions is a trusted website design company in
            Guntur building professional, mobile-responsive, and SEO-friendly
            business websites. Every site we design starts with your goals:
            whether you need to generate leads, build credibility, showcase your
            services, or establish an online presence. We combine clean modern
            design with technical best practices &mdash; fast load times,
            structured data, proper heading hierarchy, and built-in local SEO
            elements &mdash; so your website performs both for visitors and for
            Google. Our websites are built to convert, not just to impress.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of a Professional Business Website
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Professional online presence that builds instant credibility with visitors",
              "SEO-ready structure from day one to rank on Google without costly retrofits",
              "Fast loading speeds that reduce bounce rates and improve user experience",
              "Lead generation forms, click-to-call, and WhatsApp buttons built in",
              "Mobile-first design that works perfectly on all devices and screen sizes",
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
            Who Should Get a Business Website?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Any local business, service provider, or consultant in Guntur and
            Hyderabad that wants to generate inquiries online needs a
            professional website. Whether you are a doctor, lawyer, contractor,
            educational institution, or retail shop, a website dramatically
            increases your credibility and reach. Businesses relying solely on
            social media pages miss a significant share of high-intent Google
            searchers who convert at higher rates than social media audiences.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">Get Your Website Built Today</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="business_website.primary_button"
            />
            <WhatsAppButton ocid="business_website.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
