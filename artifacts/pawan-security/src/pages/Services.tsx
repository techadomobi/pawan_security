import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Video, Wrench, CalendarClock, Building2, Home, DoorOpen,
  CheckCircle2, ArrowRight, Phone, Shield, Clock, Star,
  Wifi, Eye, Lock, Users, Award, MapPin, ChevronRight
} from "lucide-react";

const services = [
  {
    id: "installation",
    icon: Video,
    image: "/service-install.png",
    title: "CCTV Camera Installation",
    shortDesc: "Professional CCTV installation ensuring clear surveillance and complete property coverage.",
    longDesc: "Our expert technicians handle end-to-end CCTV camera installation for homes, offices, shops, warehouses, and more. We assess your property layout, recommend optimal camera placements, and install high-resolution cameras with seamless cable management. Every installation includes DVR/NVR configuration, remote mobile access setup, and a full demo.",
    features: [
      "Free site survey & camera placement planning",
      "HD & 4K camera installation",
      "Night vision & wide-angle setups",
      "DVR/NVR configuration included",
      "Remote viewing setup on mobile/PC",
      "CP Plus, Hikvision, Dahua brands",
      "Clean cable management & trunking",
      "1-year installation warranty"
    ],
    tags: ["Residential", "Commercial", "Office", "Shop"],
    turnaround: "Same Day",
    warranty: "1 Year"
  },
  {
    id: "repair",
    icon: Wrench,
    image: "/service-repair.png",
    title: "CCTV Repair Service",
    shortDesc: "Quick repair solutions for camera faults, wiring issues, and DVR problems.",
    longDesc: "Experience a camera issue? Our same-day repair service covers all aspects of CCTV system faults. From camera failures and loose wiring to DVR/NVR crashes and network issues, our trained technicians diagnose and fix problems fast. We carry spare parts for all major brands so most repairs are completed in a single visit.",
    features: [
      "Same-day service available",
      "Camera fault diagnosis & repair",
      "DVR/NVR troubleshooting",
      "Wiring & connector repair",
      "Hard drive replacement & upgrade",
      "Software & firmware updates",
      "Power supply repair",
      "Spare parts for all major brands"
    ],
    tags: ["Emergency", "All Brands", "Same Day"],
    turnaround: "2–4 Hours",
    warranty: "90 Days"
  },
  {
    id: "amc",
    icon: CalendarClock,
    image: "/service-amc.png",
    title: "CCTV AMC Maintenance",
    shortDesc: "Yearly maintenance plans keeping your CCTV system running reliably always.",
    longDesc: "Protect your investment with our Annual Maintenance Contract. We conduct regular checkups, clean camera lenses, test recording integrity, update firmware, and resolve minor issues before they become major problems — all at a flat annual cost. AMC clients get priority response and free minor repair callouts throughout the year.",
    features: [
      "Quarterly preventive checkups",
      "Camera lens cleaning & alignment",
      "Recording quality & storage check",
      "Firmware & software updates",
      "Priority emergency support response",
      "Free minor callout repairs",
      "Detailed maintenance reports",
      "Hard drive health monitoring"
    ],
    tags: ["Annual", "Priority Support", "Best Value"],
    turnaround: "Priority",
    warranty: "Full Year"
  },
  {
    id: "commercial",
    icon: Building2,
    image: "/service-commercial.png",
    title: "Commercial CCTV Solutions",
    shortDesc: "Advanced surveillance setup for offices, shops, warehouses, schools, and hospitals.",
    longDesc: "Commercial properties require robust, scalable surveillance. We design and implement enterprise-grade CCTV systems for offices, retail stores, warehouses, schools, hospitals, restaurants, and more, with centralized monitoring and multi-camera management. Our commercial solutions include dedicated NVR servers, UPS backup, and multi-user access control.",
    features: [
      "Multi-camera network design & planning",
      "Centralized monitoring room setup",
      "High-capacity NVR/DVR systems",
      "UPS backup power integration",
      "Access control integration",
      "License plate recognition cameras",
      "24/7 cloud recording options",
      "Multi-site remote monitoring"
    ],
    tags: ["Office", "Warehouse", "School", "Hospital"],
    turnaround: "2–3 Days",
    warranty: "1 Year"
  },
  {
    id: "residential",
    icon: Home,
    image: "/service-residential.png",
    title: "Residential CCTV Installation",
    shortDesc: "Secure homes and apartments with reliable indoor and outdoor surveillance systems.",
    longDesc: "Your home deserves the best protection. We install tailored residential CCTV systems that cover entry points, perimeters, common areas, and interiors — with easy mobile access so you can always see what's happening, even when you're away. Our residential packages are affordable, neat, and complete — including full setup and a personal demo.",
    features: [
      "Entry & perimeter camera coverage",
      "Indoor & outdoor weatherproof cameras",
      "WiFi & wireless camera options",
      "Mobile app remote access setup",
      "Motion-triggered push alerts",
      "Night vision for all cameras",
      "Society & apartment solutions",
      "Budget-friendly packages"
    ],
    tags: ["Home", "Villa", "Apartment", "Society"],
    turnaround: "1 Day",
    warranty: "1 Year"
  },
  {
    id: "access",
    icon: DoorOpen,
    image: "/service-door.png",
    title: "Door Access Control Systems",
    shortDesc: "Smart entry control solutions enhancing security and restricting unauthorized access.",
    longDesc: "Control who enters your property with intelligent access control systems. We install biometric scanners, card reader systems, keypad locks, and intercom solutions that integrate seamlessly with your existing CCTV setup for a complete security ecosystem. All systems include visitor logging, time-based access, and tamper alerts.",
    features: [
      "Biometric fingerprint systems",
      "Card/RFID access control",
      "Keypad & PIN-based locks",
      "Video door phone & intercom",
      "Seamless CCTV integration",
      "Visitor management & logging",
      "Time-based access scheduling",
      "Anti-tailgating alerts"
    ],
    tags: ["Office", "Residential", "Biometric"],
    turnaround: "1–2 Days",
    warranty: "1 Year"
  }
];

