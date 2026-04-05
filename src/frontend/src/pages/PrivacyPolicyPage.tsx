import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Privacy Policy for Sri Vasundhara Solutions — how we collect, use, and protect your personal information.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-muted-foreground leading-relaxed">
            Sri Vasundhara Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website
            https://sri-vasundhara-solutions-382.caffeine.xyz. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our site. Please read this policy
            carefully. If you disagree with its terms, please discontinue use of
            the site.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information you provide directly: name, email
              address, phone number, business type, and service inquiries
              submitted through contact forms. We also automatically collect: IP
              address, browser type, pages visited, and time spent on pages via
              Google Analytics (GA4) with tracking ID G-97CDFPRMHZ.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use collected information to: respond to inquiries and provide
              services, send marketing communications with your consent, analyze
              website usage to improve our services, and comply with legal
              obligations. We will never use your information for purposes
              unrelated to the above without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              3. Cookies &amp; Tracking
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies including Google Analytics cookies
              (G-97CDFPRMHZ) to understand user behavior. You can opt out via
              your browser settings or Google&apos;s opt-out tools available at
              https://tools.google.com/dlpage/gaoptout.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              4. Data Sharing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal data. We may share data with trusted
              service providers (Google Analytics, email services) under strict
              confidentiality agreements. We will disclose information if
              required by law or to protect the rights and safety of our
              business and users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              5. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access, use,
              or disclosure. While we strive to protect your data, no method of
              internet transmission or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              6. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal
              data held by us. To exercise these rights, please contact us at
              srivasundharasolutions@gmail.com. We will respond to all requests
              within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              7. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sri Vasundhara Solutions | Gorantla, Guntur, Andhra Pradesh, India
              &ndash; 522034 | Phone: +91 9398241974 | Email:
              srivasundharasolutions@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
