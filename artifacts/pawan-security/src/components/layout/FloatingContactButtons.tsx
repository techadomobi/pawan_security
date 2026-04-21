import { Phone, MessageCircle } from "lucide-react";

const phoneNumber = "7248895469";

export function FloatingContactButtons() {
  return (
    <div
      className="fixed z-50 flex flex-col items-end gap-2.5 md:gap-3"
      style={{
        right: "calc(0.75rem + env(safe-area-inset-right))",
        bottom: "calc(1.5rem + env(safe-area-inset-bottom))",
      }}
    >
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Smart CCTV India"
        className="group flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl ring-4 ring-white/80 transition-transform duration-200 hover:scale-105 hover:bg-orange-700"
      >
        <Phone className="h-6 w-6 md:h-7 md:w-7" />
      </a>

      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-xl ring-4 ring-white/80 transition-transform duration-200 hover:scale-105 hover:bg-green-700"
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </a>

      <span className="hidden sm:inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
        +91 72488 95469
      </span>
    </div>
  );
}