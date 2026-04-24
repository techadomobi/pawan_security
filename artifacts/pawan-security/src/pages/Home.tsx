import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck, Video, Wrench, Users, ArrowRight, CheckCircle2,
  Star, Phone, MapPin, Clock, Award, Zap, Eye, Lock, Wifi, DoorOpen,
  CalendarClock, Building2, ChevronRight, MessageSquare
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { clearInterval(timer); setCount(target); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const allServices = [
  { icon: Video, title: "CCTV Installation", desc: "Professional setup of IP, WiFi, and analog cameras for maximum property coverage with expert cable management.", color: "blue" },
  { icon: Wrench, title: "CCTV Repair", desc: "Fast, reliable same-day troubleshooting for all major brands including CP Plus, Hikvision, and Dahua.", color: "indigo" },
  { icon: ShieldCheck, title: "AMC Maintenance", desc: "Annual maintenance contracts with quarterly checkups to ensure your systems never fail when you need them most.", color: "violet" },
  { icon: Building2, title: "Commercial CCTV", desc: "Enterprise-grade multi-camera networks for offices, warehouses, schools, hospitals, and retail outlets.", color: "blue" },
  { icon: Lock, title: "Access Control", desc: "Biometric scanners, RFID card systems, and keypad locks integrated seamlessly with your CCTV setup.", color: "indigo" },
  { icon: Wifi, title: "Wireless Systems", desc: "Cable-free IP and WiFi camera installations ideal for rented properties, heritage buildings, and hard-to-wire spaces.", color: "violet" },
];

const whyUs = [
  { icon: Award, title: "10+ Years Experience", desc: "Over a decade of trusted service across Delhi NCR with 3000+ successful installations." },
  { icon: Zap, title: "Same-Day Service", desc: "We respond fast. Most repair calls are resolved the same day you reach out to us." },
  { icon: Eye, title: "Crystal Clear Footage", desc: "We install only HD & 4K cameras ensuring sharp, actionable footage day and night." },
  { icon: Clock, title: "24/7 Support", desc: "Our support team is available around the clock, every day of the year — no exceptions." },
  { icon: ShieldCheck, title: "Genuine Equipment", desc: "Only authorized, warranty-backed cameras and DVRs from certified brand distributors." },
  { icon: Users, title: "3000+ Happy Clients", desc: "Thousands of homes and businesses in Delhi trust us as their security partner." },
];

const howItWorks = [
  { step: "01", title: "Free Site Visit", desc: "Our technician visits your property at no cost, assesses all entry points, blind spots, and coverage needs, and recommends the ideal camera count and placement." },
  { step: "02", title: "Custom Quote", desc: "We provide a detailed, transparent quote covering equipment, installation labour, cabling, and DVR/NVR — no hidden charges, ever." },
  { step: "03", title: "Professional Installation", desc: "Our trained team installs your system neatly within 1–2 days: cameras, DVR, cabling, power, and remote mobile access all configured and tested." },
  { step: "04", title: "Demo & Handover", desc: "We walk you through the entire system — live viewing, playback, mobile app setup, and alert configuration — until you're fully confident." },
];

const testimonials = [
  { name: "Rajesh Gupta", role: "Homeowner, Chhatarpur", rating: 5, quote: "Smart CCTV India installed 6 cameras in our house in a single day. The picture quality is stunning — even at night. The team was clean, fast, and very professional." },
  { name: "Sunita Mehta", role: "Shop Owner, Lajpat Nagar", rating: 5, quote: "After Smart CCTV India installed their system, I can monitor everything live from my phone. It's given me so much peace of mind. Excellent service!" },
  { name: "Vikram Singh", role: "Apartment Manager, Dwarka", rating: 5, quote: "We deployed 24 cameras across our society — gates, corridors, and parking. The AMC plan they offer is excellent. Any issue and they're there the same day." },
  { name: "Anita Kapoor", role: "School Principal, Greater Kailash", rating: 5, quote: "Child safety is our top priority. Smart CCTV India covered every classroom, corridor, and entry point. The remote monitoring has been a game changer for our administration." },
  { name: "Deepak Malhotra", role: "Warehouse Owner, Okhla", rating: 5, quote: "16-camera network with night vision and 30-day recording. The installation was flawless and the mobile app works perfectly. Best investment I've made for my business." },
  { name: "Priya Bhatia", role: "Villa Owner, Vasant Kunj", rating: 5, quote: "They replaced my outdated analog system with a full HD IP setup. The difference is night and day. Very reasonable pricing and truly professional team." },
];

const brands = ["CP Plus", "Hikvision", "Dahua", "Bosch", "Sony", "Axis", "Samsung", "Godrej"];

const recentProjects = [
  { type: "Residential", title: "4-Camera Villa Setup", location: "Chhatarpur, Delhi", cameras: 4, gradient: "from-blue-900 to-blue-700" },
  { type: "Commercial", title: "16-Cam Warehouse CCTV", location: "Okhla Industrial, Delhi", cameras: 16, gradient: "from-gray-900 to-gray-700" },
  { type: "Office", title: "Corporate IP Network", location: "Connaught Place, Delhi", cameras: 12, gradient: "from-indigo-900 to-indigo-700" },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-svh md:min-h-170 flex items-center overflow-hidden bg-gray-900">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-900/90 to-gray-900/55 z-10" />
          <img src="/hero-bg.png" alt="CCTV Security" className="w-full h-full object-cover opacity-45 md:opacity-55" />
        </motion.div>
        <div className="container relative z-20 px-4 md:px-6 pt-32 sm:pt-28 md:pt-24 pb-10 sm:pb-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-white/90 font-semibold tracking-wider uppercase text-[11px] sm:text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]">Smart CCTV India — Delhi NCR</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              Trusted CCTV Experts for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">Complete Security</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-base sm:text-xl text-gray-100/90 mb-7 md:mb-10 max-w-2xl leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              Delhi's most reliable CCTV installation, repair, and maintenance company. We protect homes, offices, shops, and commercial spaces with professional surveillance systems and 24/7 support.
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mb-8 md:mb-12 max-w-xl">
              <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold w-full sm:w-auto" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-white/10 text-white border-white/25 hover:bg-white/20 w-full sm:w-auto" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
              <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg bg-orange-600 text-white hover:bg-orange-700 border border-orange-500 w-full sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call Now</a>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:flex sm:flex-wrap items-start gap-2 sm:gap-6 text-white/90 text-xs sm:text-sm font-medium max-w-2xl">
              {["CP Plus & Hikvision Authorized", "Same-Day Service Available", "Free Site Visit", "3000+ Installations Done"].map((tag, i) => (
                <span key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* Floating badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 right-8 md:right-16 bg-white rounded-2xl p-5 shadow-2xl hidden md:flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-6 h-6 text-white" /></div>
          <div>
            <div className="font-bold text-gray-900">Trusted Since 2014</div>
            <div className="text-gray-500 text-sm">Delhi's #1 CCTV Company</div>
          </div>
        </motion.div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-10 relative z-30">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { target: 3000, suffix: "+", label: "Happy Clients" },
            { target: 10, suffix: "+", label: "Years Experience" },
            { target: 50, suffix: "+", label: "Expert Technicians" },
            { target: 24, suffix: "/7", label: "Support Available" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-4xl md:text-5xl font-black mb-1"><Counter target={s.target} suffix={s.suffix} /></div>
              <div className="text-primary-foreground/75 font-medium text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Complete Security Services</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">From a single home camera to a 50-camera commercial network — we design, install, maintain, and repair every type of CCTV and security system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {allServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 md:mb-6">{service.desc}</p>
                <Link to="/services" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 md:mt-14 text-center">
            <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base font-semibold w-full sm:w-auto" asChild>
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Smart CCTV India</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">Delhi's Most Trusted CCTV Partner</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-7 md:mb-8">
                We've been protecting Delhi homes and businesses since 2014. Our reputation is built on honest pricing, fast service, and camera systems that actually work — even years after installation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-11 h-11 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 md:mt-10">
                <Button size="lg" className="h-12 md:h-14 px-8 text-base font-semibold w-full sm:w-auto" asChild>
                  <Link to="/about">About Our Company <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img src="/about-bg.png" alt="Security installation" className="w-full rounded-3xl shadow-2xl object-cover aspect-4/3" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Verified & Trusted</div>
                    <div className="text-gray-500 text-xs">3000+ installations completed</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-primary rounded-2xl shadow-xl p-5 text-white hidden md:block"
              >
                <div className="text-3xl font-black">10+</div>
                <div className="text-primary-foreground/80 text-xs font-medium">Years in Delhi</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-gray-900" />
        <motion.div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Process</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-base md:text-lg">From your first call to a fully operational security system — here's exactly what happens.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative"
              >
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-primary/30 z-10" />
                )}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/10 transition-colors">
                  <div className="text-5xl md:text-6xl font-black text-primary/20 leading-none mb-4">{step.step}</div>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-5">
                    {i === 0 && <MapPin className="w-5 h-5 text-white" />}
                    {i === 1 && <MessageSquare className="w-5 h-5 text-white" />}
                    {i === 2 && <Video className="w-5 h-5 text-white" />}
                    {i === 3 && <CheckCircle2 className="w-5 h-5 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Projects ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Recent Work</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Projects We're Proud Of</h2>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">View Full Gallery <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {recentProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`relative h-52 bg-linear-to-br ${project.gradient} flex items-end p-6`}>
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">{project.type}</span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Video className="w-32 h-32 text-white" />
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl font-black text-white/20">{project.cameras}</div>
                    <div className="text-white/60 text-sm">cameras installed</div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <MapPin className="w-3.5 h-3.5" /> {project.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Brands We Install & Service</h3>
            <p className="text-gray-500">Authorized dealer and service partner for India's top surveillance brands</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 px-8 py-3 rounded-full text-gray-700 font-semibold text-sm shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Client Reviews</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Delhi Says About Us</h2>
            <p className="text-gray-600 text-lg">Real reviews from real clients — homeowners, shop owners, and apartment managers across Delhi NCR.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Coverage</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Cover All of Delhi NCR</h2>
            <p className="text-gray-600 text-base md:text-lg">Our technicians are deployed across Delhi so we can reach you fast — usually within 2–4 hours of your call.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              { label: "Neb Sarai", to: "/nebsarai" },
              { label: "Chhatarpur", to: "/chhatarpur" },
              { label: "Saket", to: "/saket" },
              { label: "Green Park", to: "/green-park" },
              { label: "Vasant Kunj", to: "/vasant-kunj" },
              { label: "Dwarka" },
              { label: "Lajpat Nagar" },
              { label: "Greater Kailash" },
              { label: "Connaught Place" },
              { label: "Okhla" },
              { label: "Hauz Khas", to: "/hauz-khas" },
              { label: "Ghitorni", to: "/ghitorni" },
              { label: "Mehrauli" },
              { label: "Rohini" },
              { label: "Janakpuri" },
              { label: "Malviya Nagar", to: "/malviya-nagar" },
              { label: "Rajpur", to: "/rajpur" },
              { label: "Sultanpur", to: "/sultanpur" },
              { label: "Khanpur", to: "/khanpur" },
              { label: "Pitampura" },
              { label: "Gurgaon" },
              { label: "Noida" },
              { label: "Faridabad" },
              { label: "Ghaziabad" },
            ].map((area, i) => {
              const content = (
                <>
                  <MapPin className="w-3 h-3 inline mr-1 text-primary" />{area.label}
                </>
              );

              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {area.to ? (
                    <Link
                      to={area.to}
                      className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-center text-gray-700 text-sm font-medium hover:border-primary hover:text-primary transition-colors block"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-center text-gray-700 text-sm font-medium">
                      {content}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-primary" />
        <motion.div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl hidden md:block" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl hidden md:block" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Phone className="w-4 h-4" /> Free site visit — no obligation
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight">Ready to Secure Your Property?</h2>
            <p className="text-primary-foreground/80 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
              Call us or fill the contact form. We'll arrange a free site visit and give you a transparent quote within 24 hours.
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4 justify-center max-w-xl mx-auto">
              <Button size="lg" variant="secondary" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold w-full sm:w-auto" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-none w-full sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-5 h-5" /> 72488 95469</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
