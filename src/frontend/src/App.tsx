import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Award,
  BarChart2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  Globe,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

// ─── FAQ Accordion ───────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" data-ocid="faq.panel">
      <button
        type="button"
        className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-foreground hover:bg-secondary transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-primary" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-primary" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-muted-foreground text-sm leading-relaxed border-t border-border">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.businessType) e.businessType = "Please select business type";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
        data-ocid="contact.success_state"
      >
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You! 🎉</h3>
        <p className="text-green-700">
          We'll contact you within 24 hours. Meanwhile, you can WhatsApp us for
          immediate assistance.
        </p>
        <a
          href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20just%20submitted%20the%20contact%20form"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          data-ocid="contact.whatsapp_button"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4"
      data-ocid="contact.form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cf-name">Full Name *</Label>
          <Input
            id="cf-name"
            placeholder="Your Full Name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="mt-1"
            data-ocid="contact.name_input"
          />
          {errors.name && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.name_error"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="cf-phone">Phone Number *</Label>
          <Input
            id="cf-phone"
            placeholder="+91 XXXXXXXXXX"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="mt-1"
            data-ocid="contact.phone_input"
          />
          {errors.phone && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.phone_error"
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="cf-email">Email Address *</Label>
        <Input
          id="cf-email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="mt-1"
          data-ocid="contact.email_input"
        />
        {errors.email && (
          <p
            className="text-destructive text-xs mt-1"
            data-ocid="contact.email_error"
          >
            {errors.email}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Business Type *</Label>
          <Select
            onValueChange={(v) => setForm((p) => ({ ...p, businessType: v }))}
          >
            <SelectTrigger
              className="mt-1"
              data-ocid="contact.business_type_select"
            >
              <SelectValue placeholder="Select Business Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="clinic">Clinic / Hospital</SelectItem>
              <SelectItem value="retail">Retail Shop</SelectItem>
              <SelectItem value="realestate">Real Estate</SelectItem>
              <SelectItem value="startup">Startup</SelectItem>
              <SelectItem value="ecommerce">E-Commerce</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.businessType && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.business_type_error"
            >
              {errors.businessType}
            </p>
          )}
        </div>
        <div>
          <Label>Service Interested In *</Label>
          <Select onValueChange={(v) => setForm((p) => ({ ...p, service: v }))}>
            <SelectTrigger className="mt-1" data-ocid="contact.service_select">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seo">SEO Services</SelectItem>
              <SelectItem value="google-ads">Google Ads / PPC</SelectItem>
              <SelectItem value="social-media">
                Social Media Marketing
              </SelectItem>
              <SelectItem value="website-design">Website Design</SelectItem>
              <SelectItem value="local-seo">Local SEO</SelectItem>
              <SelectItem value="lead-generation">Lead Generation</SelectItem>
              <SelectItem value="full-package">Full Package</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.service_error"
            >
              {errors.service}
            </p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="cf-message">Message (Optional)</Label>
        <Textarea
          id="cf-message"
          placeholder="Tell us about your business and goals..."
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="mt-1"
          data-ocid="contact.message_textarea"
        />
      </div>
      <Button
        type="submit"
        className="w-full btn-orange text-base py-4"
        data-ocid="contact.submit_button"
      >
        Get Free Audit Now 🚀
      </Button>
    </form>
  );
}

// ─── Privacy Policy Content ────────────────────────────────────────────────
function PrivacyPolicyContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-4 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Last Updated: March 2026</p>
      <p>
        Sri Vasundhara Solutions ("we," "us," or "our") operates the website
        https://sri-vasundhara-solutions-382.caffeine.xyz ("Site"). This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you visit our Site.
      </p>
      <h3 className="font-bold text-foreground">1. Information We Collect</h3>
      <p>
        We may collect information you provide directly: name, email address,
        phone number, business type, and service inquiries submitted through
        contact forms. We also automatically collect: IP address, browser type,
        pages visited, and time spent on pages via Google Analytics (GA4).
      </p>
      <h3 className="font-bold text-foreground">
        2. How We Use Your Information
      </h3>
      <p>
        We use collected information to: respond to inquiries and provide
        services, send marketing communications (with consent), analyze website
        usage to improve our services, comply with legal obligations.
      </p>
      <h3 className="font-bold text-foreground">3. Cookies & Tracking</h3>
      <p>
        Our website uses cookies including Google Analytics cookies
        (G-7QR6GE2QS4) to understand user behavior. You can opt out via your
        browser settings or Google's opt-out tools.
      </p>
      <h3 className="font-bold text-foreground">4. Data Sharing</h3>
      <p>
        We do not sell your personal data. We may share data with trusted
        service providers (Google Analytics, email services) under strict
        confidentiality agreements.
      </p>
      <h3 className="font-bold text-foreground">5. Data Security</h3>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, use, or
        disclosure.
      </p>
      <h3 className="font-bold text-foreground">6. Your Rights</h3>
      <p>
        You have the right to access, correct, or delete your personal data.
        Contact us at srivasundharasolutions@gmail.com to exercise these rights.
      </p>
      <h3 className="font-bold text-foreground">7. Contact Us</h3>
      <p>
        Sri Vasundhara Solutions | KPHB Colony, Hyderabad – 500072 | Phone: +91
        9398241974 | Email: srivasundharasolutions@gmail.com
      </p>
    </div>
  );
}

