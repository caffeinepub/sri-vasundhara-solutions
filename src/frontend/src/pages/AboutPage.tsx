import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "About Sri Vasundhara Solutions | Digital Marketing Agency";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Learn about Sri Vasundhara Solutions – a trusted digital marketing agency in Guntur and Hyderabad helping businesses grow online since 2020.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          />
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            About Sri Vasundhara Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your trusted{" "}
            <strong>digital marketing agency in Guntur &amp; Hyderabad</strong>{" "}
            – helping businesses grow online with ROI-focused digital marketing
            strategies.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sri Vasundhara Solutions is a results-driven{" "}
                <strong>digital marketing agency in Guntur</strong> and
                Hyderabad, founded in 2025 to help small businesses, startups,
                and local enterprises grow their online presence. We specialize
                in SEO, Google Ads, Social Media Marketing, Website Design, and
                Local SEO.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a leading{" "}
                <strong>digital marketing agency in KPHB Hyderabad</strong>, we
                understand the local market dynamics and create customized
                strategies that deliver measurable results. Our team of digital
                marketing experts combines creativity with data to help
                businesses rank higher on Google, generate more leads, and
                increase revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're a restaurant in Guntur, a clinic in Hyderabad, or
                a startup anywhere in India – we have the expertise to help you
                succeed online. Our{" "}
                <strong>affordable digital marketing services in Guntur</strong>{" "}
                are designed to deliver maximum ROI for businesses of all sizes.
              </p>
              <div className="space-y-3">
                {[
                  "100% transparent reporting and communication",
                  "Customized strategies for each business",
                  "ROI-focused campaigns with measurable results",
                  "Local expertise in Guntur and Hyderabad markets",
                  "Bilingual support in Telugu and English",
                  "Affordable pricing for small businesses and startups",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-primary text-white rounded-2xl p-8 mb-6">
                <h3 className="text-2xl font-bold mb-6 font-display">
                  Our Mission &amp; Vision
                </h3>
                <div className="space-y-5">
                  <div>
                    <h4 className="font-bold text-accent mb-2">🎯 Mission</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      To empower businesses in Guntur, Hyderabad, and across
                      India with affordable, results-driven digital marketing
                      strategies that generate real growth and measurable ROI.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent mb-2">🔭 Vision</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      To be the most trusted{" "}
                      <strong className="text-white">
                        digital marketing agency in Andhra Pradesh and Telangana
                      </strong>
                      , known for transparency, innovation, and delivering
                      exceptional client results.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent mb-2">💎 Values</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Integrity, innovation, accountability, and client success.
                      We treat every client's business as our own and work
                      relentlessly to achieve their goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "50+",
                    label: "Projects Completed",
                    color: "text-primary",
                  },
                  {
                    value: "20+",
                    label: "Happy Clients",
                    color: "text-accent",
                  },
                  {
                    value: "5",
                    label: "Core Services",
                    color: "text-green-600",
                  },
                  {
                    value: "100%",
                    label: "Satisfaction Rate",
                    color: "text-primary",
                  },
                ].map(({ value, label, color }, i) => (
                  <div
                    key={i}
                    className="bg-secondary/50 rounded-xl p-5 text-center"
                  >
                    <div className={`text-3xl font-bold font-display ${color}`}>
                      {value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-10">
            Our Digital Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "SEO Services in Guntur & Hyderabad",
                desc: "Rank #1 on Google with proven SEO strategies.",
                to: "/seo-services",
              },
              {
                title: "Google Ads Services",
                desc: "High-ROI Google Ads campaigns for lead generation.",
                to: "/google-ads-services",
              },
              {
                title: "Social Media Marketing",
                desc: "Grow your brand and generate leads on social platforms.",
                to: "/social-media-marketing",
              },
              {
                title: "Website Design",
                desc: "Fast, mobile-first, SEO-friendly websites.",
                to: "/website-design",
              },
              {
                title: "Local SEO Services",
                desc: "Dominate local search in Guntur & Hyderabad.",
                to: "/local-seo-services",
              },
              {
                title: "Contact Us",
                desc: "Get a free consultation and digital marketing audit.",
                to: "/contact-us",
              },
            ].map(({ title, desc, to }, i) => (
              <Link
                key={i}
                to={to}
                className="bg-white rounded-xl p-5 border border-border hover:shadow-md hover:border-primary/30 transition-all"
                data-ocid={`about.service.${i + 1}`}
              >
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8">
            Get a free digital marketing consultation and audit for your
            business today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-base"
                data-ocid="about.cta_button"
              >
                Get Free Audit 🚀
              </Button>
            </Link>
            <a
              href="https://wa.me/919398241974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