const pricingPlans = [
  {
    name: "Home Basic",
    price: "₹4,999",
    description: "Perfect for small homes & apartments",
    cameras: "4 Cameras",
    features: [
      "4 HD Dome/Bullet Cameras",
      "4-Channel DVR with 1TB HDD",
      "Night Vision up to 20m",
      "Mobile app remote access",
      "Professional installation",
      "1 year warranty"
    ],
    highlight: false
  },
  {
    name: "Home Pro",
    price: "₹8,999",
    description: "Most popular — great for villas & larger homes",
    cameras: "8 Cameras",
    features: [
      "8 Full HD Cameras (indoor + outdoor)",
      "8-Channel DVR with 2TB HDD",
      "Night vision up to 30m",
      "Wide-angle lens cameras",
      "Mobile app + motion alerts",
      "Professional installation",
      "1 year warranty + AMC option"
    ],
    highlight: true
  },
  {
    name: "Business",
    price: "Custom",
    description: "For offices, shops, and commercial spaces",
    cameras: "16–64 Cameras",
    features: [
      "Scalable HD/4K camera network",
      "High-capacity NVR server",
      "UPS power backup",
      "Centralized monitoring setup",
      "Multi-user access control",
      "On-site project management",
      "Annual maintenance included"
    ],
    highlight: false
  }
];

const brandLogos = ["CP Plus", "Hikvision", "Dahua", "Bosch", "Sony", "Axis", "Godrej", "Samsung"];

const cameraTypes = [
  { icon: Eye, name: "Dome Cameras", desc: "Discreet indoor cameras ideal for offices and retail" },
  { icon: Shield, name: "Bullet Cameras", desc: "Long-range outdoor surveillance for perimeters & gates" },
  { icon: Wifi, name: "WiFi/IP Cameras", desc: "Wireless cameras perfect for rentals and modern setups" },
  { icon: Lock, name: "PTZ Cameras", desc: "Pan-tilt-zoom cameras for large spaces needing wide coverage" },
];

