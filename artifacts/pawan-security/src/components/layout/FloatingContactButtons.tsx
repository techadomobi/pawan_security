import { Phone, MessageCircle } from "lucide-react";

const phoneNumber = "7248895469";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-4 z-50 flex flex-col items-end gap-2">
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Smart CCTV India"
        className="group flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-[0_10px_26px_rgba(249,115,22,0.46)] ring-2 ring-white/90 transition-all duration-200 hover:scale-105 hover:from-orange-500 hover:to-orange-700"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-green-600 text-white shadow-[0_10px_26px_rgba(34,197,94,0.46)] ring-2 ring-white/90 transition-all duration-200 hover:scale-105 hover:from-green-500 hover:to-green-700"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      <span className="hidden lg:inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-700 shadow-md">
        +91 72488 95469
      </span>
    </div>
  );
}