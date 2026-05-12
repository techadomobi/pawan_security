import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/security-guide", label: "Security Guide" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-xl border-b border-gray-300 py-3"
          : "bg-linear-to-r from-black/50 via-black/40 to-transparent backdrop-blur-md py-4 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50 group h-11 shrink-0">
          <img
            src={isScrolled ? "/logo_white_sm.png" : "/logo.png"}
            alt="Smart CCTV India"
            className="h-11 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                location.pathname === link.href
                  ? "text-cyan-500 bg-cyan-500/15"
                  : isScrolled ? "text-slate-700 hover:bg-slate-100 hover:text-cyan-600" : "text-white/90 hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-cyan-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4 lg:ml-6 border-l border-white/10"></div>
          <Button asChild className={`ml-4 lg:ml-6 h-10 px-7 font-semibold transition-all duration-200 ${
            isScrolled 
              ? "bg-linear-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:from-cyan-600 hover:to-cyan-700" 
              : "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg hover:shadow-xl"
          }`}>
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 flex h-11 w-11 items-center justify-center rounded-xl transition-all font-semibold shadow-lg ${
            isScrolled || isMobileMenuOpen
              ? 'text-white bg-cyan-500 hover:bg-cyan-600 border border-cyan-600'
              : 'text-white bg-black/40 border border-white/30 hover:bg-black/50'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-black z-40 flex flex-col pt-28 px-6 pb-8 overflow-y-auto"
            >
              <div className="flex flex-col gap-2 text-center">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-semibold rounded-xl py-4 px-5 text-base transition-all duration-200 ${
                      location.pathname === link.href
                        ? "text-slate-950 bg-cyan-400 shadow-lg"
                        : "text-white/95 bg-white/8 hover:bg-cyan-500/25 hover:text-cyan-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-4 border-t border-white/10"></div>
                <Button className="w-full bg-linear-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:from-cyan-300 hover:to-cyan-400 font-bold h-12 rounded-xl shadow-lg" asChild onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
