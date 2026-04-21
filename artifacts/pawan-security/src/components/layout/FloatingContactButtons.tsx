import { FileText, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const phoneNumber = "7248895469";

export function FloatingContactButtons() {
  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-2"
      style={{
        right: "calc(0.35rem + env(safe-area-inset-right))",
        bottom: "max(1rem, calc(0.55rem + env(safe-area-inset-bottom)))",
      }}
    >
      <Link
        to="/contact"
        aria-label="Get free quote"
        className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-rose-500 shadow-[0_8px_20px_rgba(0,0,0,0.2)] ring-2 ring-rose-100/90 transition-all duration-200 hover:scale-105 hover:text-rose-600"
      >
        <FileText className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </Link>

      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Smart CCTV India"
        className="group flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-[0_10px_26px_rgba(249,115,22,0.46)] ring-2 ring-white/90 transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-orange-700"
      >
        <Phone className="h-5.5 w-5.5 sm:h-6 sm:w-6" />
      </a>

      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-green-600 text-white shadow-[0_10px_26px_rgba(34,197,94,0.46)] ring-2 ring-white/90 transition-all duration-200 hover:scale-105 hover:from-green-500 hover:to-green-700"
      >
        <MessageCircle className="h-5.5 w-5.5 sm:h-6 sm:w-6" />
      </a>

      <span className="hidden lg:inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
        +91 72488 95469
      </span>
    </div>
  );
}