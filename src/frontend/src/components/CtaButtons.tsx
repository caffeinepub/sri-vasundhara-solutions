import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

interface CtaButtonProps {
  to: string;
  label: string;
  ocid: string;
}

export function CtaButton({ to, label, ocid }: CtaButtonProps) {
  return (
    <Link to={to}>
      <button
        type="button"
        className="text-white font-bold px-8 py-3 rounded-lg text-sm"
        style={{ backgroundColor: "#DC2626" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#15803D";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor =
            "#DC2626";
        }}
        data-ocid={ocid}
      >
        {label}
      </button>
    </Link>
  );
}

interface WhatsAppButtonProps {
  ocid: string;
}

export function WhatsAppButton({ ocid }: WhatsAppButtonProps) {
  return (
    <a
      href="https://wa.me/919398241974?text=Hi%20Sri%20Vasundhara%20Solutions%2C%20I%20need%20digital%20marketing%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg transition-colors text-sm"
      data-ocid={ocid}
    >
      <MessageCircle className="h-4 w-4" /> WhatsApp Us
    </a>
  );
}
