import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import BreadcrumbNav from "../components/BreadcrumbNav";

const blogPosts = [
  {
    slug: "/what-is-seo",
    cat: "SEO",
    catColor: "bg-blue-100 text-primary",
    title: "What is SEO and How Does It Work in 2026?",
    excerpt:
      "Learn everything about Search Engine Optimization and how to rank your business on Google in 2026. Essential guide for businesses in Guntur and Hyderabad.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "/google-ads-guide",
    cat: "Google Ads",
    catColor: "bg-orange-100 text-accent",
    title: "Google Ads vs SEO – Which is Better for Your Business?",
    excerpt:
      "Compare paid vs organic marketing strategies to decide which works best for your business goals and budget in Hyderabad.",
    date: "Mar 12, 2026",
    readTime: "7 min read",
  },
  {
    slug: "/social-media-tips",
    cat: "Social Media",
    catColor: "bg-pink-100 text-pink-600",
    title: "Social Media Marketing Tips for Small Businesses in Hyderabad",
    excerpt:
      "Practical social media strategies to grow your local business, increase engagement, and generate leads in Hyderabad and Guntur.",
    date: "Mar 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "/local-seo-guide",
    cat: "Local SEO",
    catColor: "bg-green-100 text-green-600",
    title: "Local SEO Guide for Guntur Businesses",
    excerpt:
      "Complete guide to dominating local search results in Guntur and Hyderabad. Step-by-step Local SEO strategies for small businesses.",
    date: "Mar 8, 2026",
    readTime: "9 min read",
  },
  {
    slug: "/digital-marketing-strategies",
    cat: "Strategy",
    catColor: "bg-purple-100 text-purple-600",
    title: "Best Digital Marketing Strategies for Startups in 2026",
    excerpt:
      "Discover the most effective digital marketing strategies for startups and small businesses to grow online in 2026.",
    date: "Mar 5, 2026",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "Digital Marketing Blog | SEO Tips & Strategies | SVS";
    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Expert digital marketing blog with SEO tips, Google Ads guides, and social media strategies for businesses in Guntur and Hyderabad.",
      );
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary/5 via-white to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Digital Marketing Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
            Digital Marketing Blog – SEO Tips, Google Ads &amp; Strategies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Expert digital marketing insights, SEO strategies, and Google Ads
            guides for businesses in Guntur, Hyderabad, and across India.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                to={post.slug}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block"
                data-ocid={`blog.item.${i + 1}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${post.catColor}`}
                    >
                      {post.cat}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      · {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-foreground mb-3 font-display text-lg leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-1">
                    Read Article <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-16 bg-secondary/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-4 font-display">
              Our Digital Marketing Services
            </h2>
            <p className="text-muted-foreground mb-6">
              Ready to grow your business? Explore our services:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "SEO Services in Guntur", to: "/seo-services" },
                { label: "Google Ads Services", to: "/google-ads-services" },
                {
                  label: "Social Media Marketing",
                  to: "/social-media-marketing",
                },
                { label: "Website Design", to: "/website-design" },
                { label: "Local SEO Services", to: "/local-seo-services" },
                { label: "Contact Us", to: "/contact-us" },
              ].map(({ label, to }, i) => (
                <Link
                  key={i}
                  to={to}
                  className="bg-white border border-border rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
                  data-ocid={`blog.service_link.${i + 1}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
