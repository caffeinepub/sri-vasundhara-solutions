import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import {
  BarChart2,
  FileText,
  IndianRupee,
  MapPin,
  Monitor,
  Search,
  Settings,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";

const services = [
  {
    icon: Search,
    title: "SEO Services in Guntur & Hyderabad",
    desc: "Our search engine optimization services help businesses in Guntur and Hyderabad rank higher on Google. We conduct thorough keyword research to identify what your target customers are searching for. Our on-page optimization covers title tags, meta descriptions, header structure, and content quality. Technical SEO audits fix crawl errors, improve site speed, and ensure mobile-friendliness. We build high-quality backlinks from authoritative websites to strengthen your domain authority. Local SEO strategies help your business appear in Google Maps and local search results. Our transparent monthly reports show keyword rankings, traffic growth, and lead data. Whether you run a small local business or a growing enterprise, our SEO services in Guntur deliver consistent, measurable results.",
    to: "/seo-services",
    cta: "Explore SEO Services",
  },
  {
    icon: Target,
    title: "Google Ads & PPC Services in Hyderabad",
    desc: "Our Google Ads management services help businesses in Hyderabad and Guntur generate high-quality leads through targeted pay-per-click campaigns. We research the most effective keywords for your industry and create compelling ad copy that drives clicks. Campaign setup includes Search Ads, Display Ads, and Remarketing to reach your audience at every stage. We continuously optimize bid strategies, ad groups, and landing pages to reduce cost-per-click and improve conversion rates. Our PPC experts monitor campaigns daily, making data-driven adjustments to maximize your return on investment. Detailed performance reports show impressions, clicks, conversions, and cost-per-lead so you always know where your budget is going.",
    to: "/google-ads-services",
    cta: "Explore Google Ads Services",
  },
  {
    icon: Monitor,
    title: "Website Design Company in Guntur",
    desc: "We design and develop professional, SEO-friendly websites for businesses in Guntur and Hyderabad. Every website we build is mobile-responsive, fast-loading, and optimized for search engine ranking. Our design process starts with understanding your business goals and target audience. We create clean, modern layouts that guide visitors toward taking action — whether that's calling, filling a form, or making a purchase. We use best practices for Core Web Vitals including optimized images, minimal code, and efficient loading. Our websites come with on-page SEO built in: proper heading structure, meta tags, schema markup, and internal linking. We also provide website maintenance, content updates, and performance monitoring after launch.",
    to: "/website-design",
    cta: "Explore Website Design",
  },
  {
    icon: Share2,
    title: "Social Media Marketing Agency in Hyderabad",
    desc: "Our social media marketing services help businesses in Hyderabad and Guntur build brand awareness, engage their audience, and generate leads. We manage accounts on Facebook, Instagram, LinkedIn, and YouTube with consistent, creative content that reflects your brand voice. Our team creates graphics, videos, and copy tailored to each platform's best practices. We run targeted social media ad campaigns to reach your ideal customers based on location, age, interests, and behavior. Regular performance reporting covers reach, engagement, follower growth, and lead metrics. Whether you're starting from zero or looking to improve existing accounts, we develop a social media strategy aligned with your business goals.",
    to: "/social-media-marketing",
    cta: "Explore Social Media Marketing",
  },
  {
    icon: MapPin,
    title: "Local SEO Services in Guntur & Hyderabad",
    desc: "Local SEO helps your business appear when customers in Guntur or Hyderabad search for your services nearby. We optimize your Google Business Profile with accurate NAP details, service descriptions, photos, and regular posts. Our local keyword research targets location-based search terms that drive foot traffic and inquiries. We build local citations on relevant directories to strengthen your business's online presence. Review management strategies help you collect genuine customer feedback, which improves your local ranking. On-site local SEO ensures your website includes location-specific content, structured data, and geo-targeted pages. Businesses optimized for local search see significantly higher visibility in Google Maps and the local pack.",
    to: "/local-seo-services",
    cta: "Explore Local SEO Services",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Services for Businesses",
    desc: "Generating consistent, qualified leads is the foundation of business growth. Our lead generation services combine SEO, Google Ads, social media marketing, and conversion rate optimization to build a steady pipeline of potential customers. We design high-converting landing pages with clear calls-to-action that turn visitors into inquiries. Lead capture forms, WhatsApp integration, and click-to-call features make it easy for prospects to contact you. We use data analytics to identify which channels deliver the best leads for your business and continuously refine the strategy. From awareness to conversion, our lead generation approach is designed to deliver measurable results and a strong return on your marketing investment.",
    to: "/contact-us",
    cta: "Get Free Consultation",
  },
];

const whyChooseUs = [
  {
    icon: BarChart2,
    title: "Result-Focused Strategies",
    desc: "We design campaigns around your business goals, not vanity metrics. Every strategy is built to deliver measurable outcomes.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: "Monthly reports show exactly where your budget goes — keyword rankings, traffic, leads, and cost-per-conversion.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    desc: "No templates or one-size-fits-all packages. Each plan is tailored to your industry, location, and target audience.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Competitive pricing designed for small and medium businesses in Guntur and Hyderabad without compromising on quality.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Business Analysis",
    desc: "We study your business, industry, competitors, and current online presence to understand opportunities and challenges.",
  },
  {
    number: "02",
    title: "Strategy Planning",
    desc: "We develop a customized digital marketing plan with clear goals, timelines, and budget allocation.",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Our team implements the strategy across SEO, ads, content, and social media with precision and attention to detail.",
  },
  {
    number: "04",
    title: "Optimization",
    desc: "We monitor performance data and make continuous improvements to improve results and reduce costs.",
  },
  {
    number: "05",
    title: "Growth",
    desc: "As campaigns mature, we scale what works, expand reach, and help your business achieve consistent long-term growth.",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Restaurant Owner, Guntur",
    text: "After working with Sri Vasundhara Solutions for 3 months, our restaurant started appearing at the top of local searches. Online orders increased noticeably. Their local SEO work delivered real results.",
    initials: "RK",
    color: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    business: "Clothing Boutique, Hyderabad",
    text: "Their social media marketing team transformed our Instagram presence. We now get regular inquiries from new customers every week. Highly professional team.",
    initials: "PS",
    color: "bg-pink-500",
  },
  {
    name: "Suresh Reddy",
    business: "Real Estate Consultant, Guntur",
    text: "Google Ads campaigns managed by SVS brought us qualified leads within the first two weeks. The cost-per-lead is much lower than what we were spending before. Very happy with the results.",
    initials: "SR",
    color: "bg-orange-500",
  },
  {
    name: "Anitha Devi",
    business: "Dental Clinic, Hyderabad",
    text: "Our clinic's website was rebuilt by Sri Vasundhara Solutions and our appointment bookings from online searches have improved significantly. Clean, fast, and mobile-friendly website.",
    initials: "AD",
    color: "bg-teal-500",
  },
  {
    name: "Vikram Singh",
    business: "Logistics Company, Andhra Pradesh",
    text: "We approached SVS for SEO services and within 60 days we started ranking for competitive keywords. The transparency in reporting builds confidence. Recommended for any business wanting to grow online.",
    initials: "VS",
    color: "bg-purple-500",
  },
];

const faqs = [
  {
    q: "How can I rank my business on Google?",
    a: "Ranking on Google requires a combination of on-page SEO, quality content, technical optimization, and backlinks. For local businesses in Guntur or Hyderabad, optimizing your Google Business Profile and building local citations are the fastest ways to improve visibility in local search results.",
  },
  {
    q: "What digital marketing services do you provide?",
    a: "We provide SEO services, Google Ads and PPC management, social media marketing, website design, local SEO, and lead generation. Each service is customized to the client's business goals and target market.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. We work with businesses of all sizes — from local shops and clinics in Guntur to startups and established companies in Hyderabad. Our packages are priced to be accessible for small and medium businesses.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most businesses see initial improvements in 3–4 months and significant results within 6–12 months, depending on competition and budget. Google Ads can generate leads within days for immediate results.",
  },
  {
    q: "How do I get started?",
    a: "Contact us for a free consultation. We'll analyze your current online presence, discuss your goals, and recommend the best digital marketing strategy for your business. Call +91 9398241974 or fill the contact form.",
  },
];

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

  return (
    <>
      {/* HERO */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28"
        data-ocid="hero.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 font-medium">
                Trusted Digital Marketing Agency in Guntur &amp; Hyderabad
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 font-display">
                Best Digital Marketing Agency in Guntur &amp; Hyderabad
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Sri Vasundhara Solutions is a professional digital marketing
                agency helping businesses grow with SEO, Google Ads, and website
                design services. We focus on improving online visibility,
                generating leads, and delivering measurable results.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Serving clients in Guntur, Hyderabad, and across Andhra Pradesh
                with customized digital marketing strategies.
              </p>
              <div
                className="flex flex-wrap gap-3"
                data-ocid="hero.cta_buttons"
              >
                <Link to="/contact-us">
                  <button
                    type="button"
                    className="btn-orange"
                    data-ocid="hero.primary_button"
                  >
                    Get Free Consultation
                  </button>
                </Link>
                <a
                  href="tel:+919398241974"
                  className="btn-blue"
                  data-ocid="hero.call_button"
                >
                  Call Now: +91 9398241974
                </a>
                <a
                  href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  data-ocid="hero.whatsapp_button"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <picture>
                <source
                  srcSet="/assets/generated/hero-illustration.dim_800x600.png"
                  type="image/webp"
                />
                <img
                  src="/assets/generated/hero-illustration.dim_800x600.png"
                  alt="digital marketing agency in Guntur"
                  width={800}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full max-w-lg rounded-2xl shadow-lg"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 bg-white"
        data-ocid="services.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Digital Marketing Services</h2>
            <p className="section-subheading">
              Comprehensive digital marketing solutions tailored for businesses
              in Guntur, Hyderabad, and across Andhra Pradesh.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card group"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3 font-display text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <Link
                    to={service.to}
                    className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                    data-ocid={`services.link.${i + 1}`}
                  >
                    {service.cta} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-choose-us"
        className="py-20 bg-secondary/30"
        data-ocid="why_choose.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Why Choose Us</h2>
            <p className="section-subheading">
              We deliver results through transparent, customized, and
              data-driven digital marketing strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow text-center"
                  data-ocid={`why_choose.item.${i + 1}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="py-20 bg-white"
        data-ocid="process.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">
              A structured approach that ensures your digital marketing delivers
              consistent, measurable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="text-center"
                data-ocid={`process.item.${i + 1}`}
              >
                <div className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold font-display">
                  {step.number}
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

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="py-20 bg-secondary/30"
        data-ocid="testimonials.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Client Testimonials</h2>
            <p className="section-subheading">
              Real results from businesses in Guntur, Hyderabad, and across
              Andhra Pradesh.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-border shadow-sm"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex items-center gap-1 mb-3 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={`${t.name}-star-${si}`} aria-hidden="true">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`h-10 w-10 rounded-full ${t.color} text-white flex items-center justify-center text-sm font-bold shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.business}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white" data-ocid="faq.section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Answers to common questions about our digital marketing services.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 overflow-hidden"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* AUTHOR / E-E-A-T */}
      <section
        id="expert"
        className="py-20 bg-secondary/30"
        data-ocid="expert.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="section-heading">Meet Our Expert</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 border border-border shadow-sm text-center">
            <div className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 font-display">
              GS
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1 font-display">
              Gajjalakonda Srinu
            </h3>
            <p className="text-sm font-semibold text-primary mb-4">
              Digital Marketing Analyst
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              With hands-on experience in SEO, Google Ads, and performance
              marketing, Gajjalakonda Srinu leads the strategy team at Sri
              Vasundhara Solutions. He specializes in helping businesses in
              Guntur and Hyderabad improve their online visibility and generate
              consistent leads through data-driven digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact-cta"
        className="py-20 bg-white"
        data-ocid="contact_cta.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading">
                Get Your Free Digital Marketing Consultation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Contact us today to discuss how we can help your business grow
                online. We serve clients in Guntur, Hyderabad, and across Andhra
                Pradesh.
              </p>
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+919398241974"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-semibold"
                  data-ocid="contact_cta.phone_link"
                >
                  <span className="text-primary font-bold">Phone:</span> +91
                  9398241974
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold shrink-0">
                    Location:
                  </span>
                  Gorantla, Guntur, Andhra Pradesh, India
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact-us">
                  <button
                    type="button"
                    className="btn-orange"
                    data-ocid="contact_cta.primary_button"
                  >
                    Get Free Consultation
                  </button>
                </Link>
                <a
                  href="tel:+919398241974"
                  className="btn-blue"
                  data-ocid="contact_cta.call_button"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">
                Send Us a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
