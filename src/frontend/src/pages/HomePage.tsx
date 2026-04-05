import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";

function FAQAccordion({
  question,
  answer,
}: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground bg-white hover:bg-secondary/40 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-primary shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-primary shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-secondary/20 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Digital Marketing Agency in Guntur & Hyderabad | SEO";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Best digital marketing agency in Guntur & Hyderabad. Get SEO, Google Ads, and website design services. Call +91 9398241974",
      );
  }, []);

  const services = [
    {
      icon: "\uD83D\uDD0D",
      title: "SEO Services in Guntur & Hyderabad",
      desc: "Our SEO services are designed to rank your business on Google. We focus on keyword research, on-page optimization, and high-quality backlinks to drive organic traffic for businesses across Guntur and Hyderabad.",
      to: "/seo-services",
      alt: "SEO services in Hyderabad",
    },
    {
      icon: "\uD83D\uDCE2",
      title: "Google Ads & PPC Services Hyderabad",
      desc: "Cost-effective Google Ads management for Hyderabad and Guntur businesses. Our PPC experts create targeted campaigns that maximize ROI and generate high-quality leads.",
      to: "/google-ads-services",
      alt: "Google Ads services Hyderabad",
    },
    {
      icon: "\uD83D\uDCBB",
      title: "Website Design Company in Guntur",
      desc: "We build SEO-friendly and mobile-responsive websites that convert visitors into customers. Professional website design tailored for businesses in Guntur and Hyderabad.",
      to: "/website-design",
      alt: "website design company in Guntur",
    },
    {
      icon: "\uD83D\uDCF1",
      title: "Social Media Marketing Agency Hyderabad",
      desc: "Grow your brand across Facebook, Instagram, LinkedIn, and YouTube. We build loyal audiences for businesses in Hyderabad and Guntur with strategic social media campaigns.",
      to: "/social-media-marketing",
      alt: "social media marketing agency Hyderabad",
    },
    {
      icon: "\uD83D\uDCCD",
      title: "Local SEO Services",
      desc: "Dominate Google Maps and local search results. We specialize in local SEO for businesses in Guntur, KPHB Hyderabad, and across Andhra Pradesh.",
      to: "/local-seo-services",
      alt: "local SEO services Guntur Hyderabad",
    },
    {
      icon: "\uD83D\uDCCA",
      title: "Lead Generation",
      desc: "Data-driven lead generation strategies that fill your sales pipeline with qualified prospects from Guntur, Hyderabad, and across India.",
      to: "/contact-us",
      alt: "lead generation digital marketing agency in Guntur",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "\u20b98,999",
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
      price: "\u20b917,999",
      period: "/month",
      popular: true,
      features: [
        "Everything in Starter +",
        "SEO Services (On-page + Off-page)",
        "Google Ads Management (up to \u20b920,000 ad spend)",
        "Social Media Marketing (3 platforms)",
        "10 Blog Posts/Month",
        "Weekly Reports",
        "Priority Email Support",
      ],
    },
    {
      name: "Pro Plan",
      price: "\u20b929,999",
      period: "/month",
      popular: false,
      features: [
        "Everything in Growth +",
        "Full Technical SEO",
        "Advanced Google Ads (up to \u20b950,000 ad spend)",
        "All Social Platforms",
        "Website Design/Redesign",
        "Lead Generation Campaigns",
        "Priority Phone Support",
      ],
    },
  ];

  const testimonials = [
    {
      stars: 5,
      text: "Sri Vasundhara Solutions completely transformed our restaurant's online presence. Our Google rankings in Guntur went from page 3 to page 1 in just 3 months. The SEO services are excellent and affordable.",
      name: "Arjun Reddy",
      role: "Restaurant Owner, Guntur",
      initials: "AR",
      color: "bg-blue-500",
    },
    {
      stars: 5,
      text: "As a clinic in KPHB Hyderabad, we struggled with online visibility. Their Google Ads campaigns brought us 50+ new patient inquiries every month. Best digital marketing agency in KPHB Hyderabad!",
      name: "Dr. Kavitha Sharma",
      role: "Clinic Owner, KPHB Hyderabad",
      initials: "KS",
      color: "bg-teal-500",
    },
    {
      stars: 5,
      text: "We needed a website design company in Guntur that could also handle SEO. Sri Vasundhara Solutions built our site and optimized it perfectly. Our leads tripled in 60 days!",
      name: "Venkata Rao",
      role: "Real Estate Developer, Guntur",
      initials: "VR",
      color: "bg-orange-500",
    },
    {
      stars: 5,
      text: "Their social media marketing strategy for our Hyderabad boutique was spot on. We grew from 200 to 5,000 Instagram followers in 4 months and our walk-in customers doubled.",
      name: "Meena Lakshmi",
      role: "Boutique Owner, Hyderabad",
      initials: "ML",
      color: "bg-pink-500",
    },
    {
      stars: 5,
      text: "The PPC services for our logistics business in Hyderabad are exceptional. Every rupee of ad spend is tracked. Our cost-per-lead dropped by 40% after switching to Sri Vasundhara Solutions.",
      name: "Suresh Babu",
      role: "Logistics Business, Hyderabad",
      initials: "SB",
      color: "bg-purple-500",
    },
    {
      stars: 5,
      text: "As an SEO company in Andhra Pradesh, they really understand local markets. Our construction firm in Guntur now appears in the top 3 results for all our target keywords.",
      name: "Ramakrishna Naidu",
      role: "Construction Firm, Andhra Pradesh",
      initials: "RN",
      color: "bg-green-600",
    },
    {
      stars: 5,
      text: "Highly recommend for any dental practice. Their local SEO for our clinic in Hyderabad brought in 30+ new patients monthly. Professional team with great communication.",
      name: "Dr. Anand Prasad",
      role: "Dental Clinic, Hyderabad",
      initials: "AP",
      color: "bg-cyan-500",
    },
    {
      stars: 5,
      text: "Our e-commerce store needed better Google visibility. Sri Vasundhara Solutions implemented technical SEO and our organic traffic increased by 250% in just 5 months.",
      name: "Priyanka Goud",
      role: "E-commerce Store Owner, Hyderabad",
      initials: "PG",
      color: "bg-rose-500",
    },
    {
      stars: 5,
      text: "They helped our school in Guntur rank for competitive education keywords. Parent inquiries increased by 80% within 90 days. Excellent SEO services in Guntur!",
      name: "Srinivasa Rao",
      role: "School Principal, Guntur",
      initials: "SR",
      color: "bg-indigo-500",
    },
    {
      stars: 5,
      text: "Best affordable digital marketing agency for startups. They handled our entire digital presence — website, SEO, Google Ads, social media — at a price that fit our budget perfectly.",
      name: "Aditya Kumar",
      role: "Startup Founder, Hyderabad",
      initials: "AK",
      color: "bg-amber-500",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      text: "Increase Website Traffic",
      desc: "Drive more organic visitors to your website with proven SEO and content strategies.",
    },
    {
      icon: Users,
      text: "Generate Quality Leads",
      desc: "Attract and convert high-intent prospects into paying customers consistently.",
    },
    {
      icon: Award,
      text: "Improve Brand Visibility",
      desc: "Build a recognizable online presence across Google, social media, and local directories.",
    },
    {
      icon: BarChart2,
      text: "Higher ROI Campaigns",
      desc: "Maximize returns on your marketing budget with data-driven campaigns that deliver results.",
    },
  ];

  const faqs = [
    {
      question: "How to rank business on Google in Guntur?",
      answer:
        "By using local SEO, optimizing your Google Business Profile, and building high-quality backlinks from local and niche websites. Sri Vasundhara Solutions specializes in local SEO for Guntur businesses and helps you appear in Google Maps and local search results within 60\u201390 days.",
    },
    {
      question: "Which is the best digital marketing agency in Hyderabad?",
      answer:
        "Choose an agency with proven results, a strong portfolio, and affordable pricing. Sri Vasundhara Solutions is a trusted digital marketing agency in KPHB Hyderabad with a track record of delivering measurable results for local businesses \u2014 from clinics and restaurants to real estate and e-commerce.",
    },
    {
      question: "What digital marketing services do you offer in Guntur?",
      answer:
        "We offer a complete suite of digital marketing services in Guntur including SEO, Google Ads (PPC), social media marketing, website design, local SEO, and lead generation. Each service is tailored to your business goals and target audience.",
    },
    {
      question: "How much does digital marketing cost for small businesses?",
      answer:
        "Our affordable digital marketing plans start from \u20b98,999/month for small businesses in Guntur and Hyderabad. We offer transparent pricing with no hidden charges. Contact us for a free consultation and customized quote.",
    },
    {
      question: "Can you help my business rank in KPHB Hyderabad?",
      answer:
        "Yes! We specialize in hyperlocal SEO for areas like KPHB Colony, Kukatpally, and other Hyderabad localities. We optimize your Google Business Profile, build local citations, and create geo-targeted content to help you dominate local search.",
    },
  ];

  return (
    <>
      {/* \u2500\u2500 TOP ANNOUNCEMENT BANNER \u2500\u2500\u2500 */}
      <div className="bg-accent text-white text-center py-2.5 px-4 text-sm font-semibold">
        \uD83D\uDE80 Limited Offer:{" "}
        <span className="font-bold">Free Digital Marketing Consultation</span>{" "}
        for Guntur &amp; Hyderabad Businesses!{" "}
        <a
          href="tel:+919398241974"
          className="underline font-bold hover:text-white/80 ml-1"
        >
          Call Now: +91 9398241974
        </a>
      </div>

      {/* \u2500\u2500 HERO \u2500\u2500\u2500 */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28"
        data-ocid="hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 font-medium">
              \uD83C\uDFC6 Trusted Digital Marketing Agency in Guntur &amp;
              Hyderabad
            </Badge>
            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Best Digital Marketing Agency in{" "}
              <span className="text-primary">Guntur</span> &amp;{" "}
              <span className="text-accent">Hyderabad</span>
            </h1>
            {/* Keywords in first 100 words — natural density */}
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Looking for reliable{" "}
              <strong>digital marketing services in Guntur</strong> or{" "}
              <strong>Hyderabad</strong>? Sri Vasundhara Solutions helps
              businesses grow with result-driven{" "}
              <Link
                to="/seo-services"
                className="text-primary font-semibold hover:underline"
              >
                SEO services in Guntur
              </Link>
              , targeted{" "}
              <Link
                to="/google-ads-services"
                className="text-primary font-semibold hover:underline"
              >
                Google Ads services in Hyderabad
              </Link>
              , and high-converting website design.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Our expert team specializes in <strong>lead generation</strong>,
              local SEO, and performance marketing to boost your online
              visibility and sales. Headquartered in{" "}
              <strong>Gorantla, Guntur</strong> with a presence in{" "}
              <strong>KPHB Colony, Hyderabad</strong>, we deliver measurable
              results within 60\u201390 days.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact-us">
                <Button
                  className="bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-4 rounded-xl"
                  data-ocid="hero.consultation_button"
                >
                  Get Free Consultation
                </Button>
              </Link>
              <a
                href="tel:+919398241974"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
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
                key={label}
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

      {/* \u2500\u2500 SERVICES SECTION \u2500\u2500\u2500 */}
      <section className="py-20 bg-white" data-ocid="services.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H2 */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Our Digital Marketing Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive digital marketing services designed for businesses
              in Guntur, Hyderabad, and across India. From SEO to Google Ads, we
              have everything you need to grow online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Link
                key={service.to + service.title}
                to={service.to}
                className="service-card cursor-pointer block group"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="text-4xl mb-4"
                  role="img"
                  aria-label={service.alt}
                >
                  {service.icon}
                </div>
                {/* H3 for service card titles — children of H2 section */}
                <h3 className="text-lg font-bold text-foreground mb-2 font-display group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <span className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View Service Details <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 BENEFITS SECTION \u2500\u2500\u2500 */}
      <section className="py-20 bg-secondary/30" data-ocid="benefits.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H2 for benefits — no longer skipping from h2 services */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-display">
              Lead Generation Strategy \u2013 Why Digital Marketing Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven digital marketing strategy that drives consistent leads
              and revenue growth for businesses in Guntur and Hyderabad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, text, desc }, i) => (
              <div
                key={text}
                className="bg-white rounded-2xl p-6 text-center shadow-card border border-border hover:border-primary/30 transition-colors"
                data-ocid={`benefits.item.${i + 1}`}
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                {/* H3 for benefit card titles — children of H2 section */}
                <h3 className="font-bold text-foreground mb-2 font-display">
                  {text}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          {/* Mid-section Request Quote CTA */}
          <div className="text-center mt-12">
            <Link to="/contact-us">
              <Button
                className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 text-lg rounded-xl"
                data-ocid="benefits.request_quote_button"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 WHY CHOOSE US \u2500\u2500\u2500 */}
      <section
        className="py-20 bg-primary text-white"
        data-ocid="about.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H2 for section */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Why Choose Us as Your Digital Marketing Partner
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Sri Vasundhara Solutions is a leading{" "}
              <strong className="text-white">
                SEO company in Andhra Pradesh
              </strong>{" "}
              and a trusted{" "}
              <strong className="text-white">
                digital marketing agency in KPHB Hyderabad
              </strong>
              , serving businesses of all sizes with proven, results-driven
              strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: "\uD83D\uDCA1",
                title: "ROI-Focused Strategies",
                desc: "Every campaign is designed to maximize your return on investment with data-driven decisions.",
              },
              {
                icon: "\uD83D\uDCCA",
                title: "Transparent Reporting",
                desc: "Monthly detailed reports so you always know what's happening with your campaigns.",
              },
              {
                icon: "\uD83C\uDFAF",
                title: "Customized Campaigns",
                desc: "No cookie-cutter solutions. Tailored strategies for your specific business goals and budget.",
              },
              {
                icon: "\uD83D\uDCB0",
                title: "Affordable Pricing",
                desc: "Professional digital marketing services for startups and SMEs at competitive, transparent rates.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
                data-ocid={`about.feature.${i + 1}`}
              >
                <div className="text-4xl mb-4">{icon}</div>
                {/* H3 for feature card titles — children of H2 section */}
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
                key={label}
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

      {/* \u2500\u2500 PROCESS \u2500\u2500\u2500 */}
      <section className="py-20 bg-white" data-ocid="process.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Our Proven Digital Marketing Growth Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic, data-driven approach that delivers consistent
              results for businesses in Guntur, Hyderabad, and across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                icon: "\uD83D\uDD0D",
                title: "Business Analysis",
                desc: "We analyze your business, competitors, target audience, and market opportunities in Guntur & Hyderabad.",
              },
              {
                step: 2,
                icon: "\uD83D\uDCCB",
                title: "Strategy Planning",
                desc: "Custom digital marketing strategy based on your goals, budget, and target market.",
              },
              {
                step: 3,
                icon: "\uD83D\uDE80",
                title: "Campaign Execution",
                desc: "We execute SEO, Google Ads, and social media campaigns with precision and expertise.",
              },
              {
                step: 4,
                icon: "\uD83D\uDCC8",
                title: "Performance Optimization",
                desc: "Continuous monitoring and optimization for better results and higher ROI.",
              },
              {
                step: 5,
                icon: "\uD83D\uDCCA",
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

      {/* \u2500\u2500 TESTIMONIALS \u2500\u2500\u2500 */}
      <section
        className="py-20 bg-secondary/30"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              What Our Clients Say About Sri Vasundhara Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results. Real businesses. Real growth across Guntur,
              Hyderabad, and India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .slice(0, 9)
              .map(({ stars, text, name, role, initials, color }, i) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl p-6 shadow-card border border-border"
                  data-ocid={`testimonials.item.${i + 1}`}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: stars }, (_, idx) => idx + 1).map(
                      (starNum) => (
                        <Star
                          key={starNum}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ),
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-10 w-10 rounded-full ${color} text-white text-sm font-bold flex items-center justify-center shrink-0`}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">
                        {name}
                      </p>
                      <p className="text-xs text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 BLOG PREVIEW \u2500\u2500\u2500 */}
      <section className="py-20 bg-white" data-ocid="blog.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Digital Marketing Blog \u2013 Tips, Strategies &amp; Insights
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                  "Learn everything about Search Engine Optimization and how to rank your business on Google in Guntur and Hyderabad.",
                date: "Apr 2026",
                to: "/what-is-seo",
              },
              {
                cat: "Google Ads",
                catColor: "bg-orange-100 text-accent",
                title:
                  "Google Ads vs SEO \u2013 Which is Better for Your Business?",
                excerpt:
                  "Compare paid vs organic marketing strategies to decide which works best for your business in Hyderabad.",
                date: "Apr 2026",
                to: "/google-ads-guide",
              },
              {
                cat: "Local SEO",
                catColor: "bg-green-100 text-green-600",
                title: "Local SEO Guide for Small Businesses in Guntur",
                excerpt:
                  "Practical local SEO strategies to rank your Guntur business on Google Maps and attract nearby customers.",
                date: "Apr 2026",
                to: "/local-seo-guide",
              },
            ].map(({ cat, catColor, title, excerpt, date, to }, i) => (
              <Link
                key={to}
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
                    Read Full Article <ArrowRight className="h-3 w-3" />
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

      {/* \u2500\u2500 PRICING \u2500\u2500\u2500 */}
      <section className="py-20 bg-secondary/30" data-ocid="pricing.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H2 for Affordable Plans — continuing H1>H2>H3 hierarchy */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Affordable Plans
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing with no hidden charges. Choose the plan that
              fits your business goals and budget in Guntur or Hyderabad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map(
              ({ name, price, period, popular, features }, i) => (
                <div
                  key={name}
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
                        \u2B50 Most Popular
                      </span>
                    </div>
                  )}
                  {/* H3 for plan name — children of H2 Affordable Plans */}
                  <h3
                    className={`font-bold text-xl mb-1 font-display ${
                      popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {name}
                  </h3>
                  <div className="flex items-end gap-1 mb-5">
                    <span
                      className={`text-3xl font-bold font-display ${
                        popular ? "text-accent" : "text-primary"
                      }`}
                    >
                      {price}
                    </span>
                    <span
                      className={`text-sm mb-1 ${
                        popular ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {period}
                    </span>
                  </div>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${
                          popular ? "text-white/90" : "text-muted-foreground"
                        }`}
                      >
                        <CheckCircle
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            popular ? "text-accent" : "text-primary"
                          }`}
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

      {/* \u2500\u2500 FAQ SECTION \u2500\u2500\u2500 */}
      <section className="py-20 bg-white" data-ocid="faq.section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions about digital marketing
              services in Guntur and Hyderabad.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <FAQAccordion
                key={question}
                question={question}
                answer={answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 LOCAL CONTENT SECTION \u2500\u2500\u2500 */}
      <section className="py-16 bg-white" data-ocid="local.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 font-display">
            Serving Businesses in Gorantla, Guntur &amp; Hyderabad
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sri Vasundhara Solutions is headquartered in{" "}
                <strong className="text-foreground">
                  Gorantla, Guntur, Andhra Pradesh
                </strong>
                , with a presence in KPHB Colony, Hyderabad. We understand the
                local business landscape \u2014 from agricultural traders and
                retail shops in Guntur district to tech startups and healthcare
                providers in Hyderabad \u2014 and we design digital marketing
                strategies that work for your specific market.
              </p>
              <p>
                As a{" "}
                <strong className="text-foreground">
                  digital marketing agency in Gorantla Guntur
                </strong>
                , we work closely with local business owners to build their
                online presence from the ground up. Whether you need to rank
                your clinic, restaurant, or retail business on Google Maps, or
                launch targeted{" "}
                <Link
                  to="/google-ads-services"
                  className="text-primary font-semibold hover:underline"
                >
                  Google Ads services in Hyderabad
                </Link>{" "}
                to reach customers in Andhra Pradesh and Telangana, our team has
                the expertise to deliver measurable results.
              </p>
              <p>
                Our{" "}
                <Link
                  to="/seo-services"
                  className="text-primary font-semibold hover:underline"
                >
                  SEO services in Guntur
                </Link>{" "}
                are built around local search intent. We research the exact
                keywords your potential customers in Guntur, Vijayawada, Tenali,
                and Narasaraopet are typing into Google \u2014 and we optimize
                your website and Google Business Profile to appear at the top of
                those results.
              </p>
              <p>
                For businesses in Hyderabad, our Google Ads campaigns target
                high-intent customers in KPHB, Kukatpally, Ameerpet, Banjara
                Hills, and across the greater Hyderabad metropolitan area. Every
                rupee of your ad budget is tracked, optimized, and reported
                transparently every month.
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We believe every small business deserves access to professional
                digital marketing. That's why we offer{" "}
                <strong className="text-foreground">
                  affordable digital marketing packages starting at
                  \u20b98,999/month
                </strong>{" "}
                \u2014 giving small businesses in Guntur and Hyderabad access to
                the same quality of service that large corporations pay lakhs
                for.
              </p>
              <p>
                Our process is straightforward: we start with a free audit of
                your current online presence, identify the biggest opportunities
                for growth, and present a clear strategy with realistic
                timelines. No jargon, no hidden fees \u2014 just transparent,
                accountable digital marketing that generates real leads for your
                business.
              </p>
              <p>
                Ready to grow your business online? Contact our team at{" "}
                <a
                  href="tel:+919398241974"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 9398241974
                </a>{" "}
                for a free consultation. We serve clients across Gorantla,
                Guntur district, and Hyderabad \u2014 and across India for
                digital services.
              </p>
              <p>
                Sri Vasundhara Solutions \u2014 your trusted{" "}
                <strong className="text-foreground">
                  SEO company in Andhra Pradesh
                </strong>
                , committed to results you can measure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 CONTACT CTA \u2500\u2500\u2500 */}
      <section className="py-20 bg-secondary/30" data-ocid="contact.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              \uD83D\uDD25 Limited Free Audit Offer
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Get Your Free Digital Marketing Consultation Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Available for businesses in Guntur, KPHB Hyderabad, and across
              Andhra Pradesh. Our experts will analyze your online presence and
              give you a free growth roadmap.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Local SEO keywords in contact section */}
              <div className="bg-white rounded-2xl p-6 border border-border mb-6">
                <h3 className="font-bold text-foreground mb-4 font-display text-lg">
                  \uD83D\uDCCD Our Locations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Hyderabad Office
                      </p>
                      <p className="text-muted-foreground">
                        Digital marketing agency in KPHB Hyderabad \u2014 KPHB
                        Colony, Kukatpally, Hyderabad \u2013 500072
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Guntur Office
                      </p>
                      <p className="text-muted-foreground">
                        Digital marketing agency in Gorantla Guntur \u2014 Sri
                        Vasundhara Solutions, Gorantla, Guntur, Andhra Pradesh
                        \u2013 522034
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+919398241974"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group bg-white"
                  data-ocid="contact.info.1"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Click to Call
                    </p>
                    <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      +91 9398241974
                    </p>
                  </div>
                </a>
              </div>
              <a
                href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors mb-4 w-full"
                data-ocid="contact.whatsapp_link"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp \u2013
                Quick Response!
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">
                Book Your Free Consultation
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* \u2500\u2500 FINAL CTA \u2500\u2500\u2500 */}
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
            free digital marketing consultation today and rank on Google within
            60\u201390 days!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact-us">
              <Button
                className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg rounded-xl"
                data-ocid="cta.primary_button"
              >
                Contact Us Now \uD83D\uDE80
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
