import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

export default function TermsConditionsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | Sri Vasundhara Solutions";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Terms and Conditions governing the use of Sri Vasundhara Solutions services. Read our payment terms, IP rights, and disclaimers.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-[#E6F7F8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Terms & Conditions" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-muted-foreground leading-relaxed">
            These Terms and Conditions govern your use of Sri Vasundhara
            Solutions services. By engaging our services, you agree to be bound
            by these terms. Please read them carefully before proceeding.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              1. Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sri Vasundhara Solutions provides digital marketing services
              including SEO, Google Ads management, social media marketing,
              website design, and lead generation. Service scope, deliverables,
              and timelines are defined in individual service agreements between
              Sri Vasundhara Solutions and the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              2. Payment Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Payments are due as per the agreed schedule outlined in your
              service agreement. Monthly retainer services require advance
              payment before work commences. Ad spend budgets for Google Ads and
              Meta campaigns are separate from management fees and are billed
              directly by the respective platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              3. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon receipt of full payment, clients own the deliverables
              including website code, content, and designs created specifically
              for them. Sri Vasundhara Solutions retains rights to our
              proprietary processes, tools, and methodologies used in delivering
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              4. Results Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Digital marketing results depend on multiple factors including
              market conditions, competition levels, budget allocated, and
              platform algorithm changes. We cannot guarantee specific search
              engine rankings, traffic volumes, or lead quantities. We commit to
              best-practice execution, transparent reporting, and continuous
              optimization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              5. Confidentiality
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to maintain the confidentiality of proprietary
              business information, trade secrets, and sensitive data shared
              during the engagement. This obligation survives the termination of
              the service agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              6. Termination
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate the service agreement with 30 days
              written notice. All work completed and expenses incurred up to the
              termination date are billable and payable by the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              7. Governing Law
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of India. Any disputes
              arising from these terms or our services shall be resolved in the
              courts of Guntur, Andhra Pradesh.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-display">
              8. Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, contact us at:
              srivasundharasolutions@gmail.com | +91 9398241974 | Sri Vasundhara
              Solutions, Gorantla, Guntur, Andhra Pradesh.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
