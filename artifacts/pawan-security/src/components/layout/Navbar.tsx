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
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 py-3"
          : "bg-linear-to-r from-black/40 via-black/35 to-transparent backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50 group h-10">
          <img
            src={isScrolled ? "/logo_white_sm.png" : "/logo.png"}
            alt="Smart CCTV India"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-semibold transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-cyan-400"
                  : isScrolled ? "text-slate-700 hover:text-cyan-500" : "text-white/95 hover:text-cyan-300"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-cyan-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Button asChild className={`h-10 px-6 font-semibold transition-all ${isScrolled ? "bg-cyan-500 text-white hover:bg-cyan-600 shadow-md" : "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-lg"}`}>
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 flex h-10 w-10 items-center justify-center rounded-lg border-2 transition-all font-semibold shadow-md ${
            isScrolled || isMobileMenuOpen
              ? 'text-white bg-cyan-500 border-cyan-600 hover:bg-cyan-600'
              : 'text-white bg-black/50 border-white/40 hover:bg-black/60'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 z-40 flex flex-col pt-24 px-6 pb-6"
            >
              <div className="flex flex-col gap-3 text-center">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-semibold rounded-lg py-3 px-4 text-base transition-all duration-200 ${
                      location.pathname === link.href
                        ? "text-slate-950 bg-cyan-400"
                        : "text-white/90 bg-white/10 hover:bg-cyan-500/20 hover:text-cyan-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-6 w-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold h-11" asChild onClick={() => setIsMobileMenuOpen(false)}>
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
