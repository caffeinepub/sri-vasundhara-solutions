import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const serviceLinks = [
    { label: "All Services", to: "/services" },
    { label: "SEO Services", to: "/seo-services" },
    { label: "Google Ads Services", to: "/google-ads-services" },
    { label: "Social Media Marketing", to: "/social-media-marketing" },
    { label: "Website Design", to: "/website-design" },
    { label: "Local SEO Services", to: "/local-seo-services" },
    { label: "Lead Generation", to: "/lead-generation" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* ── STICKY HEADER ─── */}
      <header
        className="sticky top-0 z-50 bg-white border-b border-border shadow-sm"
        data-ocid="header.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              data-ocid="header.home_link"
            >
              <img
                src="/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png"
                alt="Sri Vasundhara Solutions - Digital Marketing Agency"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Main navigation"
            >
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.home_link"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.about_link"
              >
                About
              </Link>

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
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setServicesDropdownOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === "Escape")
                          setServicesDropdownOpen(false);
                      }}
                      role="button"
                      tabIndex={0}
                    />
                    <div
                      className="absolute top-full left-0 mt-2 w-60 bg-white border border-border rounded-xl shadow-lg py-2 z-50"
                      data-ocid="nav.services_menu"
                    >
                      {serviceLinks.map((s, i) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className={`block px-4 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors ${
                            i === 0
                              ? "font-semibold text-primary border-b border-border mb-1"
                              : ""
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                          data-ocid="nav.service_link"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Link
                to="/blog"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.blog_link"
              >
                Blog
              </Link>
              <Link
                to="/contact-us"
                className="text-sm font-medium hover:text-primary transition-colors"
                data-ocid="nav.contact_link"
              >
                Contact
              </Link>
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
              <Link to="/contact-us">
                <Button
                  style={{ backgroundColor: "#DC2626" }}
                  className="text-white font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-colors"
                  data-ocid="header.get_audit_button"
                >
                  Get Free Audit
                </Button>
              </Link>
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
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.mobile_home_link"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.mobile_about_link"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 text-sm font-semibold text-primary hover:text-primary/80"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.mobile_all_services_link"
            >
              All Services
            </Link>
            <p className="py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Services
            </p>
            {serviceLinks.slice(1).map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="block py-2 pl-4 text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
                data-ocid="nav.mobile_service_link"
              >
                {s.label}
              </Link>
            ))}
            <Link
              to="/blog"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.mobile_blog_link"
            >
              Blog
            </Link>
            <Link
              to="/contact-us"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
              data-ocid="nav.mobile_contact_link"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919398241974"
                className="btn-blue text-sm text-center justify-center"
                data-ocid="header.mobile_phone_link"
              >
                <Phone className="h-4 w-4" /> +91 9398241974
              </a>
              <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                <button
                  type="button"
                  className="btn-orange w-full justify-center"
                  data-ocid="header.mobile_audit_button"
                >
                  Get Free Audit
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ─── */}
      <main>{children}</main>

      {/* ── FOOTER ─── */}
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
                    key={href}
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
                  { label: "Home", to: "/" },
                  { label: "About Our Agency", to: "/about-us" },
                  { label: "All Services", to: "/services" },
                  { label: "Blog", to: "/blog" },
                  { label: "Contact", to: "/contact-us" },
                ].map(({ label, to }, i) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      data-ocid={`footer.nav.${i + 1}`}
                    >
                      {label}
                    </Link>
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
                  { label: "SEO Services", to: "/seo-services" },
                  { label: "Google Ads / PPC", to: "/google-ads-services" },
                  {
                    label: "Social Media Marketing",
                    to: "/social-media-marketing",
                  },
                  { label: "Website Design", to: "/website-design" },
                  { label: "Local SEO Services", to: "/local-seo-services" },
                  { label: "Lead Generation", to: "/lead-generation" },
                ].map(({ label, to }, i) => (
                  <li key={to + label}>
                    <Link
                      to={to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                      data-ocid={`footer.service.${i + 1}`}
                    >
                      {label}
                    </Link>
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
                    <p>KPHB Colony, Hyderabad &ndash; 500072</p>
                    <p className="mt-1">
                      Sri Vasundhara Solutions, Gorantla, Guntur, Andhra Pradesh
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="h-4 w-4 text-primary shrink-0" />{" "}
                  Mon&ndash;Sat: 9AM&ndash;6PM
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
              &copy; {new Date().getFullYear()} Sri Vasundhara Solutions. All
              Rights Reserved.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Built with love using caffeine.ai
              </a>
            </p>
            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
                data-ocid="footer.privacy_policy_link"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-gray-500 hover:text-white text-sm transition-colors"
                data-ocid="footer.terms_link"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING BUTTONS ─── */}
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
      <a
        href="tel:+919398241974"
        aria-label="Call Sri Vasundhara Solutions"
        className="fixed bottom-24 right-6 z-50 h-14 w-14 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        style={{ backgroundColor: "#4FC3C7" }}
        data-ocid="floating.call_button"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
