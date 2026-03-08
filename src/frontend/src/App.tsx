import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ArrowRight,
  BarChart,
  BarChart2,
  Building2,
  CheckCircle,
  ExternalLink,
  Facebook,
  Filter,
  Globe,
  Instagram,
  Layout,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import type { BlogPost, PortfolioItem } from "./backend.d.ts";
import { useActor } from "./hooks/useActor";

// ─── Translations ─────────────────────────────────────────────
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      headline: "Digital Marketing Agency Helping Businesses Grow Online",
      subheadline:
        "Sri Vasundhara Solutions is your trusted digital marketing partner in Hyderabad and Guntur. We help businesses grow their online presence with data-driven SEO, Google Ads, social media marketing, website design, and lead generation strategies tailored for local markets.",
      cta1: "Get Free Consultation",
      cta2: "View Services",
    },
    about: {
      heading: "About Sri Vasundhara Solutions",
      story:
        "Sri Vasundhara Solutions is a digital marketing freelancing agency founded in 2025, headquartered in KPHB Colony, Hyderabad, Telangana. We serve clients online across Hyderabad, Guntur, and throughout Andhra Pradesh and Telangana. With 1+ year of experience and 5+ successfully delivered projects, we specialize in SEO, social media marketing, Google Ads, website design, lead generation, and Google Business Profile optimization.",
      stats: {
        years: "Year Experience",
        projects: "Projects Completed",
        satisfaction: "Client Satisfaction",
      },
      trust:
        "We're committed to delivering results that matter. Our data-driven approach ensures every rupee you invest in marketing works harder for your business.",
    },
    services: { heading: "Our Services" },
    whyUs: { heading: "Why Choose Us" },
    process: { heading: "Our Proven Process" },
    pricing: { heading: "Simple, Transparent Pricing" },
    testimonials: { heading: "What Our Clients Say" },
    portfolio: { heading: "Our Work" },
    blog: { heading: "Digital Marketing Insights" },
    cta: {
      headline: "Ready to Grow Your Business Online?",
      sub: "Join 5+ businesses already growing with Sri Vasundhara Solutions.",
      button: "Get Free Consultation",
    },
    contact: {
      heading: "Get In Touch",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service Interested In",
      message: "Your Message",
      submit: "Send Message",
      successMsg: "Thank you! We'll get back to you within 24 hours.",
      errorMsg: "Something went wrong. Please try again.",
    },
    footer: {
      tagline:
        "Your trusted digital marketing partner in Hyderabad & Guntur for growth-focused businesses.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contactInfo: "Contact Info",
      copyright: "© 2026 Sri Vasundhara Solutions. All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    consultation: "Get Free Consultation",
  },
  te: {
    nav: {
      home: "హోమ్",
      services: "సేవలు",
      pricing: "ధరలు",
      about: "మా గురించి",
      portfolio: "పోర్ట్‌ఫోలియో",
      blog: "బ్లాగ్",
      contact: "సంప్రదించండి",
    },
    hero: {
      headline: "వ్యాపారాలను ఆన్‌లైన్‌లో పెంచడంలో సహాయపడే డిజిటల్ మార్కెటింగ్ ఏజెన్సీ",
      subheadline:
        "శ్రీ వసుంధర సొల్యూషన్స్ హైదరాబాద్ మరియు గుంటూర్‌లో మీ నమ్మకమైన డిజిటల్ మార్కెటింగ్ భాగస్వామి. SEO, Google Ads, సోషల్ మీడియా మార్కెటింగ్, వెబ్‌సైట్ డిజైన్ మరియు లీడ్ జనరేషన్ వ్యూహాలతో స్థానిక మార్కెట్‌లకు అనుగుణంగా వ్యాపారాలు పెరగడంలో సహాయపడతాము.",
      cta1: "ఉచిత సలహా పొందండి",
      cta2: "సేవలు చూడండి",
    },
    about: {
      heading: "శ్రీ వసుంధర సొల్యూషన్స్ గురించి",
      story:
        "శ్రీ వసుంధర సొల్యూషన్స్ 2025లో స్థాపించబడిన డిజిటల్ మార్కెటింగ్ ఫ్రీలాన్సింగ్ ఏజెన్సీ, KPHB కాలనీ, హైదరాబాద్, తెలంగాణలో ప్రధాన కార్యాలయం ఉంది. మేము హైదరాబాద్, గుంటూర్ మరియు ఆంధ్రప్రదేశ్, తెలంగాణ అంతటా ఆన్‌లైన్‌లో క్లయింట్లకు సేవలందిస్తాము.",
      stats: {
        years: "సంవత్సర అనుభవం",
        projects: "విజయవంతమైన ప్రాజెక్టులు",
        satisfaction: "క్లయింట్ సంతృప్తి",
      },
      trust: "మేము ఫలితాలు సాధించడానికి నిబద్ధులం. మీ వ్యాపార వృద్ధికి ఉత్తమ వ్యూహాలు అందిస్తాము.",
    },
    services: { heading: "మా సేవలు" },
    whyUs: { heading: "మాను ఎందుకు ఎంచుకోవాలి" },
    process: { heading: "మా నిరూపిత ప్రక్రియ" },
    pricing: { heading: "సరళమైన, పారదర్శకమైన ధరలు" },
    testimonials: { heading: "మా క్లయింట్లు చెప్పేది" },
    portfolio: { heading: "మా పని" },
    blog: { heading: "డిజిటల్ మార్కెటింగ్ అంతర్దృష్టులు" },
    cta: {
      headline: "మీ వ్యాపారాన్ని ఆన్‌లైన్‌లో పెంచుకోవడానికి సిద్ధంగా ఉన్నారా?",
      sub: "5+ వ్యాపారాలు ఇప్పటికే మాతో పెరుగుతున్నాయి.",
      button: "ఉచిత సలహా పొందండి",
    },
    contact: {
      heading: "సంప్రదించండి",
      name: "మీ పేరు",
      email: "ఇమెయిల్ చిరునామా",
      phone: "ఫోన్ నంబర్",
      service: "ఆసక్తి ఉన్న సేవ",
      message: "మీ సందేశం",
      submit: "సందేశం పంపండి",
      successMsg: "ధన్యవాదాలు! మేము 24 గంటల్లో మీకు తిరిగి వస్తాము.",
      errorMsg: "ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
    },
    footer: {
      tagline: "హైదరాబాద్ & గుంటూర్‌లో వ్యాపార వృద్ధికి నమ్మకమైన డిజిటల్ మార్కెటింగ్ భాగస్వామి.",
      quickLinks: "త్వరిత లింక్‌లు",
      services: "మా సేవలు",
      contactInfo: "సంప్రదింపు సమాచారం",
      copyright: "© 2026 శ్రీ వసుంధర సొల్యూషన్స్. అన్ని హక్కులూ రిజర్వ్ చేయబడ్డాయి.",
      privacy: "గోప్యతా విధానం",
      terms: "నిబంధనలు & షరతులు",
    },
    consultation: "ఉచిత సలహా పొందండి",
  },
};