// ─── Terms Content ────────────────────────────────────────────────────────────
function TermsContent() {
  return (
    <div className="prose prose-sm max-w-none space-y-4 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">Last Updated: March 2026</p>
      <p>
        These Terms and Conditions govern your use of Sri Vasundhara Solutions
        services. By engaging our services, you agree to these terms.
      </p>
      <h3 className="font-bold text-foreground">1. Services</h3>
      <p>
        Sri Vasundhara Solutions provides digital marketing services including
        SEO, Google Ads management, social media marketing, website design, and
        lead generation. Service scope and deliverables are defined in
        individual service agreements.
      </p>
      <h3 className="font-bold text-foreground">2. Payment Terms</h3>
      <p>
        Payments are due as per the agreed schedule. Monthly retainer services
        require advance payment. Ad spend budgets (Google Ads) are separate from
        management fees and billed directly by the platform.
      </p>
      <h3 className="font-bold text-foreground">3. Intellectual Property</h3>
      <p>
        Upon full payment, clients own the deliverables (website code, content,
        designs). We retain rights to our proprietary processes, tools, and
        methodologies.
      </p>
      <h3 className="font-bold text-foreground">4. Results Disclaimer</h3>
      <p>
        Digital marketing results depend on multiple factors including market
        conditions, competition, and budget. We cannot guarantee specific
        rankings, traffic, or lead volumes, but we commit to best-practice
        execution.
      </p>
      <h3 className="font-bold text-foreground">5. Confidentiality</h3>
      <p>
        Both parties agree to maintain confidentiality of proprietary business
        information shared during the engagement.
      </p>
      <h3 className="font-bold text-foreground">6. Termination</h3>
      <p>
        Either party may terminate with 30 days written notice. Client is liable
        for services rendered up to termination date.
      </p>
      <h3 className="font-bold text-foreground">7. Governing Law</h3>
      <p>
        These terms are governed by the laws of Telangana, India. Disputes shall
        be subject to exclusive jurisdiction of courts in Hyderabad.
      </p>
      <h3 className="font-bold text-foreground">8. Contact</h3>
      <p>
        Sri Vasundhara Solutions | srivasundharasolutions@gmail.com | +91
        9398241974
      </p>
    </div>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceLinks = [
    { label: "SEO Services", id: "seo-services-hyderabad" },
    { label: "Google Ads", id: "google-ads-ppc-management" },
    { label: "Social Media Marketing", id: "social-media-marketing-services" },
    { label: "Website Design", id: "website-design-development" },
    { label: "Local SEO", id: "local-seo-services" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── STICKY HEADER ───────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-border shadow-sm"
        data-ocid="header.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="flex items-center"
              data-ocid="header.home_link"
            >
              <img
                src="/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png"
                alt="Sri Vasundhara Solutions - Digital Marketing Agency"
                className="h-10 w-auto"
                loading="lazy"
              />
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Main navigation"
            >
              <button
                type="button"
                onClick={() => scrollTo("hero")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.home_link"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => scrollTo("about-digital-marketing-agency")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.about_link"
              >
                About
              </button>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                  data-ocid="nav.services_dropdown"
                >
                  Services <ChevronDown className="h-3 w-3" />
                </button>
                {servicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-52 bg-white border border-border rounded-xl shadow-lg py-2 z-50"
                    data-ocid="nav.services_menu"
                  >
                    {serviceLinks.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors"
                        data-ocid={`nav.${s.id}_link`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => scrollTo("digital-marketing-blog")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.blog_link"
              >
                Blog
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.contact_link"
              >
                Contact
              </button>
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919398241974"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                data-ocid="header.phone_link"
              >
                <Phone className="h-4 w-4" /> +91 9398241974
              </a>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-4 py-2"
                data-ocid="header.get_audit_button"
              >
                Get Free Audit
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="header.mobile_menu_button"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-2"
            data-ocid="header.mobile_menu"
          >
            <button
              type="button"
              onClick={() => scrollTo("hero")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary"
              data-ocid="nav.mobile_home_link"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollTo("about-digital-marketing-agency")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary"
              data-ocid="nav.mobile_about_link"
            >
              About
            </button>
            <p className="py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            {serviceLinks.map((s) => (
              <button
                type="button"
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="block w-full text-left py-2 pl-4 text-sm font-medium hover:text-primary"
                data-ocid={`nav.mobile_${s.id}_link`}
              >
                {s.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("digital-marketing-blog")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary"
              data-ocid="nav.mobile_blog_link"
            >
              Blog
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact-digital-marketing-consultant")}
              className="block w-full text-left py-2 text-sm font-medium hover:text-primary"
              data-ocid="nav.mobile_contact_link"
            >
              Contact
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919398241974"
                className="btn-blue-outline text-center justify-center"
                data-ocid="nav.mobile_call_button"
              >
                <Phone className="h-4 w-4" /> +91 9398241974
              </a>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="bg-accent hover:bg-accent/90 text-white w-full"
                data-ocid="nav.mobile_audit_button"
              >
                Get Free Audit
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
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
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-4 rounded-xl shadow-orange"
                data-ocid="hero.get_audit_button"
              >
                Get Free Audit
              </Button>
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

      {/* ── SERVICES OVERVIEW ───────────────────────────────────────────────── */}
      <section
        id="digital-marketing-services"
        className="py-20 bg-secondary/30"
        data-ocid="services.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">
              Our Digital Marketing Services in Guntur &amp; Hyderabad
            </h2>
            <p className="section-subheading mx-auto mt-4">
              Comprehensive digital marketing solutions tailored for small
              businesses and startups in Andhra Pradesh and Telangana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔍",
                title: "SEO Services",
                desc: "Rank #1 on Google with proven SEO strategies for Guntur & Hyderabad businesses. Drive organic traffic that converts.",
                id: "seo-services-hyderabad",
              },
              {
                icon: "📢",
                title: "Google Ads (PPC)",
                desc: "High ROI Google Ads campaigns for lead generation in Hyderabad & Guntur. Pay only for results.",
                id: "google-ads-ppc-management",
              },
              {
                icon: "📱",
                title: "Social Media Marketing",
                desc: "Grow engagement with social media marketing for local businesses in Hyderabad. Facebook, Instagram & more.",
                id: "social-media-marketing-services",
              },
              {
                icon: "💻",
                title: "Website Design",
                desc: "Affordable, fast & SEO-friendly website design company in Guntur. Mobile-first websites that convert.",
                id: "website-design-development",
              },
              {
                icon: "📍",
                title: "Local SEO",
                desc: "Dominate local search with Local SEO services for small businesses in Andhra Pradesh. Rank on Google Maps.",
                id: "local-seo-services",
              },
              {
                icon: "📧",
                title: "Lead Generation",
                desc: "Generate quality leads for your business across India with targeted campaigns and conversion-optimized funnels.",
                id: "contact-digital-marketing-consultant",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card cursor-pointer"
                onClick={() => scrollTo(service.id)}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <button
                  type="button"
                  className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollTo(service.id);
                  }}
                  data-ocid={`services.learn_more.${i + 1}`}
                >
                  Learn More <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO SERVICES DETAIL ─────────────────────────────────────────────── */}
      <section
        id="seo-services-hyderabad"
        className="py-20 bg-white"
        data-ocid="seo.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-blue-50 text-primary border-primary/20">
                SEO Services
              </Badge>
              <h2 className="section-heading mb-4">
                SEO Services in Guntur &amp; Hyderabad
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Rank Your Business #1 on Google
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Looking for the{" "}
                <strong>best SEO company in Guntur for small business</strong>?
                Sri Vasundhara Solutions offers affordable{" "}
                <strong>SEO services in Guntur</strong> and Hyderabad that
                deliver real results. Our SEO experts help businesses rank
                higher on Google, drive organic traffic, and generate consistent
                leads. Whether you're a startup or an established business, our{" "}
                <strong>
                  SEO services for small business in Andhra Pradesh
                </strong>{" "}
                are designed to deliver long-term, sustainable growth.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "On-Page SEO Optimization",
                    desc: "We optimize title tags, meta descriptions, keyword placement, content structure, and internal linking to maximize your relevance for target keywords in Guntur and Hyderabad.",
                  },
                  {
                    title: "Off-Page SEO & Link Building",
                    desc: "Build domain authority with high-quality backlinks from relevant, authoritative websites. Our link-building strategies improve your site's credibility and Google rankings.",
                  },
                  {
                    title: "Technical SEO",
                    desc: "We audit and fix technical issues: site speed, mobile optimization, crawlability, Core Web Vitals, structured data, and XML sitemap to ensure Google can effectively index your site.",
                  },
                  {
                    title: "Local SEO Integration",
                    desc: "Optimize your Google Business Profile, build local citations, and maintain NAP consistency to rank in 'near me' searches in Guntur, Hyderabad, and Andhra Pradesh.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "Increased organic traffic",
                  "Higher Google rankings",
                  "More qualified leads",
                  "Brand credibility",
                  "Long-term results",
                  "Monthly reporting",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold"
                data-ocid="seo.cta_button"
              >
                Get Free SEO Audit
              </Button>
            </div>

            <div>
              {/* Process */}
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4 font-display">
                  Our SEO Process
                </h3>
                <div className="space-y-3">
                  {[
                    "Website Audit",
                    "Keyword Research",
                    "On-Page Optimization",
                    "Link Building",
                    "Monthly Reporting",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <h3 className="font-bold text-foreground mb-4 font-display">
                Frequently Asked Questions
              </h3>
              <FAQItem
                q="How long does SEO take to show results?"
                a="SEO typically takes 3–6 months to show significant results. However, you may see initial improvements in rankings and traffic within 4–8 weeks for less competitive keywords. Local SEO for Guntur businesses often shows faster results."
              />
              <FAQItem
                q="How much do SEO services cost in Guntur?"
                a="Our affordable SEO packages start from ₹5,000/month for basic local SEO. Full SEO packages including on-page, off-page, and technical SEO start from ₹8,999/month. We offer customized pricing based on your business needs."
              />
              <FAQItem
                q="Do you provide local SEO for Guntur businesses?"
                a="Yes! We specialize in local SEO services for businesses in Guntur, Hyderabad, and across Andhra Pradesh and Telangana. We optimize your Google Business Profile, build local citations, and target location-specific keywords."
              />
              <FAQItem
                q="What is included in your SEO package?"
                a="Our SEO packages include complete on-page optimization, off-page link building, technical SEO audit and fixes, local SEO optimization, Google Business Profile management, keyword tracking, and detailed monthly reports."
              />

              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm font-medium text-primary">
                  🔗 Also explore:{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("local-seo-services")}
                    className="underline"
                  >
                    Local SEO Services
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("google-ads-ppc-management")}
                    className="underline"
                  >
                    Google Ads
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("website-design-development")}
                    className="underline"
                  >
                    Website Design
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE ADS DETAIL ───────────────────────────────────────────────── */}
      <section
        id="google-ads-ppc-management"
        className="py-20 bg-secondary/30"
        data-ocid="google_ads.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-4 font-display">
                  Google Ads Campaign Process
                </h3>
                <div className="space-y-3">
                  {[
                    "Campaign Setup",
                    "Keyword Research",
                    "Ad Copywriting",
                    "Bid Management",
                    "Optimization",
                    "Reporting",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-4 font-display">
                FAQ – Google Ads
              </h3>
              <FAQItem
                q="How much budget do I need for Google Ads?"
                a="For small businesses in Guntur and Hyderabad, we recommend starting with ₹5,000–₹10,000/month. Most businesses see good results with ₹15,000–₹50,000/month depending on industry and competition. The more competitive your market, the higher the budget needed."
              />
              <FAQItem
                q="How soon will I see results with Google Ads?"
                a="Google Ads shows results within 24–48 hours of campaign launch. You'll start seeing clicks and leads immediately, unlike SEO which takes months. This makes Google Ads ideal for businesses needing quick lead generation."
              />
              <FAQItem
                q="Do you manage Google Ads for small businesses in Hyderabad?"
                a="Yes! We specialize in Google Ads management for small and medium businesses in Hyderabad, Guntur, and across India. Our low cost Google Ads services Hyderabad are designed to maximize ROI for businesses with limited budgets."
              />
              <FAQItem
                q="What is your Google Ads management fee?"
                a="Our Google Ads management fee starts from ₹4,999/month. The management fee is separate from the ad spend budget. We offer transparent pricing with no hidden charges and detailed monthly reporting."
              />

              <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-sm font-medium text-accent">
                  🔗 Also explore:{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("seo-services-hyderabad")}
                    className="underline"
                  >
                    SEO Services
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("social-media-marketing-services")}
                    className="underline"
                  >
                    Social Media
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("online-lead-generation-services")}
                    className="underline"
                  >
                    Lead Generation
                  </button>
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-orange-50 text-accent border-accent/20">
                Google Ads / PPC
              </Badge>
              <h2 className="section-heading mb-4">
                Google Ads &amp; PPC Management Services in Hyderabad &amp;
                Guntur
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Need a{" "}
                <strong>
                  Google Ads expert in Hyderabad for lead generation
                </strong>
                ? We manage high-ROI Google Ads campaigns for businesses in
                Guntur and Hyderabad. Our{" "}
                <strong>low cost Google Ads services Hyderabad</strong> are
                designed to maximize your advertising budget and deliver
                qualified leads. Whether you need Search Ads, Display Ads, or
                Shopping campaigns, we create data-driven strategies that
                generate real business results.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Search Ads Campaigns",
                    desc: "Appear at the top of Google search results when potential customers in Guntur and Hyderabad search for your services. Highly targeted, intent-driven traffic.",
                  },
                  {
                    title: "Display & Remarketing Ads",
                    desc: "Re-engage website visitors with targeted display ads across Google's network. Keep your brand top-of-mind and bring back potential customers.",
                  },
                  {
                    title: "Shopping Campaigns",
                    desc: "For e-commerce businesses, Google Shopping campaigns showcase your products directly in search results with images and prices.",
                  },
                  {
                    title: "YouTube Ads",
                    desc: "Reach your audience with video advertising on YouTube, the world's second-largest search engine. Cost-effective brand awareness for Hyderabad businesses.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Immediate visibility",
                  "Pay only for clicks",
                  "Measurable ROI",
                  "Budget control",
                  "Geographic targeting",
                  "How to generate leads using Google Ads in India",
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="mt-8 bg-accent hover:bg-accent/90 text-white font-bold"
                data-ocid="google_ads.cta_button"
              >
                Start Google Ads Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA MARKETING ──────────────────────────────────────────── */}
      <section
        id="social-media-marketing-services"
        className="py-20 bg-white"
        data-ocid="social_media.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-pink-50 text-pink-600 border-pink-200">
                Social Media Marketing
              </Badge>
              <h2 className="section-heading mb-4">
                Social Media Marketing Services for Businesses in Hyderabad
                &amp; Guntur
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Grow your brand with{" "}
                <strong>
                  social media marketing for local businesses in Hyderabad
                </strong>
                . Our team creates engaging content, manages your social
                profiles, and runs targeted ad campaigns on Facebook, Instagram,
                LinkedIn, and YouTube. As a leading{" "}
                <strong>social media marketing agency Hyderabad</strong>, we
                help businesses build a strong online presence and connect with
                their local audience.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Facebook & Instagram Marketing",
                    desc: "Create scroll-stopping content and run targeted ad campaigns to reach your ideal customers in Guntur, Hyderabad, and across India.",
                  },
                  {
                    title: "LinkedIn Marketing for B2B",
                    desc: "Build professional credibility and generate B2B leads with LinkedIn content marketing and sponsored campaigns.",
                  },
                  {
                    title: "YouTube Marketing",
                    desc: "Create engaging video content and run YouTube ads to build brand awareness and drive traffic to your website.",
                  },
                  {
                    title: "Content Creation & Scheduling",
                    desc: "We create, schedule, and publish SEO-friendly content in both English and Telugu, tailored for your local audience.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-pink-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="mt-8 bg-primary hover:bg-primary/90 text-white font-bold"
                data-ocid="social_media.cta_button"
              >
                Grow My Social Media
              </Button>
            </div>
            <div>
              <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-3 font-display">
                  Benefits
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Brand awareness",
                    "Customer engagement",
                    "Lead generation",
                    "Cost-effective reach",
                    "Analytics & insights",
                    "Telugu & English content",
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                FAQ – Social Media Marketing
              </h3>
              <FAQItem
                q="Which social media platforms do you manage?"
                a="We manage Facebook, Instagram, LinkedIn, YouTube, and Twitter/X. We recommend the best platforms based on your business type and target audience in Guntur and Hyderabad."
              />
              <FAQItem
                q="How do you measure social media ROI?"
                a="We track key metrics including reach, engagement rate, follower growth, website traffic from social, lead form submissions, and conversion rates. Monthly reports clearly show the ROI of your social media investment."
              />
              <FAQItem
                q="Do you create content in Telugu and English?"
                a="Yes! We create engaging content in both Telugu and English to connect with local audiences in Guntur, Hyderabad, and Andhra Pradesh. Bilingual content significantly improves engagement for local businesses."
              />
              <div className="mt-4 p-4 bg-pink-50 border border-pink-200 rounded-xl">
                <p className="text-sm font-medium text-pink-600">
                  🔗 Also explore:{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("seo-services-hyderabad")}
                    className="underline"
                  >
                    SEO Services
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("google-ads-ppc-management")}
                    className="underline"
                  >
                    Google Ads
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WEBSITE DESIGN ──────────────────────────────────────────────────── */}
      <section
        id="website-design-development"
        className="py-20 bg-secondary/30"
        data-ocid="web_design.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-foreground mb-3 font-display">
                  What We Build
                </h3>
                <div className="space-y-2">
                  {[
                    {
                      title: "Business Websites",
                      desc: "Professional, fast-loading websites that showcase your business and convert visitors to customers.",
                    },
                    {
                      title: "E-Commerce Development",
                      desc: "Full-featured online stores with product management, payment gateway integration, and SEO optimization.",
                    },
                    {
                      title: "Landing Pages",
                      desc: "High-converting landing pages designed specifically for Google Ads and lead generation campaigns.",
                    },
                    {
                      title: "SEO-Optimized Design",
                      desc: "Every website we build is SEO-ready from day one — fast load times, proper schema markup, and mobile-first design.",
                    },
                  ].map(({ title, desc }, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg border border-border"
                    >
                      <p className="font-semibold text-sm text-foreground">
                        {title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                FAQ – Website Design
              </h3>
              <FAQItem
                q="How much does a website cost in Guntur?"
                a="A basic business website starts from ₹8,999. E-commerce websites start from ₹19,999. All websites include mobile-responsive design, basic SEO setup, and 3 months of free support. We offer the most affordable website design with SEO in Guntur."
              />
              <FAQItem
                q="How long does it take to build a website?"
                a="A standard business website takes 7–14 days. E-commerce websites take 15–30 days. Landing pages can be delivered within 3–5 days. Timeline depends on content readiness and revision cycles."
              />
              <FAQItem
                q="Do you provide website maintenance?"
                a="Yes, we offer monthly website maintenance packages starting from ₹1,999/month including security updates, performance optimization, content updates, and technical support."
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-purple-50 text-purple-600 border-purple-200">
                Website Design
              </Badge>
              <h2 className="section-heading mb-4">
                Affordable Website Design Company in Guntur &amp; Hyderabad
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Looking for a{" "}
                <strong>website design company in Guntur affordable</strong>? We
                build fast, mobile-first, SEO-friendly websites that convert
                visitors into customers. Our{" "}
                <strong>affordable website design with SEO in Guntur</strong> is
                perfect for startups, small businesses, clinics, restaurants,
                and retail stores. Every website we deliver is optimized for
                speed, search engines, and lead generation.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Mobile-first design",
                  "Fast loading (<3s)",
                  "SEO-ready structure",
                  "Lead capture forms",
                  "Affordable pricing",
                  "3 months support",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-purple-500 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="bg-primary hover:bg-primary/90 text-white font-bold"
                data-ocid="web_design.cta_button"
              >
                Get Website Quote
              </Button>
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
                <p className="text-sm font-medium text-purple-600">
                  🔗 Also explore:{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("seo-services-hyderabad")}
                    className="underline"
                  >
                    SEO Services
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("local-seo-services")}
                    className="underline"
                  >
                    Local SEO
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCAL SEO ───────────────────────────────────────────────────────── */}
      <section
        id="local-seo-services"
        className="py-20 bg-white"
        data-ocid="local_seo.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-green-50 text-green-600 border-green-200">
                Local SEO
              </Badge>
              <h2 className="section-heading mb-4">
                Local SEO Services for Small Businesses in Andhra Pradesh &amp;
                Telangana
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dominate local search results with our{" "}
                <strong>
                  local SEO services for small businesses in Andhra Pradesh
                </strong>
                . We optimize your Google Business Profile, build local
                citations, and help your business appear in the 'near me'
                searches in Guntur, Hyderabad, and across India. As a leading{" "}
                <strong>digital marketing agency in KPHB Hyderabad</strong>, we
                understand the local market and help businesses stand out from
                competitors.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Google Business Profile Optimization",
                    desc: "Complete optimization of your GBP listing including photos, posts, Q&A, categories, and attributes to rank in the Google Maps 3-pack.",
                  },
                  {
                    title: "Local Citation Building",
                    desc: "Build consistent NAP (Name, Address, Phone) citations across major directories like Justdial, Sulekha, IndiaMART, and 50+ local directories.",
                  },
                  {
                    title: "'Near Me' SEO",
                    desc: "Optimize your website and content for location-based 'near me' searches in Guntur, Hyderabad, KPHB, and surrounding areas.",
                  },
                  {
                    title: "Review Management",
                    desc: "Develop a systematic approach to generating and responding to Google reviews to build trust and improve local ranking signals.",
                  },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("contact-digital-marketing-consultant")}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold"
                data-ocid="local_seo.cta_button"
              >
                Get Local SEO Quote
              </Button>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  {
                    icon: MapPin,
                    label: "Top 3 Google Maps pack",
                    color: "text-green-600",
                  },
                  {
                    icon: Phone,
                    label: "More local phone calls",
                    color: "text-primary",
                  },
                  {
                    icon: TrendingUp,
                    label: "Drive foot traffic",
                    color: "text-accent",
                  },
                  {
                    icon: Star,
                    label: "Build local trust",
                    color: "text-yellow-500",
                  },
                ].map(({ icon: Icon, label, color }, i) => (
                  <div
                    key={i}
                    className="bg-secondary/50 rounded-xl p-4 text-center"
                  >
                    <Icon className={`h-6 w-6 ${color} mx-auto mb-2`} />
                    <p className="text-xs font-medium text-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-4 font-display">
                FAQ – Local SEO
              </h3>
              <FAQItem
                q="What is Local SEO?"
                a="Local SEO is the process of optimizing your online presence to attract more business from local searches. It includes Google Business Profile optimization, local citation building, and creating location-specific content to rank in searches like 'digital marketing agency near me'."
              />
              <FAQItem
                q="How do I rank on Google Maps in Guntur?"
                a="To rank on Google Maps in Guntur, you need an optimized Google Business Profile, consistent NAP citations across directories, positive customer reviews, location-specific content on your website, and regular posts on your GBP listing."
              />
              <FAQItem
                q="How long does Local SEO take?"
                a="Local SEO shows faster results than organic SEO. Most businesses see improvements in Google Maps rankings within 4–8 weeks. Full results with significant ranking improvements typically take 3–4 months of consistent optimization."
              />
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm font-medium text-green-600">
                  🔗 Also explore:{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("seo-services-hyderabad")}
                    className="underline"
                  >
                    Full SEO Services
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => scrollTo("website-design-development")}
                    className="underline"
                  >
                    Website Design
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────────── */}
      <section
        id="about-digital-marketing-agency"
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
              Sri Vasundhara Solutions is a digital marketing freelancing agency
              founded in 2025, serving businesses in Guntur, Hyderabad, and
              across India.
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
              { value: "1+", label: "Year Experience" },
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
          <p className="text-center mt-8 text-white/70 text-sm max-w-3xl mx-auto">
            We specialize in{" "}
            <strong className="text-white">
              affordable digital marketing services in Guntur
            </strong>{" "}
            and{" "}
            <strong className="text-white">
              digital marketing services in Hyderabad
            </strong>
            , helping small businesses and startups grow online.
          </p>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────────── */}
      <section
        id="our-process"
        className="py-20 bg-white"
        data-ocid="process.section"
      >
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
                <div className="h-16 w-16 rounded-full bg-primary/10 border-2 border-primary text-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                  {icon}
                </div>
                <div className="h-6 w-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mx-auto -mt-3 mb-3 relative z-20">
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

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section
        id="testimonials"
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

      {/* ── BLOG ────────────────────────────────────────────────────────────── */}
      <section
        id="digital-marketing-blog"
        className="py-20 bg-white"
        data-ocid="blog.section"
      >
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
                  "Learn everything about Search Engine Optimization and how to rank your business on Google. Essential guide for businesses in Guntur and Hyderabad.",
                date: "Mar 2026",
              },
              {
                cat: "Google Ads",
                catColor: "bg-orange-100 text-accent",
                title: "Google Ads vs SEO – Which is Better for Your Business?",
                excerpt:
                  "Compare paid vs organic marketing strategies to decide which works best for your business goals and budget in Hyderabad.",
                date: "Mar 2026",
              },
              {
                cat: "Social Media",
                catColor: "bg-pink-100 text-pink-600",
                title:
                  "Social Media Marketing Tips for Small Businesses in Hyderabad",
                excerpt:
                  "Practical social media strategies to grow your local business, increase engagement, and generate leads in Hyderabad & Guntur.",
                date: "Feb 2026",
              },
              {
                cat: "Local SEO",
                catColor: "bg-green-100 text-green-600",
                title:
                  "Local SEO Guide for Guntur Businesses – Rank on Google Maps",
                excerpt:
                  "Step-by-step guide to optimizing your Google Business Profile and ranking in local searches in Guntur and Andhra Pradesh.",
                date: "Feb 2026",
              },
              {
                cat: "Digital Marketing",
                catColor: "bg-purple-100 text-purple-600",
                title: "Best Digital Marketing Strategies for Startups in 2026",
                excerpt:
                  "Data-driven digital marketing strategies that startups in Hyderabad and Guntur can implement on a limited budget.",
                date: "Jan 2026",
              },
              {
                cat: "Google Ads",
                catColor: "bg-orange-100 text-accent",
                title: "How to Generate Leads Using Google Ads in India",
                excerpt:
                  "Complete beginner's guide to setting up Google Ads campaigns that generate quality leads for your business across India.",
                date: "Jan 2026",
              },
              {
                cat: "SEO",
                catColor: "bg-blue-100 text-primary",
                title:
                  "Benefits of Digital Marketing for Small Business in Andhra Pradesh",
                excerpt:
                  "Why every small business in Andhra Pradesh needs digital marketing to survive and grow in the competitive online landscape of 2026.",
                date: "Dec 2025",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${post.catColor}`}
                    >
                      {post.cat}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 font-display text-base group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    className="mt-4 text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    onClick={() =>
                      scrollTo("contact-digital-marketing-consultant")
                    }
                    data-ocid={`blog.read_more.${i + 1}`}
                  >
                    Read More <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section
        id="digital-marketing-pricing-plans"
        className="py-20 bg-secondary/30"
        data-ocid="pricing.section"
      >
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
            {[
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
            ].map(({ name, price, period, popular, features }, i) => (
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
                <Button
                  onClick={() =>
                    scrollTo("contact-digital-marketing-consultant")
                  }
                  className={`w-full font-bold ${
                    popular
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                  data-ocid={`pricing.get_started.${i + 1}`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section
        id="contact-digital-marketing-consultant"
        className="py-20 bg-white"
        data-ocid="contact.section"
      >
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
            {/* Left: Contact Info */}
            <div>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9398241974",
                    href: "tel:+919398241974",
                    color: "text-primary",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "srivasundharasolutions@gmail.com",
                    href: "mailto:srivasundharasolutions@gmail.com",
                    color: "text-primary",
                  },
                ].map(({ icon: Icon, label, value, href, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex items-center gap-4 p-4 border border-border rounded-xl hover:bg-secondary/50 transition-colors group"
                    data-ocid={`contact.info.${i + 1}`}
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
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
                    <p className="text-xs text-muted-foreground mt-1">
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
                data-ocid="contact.whatsapp_link"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp – Quick
                Response!
              </a>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4!2d78.3915!3d17.4905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e9!2sKPHB+Colony%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sri Vasundhara Solutions – KPHB Colony, Hyderabad"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6 font-display">
                Book Your Free Consultation
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────────── */}
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
            <Button
              onClick={() => scrollTo("contact-digital-marketing-consultant")}
              className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 text-lg rounded-xl"
              data-ocid="cta.primary_button"
            >
              Get Free Audit Now 🚀
            </Button>
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

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white" data-ocid="footer.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Col 1: Brand */}
            <div>
              <img
                src="/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png"
                alt="Sri Vasundhara Solutions"
                className="h-12 w-auto mb-4 brightness-0 invert"
                loading="lazy"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Digital Marketing Agency in Guntur &amp; Hyderabad. Helping
                businesses grow online with SEO, Google Ads, and Social Media
                Marketing.
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: SiFacebook,
                    href: "https://www.facebook.com/Srivasundharasolutions",
                    label: "Facebook",
                  },
                  {
                    icon: SiInstagram,
                    href: "https://www.instagram.com/srivasundharasolutions/",
                    label: "Instagram",
                  },
                  {
                    icon: SiLinkedin,
                    href: "https://www.linkedin.com/company/110518953/",
                    label: "LinkedIn",
                  },
                  {
                    icon: SiYoutube,
                    href: "https://www.youtube.com/@SriVasundharaSolutions",
                    label: "YouTube",
                  },
                  {
                    icon: SiX,
                    href: "https://x.com/SrivasundharaS",
                    label: "Twitter/X",
                  },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="h-9 w-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                    data-ocid={`footer.social.${i + 1}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4 font-display">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", id: "hero" },
                  {
                    label: "About Our Agency",
                    id: "about-digital-marketing-agency",
                  },
                  {
                    label: "Digital Marketing Services",
                    id: "digital-marketing-services",
                  },
                  {
                    label: "Pricing Plans",
                    id: "digital-marketing-pricing-plans",
                  },
                  { label: "Blog", id: "digital-marketing-blog" },
                  {
                    label: "Contact",
                    id: "contact-digital-marketing-consultant",
                  },
                ].map(({ label, id }, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      data-ocid={`footer.nav.${i + 1}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="font-bold text-white mb-4 font-display">
                Our Services
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "SEO Services", id: "seo-services-hyderabad" },
                  {
                    label: "Google Ads / PPC",
                    id: "google-ads-ppc-management",
                  },
                  {
                    label: "Social Media Marketing",
                    id: "social-media-marketing-services",
                  },
                  { label: "Website Design", id: "website-design-development" },
                  { label: "Local SEO", id: "local-seo-services" },
                  {
                    label: "Lead Generation",
                    id: "contact-digital-marketing-consultant",
                  },
                ].map(({ label, id }, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => scrollTo(id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      data-ocid={`footer.service.${i + 1}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact / NAP */}
            <div>
              <h4 className="font-bold text-white mb-4 font-display">
                Contact Us
              </h4>
              <address className="not-italic space-y-3">
                <a
                  href="tel:+919398241974"
                  className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  data-ocid="footer.phone_link"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" /> +91
                  9398241974
                </a>
                <a
                  href="mailto:srivasundharasolutions@gmail.com"
                  className="flex items-start gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  data-ocid="footer.email_link"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />{" "}
                  srivasundharasolutions@gmail.com
                </a>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p>KPHB Colony, Hyderabad – 500072</p>
                    <p className="mt-1">Amaravati Road, Guntur – 522034</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="h-4 w-4 text-primary shrink-0" /> Mon–Sat:
                  9AM–6PM
                </div>
              </address>
              <a
                href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                data-ocid="footer.whatsapp_button"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sri Vasundhara Solutions. All Rights
              Reserved.
            </p>
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                    data-ocid="footer.privacy_policy_link"
                  >
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-2xl max-h-[80vh] overflow-y-auto"
                  data-ocid="privacy_policy.dialog"
                >
                  <DialogHeader>
                    <DialogTitle className="font-display">
                      Privacy Policy – Sri Vasundhara Solutions
                    </DialogTitle>
                  </DialogHeader>
                  <PrivacyPolicyContent />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                    data-ocid="footer.terms_link"
                  >
                    Terms &amp; Conditions
                  </button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-2xl max-h-[80vh] overflow-y-auto"
                  data-ocid="terms.dialog"
                >
                  <DialogHeader>
                    <DialogTitle className="font-display">
                      Terms &amp; Conditions – Sri Vasundhara Solutions
                    </DialogTitle>
                  </DialogHeader>
                  <TermsContent />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ────────────────────────────────────────────────── */}
      {/* WhatsApp */}
      <a
        href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        data-ocid="floating.whatsapp_button"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {/* Call */}
      <a
        href="tel:+919398241974"
        aria-label="Call Sri Vasundhara Solutions"
        className="fixed bottom-24 right-6 z-50 h-14 w-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        data-ocid="floating.call_button"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
