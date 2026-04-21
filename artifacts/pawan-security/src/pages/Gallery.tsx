import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Building2, Home, Store, MapPin, Star, ArrowRight, Phone, CheckCircle2, Video, Clock } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Residential", "Commercial", "Office", "Repair"];

const projects = [
  {
    category: "Residential",
    title: "4-Camera Villa Security System",
    location: "Chhatarpur, South Delhi",
    description: "Complete outdoor perimeter + indoor monitoring setup. CP Plus HD cameras with 30-day DVR recording and full mobile access.",
    brand: "CP Plus",
    cameras: 4,
    duration: "1 Day",
    image: "/gallery-1.png",
    color: "from-blue-900 to-blue-700",
    tags: ["HD Cameras", "DVR", "Night Vision"]
  },
  {
    category: "Commercial",
    title: "Warehouse Surveillance Network",
    location: "Okhla Industrial Area, Delhi",
    description: "16-camera HD surveillance system covering all dock areas, storage zones, and entry points. Centralized NVR with UPS backup.",
    brand: "Hikvision",
    cameras: 16,
    duration: "2 Days",
    image: "/gallery-2.png",
    color: "from-gray-900 to-gray-700",
    tags: ["NVR", "UPS Backup", "16 Cameras"]
  },
  {
    category: "Office",
    title: "Corporate Office Security",
    location: "Connaught Place, New Delhi",
    description: "IP camera network with biometric access control and employee entry tracking. Multi-floor installation with centralized monitoring.",
    brand: "Dahua",
    cameras: 12,
    duration: "2 Days",
    image: "/service-commercial.png",
    color: "from-slate-900 to-slate-700",
    tags: ["IP Cameras", "Access Control", "Biometric"]
  },
  {
    category: "Commercial",
    title: "Retail Chain CCTV Upgrade",
    location: "Lajpat Nagar, Delhi",
    description: "Anti-shoplifting setup with high-resolution dome cameras at all critical coverage points. Real-time alert integration.",
    brand: "CP Plus",
    cameras: 8,
    duration: "1 Day",
    image: "/service-install.png",
    color: "from-indigo-900 to-indigo-700",
    tags: ["Anti-Theft", "HD Dome", "Alerts"]
  },
  {
    category: "Residential",
    title: "Apartment Society Security",
    location: "Dwarka Sector 12, New Delhi",
    description: "Comprehensive 24-camera setup covering all entry gates, lobbies, corridors, lifts, and parking. Society committee remote access included.",
    brand: "Hikvision",
    cameras: 24,
    duration: "3 Days",
    image: "/gallery-1.png",
    color: "from-blue-800 to-blue-600",
    tags: ["24 Cameras", "Society", "All Areas"]
  },
  {
    category: "Office",
    title: "School Campus Monitoring",
    location: "Greater Kailash, Delhi",
    description: "Child safety-focused camera setup covering all classrooms, corridors, playground, canteen, and all entry/exit points.",
    brand: "CP Plus",
    cameras: 20,
    duration: "3 Days",
    image: "/service-amc.png",
    color: "from-sky-900 to-sky-700",
    tags: ["Child Safety", "20 Cameras", "Full Coverage"]
  },
  {
    category: "Repair",
    title: "Emergency DVR Repair & Upgrade",
    location: "Saket, New Delhi",
    description: "Replaced failing DVR unit and upgraded storage from 1TB to 4TB with extended recording retention. Same-day turnaround completed.",
    brand: "Hikvision",
    cameras: 6,
    duration: "Same Day",
    image: "/service-repair.png",
    color: "from-zinc-800 to-zinc-600",
    tags: ["Same Day", "DVR Upgrade", "Storage"]
  },
  {
    category: "Commercial",
    title: "Restaurant Full Coverage",
    location: "Hauz Khas Village, Delhi",
    description: "Complete kitchen, dining area, cashier, and entrance monitoring with cloud backup. Hidden cameras at POS terminals.",
    brand: "Dahua",
    cameras: 10,
    duration: "1 Day",
    image: "/gallery-2.png",
    color: "from-neutral-900 to-neutral-700",
    tags: ["Restaurant", "Cloud Backup", "POS Coverage"]
  },
  {
    category: "Residential",
    title: "Luxury Villa IP Upgrade",
    location: "Vasant Kunj, Delhi",
    description: "Replaced old analog cameras with full HD IP cameras, new NVR, and Ethernet backbone. All cameras with audio recording enabled.",
    brand: "CP Plus",
    cameras: 6,
    duration: "1 Day",
    image: "/gallery-1.png",
    color: "from-blue-950 to-blue-800",
    tags: ["IP Upgrade", "Audio", "Full HD"]
  },
  {
    category: "Commercial",
    title: "Hospital Entry & ICU Monitoring",
    location: "Mehrauli, New Delhi",
    description: "Sensitive hospital CCTV installation with access-restricted ICU monitoring, main reception, OPD, and all entry points.",
    brand: "Hikvision",
    cameras: 18,
    duration: "2 Days",
    image: "/service-commercial.png",
    color: "from-teal-900 to-teal-700",
    tags: ["Hospital", "ICU", "18 Cameras"]
  },
  {
    category: "Office",
    title: "Bank Branch Security",
    location: "Rohini, New Delhi",
    description: "High-security bank CCTV with vandal-proof cameras, PTZ units at teller counters, and 60-day recording retention on NVR.",
    brand: "Bosch",
    cameras: 14,
    duration: "2 Days",
    image: "/service-install.png",
    color: "from-amber-900 to-amber-700",
    tags: ["Bank", "Vandal-Proof", "PTZ", "60-Day Retention"]
  },
  {
    category: "Repair",
    title: "Full System Fault Diagnosis",
    location: "Malviya Nagar, Delhi",
    description: "Diagnosed and repaired a 12-camera CP Plus system — replaced damaged cables, fixed 3 faulty cameras, upgraded DVR firmware.",
    brand: "CP Plus",
    cameras: 12,
    duration: "Same Day",
    image: "/service-repair.png",
    color: "from-rose-900 to-rose-700",
    tags: ["Diagnosis", "Cable Repair", "Firmware"]
  },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Homeowner, Dwarka", rating: 5, quote: "Excellent installation! The team was professional and very clean. My home feels so much safer. I can check cameras from anywhere on my phone. Truly outstanding service." },
  { name: "Priya Sharma", role: "Business Owner, Lajpat Nagar", rating: 5, quote: "Installed CCTV in my shop — the footage quality is incredible even at night. When one camera had an issue, they came the very same day. Cannot recommend them enough!" },
  { name: "Amit Verma", role: "Apartment Manager, Chhatarpur", rating: 5, quote: "Set up a 24-camera network for our apartment society. The team handled everything from planning to installation. Five stars — best security company in Delhi." },
  { name: "Sunita Malhotra", role: "School Principal, Greater Kailash", rating: 5, quote: "Child safety is our priority. They covered every single area perfectly. The remote monitoring has transformed how we manage campus safety. Highly recommended!" },
  { name: "Deepak Singh", role: "Warehouse Owner, Okhla", rating: 5, quote: "16 cameras, UPS backup, perfect mobile access. The installation was flawless and they explained everything clearly. Best investment for my business security." },
  { name: "Kavita Bhatia", role: "Restaurant Owner, Hauz Khas", rating: 5, quote: "The team understood exactly what we needed for our restaurant — kitchen coverage, cashier monitoring, entrance. Clean work and very responsive support team." },
];

