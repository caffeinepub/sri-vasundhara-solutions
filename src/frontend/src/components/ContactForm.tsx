import { Button } from "@/components/ui/button";
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
import { CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
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
      className="space-y-4"
      data-ocid="contact.form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="cf-name">Full Name *</Label>
          <Input
            id="cf-name"
            placeholder="Your Name"
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
            placeholder="+91 XXXXX XXXXX"
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
