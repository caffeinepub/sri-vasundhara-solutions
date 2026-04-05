import { CheckCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { CtaButton, WhatsAppButton } from "../components/CtaButtons";

export default function EcommerceWebsitePage() {
  useEffect(() => {
    document.title =
      "E-commerce Website Design in Hyderabad & Guntur | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Launch your online store with professional e-commerce website design in Hyderabad and Guntur. Secure payments, product management, and SEO-optimized.",
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
              { label: "E-commerce Website Design" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            E-commerce Website Design Services in Hyderabad &amp; Guntur
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Sell online 24/7 with a secure, fast, and SEO-optimized e-commerce
            store built for your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-6">
            Professional E-commerce Website Design
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sri Vasundhara Solutions builds feature-rich e-commerce websites for
            retailers, boutiques, and product businesses in Hyderabad and
            Guntur. Our online stores include product catalog management,
            multiple payment gateway integrations (Razorpay, PayU, UPI), mobile
            shopping optimization, order tracking, and inventory management. We
            design each store with user experience at the forefront &mdash;
            intuitive navigation, fast checkout, and trust signals that reduce
            cart abandonment. SEO optimization is built in from the start,
            ensuring your products rank on Google and attract organic buyers
            without relying solely on paid advertising.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#E6F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">
            Benefits of Our E-commerce Design
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sell products 24/7 without a physical store presence",
              "Secure payment gateway integration for seamless checkout",
              "Easy product management - add, edit, and remove listings with ease",
              "Mobile-optimized shopping experience for smartphone-first buyers",
              "SEO-optimized product pages that attract organic search traffic",
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
            Who Needs an E-commerce Website?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Retailers, boutiques, fashion stores, organic food sellers, and any
            product-based business in Guntur and Hyderabad looking to scale
            beyond a physical location can benefit tremendously from an
            e-commerce website. With India&apos;s growing online shopping
            audience and affordable logistics solutions, now is the ideal time
            to take your products online and reach customers across Andhra
            Pradesh, Telangana, and the entire country.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#E6F7F8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-heading mb-4">
            Launch Your Online Store Today
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <CtaButton
              to="/contact-us"
              label="Get Free Consultation"
              ocid="ecommerce_website.primary_button"
            />
            <WhatsAppButton ocid="ecommerce_website.whatsapp_button" />
          </div>
        </div>
      </section>
    </div>
  );
}