const IconForCategory = (category: string) => {
  switch (category) {
    case "Residential": return Home;
    case "Commercial": return Store;
    case "Office": return Building2;
    default: return Camera;
  }
};

export default function Gallery() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 py-20 sm:py-24 md:py-36 pt-32 sm:pt-36 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-gray-900 to-gray-900" />
        <img src="/gallery-1.png" alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-10 sm:opacity-15" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-white/90 font-semibold tracking-wider uppercase text-xs sm:text-sm">Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 md:mb-6 leading-tight">
              Our Work{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-cyan-300">Across Delhi</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              Real installations from real clients. See how we've secured homes, businesses, schools, hospitals, and commercial spaces all across Delhi NCR.
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-8 max-w-xl">
              <Button size="lg" asChild className="h-12 px-8 w-full sm:w-auto">
                <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/25 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-4 h-4" /> 72488 95469</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-10 sm:py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {[
            { value: "3000+", label: "Projects Completed", icon: CheckCircle2 },
            { value: "50+", label: "Cameras Installed Daily", icon: Camera },
            { value: "4.9/5", label: "Client Rating", icon: Star },
            { value: "24/7", label: "Post-Install Support", icon: Clock },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-2" />
              <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Filter ── */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 md:top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-3 flex-wrap justify-center">
          <span className="text-gray-500 text-sm font-medium mr-2">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${active === cat ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {filtered.map((project, i) => {
              const Icon = IconForCategory(project.category);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Visual Block */}
                  <div className={`relative h-48 sm:h-52 flex items-end p-5 sm:p-6 overflow-hidden`}>
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-80`} />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 gap-2">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">{project.category}</span>
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{project.brand}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0">
                      <Icon className="w-32 h-32 text-white" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl font-black text-white/25">{project.cameras}</div>
                      <div className="text-white/70 text-sm">cameras installed</div>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 z-10">
                      <Clock className="w-3 h-3 text-white inline mr-1" />
                      <span className="text-white text-xs font-semibold">{project.duration}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="bg-white p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-primary text-sm font-medium mb-3">
                      <MapPin className="w-3.5 h-3.5" /> {project.location}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span key={ti} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-40" />
              <p className="text-xl font-medium">No projects in this category yet</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Client Reviews</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-base md:text-lg">Real feedback from real clients who trust us with their security — homeowners, business owners, and apartment managers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.12 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-sm">
                    {review.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Typical Results</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Smart CCTV India Difference</h2>
            <p className="text-gray-600 text-base md:text-lg">What you get when you choose us — versus a typical low-quality installer.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 text-red-500 rounded-xl flex items-center justify-center font-black text-lg">✗</div>
                <h3 className="font-bold text-red-900 text-lg md:text-xl">Typical Cheap Installer</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "No site assessment — cameras placed randomly",
                  "Low quality cameras with blurry footage",
                  "Messy cable work, wires hanging everywhere",
                  "DVR configured incorrectly or not at all",
                  "No mobile access setup",
                  "Disappears after payment — no support",
                  "No warranty on labour or equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                    <span className="text-red-400 font-bold mt-0.5">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                <h3 className="font-bold text-green-900 text-lg md:text-xl">Smart CCTV India</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Free detailed site survey & placement planning",
                  "HD & 4K cameras with crystal-clear footage",
                  "Clean cable trunking — neat and professional",
                  "Full DVR/NVR config + cloud backup option",
                  "Mobile app setup on all your devices",
                  "24/7 support, 1-year warranty on all work",
                  "AMC plans for long-term peace of mind"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Your Property Could Be Next</h2>
            <p className="text-primary-foreground/80 text-base md:text-xl max-w-xl mx-auto mb-8 md:mb-10">
              Join thousands of Delhi NCR homes and businesses secured by Smart CCTV India.
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4 justify-center max-w-xl mx-auto">
              <Button size="lg" variant="secondary" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold w-full sm:w-auto" asChild>
                <Link to="/contact">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-none w-full sm:w-auto" asChild>
                <Link to="/services">See Our Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
