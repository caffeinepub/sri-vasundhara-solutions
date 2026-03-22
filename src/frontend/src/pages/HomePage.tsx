import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  useEffect(() => {
    document.title = "Digital Marketing Agency in Guntur & Hyderabad | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Grow your business with SEO, Google Ads & social media marketing in Guntur & Hyderabad. Get free digital marketing audit today!",
      );
  }, []);

  const services = [
    {
      icon: "🔍",
      title: "SEO Services",
      desc: "Rank #1 on Google with proven on-page, off-page & technical SEO strategies.",
      to: "/seo-services",
    },
    {
      icon: "📢",
      title: "Google Ads Services",
      desc: "High-ROI Google Ads campaigns that generate qualified leads fast.",
      to: "/google-ads-services",
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      desc: "Grow your brand on Facebook, Instagram, LinkedIn & YouTube.",
      to: "/social-media-marketing",
    },
    {
      icon: "💻",
      title: "Website Design",
      desc: "Fast, mobile-first, SEO-friendly websites for small businesses.",
      to: "/website-design",
    },
    {
      icon: "📍",
      title: "Local SEO Services",
      desc: "Dominate local search and Google Maps in Guntur & Hyderabad.",
      to: "/local-seo-services",
    },
    {
      icon: "📊",
      title: "Lead Generation",
      desc: "Data-driven campaigns to fill your pipeline with qualified prospects.",
      to: "/contact-us",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "₹8,999",
      period: "/month",
      popular: false,
      features: [
        "Local SEO Setup",
        "Google Business Profile Optimization",
        "Social Media Management (2 platforms)",
        "5 Blog Posts/Month",
        "Monthly Report",
        "WhatsApp Support",
      ],
    },
    {
      name: "Growth Plan",
      price: "₹17,999",
      period: "/month",
      popular: true,
      features: [
        "Everything in Starter +",
        "SEO Services (On-page + Off-page)",
        "Google Ads Management (up to ₹20,000 ad spend)",
        "Social Media Marketing (3 platforms)",
        "10 Blog Posts/Month",
        "Weekly Reports",
        "Priority Email Support",
      ],
    },
    {
      name: "Pro Plan",
      price: "₹29,999",
      period: "/month",
      popular: false,
      features: [
        "Everything in Growth +",
        "Full Technical SEO",
        "Advanced Google Ads (up to ₹50,000 ad spend)",
        "All Social Platforms",
        "Website Design/Redesign",
        "Lead Generation Campaigns",
        "Priority Phone Support",
      ],
    },
  ];

  return (
    <>
      {/* ── HERO ─── */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28"
        data-ocid="hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 font-medium">
              🏆 Trusted Digital Marketing Agency in Guntur &amp; Hyderabad
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Best Digital Marketing Agency in{" "}
              <span className="text-primary">Guntur</span> &amp;{" "}
              <span className="text-accent">Hyderabad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We help businesses in Guntur &amp; Hyderabad increase traffic,
              leads, and sales through SEO, Google Ads, and social media
              marketing. As a trusted{" "}
              <strong>digital marketing agency in Guntur</strong> and{" "}
              <strong>digital marketing agency in Hyderabad</strong>, we deliver
              measurable results for small businesses and startups across India.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact-us">
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-4 rounded-xl"
                  data-ocid="hero.get_audit_button"
                >
                  Get Free Audit
                </Button>
              </Link>
              <a
                href="tel:+919398241974"
                className="btn-blue-outline text-base px-8 py-4 rounded-xl"
                data-ocid="hero.call_button"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
                data-ocid="hero.whatsapp_button"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Projects Completed", icon: Award },
              { value: "20+", label: "Happy Clients", icon: Users },
              { value: "1+", label: "Year Experience", icon: Clock },
              {
                value: "100%",
                label: "Transparent Reporting",
                icon: BarChart2,
              },
            ].map(({ value, label, icon: Icon }, i) => (
              <div
                key={i}
                className="text-center bg-white rounded-2xl p-5 shadow-card border border-border"
                data-ocid={`hero.stat.${i + 1}`}
              >
                <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary font-display">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─── */}
      <section className="py-20 bg-white" data-ocid="services.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Digital Marketing Services</h2>
            <p className="section-subheading mx-auto mt-4">
              Comprehensive digital marketing services for businesses in Guntur,
              Hyderabad, and across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                to={service.to}
                className="service-card cursor-pointer block"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <span className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─── */}
      <section
        className="py-20 bg-primary text-white"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Why Choose Sri Vasundhara Solutions as Your Digital Marketing
              Partner
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Sri Vasundhara Solutions is a digital marketing agency founded in
              2025, serving businesses in Guntur, Hyderabad, and across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "💡",
                title: "ROI-Focused Strategies",
                desc: "Every campaign is designed to maximize your return on investment with data-driven decisions.",
              },
              {
                icon: "📊",
                title: "Transparent Reporting",
                desc: "Monthly detailed reports so you always know what's happening with your campaigns.",
              },
              {
                icon: "🎯",
                title: "Customized Campaigns",
                desc: "No cookie-cutter solutions. Tailored strategies for your specific business goals and budget.",
              },
              {
                icon: "💰",
                title: "Affordable Pricing",
                desc: "Best digital marketing services for startups in Hyderabad at competitive, transparent rates.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
                data-ocid={`about.feature.${i + 1}`}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-white mb-2 font-display">
                  {title}
                </h3>
                <p className="text-white/70 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-10">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "20+", label: "Happy Clients" },
              { value: "5", label: "Services Offered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map(({ value, label }, i) => (
              <div
                key={i}
                className="text-center"
                data-ocid={`about.stat.${i + 1}`}
              >
                <div className="text-3xl font-bold text-accent font-display">
                  {value}
                </div>
                <div className="text-white/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─── */}
      <section className="py-20 bg-white" data-ocid="process.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Our Proven Digital Marketing Growth Process
            </h2>
            <p className="section-subheading mx-auto mt-4">
              A systematic, data-driven approach that delivers consistent
              results for businesses in Guntur, Hyderabad, and across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                icon: "🔍",
                title: "Business Analysis",
                desc: "We analyze your business, competitors, target audience, and market opportunities in Guntur & Hyderabad.",
              },
              {
                step: 2,
                icon: "📋",
                title: "Strategy Planning",
                desc: "Custom digital marketing strategy based on your goals, budget, and target market.",
              },
              {
                step: 3,
                icon: "🚀",
                title: "Campaign Execution",
                desc: "We execute SEO, Google Ads, and social media campaigns with precision and expertise.",
              },
              {
                step: 4,
                icon: "📈",
                title: "Performance Optimization",
                desc: "Continuous monitoring and optimization for better results and higher ROI.",
              },
              {
                step: 5,
                icon: "📊",
                title: "Growth Scaling",
                desc: "Scale winning strategies to grow your business revenue and market share.",
              },
            ].map(({ step, icon, title, desc }) => (
              <div
                key={step}
                className="text-center relative"
                data-ocid={`process.item.${step}`}
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 border-2 border-primary text-2xl flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mx-auto -mt-3 mb-3">
                  {step}
                </div>
                <h3 className="font-bold text-foreground mb-2 font-display text-base">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─── */}
      <section
        className="py-20 bg-secondary/30"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              What Our Clients Say About Sri Vasundhara Solutions
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Real results. Real businesses. Real growth across Guntur,
              Hyderabad, and India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                text: "Sri Vasundhara Solutions transformed our online presence. Our website traffic increased by 300% in just 4 months through their SEO services in Guntur. Highly recommended for any local business!",
                name: "Rajesh K.",
                role: "Restaurant Owner, Guntur",
              },
              {
                stars: 5,
                text: "The Google Ads campaigns they ran for us in Hyderabad generated 5x more leads than we expected. Excellent ROI and transparent reporting every month. Best digital marketing agency in Hyderabad!",
                name: "Priya S.",
                role: "Clinic Owner, Hyderabad",
              },
              {
                stars: 5,
                text: "Best affordable digital marketing agency for small businesses. They designed our website and set up local SEO that brought us more customers from KPHB area. Truly professional team!",
                name: "Suresh M.",
                role: "Retail Business, KPHB Hyderabad",
              },
            ].map(({ stars, text, name, role }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-card border border-border"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                  "{text}"
                </p>
                <div>
                  <p className="font-bold text-foreground text-sm">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─── */}
      <section className="py-20 bg-white" data-ocid="blog.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Digital Marketing Blog – Tips, Strategies &amp; Insights
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Stay updated with the latest digital marketing trends, SEO
              strategies, and business growth tips for Guntur and Hyderabad
              businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                cat: "SEO",
                catColor: "bg-blue-100 text-primary",
                title: "What is SEO and How Does It Work in 2026?",
                excerpt:
                  "Learn everything about Search Engine Optimization and how to rank your business on Google.",
                date: "Mar 2026",
                to: "/what-is-seo",
              },
              {
                cat: "Google Ads",
                catColor: "bg-orange-100 text-accent",
                title: "Google Ads vs SEO – Which is Better?",
                excerpt:
                  "Compare paid vs organic marketing strategies to decide which works best for your business.",
                date: "Mar 2026",
                to: "/google-ads-guide",
              },
              {
                cat: "Social Media",
                catColor: "bg-pink-100 text-pink-600",
                title: "Social Media Marketing Tips for Small Businesses",
                excerpt:
                  "Practical social media strategies to grow your local business and generate leads in Hyderabad.",
                date: "Mar 2026",
                to: "/social-media-tips",
              },
            ].map(({ cat, catColor, title, excerpt, date, to }, i) => (
              <Link
                key={i}
                to={to}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${catColor}`}
                    >
                      {cat}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 font-display text-base leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {excerpt}
                  </p>
                  <span className="mt-4 text-primary font-semibold text-sm flex items-center gap-1">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                data-ocid="blog.view_all_button"
              >
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ─── */}
      <section className="py-20 bg-secondary/30" data-ocid="pricing.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Affordable Digital Marketing Pricing Plans
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Transparent pricing with no hidden charges. Choose the plan that
              fits your business goals and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map(
              ({ name, price, period, popular, features }, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-7 relative flex flex-col ${
                    popular
                      ? "border-primary shadow-blue bg-primary text-white"
                      : "border-border bg-white shadow-card"
                  }`}
                  data-ocid={`pricing.item.${i + 1}`}
                >
                  {popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}
                  <h3
                    className={`font-bold text-xl mb-1 font-display ${popular ? "text-white" : "text-foreground"}`}
                  >
                    {name}
                  </h3>
                  <div className="flex items-end gap-1 mb-5">
                    <span
                      className={`text-3xl font-bold font-display ${popular ? "text-accent" : "text-primary"}`}
                    >
                      {price}
                    </span>
                    <span
                      className={`text-sm mb-1 ${popular ? "text-white/70" : "text-muted-foreground"}`}
                    >
                      {period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {features.map((f, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2 text-sm ${popular ? "text-white/90" : "text-muted-foreground"}`}
                      >
                        <CheckCircle
                          className={`h-4 w-4 shrink-0 mt-0.5 ${popular ? "text-accent" : "text-primary"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact-us">
                    <Button
                      className={`w-full font-bold ${
                        popular
                          ? "bg-accent hover:bg-accent/90 text-white"
                          : "bg-primary hover:bg-primary/90 text-white"
                      }`}
                      data-ocid={`pricing.get_started.${i + 1}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─── */}
      <section className="py-20 bg-white" data-ocid="contact.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              🔥 Limited Free Audit Offer
            </Badge>
            <h2 className="section-heading">
              Get Your Free Digital Marketing Audit Today
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Limited Offer – Book Your Free Consultation Today. Available for
              businesses in Guntur, Hyderabad, and across India.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919398241974"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group"
                  data-ocid="contact.info.1"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      +91 9398241974
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:srivasundharasolutions@gmail.com"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group"
                  data-ocid="contact.info.2"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      srivasundharasolutions@gmail.com
                    </p>
                  </div>
                </a>
              </div>
              <a
                href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors mb-6 w-full"
                data-ocid="contact.whatsapp_link"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp – Quick
                Response!
              </a>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">
                Book Your Free Consultation
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─── */}
      <section
        className="py-16 bg-gradient-to-r from-primary to-primary/80"
        data-ocid="cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join 20+ happy clients across Guntur, Hyderabad, and India. Get your
            free digital marketing audit today!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg rounded-xl"
                data-ocid="cta.primary_button"
              >
                Get Free Audit Now 🚀
              </Button>
            </Link>
            <a
              href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 text-lg rounded-xl transition-colors"
              data-ocid="cta.whatsapp_button"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