type Lang = "en" | "te";

// ─── Static Data ──────────────────────────────────────────────
const SERVICES = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Rank higher on Google with technical SEO, keyword research, on-page optimization, and link building strategies for Hyderabad & Guntur markets.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build your brand and engage customers across Facebook, Instagram, and LinkedIn with content strategies tailored for Telugu-speaking markets.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Drive targeted leads with expertly managed Google Search, Display, and Shopping ad campaigns with transparent budget management.",
  },
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Mobile-first, SEO-ready websites that load fast, look professional, and convert visitors into paying customers.",
  },
  {
    icon: Filter,
    title: "Lead Generation",
    description:
      "Multi-channel lead generation funnels using Google Ads, social media, landing pages, and WhatsApp to fill your sales pipeline.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing",
    description:
      "Reach customers directly with personalized WhatsApp broadcast campaigns and automated messaging sequences.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with targeted email drip campaigns, newsletters, and promotional sequences.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Partner with the right regional Telugu influencers on Instagram and YouTube to amplify your brand awareness.",
  },
  {
    icon: MapPin,
    title: "Google My Business",
    description:
      "Dominate local search results in Hyderabad and Guntur with complete Google Business Profile optimization and management.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description:
      "Make smarter marketing decisions with comprehensive Google Analytics 4 reporting, heatmaps, and conversion tracking.",
  },
];

const WHY_US = [
  {
    icon: TrendingUp,
    title: "Data-Driven Strategies",
    description:
      "Every campaign is backed by thorough market research, competitor analysis, and real-time performance data to maximize your ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable & Transparent",
    description:
      "Premium digital marketing services at prices built for growing Indian businesses. No hidden fees, clear monthly reporting.",
  },
  {
    icon: BarChart,
    title: "Local Market Expertise",
    description:
      "Deep understanding of Hyderabad and Guntur markets, Telugu-speaking audiences, and regional business culture.",
  },
  {
    icon: Globe,
    title: "Result-Focused Approach",
    description:
      "We measure success in your revenue growth, not vanity metrics. Every strategy is tied to tangible business outcomes.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Business Analysis",
    description:
      "We study your business, competition, and target audience to understand your unique market position.",
  },
  {
    number: "02",
    title: "Strategy Planning",
    description:
      "We create a customized digital marketing roadmap aligned with your specific business goals and budget.",
  },
  {
    number: "03",
    title: "Campaign Execution",
    description:
      "Our experts execute campaigns across SEO, social media, Google Ads, and other channels simultaneously.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "We monitor metrics in real-time and optimize campaigns for maximum ROI and conversions.",
  },
  {
    number: "05",
    title: "Growth Scaling",
    description:
      "Once performance goals are met, we scale winning strategies to accelerate your business growth.",
  },
];

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "₹8,999",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    popular: false,
    features: [
      "Google My Business setup & optimization",
      "On-page SEO (up to 10 pages)",
      "8 social media posts/month",
      "Monthly performance report",
      "WhatsApp support",
      "Competitor analysis basics",
    ],
    cta: "Get Started",
    ocid: "pricing.starter_button",
  },
  {
    name: "Growth",
    price: "₹17,999",
    period: "/month",
    description: "For growing brands ready to accelerate online",
    popular: true,
    features: [
      "Everything in Starter",
      "Google Ads management (up to ₹20k ad spend)",
      "16 social media posts/month",
      "Google Analytics 4 setup",
      "Email marketing (2 campaigns/month)",
      "Bi-weekly performance report",
      "Priority email & phone support",
      "Keyword rank tracking",
    ],
    cta: "Get Started",
    ocid: "pricing.growth_button",
  },
  {
    name: "Pro",
    price: "₹29,999",
    period: "/month",
    description:
      "Complete digital marketing solution for established businesses",
    popular: false,
    features: [
      "Everything in Growth",
      "Website design & maintenance",
      "Lead generation campaigns",
      "WhatsApp & email marketing automation",
      "Influencer marketing coordination",
      "Custom monthly reports",
      "Dedicated account manager",
      "24/7 priority support",
      "Unlimited ad spend management",
    ],
    cta: "Get Started",
    ocid: "pricing.pro_button",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Sri Vasundhara Solutions completely transformed our restaurant's online presence. Our Google rankings improved within 2 months and we started getting 30+ new customer inquiries every week through our Google Business Profile.",
    name: "Rajesh Kumar",
    role: "Restaurant Owner, Hyderabad",
    initials: "RK",
    color: "bg-brand-teal",
  },
  {
    quote:
      "Their Google Ads management is exceptional. We went from spending money with zero results to getting 50+ qualified real estate leads per month. The ROI has been outstanding and they're very transparent about results.",
    name: "Priya Sharma",
    role: "Real Estate Agent, Guntur",
    initials: "PS",
    color: "bg-brand-green",
  },
  {
    quote:
      "Very professional team. Our social media following grew from 500 to 5,200 in just 6 months and our website traffic tripled. They truly understand local Telugu business markets.",
    name: "Venkat Reddy",
    role: "Startup Founder, Hyderabad",
    initials: "VR",
    color: "bg-brand-teal/80",
  },
];

