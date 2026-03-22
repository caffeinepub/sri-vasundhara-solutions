import { Badge } from "@/components/ui/badge";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  useEffect(() => {
    document.title =
      "Contact Sri Vasundhara Solutions | Free Digital Marketing Audit";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Contact Sri Vasundhara Solutions for a free digital marketing audit. Offices in KPHB Hyderabad and Guntur. Call +91 9398241974.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          />
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🔥 Limited Free Audit Offer
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Contact Sri Vasundhara Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Book your free digital marketing consultation today. Available for
            businesses in Guntur, Hyderabad, and across India.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 font-display">
                Get In Touch
              </h2>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919398241974"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group"
                  data-ocid="contact.phone_link"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Phone / WhatsApp
                    </p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      +91 9398241974
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:srivasundharasolutions@gmail.com"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group"
                  data-ocid="contact.email_link"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      srivasundharasolutions@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 border border-border rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Office Locations
                    </p>
                    <p className="font-semibold text-foreground text-sm">
                      📍 KPHB Colony, Hyderabad, Telangana – 500072
                    </p>
                    <p className="font-semibold text-foreground text-sm mt-1">
                      📍 Amaravati Road, Guntur, Andhra Pradesh – 522034
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-border rounded-xl">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Working Hours
                    </p>
                    <p className="font-semibold text-foreground text-sm">
                      Mon–Sat: 9AM–6PM IST
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors mb-6 w-full"
                data-ocid="contact.whatsapp_cta"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp – Quick
                Response!
              </a>

              {/* Google Maps Embeds */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    KPHB Colony, Hyderabad Office
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4!2d78.3915!3d17.4905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9!2sKPHB+Colony%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Vasundhara Solutions – KPHB Colony, Hyderabad"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Amaravati Road, Guntur Office
                  </p>
                  <div className="rounded-xl overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8!2d80.4462!3d16.3067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75!2sAmaravati+Road%2C+Guntur!5e0!3m2!1sen!2sin!4v1234567891"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Sri Vasundhara Solutions – Amaravati Road, Guntur"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-foreground mb-6 font-display">
                Book Your Free Consultation
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