export default function Services() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 py-20 sm:py-24 md:py-36 pt-32 sm:pt-36 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-gray-900 to-gray-900" />
        <img src="/service-install.png" alt="Services" className="absolute inset-0 w-full h-full object-cover opacity-10 sm:opacity-15" />
        <motion.div
          className="absolute -top-10 -left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl hidden md:block"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-white/90 font-semibold tracking-wider uppercase text-xs sm:text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 md:mb-6 leading-tight">
              Keeping You One Step{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">Ahead of Threats</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Comprehensive security solutions for homes and businesses across Delhi NCR. Every service backed by expertise, genuine equipment, and fast responsive support.
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-8 max-w-xl">
              <Button size="lg" asChild className="h-12 px-8 w-full sm:w-auto">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/25 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="bg-primary py-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-white text-center">
          {[
            { icon: Users, value: "3000+", label: "Installations Done" },
            { icon: Clock, value: "Same Day", label: "Repair Response" },
            { icon: Award, value: "10+ Years", label: "Experience" },
            { icon: Star, value: "4.9 / 5", label: "Client Rating" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-2">
              <s.icon className="w-7 h-7 opacity-75" />
              <div className="text-2xl font-black">{s.value}</div>
              <div className="text-primary-foreground/70 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">All Services</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need to Stay Secure</h2>
            <p className="text-gray-600 text-base md:text-lg">Six specialized services — from installation to AMC — covering every security need for homes and businesses.</p>
          </div>
          <div className="flex flex-col gap-12 md:gap-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag, ti) => (
                      <span key={ti} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 bg-primary text-white rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-primary font-semibold mb-4 text-sm sm:text-base">{service.shortDesc}</p>
                  <p className="text-gray-600 leading-relaxed mb-6 md:mb-7 text-sm sm:text-base">{service.longDesc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 md:mb-7">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 md:gap-6 mb-7 md:mb-8 flex-wrap">
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Clock className="w-4 h-4" /> Response: {service.turnaround}
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      <Shield className="w-4 h-4" /> Warranty: {service.warranty}
                    </div>
                  </div>
                  <Button size="lg" className="h-12 px-8 w-full sm:w-auto" asChild>
                    <Link to="/contact">Book This Service <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-3xl shadow-xl object-cover aspect-4/3"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/30 to-transparent rounded-3xl" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 inline-flex items-center gap-3">
                      <service.icon className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold text-sm">{service.title}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Camera Types ── */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Camera Types</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Which Camera Is Right for You?</h2>
            <p className="text-gray-600 text-base md:text-lg">We install every type of surveillance camera — our experts help you choose the best option for your property.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {cameraTypes.map((cam, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 text-center hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <cam.icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">{cam.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cam.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Plans ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Pricing</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent, Affordable Packages</h2>
            <p className="text-gray-600 text-base md:text-lg">Starting prices for our most popular configurations. All packages include professional installation, DVR, cabling, and mobile setup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-6 md:p-8 border-2 transition-all duration-300 ${plan.highlight ? "border-primary bg-primary text-white shadow-2xl shadow-primary/20" : "border-gray-100 bg-white shadow-sm hover:shadow-xl"}`}
              >
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </div>
                )}
                <div className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-primary-foreground/70" : "text-gray-500"}`}>{plan.cameras}</div>
                <h3 className={`text-xl md:text-2xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <div className={`text-3xl md:text-4xl font-black mb-2 ${plan.highlight ? "text-white" : "text-primary"}`}>{plan.price}</div>
                <div className={`text-sm mb-7 ${plan.highlight ? "text-primary-foreground/70" : "text-gray-500"}`}>{plan.description}</div>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-primary-foreground/90" : "text-gray-700"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-white" : "text-primary"}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full h-12 font-semibold ${plan.highlight ? "bg-white text-primary hover:bg-gray-100" : ""}`}
                  variant={plan.highlight ? "secondary" : "default"}
                  asChild
                >
                  <Link to="/contact">{plan.price === "Custom" ? "Get Custom Quote" : "Book This Package"}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">* Prices vary based on site conditions, cable run distance, and camera models. Final quote given after free site visit.</p>
        </div>
      </section>

      {/* ── Brands ── */}
      <section className="py-16 sm:py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Camera Brands We Install & Service</h3>
            <p className="text-gray-500 text-sm md:text-base">Industry-leading brands for maximum reliability and longevity</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {brandLogos.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-200 px-8 py-3 rounded-full text-gray-700 font-semibold text-sm shadow-sm hover:border-primary hover:text-primary transition-colors"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-7 sm:p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-6 bg-primary rounded-full" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Area</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">We Come to You — All Across Delhi NCR</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">Our technicians are stationed across Delhi so we can reach any location quickly — most service calls within 2–4 hours.</p>
                <div className="flex flex-wrap gap-2">
                  {["South Delhi", "Central Delhi", "West Delhi", "East Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"].map((area, i) => (
                    <span key={i} className="flex items-center gap-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full">
                      <MapPin className="w-2.5 h-2.5 text-primary" /> {area}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Phone, label: "Call us now", value: "+91 72488 95469", action: "tel:7248895469" },
                  { icon: Clock, label: "Working hours", value: "Mon–Sat: 8 AM – 8 PM · Sunday: Emergency only" },
                  { icon: MapPin, label: "Head office", value: "No-100, 39 Khasra, Mittal Garden, Chhatarpur, Delhi 110074" },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-5">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium mb-0.5">{info.label}</div>
                      {info.action ? (
                        <a href={info.action} className="font-bold text-primary hover:underline">{info.value}</a>
                      ) : (
                        <div className="font-semibold text-gray-900 text-sm leading-snug">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-gray-900" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Need a Custom Security Solution?</h2>
            <p className="text-gray-400 text-xl max-w-xl mx-auto mb-10">
              Contact us for a free site assessment. We'll design the perfect CCTV and access control system for your specific needs and budget.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 text-lg font-bold" asChild>
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold text-white border-white/30 hover:bg-white/10" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-5 h-5" /> 72488 95469</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