const FALLBACK_PORTFOLIO: PortfolioItem[] = [
  {
    title: "Restaurant Website Redesign",
    category: "Website Design",
    clientType: "Food Industry",
    result: "+150% online orders",
    metric: "150%",
    description:
      "Complete redesign with online ordering and reservation system.",
  },
  {
    title: "E-commerce SEO Campaign",
    category: "SEO",
    clientType: "Retail Store",
    result: "+200% organic traffic",
    metric: "200%",
    description: "Comprehensive SEO strategy driving massive organic growth.",
  },
  {
    title: "Real Estate Social Media",
    category: "Social Media",
    clientType: "Real Estate",
    result: "+300% engagement",
    metric: "300%",
    description: "Full social media management with content strategy.",
  },
  {
    title: "Clinic GMB Optimization",
    category: "GMB Optimization",
    clientType: "Healthcare",
    result: "2x more calls",
    metric: "2x",
    description: "Google My Business optimization for local clinic visibility.",
  },
  {
    title: "Startup Lead Generation",
    category: "Lead Generation",
    clientType: "SaaS Startup",
    result: "80+ leads/month",
    metric: "80+",
    description: "Multi-channel lead generation funnel for B2B startup.",
  },
];

const FALLBACK_BLOG: BlogPost[] = [
  {
    title: "Top 10 SEO Strategies to Rank Your Business on Google in 2026",
    category: "SEO",
    date: "Mar 2026",
    readTime: BigInt(6),
    excerpt:
      "Discover the SEO tactics that are working right now for businesses in Hyderabad and Guntur. From local SEO and Google Business Profile optimization to technical on-page strategies — ranked and explained.",
    slug: "top-seo-strategies-2026",
  },
  {
    title:
      "How to Build a Winning Social Media Strategy for Local Businesses in India",
    category: "Social Media",
    date: "Feb 2026",
    readTime: BigInt(7),
    excerpt:
      "A practical guide to creating a social media strategy that drives real foot traffic and online sales for local businesses in Telangana and Andhra Pradesh.",
    slug: "social-media-strategy-local-india",
  },
  {
    title:
      "Google Ads vs Facebook Ads: Which is Better for Small Businesses in Hyderabad?",
    category: "Google Ads",
    date: "Jan 2026",
    readTime: BigInt(5),
    excerpt:
      "A deep comparison of Google Ads and Facebook Ads to help small business owners in Hyderabad and Guntur choose the right advertising platform for their goals and budget.",
    slug: "google-ads-vs-facebook-ads-india",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Website Design":
    "bg-brand-teal/10 text-brand-teal-dark border-brand-teal/20",
  SEO: "bg-brand-green/10 text-green-700 border-brand-green/20",
  "Social Media": "bg-purple-50 text-purple-700 border-purple-200",
  "GMB Optimization": "bg-orange-50 text-orange-700 border-orange-200",
  "Lead Generation": "bg-brand-red/10 text-red-700 border-brand-red/20",
  "Google Ads": "bg-blue-50 text-blue-700 border-blue-200",
};

function getCategoryColor(cat: string) {
  return (
    CATEGORY_COLORS[cat] ??
    "bg-brand-teal/10 text-brand-teal-dark border-brand-teal/20"
  );
}

// ─── Animated Counter ─────────────────────────────────────────
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-5xl font-display font-black text-brand-teal transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: "0.1s" }}
      >
        {value}
      </div>
      <div className="text-muted-foreground mt-1 font-medium text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

// ─── Skeleton Cards ───────────────────────────────────────────
function PortfolioSkeleton() {
  return (
    <div
      data-ocid="portfolio.loading_state"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl border p-6 space-y-3">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-8 w-24" />
        </div>
      ))}
    </div>
  );
}

