import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img
              src="/logo.png"
              alt="Smart CCTV India"
              className="h-20 w-auto"
            />
          </Link>
          <p className="text-gray-400 mb-6 max-w-md">
            Trusted CCTV Experts for Complete Security. We protect homes, offices, and commercial spaces with professional installation, repair, and monitoring services across Delhi.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-white">
            <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">3000+ Happy Clients</div>
            <div className="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">24/7 Support</div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Contact Us</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>72488 95469</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="break-all">gaytrisecuitysolution1@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>No-100, 39 Khasra, Mittal Garden, Chhatarpur, Pahari, New Delhi, Delhi 110074</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-gray-900 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Smart CCTV India. All rights reserved.
      </div>
    </footer>
  );
}