function BlogSkeleton() {
  return (
    <div
      data-ocid="blog.loading_state"
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl border p-6 space-y-3">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  );
}

// ─── Privacy Policy Dialog ────────────────────────────────────
function PrivacyPolicyDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        data-ocid="privacy.dialog"
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            Privacy Policy — Sri Vasundhara Solutions
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last updated: January 2026
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 text-sm text-foreground leading-relaxed mt-2">
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              1. Introduction
            </h3>
            <p className="text-muted-foreground">
              Sri Vasundhara Solutions ("we", "our", or "us") is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, and safeguard information when you visit our
              website or contact us regarding our digital marketing services.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              2. Information We Collect
            </h3>
            <p className="text-muted-foreground mb-2">
              We collect information you voluntarily provide through our contact
              form, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service interest</li>
              <li>Messages and inquiries submitted via the contact form</li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We do not collect payment information directly. We may also
              automatically collect technical data such as IP address, browser
              type, and pages visited through analytics tools.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              3. How We Use Your Information
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
              <li>To respond to your inquiries and service requests</li>
              <li>To improve our website and services</li>
              <li>
                To send occasional marketing updates (you may opt out at any
                time by contacting us)
              </li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              4. Cookies & Analytics
            </h3>
            <p className="text-muted-foreground">
              We use Google Analytics to analyze website traffic and user
              behavior. Google Analytics uses cookies to collect anonymized
              data. You can opt out of Google Analytics tracking by installing
              the Google Analytics Opt-out Browser Add-on. We may use session
              cookies to improve your browsing experience; these are deleted
              when you close your browser.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              5. Data Security
            </h3>
            <p className="text-muted-foreground">
              We implement reasonable technical and organizational measures to
              protect your personal data against unauthorized access,
              alteration, disclosure, or destruction. However, no internet
              transmission is completely secure and we cannot guarantee absolute
              security.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              6. Third-Party Links
            </h3>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of those websites and
              encourage you to review their privacy policies.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              7. Data Retention
            </h3>
            <p className="text-muted-foreground">
              We retain personal data only for as long as necessary to fulfill
              the purposes outlined in this policy or as required by law.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              8. Your Rights
            </h3>
            <p className="text-muted-foreground">
              You have the right to access, correct, or request deletion of your
              personal data. To exercise these rights, please contact us.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              9. Contact Information
            </h3>
            <p className="text-muted-foreground">
              For any privacy-related questions or requests, please contact us
              at:
            </p>
            <div className="mt-2 space-y-1 text-muted-foreground">
              <p>
                Email:{" "}
                <a
                  href="mailto:srivasundharasolutions@gmail.com"
                  className="text-brand-teal hover:underline"
                >
                  srivasundharasolutions@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919398241974"
                  className="text-brand-teal hover:underline"
                >
                  +91 9398241974
                </a>
              </p>
              <p>KPHB Colony, Hyderabad, Telangana – 500072</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Terms & Conditions Dialog ────────────────────────────────
function TermsDialog({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        data-ocid="terms.dialog"
        className="max-w-2xl max-h-[80vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold text-foreground">
            Terms & Conditions — Sri Vasundhara Solutions
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Last updated: January 2026
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-5 text-sm text-foreground leading-relaxed mt-2">
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              1. Acceptance of Terms
            </h3>
            <p className="text-muted-foreground">
              By engaging Sri Vasundhara Solutions for digital marketing
              services or using our website, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these
              terms, please do not use our services.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              2. Services Description
            </h3>
            <p className="text-muted-foreground">
              Sri Vasundhara Solutions provides digital marketing services
              including SEO, social media marketing, Google Ads management,
              website design, lead generation, WhatsApp marketing, email
              marketing, influencer marketing, and Google Business Profile
              optimization. Specific deliverables and timelines will be defined
              in individual service agreements.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              3. Payment Terms
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
              <li>
                Project-based work requires a 50% upfront payment before
                commencement, with the remaining 50% due upon project
                completion.
              </li>
              <li>
                Monthly retainer services are billed at the beginning of each
                month.
              </li>
              <li>
                Payments are due within 7 days of invoice date unless otherwise
                agreed.
              </li>
              <li>
                Late payments may attract a penalty of 2% per month on the
                outstanding amount.
              </li>
            </ul>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              4. Intellectual Property
            </h3>
            <p className="text-muted-foreground">
              Upon full payment, the client owns all final deliverables
              including website designs, content, and creative assets. Sri
              Vasundhara Solutions retains the right to showcase completed work
              in our portfolio for promotional purposes unless the client
              requests confidentiality in writing.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              5. Confidentiality
            </h3>
            <p className="text-muted-foreground">
              Both parties agree to keep confidential all proprietary
              information shared during the engagement. This includes business
              strategies, financial data, and trade secrets. This obligation
              survives the termination of the service agreement.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              6. Limitation of Liability
            </h3>
            <p className="text-muted-foreground">
              Sri Vasundhara Solutions provides services on a best-effort basis.
              We do not guarantee specific rankings, traffic levels, or revenue
              results, as these depend on factors outside our control including
              search engine algorithm changes. Our total liability is limited to
              the amount paid for the specific service in question.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              7. Termination
            </h3>
            <p className="text-muted-foreground">
              Either party may terminate ongoing services with 30 days' written
              notice. Upon termination, all outstanding fees for work completed
              become immediately due. Sri Vasundhara Solutions will deliver all
              work completed up to the termination date.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              8. Governing Law
            </h3>
            <p className="text-muted-foreground">
              These Terms and Conditions are governed by the laws of Telangana,
              India. Any disputes arising from these terms shall be subject to
              the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>
          <section>
            <h3 className="font-display font-bold text-base mb-2">
              9. Contact Information
            </h3>
            <p className="text-muted-foreground">
              For any questions regarding these terms, please contact us at:
            </p>
            <div className="mt-2 space-y-1 text-muted-foreground">
              <p>
                Email:{" "}
                <a
                  href="mailto:srivasundharasolutions@gmail.com"
                  className="text-brand-teal hover:underline"
                >
                  srivasundharasolutions@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919398241974"
                  className="text-brand-teal hover:underline"
                >
                  +91 9398241974
                </a>
              </p>
              <p>KPHB Colony, Hyderabad, Telangana – 500072</p>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main App ─────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { actor, isFetching } = useActor();

  // Scroll handler for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Portfolio query
  const { data: portfolioData, isLoading: portfolioLoading } = useQuery<
    PortfolioItem[]
  >({
    queryKey: ["portfolioItems"],
    queryFn: async () => {
      if (!actor) return FALLBACK_PORTFOLIO;
      const items = await actor.getPortfolioItems();
      return items.length > 0 ? items : FALLBACK_PORTFOLIO;
    },
    enabled: !!actor && !isFetching,
    initialData: FALLBACK_PORTFOLIO,
  });

  // Blog query
  const { data: blogData, isLoading: blogLoading } = useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return FALLBACK_BLOG;
      const posts = await actor.getBlogPosts();
      return posts.length > 0 ? posts : FALLBACK_BLOG;
    },
    enabled: !!actor && !isFetching,
    initialData: FALLBACK_BLOG,
  });

  // Contact mutation
  const contactMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("No connection");
      await actor.submitContactForm(
        formData.name,
        formData.email,
        formData.phone,
        formData.service,
        formData.message,
      );
    },
    onMutate: () => setFormStatus("loading"),
    onSuccess: () => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      toast.success(t.contact.successMsg);
    },
    onError: () => {
      setFormStatus("error");
      toast.error(t.contact.errorMsg);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const portfolioItems = portfolioData ?? FALLBACK_PORTFOLIO;
  const blogPosts = blogData ?? FALLBACK_BLOG;

  return (
    <div className="min-h-screen font-body bg-background text-foreground">
      <Toaster />

      {/* ─── Sticky Header ─────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2 group"
              aria-label="Sri Vasundhara Solutions - Go to top"
            >
              <img
                src="/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png"
                alt="Sri Vasundhara Solutions Logo"
                className="h-10 w-auto object-contain"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {(
                [
                  "home",
                  "services",
                  "pricing",
                  "about",
                  "portfolio",
                  "blog",
                  "contact",
                ] as const
              ).map((key) => (
                <button
                  type="button"
                  key={key}
                  data-ocid={`nav.${key}_link`}
                  onClick={() => scrollTo(key)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-brand-teal transition-colors rounded-md hover:bg-brand-teal/5"
                >
                  {t.nav[key]}
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <button
                type="button"
                data-ocid="nav.language_toggle"
                onClick={() => setLang(lang === "en" ? "te" : "en")}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold border border-border rounded-full hover:border-brand-teal hover:text-brand-teal transition-all"
              >
                <Globe className="h-3 w-3" />
                {lang === "en" ? "EN | TE" : "TE | EN"}
              </button>

              {/* CTA */}
              <Button
                data-ocid="nav.cta_button"
                onClick={() => scrollTo("contact")}
                size="sm"
                className="hidden sm:flex bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold px-4 shadow-teal hover:shadow-teal-lg transition-all"
              >
                {t.consultation}
              </Button>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {(
                [
                  "home",
                  "services",
                  "pricing",
                  "about",
                  "portfolio",
                  "blog",
                  "contact",
                ] as const
              ).map((key) => (
                <button
                  type="button"
                  key={key}
                  data-ocid={`nav.${key}_link`}
                  onClick={() => scrollTo(key)}
                  className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-brand-teal hover:bg-brand-teal/5 rounded-lg transition-colors"
                >
                  {t.nav[key]}
                </button>
              ))}
              <div className="pt-3 border-t border-border flex items-center gap-3">
                <button
                  type="button"
                  data-ocid="nav.language_toggle"
                  onClick={() => setLang(lang === "en" ? "te" : "en")}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-semibold border border-border rounded-full hover:border-brand-teal hover:text-brand-teal transition-all"
                >
                  <Globe className="h-3 w-3" />
                  {lang === "en" ? "EN | TE" : "TE | EN"}
                </button>
                <Button
                  data-ocid="nav.cta_button"
                  onClick={() => {
                    scrollTo("contact");
                    setMobileMenuOpen(false);
                  }}
                  size="sm"
                  className="bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold flex-1"
                >
                  {t.consultation}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ─── Hero Section ──────────────────────────────────── */}
      <section
        id="home"
        className="hero-gradient pt-16 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6 fade-in-up">
              <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 font-semibold px-4 py-1.5">
                🚀 Digital Marketing Agency — Hyderabad & Guntur
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
                {t.hero.headline.split("Helping Businesses Grow Online")[0]}
                <span className="text-brand-teal">
                  Helping Businesses Grow Online
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  data-ocid="hero.primary_button"
                  onClick={() => scrollTo("contact")}
                  size="lg"
                  className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold px-8 py-6 text-base shadow-teal hover:shadow-teal-lg transition-all hover:-translate-y-0.5"
                >
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  data-ocid="hero.secondary_button"
                  onClick={() => scrollTo("services")}
                  variant="outline"
                  size="lg"
                  className="border-2 border-brand-teal text-brand-teal-dark hover:bg-brand-teal hover:text-white font-bold px-8 py-6 text-base transition-all"
                >
                  {t.hero.cta2}
                </Button>
              </div>
              {/* Trust bar */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  "5+ Projects Completed",
                  "100% Client Satisfaction",
                  "Hyderabad & Guntur",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-brand-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="float-animation w-full max-w-md lg:max-w-lg">
                <img
                  src="/assets/generated/hero-illustration.dim_800x600.png"
                  alt="Digital Marketing Illustration"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About Section ─────────────────────────────────── */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div className="space-y-10">
              <div className="grid grid-cols-3 gap-6">
                <AnimatedStat value="1+" label={t.about.stats.years} />
                <AnimatedStat value="5+" label={t.about.stats.projects} />
                <AnimatedStat value="100%" label={t.about.stats.satisfaction} />
              </div>
              {/* Decorative element */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-brand-teal/10 to-brand-green/10 p-8 rounded-2xl border border-brand-teal/20">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: TrendingUp,
                        label: "Revenue Growth",
                        val: "↑ 2.4x",
                      },
                      { icon: Users, label: "Happy Clients", val: "5+" },
                      { icon: Globe, label: "Services", val: "10+" },
                      { icon: BarChart2, label: "Avg. ROI", val: "300%" },
                    ].map(({ icon: Icon, label, val }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-border shadow-xs"
                      >
                        <div className="p-2 bg-brand-teal/10 rounded-lg">
                          <Icon className="h-4 w-4 text-brand-teal" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-lg text-foreground">
                            {val}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
                  Est. 2025 · Hyderabad & Guntur
                </Badge>
                <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
                  {t.about.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t.about.story}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.trust}
              </p>
              <div className="space-y-3">
                {[
                  "Serving clients online across Hyderabad & Guntur",
                  "Transparent strategies, measurable results",
                  "Affordable packages for startups and SMBs",
                  "Dedicated support in English and Telugu",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-brand-teal hover:bg-brand-teal-dark text-white font-semibold shadow-teal hover:shadow-teal-lg transition-all hover:-translate-y-0.5"
              >
                {t.consultation} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services Section ───────────────────────────────── */}
      <section
        id="services"
        className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              What We Offer
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.services.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Complete digital marketing solutions to help your business
              dominate online and outgrow the competition across Hyderabad &
              Guntur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="service-card card-teal-top group bg-white rounded-xl border border-border p-5 shadow-xs cursor-pointer"
              >
                <div className="mb-4 p-3 bg-brand-teal/10 rounded-xl w-fit group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5 text-brand-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ──────────────────────────────────── */}
      <section id="why-us" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Our Edge
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.whyUs.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine local market knowledge of Hyderabad and Guntur with
              proven digital strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group text-center p-8 rounded-2xl border border-border hover:border-brand-teal/40 hover:shadow-teal transition-all duration-300 cursor-pointer"
              >
                <div className="mx-auto mb-5 w-14 h-14 bg-gradient-to-br from-brand-teal/15 to-brand-green/15 rounded-2xl flex items-center justify-center group-hover:from-brand-teal group-hover:to-brand-green transition-all duration-300">
                  <Icon className="h-6 w-6 text-brand-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Section ────────────────────────────────── */}
      <section
        id="process"
        className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              How We Work
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.process.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A structured, transparent approach that delivers consistent
              results for every client.
            </p>
          </div>

          {/* Desktop: horizontal steps */}
          <div className="hidden lg:flex items-start gap-0 max-w-6xl mx-auto">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-green flex items-center justify-center shadow-teal">
                      <span className="font-display font-black text-white text-xl">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-teal/20 rounded-full" />
                  </div>
                  <div className="text-center px-3">
                    <h3 className="font-display font-bold text-base text-foreground mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="flex-shrink-0 mt-7 text-brand-teal/40">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical steps */}
          <div className="lg:hidden space-y-4 max-w-lg mx-auto">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-green flex items-center justify-center shadow-teal flex-shrink-0">
                    <span className="font-display font-black text-white text-sm">
                      {step.number}
                    </span>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-teal/20 my-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="pb-4">
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing Section ────────────────────────────────── */}
      <section id="pricing" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Pricing
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.pricing.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No hidden fees. No lock-in contracts. Pick the plan that fits your
              growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-brand-teal shadow-teal-lg bg-white"
                    : "border-border bg-white hover:border-brand-teal/40 hover:shadow-teal"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-teal text-white border-0 px-4 py-1 font-semibold shadow-teal">
                      ⭐ Most Popular
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-4xl text-brand-teal">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  data-ocid={plan.ocid}
                  onClick={() => scrollTo("contact")}
                  className={`w-full font-bold py-5 transition-all ${
                    plan.popular
                      ? "bg-brand-teal hover:bg-brand-teal-dark text-white shadow-teal hover:shadow-teal-lg hover:-translate-y-0.5"
                      : "bg-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          {/* Custom quote */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-3">
              Need something custom for your business?
            </p>
            <Button
              data-ocid="pricing.custom_quote_button"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white font-semibold transition-all"
            >
              Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ───────────────────────────────────── */}
      <section
        id="testimonials"
        className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Client Stories
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.testimonials.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="testimonial-card card-teal-top bg-white rounded-xl border border-border p-6 shadow-xs transition-all duration-300 hover:shadow-card-hover"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-display font-bold text-sm`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio Section ──────────────────────────────── */}
      <section id="portfolio" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Case Studies
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.portfolio.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real results for real businesses across Hyderabad, Guntur, and
              beyond.
            </p>
          </div>

          {portfolioLoading ? (
            <PortfolioSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioItems.slice(0, 5).map((item, i) => (
                <div
                  key={item.title}
                  data-ocid={`portfolio.item.${i + 1}`}
                  className="portfolio-card card-teal-top bg-white rounded-xl border border-border p-6 shadow-xs transition-all duration-300 cursor-pointer group"
                >
                  <div
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${getCategoryColor(item.category)}`}
                  >
                    {item.category}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Building2 className="h-3.5 w-3.5" />
                      {item.clientType}
                    </div>
                    <div className="font-display font-black text-brand-teal text-lg">
                      {item.metric}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-brand-green font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {item.result}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Blog Section ───────────────────────────────────── */}
      <section
        id="blog"
        className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Knowledge Hub
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.blog.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Actionable tips and strategies to grow your business online.
            </p>
          </div>

          {blogLoading ? (
            <BlogSkeleton />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogPosts.slice(0, 3).map((post, i) => (
                <article
                  key={post.slug}
                  data-ocid={`blog.item.${i + 1}`}
                  className="group bg-white rounded-xl border border-border p-6 shadow-xs hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border mb-4 ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-3 leading-tight group-hover:text-brand-teal transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{String(post.readTime)} min read</span>
                    </div>
                    <button
                      type="button"
                      className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark flex items-center gap-1 transition-colors group-hover:gap-2"
                    >
                      Read More <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-teal to-brand-green relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full translate-y-1/2 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            {t.cta.headline}
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            {t.cta.sub}
          </p>
          <Button
            data-ocid="cta.primary_button"
            onClick={() => scrollTo("contact")}
            size="lg"
            className="bg-white text-brand-teal-dark hover:bg-white/90 font-bold px-10 py-6 text-base shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {t.cta.button} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* ─── Contact Section ────────────────────────────────── */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge className="bg-brand-teal/15 text-brand-teal-dark border-brand-teal/30 mb-4">
              Contact Us
            </Badge>
            <h2 className="section-heading text-3xl sm:text-4xl text-foreground mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Ready to take your business to the next level? Let's talk!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                  >
                    {t.contact.name} *
                  </label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name_input"
                    placeholder="Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="border-border focus-visible:ring-brand-teal"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      {t.contact.email} *
                    </label>
                    <Input
                      id="contact-email"
                      data-ocid="contact.email_input"
                      type="email"
                      placeholder="hello@business.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, email: e.target.value }))
                      }
                      required
                      className="border-border focus-visible:ring-brand-teal"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      {t.contact.phone}
                    </label>
                    <Input
                      id="contact-phone"
                      data-ocid="contact.phone_input"
                      type="tel"
                      placeholder="+91 93982 41974"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="border-border focus-visible:ring-brand-teal"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                  >
                    {t.contact.service} *
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(v) =>
                      setFormData((p) => ({ ...p, service: v }))
                    }
                  >
                    <SelectTrigger
                      id="contact-service"
                      data-ocid="contact.service_select"
                      className="border-border focus:ring-brand-teal"
                    >
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s.title} value={s.title}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                  >
                    {t.contact.message} *
                  </label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    placeholder="Tell us about your business and goals..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    className="border-border focus-visible:ring-brand-teal resize-none"
                  />
                </div>

                {/* Status states */}
                {formStatus === "success" && (
                  <div
                    data-ocid="contact.success_state"
                    className="flex items-center gap-2 p-4 bg-brand-green/10 text-green-700 rounded-lg border border-brand-green/20"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {translations[lang].contact.successMsg}
                    </span>
                  </div>
                )}
                {formStatus === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-2 p-4 bg-brand-red/10 text-red-700 rounded-lg border border-brand-red/20"
                  >
                    <X className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium">
                      {translations[lang].contact.errorMsg}
                    </span>
                  </div>
                )}

                <Button
                  data-ocid="contact.submit_button"
                  type="submit"
                  disabled={
                    formStatus === "loading" ||
                    !formData.name ||
                    !formData.email ||
                    !formData.service ||
                    !formData.message
                  }
                  className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold py-5 shadow-teal hover:shadow-teal-lg transition-all disabled:opacity-60"
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2
                        data-ocid="contact.loading_state"
                        className="mr-2 h-4 w-4 animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.contact.submit}
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Info cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9398241974",
                    href: "tel:+919398241974",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "srivasundharasolutions@gmail.com",
                    href: "mailto:srivasundharasolutions@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Hyderabad Office",
                    value: "KPHB Colony, Hyderabad, Telangana – 500072",
                    href: null,
                  },
                  {
                    icon: MapPin,
                    label: "Guntur Office",
                    value: "Amaravati Road, Guntur, Andhra Pradesh – 522034",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-border hover:border-brand-teal/30 transition-colors"
                  >
                    <div className="p-2.5 bg-brand-teal/10 rounded-xl flex-shrink-0">
                      <Icon className="h-5 w-5 text-brand-teal" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-foreground font-medium hover:text-brand-teal transition-colors break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl border-2 border-brand-teal/20 overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-green/5 h-auto min-h-[10rem] flex flex-col items-center justify-center gap-3 py-6 px-4">
                <div className="p-4 bg-brand-teal/15 rounded-full">
                  <MapPin className="h-8 w-8 text-brand-teal" />
                </div>
                <div className="text-center space-y-1">
                  <div className="font-display font-bold text-foreground text-sm">
                    KPHB Colony, Hyderabad – 500072
                  </div>
                  <div className="font-display font-semibold text-muted-foreground text-sm">
                    Amaravati Road, Guntur – 522034
                  </div>
                </div>
                <Badge className="bg-brand-teal/10 text-brand-teal-dark border-brand-teal/30 text-xs">
                  📍 Online Consultant — Serving Nationwide
                </Badge>
              </div>

              {/* WhatsApp card */}
              <a
                href="https://wa.me/919398241974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-green transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="p-3 bg-brand-green rounded-xl shadow-green flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground group-hover:text-green-700 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Get instant replies to your queries
                  </div>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-green-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/uploads/Sri_Vasundhara_Solutions_Logo--1.png"
                  alt="Sri Vasundhara Solutions Logo"
                  className="h-10 w-auto object-contain opacity-90 brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/Srivasundharasolutions",
                    ocid: "footer.facebook_link",
                    label: "Facebook",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/srivasundharasolutions/",
                    ocid: "footer.instagram_link",
                    label: "Instagram",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/110518953/",
                    ocid: "footer.linkedin_link",
                    label: "LinkedIn",
                  },
                  {
                    icon: Youtube,
                    href: "https://www.youtube.com/@SriVasundharaSolutions",
                    ocid: "footer.youtube_link",
                    label: "YouTube",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/SrivasundharaS",
                    ocid: "footer.twitter_link",
                    label: "Twitter",
                  },
                ].map(({ icon: Icon, href, ocid, label }) => (
                  <a
                    key={ocid}
                    href={href}
                    data-ocid={ocid}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-slate-800 hover:bg-brand-teal rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2">
                {(
                  [
                    "home",
                    "services",
                    "pricing",
                    "about",
                    "portfolio",
                    "blog",
                    "contact",
                  ] as const
                ).map((key) => (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => scrollTo(key)}
                      className="text-slate-400 hover:text-brand-teal transition-colors text-sm"
                    >
                      {t.nav[key]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">
                {t.footer.services}
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <button
                      type="button"
                      onClick={() => scrollTo("services")}
                      className="text-slate-400 hover:text-brand-teal transition-colors text-sm text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-white mb-4">
                {t.footer.contactInfo}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm">
                  <Phone className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+919398241974"
                    className="text-slate-400 hover:text-brand-teal transition-colors"
                  >
                    +91 9398241974
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm">
                  <Mail className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:srivasundharasolutions@gmail.com"
                    className="text-slate-400 hover:text-brand-teal transition-colors break-all"
                  >
                    srivasundharasolutions@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2.5 text-sm">
                  <MapPin className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400">
                    KPHB Colony, Hyderabad – 500072
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-sm">
                  <MapPin className="h-4 w-4 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span className="text-slate-400">
                    Amaravati Road, Guntur – 522034
                  </span>
                </li>
                <li className="pt-2">
                  <a
                    href="https://wa.me/919398241974"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-brand-green/20 text-green-400 hover:bg-brand-green hover:text-white px-4 py-2 rounded-lg transition-all font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">{t.footer.copyright}</p>
            <div className="flex items-center gap-4 text-sm">
              <PrivacyPolicyDialog
                trigger={
                  <button
                    type="button"
                    data-ocid="footer.privacy_button"
                    className="text-slate-500 hover:text-brand-teal transition-colors"
                  >
                    {t.footer.privacy}
                  </button>
                }
              />
              <span className="text-slate-700">·</span>
              <TermsDialog
                trigger={
                  <button
                    type="button"
                    data-ocid="footer.terms_button"
                    className="text-slate-500 hover:text-brand-teal transition-colors"
                  >
                    {t.footer.terms}
                  </button>
                }
              />
              <span className="text-slate-700">·</span>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand-teal transition-colors"
              >
                Built with ❤️ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── Floating WhatsApp Button ───────────────────────── */}
      <a
        href="https://wa.me/919398241974"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        aria-label="Chat on WhatsApp"
        className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-green rounded-full flex items-center justify-center shadow-green hover:shadow-lg hover:scale-110 transition-transform"
      >
        <span className="sr-only">Chat on WhatsApp</span>
        <svg
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
          focusable="false"
        >
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
