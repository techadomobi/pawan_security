import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck, Zap, Lock, Users, Award, Clock, CheckCircle2,
  ArrowRight, MapPin, Phone, Star, Eye, Video, Wrench, Building2,
  TrendingUp, Heart, Target
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const values = [
  { icon: ShieldCheck, title: "Trust & Reliability", desc: "With over 3000 satisfied clients, we have built a reputation of trust and dependability across Delhi NCR. Our word is our bond — we do what we promise, on time and on budget." },
  { icon: Zap, title: "Rapid Response", desc: "Our same-day service guarantee means your security is never compromised. We respond fast, every time — emergency calls answered within 30 minutes." },
  { icon: Lock, title: "Advanced Technology", desc: "We use only industry-leading equipment from CP Plus, Hikvision, Dahua, and other trusted brands — all with manufacturer warranty and genuine parts." },
  { icon: Eye, title: "Transparency", desc: "No hidden charges. No surprise bills. Every quote we give is detailed and final. We explain every part of what you're paying for." },
  { icon: Heart, title: "Client-First Culture", desc: "We treat every client like family. Our technicians are trained to be respectful, clean, and communicative throughout the installation process." },
  { icon: Target, title: "Precision Work", desc: "Camera placement is a science. Our site assessment ensures zero blind spots and optimal coverage angles for every property we work on." },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Started with 2 technicians and a commitment to quality CCTV work in South Delhi's Chhatarpur area." },
  { year: "2016", title: "500 Clients Milestone", desc: "Reached 500 satisfied installations. Expanded our team to 10 technicians and opened a service center." },
  { year: "2018", title: "Commercial Division Launched", desc: "Started our commercial and corporate CCTV division, handling warehouses, offices, schools, and hospitals." },
  { year: "2020", title: "2000+ Installations", desc: "Despite challenges, completed over 2000 installations with zero safety incidents. Introduced AMC plans." },
  { year: "2022", title: "IP Camera Expertise", desc: "Became a leading IP and WiFi camera specialist in Delhi NCR. Launched 24/7 remote monitoring advisory." },
  { year: "2024", title: "3000+ Clients, Growing", desc: "Today we are Delhi's most trusted CCTV company with 3000+ installations, 50+ staff, and citywide coverage." },
];

const workProcess = [
  { step: "01", icon: MapPin, title: "Free Site Visit", desc: "Our expert technician visits your property at zero cost. We assess all entry points, blind spots, lighting conditions, and cabling feasibility — and give an honest recommendation for camera count and placement." },
  { step: "02", icon: CheckCircle2, title: "Custom Quote", desc: "You receive a detailed, itemized quote covering every component: cameras, DVR/NVR, cabling, power adapters, mounting, labour, and any networking required. No hidden costs — ever." },
  { step: "03", icon: Video, title: "Professional Installation", desc: "Our team installs your system with precision — clean cable runs, proper drilling, weatherproof sealing, and full configuration of the DVR, remote access, and mobile app setup." },
  { step: "04", icon: Clock, title: "Demo & Handover", desc: "We walk you through everything: live view, playback, camera pan/tilt, motion alerts, and remote access. We leave only when you are fully confident with your new system." },
  { step: "05", icon: Wrench, title: "Ongoing Support", desc: "We don't disappear after installation. Our support team is available 24/7 for any questions, troubleshooting, or emergency repairs — with priority response for AMC clients." },
];

const teamMembers = [
  { name: "Pawan Sharma", role: "Founder & Lead Technician", exp: "12+ years", speciality: "CCTV Design & IP Networking" },
  { name: "Rahul Verma", role: "Senior Installation Expert", exp: "8+ years", speciality: "Commercial & High-Rise Projects" },
  { name: "Amit Kumar", role: "DVR/NVR Specialist", exp: "7+ years", speciality: "DVR Configuration & Repair" },
  { name: "Sanjay Singh", role: "Access Control Engineer", exp: "6+ years", speciality: "Biometric & Door Access Systems" },
];

const coverageAreas = [
  "Chhatarpur", "Saket", "Vasant Kunj", "Vasant Vihar", "Mehrauli", "Dwarka",
  "Lajpat Nagar", "Greater Kailash", "Malviya Nagar", "Hauz Khas", "South Extension",
  "Connaught Place", "Okhla", "Noida", "Gurgaon", "Faridabad", "Rohini", "Pitampura"
];

const faqs = [
  { q: "How long does a typical CCTV installation take?", a: "Most residential installations (4–8 cameras) are completed in a single day. Larger commercial projects may take 2–3 days." },
  { q: "Do you offer a warranty on your installations?", a: "Yes. All our installations come with a 1-year labour warranty and we pass on the manufacturer's camera and DVR warranty (usually 1–3 years)." },
  { q: "Can I watch my cameras remotely from my phone?", a: "Absolutely. We set up remote access on your smartphone (iOS & Android) as part of every installation — at no extra cost." },
  { q: "What brands of cameras do you use?", a: "We primarily use CP Plus, Hikvision, and Dahua — India's top three CCTV brands. We also work with Bosch, Sony, and Axis for premium projects." },
  { q: "Do you offer Annual Maintenance Contracts (AMC)?", a: "Yes! Our AMC plans include quarterly checkups, camera cleaning, firmware updates, priority support, and free minor repairs throughout the year." },
  { q: "What areas in Delhi do you cover?", a: "We cover all of Delhi NCR including South Delhi, Central Delhi, West Delhi, East Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad." },
];

export default function About() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-gray-900 py-36 pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-gray-900" />
        <img src="/about-bg.png" alt="About us" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <motion.div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Protecting You Is Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Top Priority</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              At Smart CCTV India, we have been Delhi's most trusted CCTV and surveillance experts for over a decade. We don't just install cameras — we give you peace of mind, 24 hours a day.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild className="h-12 px-8">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/25 bg-white/10 text-white hover:bg-white/20" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-4 h-4" /> 72488 95469</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-primary py-10 shadow-lg">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { icon: Users, value: "3000+", label: "Happy Clients" },
            { icon: Award, value: "10+", label: "Years Experience" },
            { icon: Clock, value: "24/7", label: "Support Available" },
            { icon: Building2, value: "50+", label: "Expert Technicians" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col md:flex-row items-center justify-center gap-3">
              <s.icon className="w-8 h-8 opacity-75" />
              <div>
                <div className="text-3xl font-black">{s.value}</div>
                <div className="text-primary-foreground/70 text-sm font-medium">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">A Decade of Keeping Delhi Safe</h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-lg">
                Founded in 2014 with a mission to make professional-grade security accessible to everyone, Smart CCTV India started as a small team of passionate technicians in Chhatarpur, South Delhi.
              </p>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Over the years, we've grown into Delhi's most trusted CCTV installation company — with a team of 50+ trained professionals, a fully equipped service center, and over 3000 successful installations across homes, shops, offices, warehouses, schools, and hospitals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                What sets us apart isn't just our technical expertise — it's the care we put into every job. We treat every property like our own, work cleanly, communicate clearly, and stand by our work with a solid warranty and 24/7 support.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Authorized CP Plus, Hikvision & Dahua dealer",
                  "Same-day service for all repairs",
                  "Transparent pricing — no hidden charges",
                  "Free site assessment for every project",
                  "Full mobile remote access setup included",
                  "Serving all areas of Delhi NCR"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img src="/about-bg.png" alt="Our team at work" className="w-full rounded-3xl shadow-2xl object-cover aspect-square" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-3xl" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0"><ShieldCheck className="w-6 h-6 text-white" /></div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Delhi's Trusted Security Partner</div>
                    <div className="text-white/70 text-sm">Established 2014 · Chhatarpur, New Delhi</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Journey</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">10 Years of Growth</h2>
            <p className="text-gray-600 text-lg">From a two-man team to Delhi's most trusted security company — here's how we got here.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 inline-block text-left w-full">
                      <div className="text-primary font-black text-2xl mb-2">{m.year}</div>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">{m.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center shrink-0 z-10 shadow-lg shadow-primary/30">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Values</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h2>
            <p className="text-gray-600 text-lg">These aren't just words. They are the principles that guide every installation, every repair, every interaction with our clients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Process ── */}
      <section className="py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 to-gray-900" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">How We Work</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Step-by-Step Process</h2>
            <p className="text-gray-400 text-lg">A systematic approach to ensure flawless installation and complete client satisfaction every single time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workProcess.map((process, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative text-center"
              >
                {i < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(50% + 2rem)" }} />
                )}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors relative z-10">
                  <div className="text-5xl font-black text-primary/20 leading-none mb-4">{process.step}</div>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                    <process.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Team</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Experts Behind Your Safety</h2>
            <p className="text-gray-600 text-lg">Our senior technicians bring decades of combined experience in CCTV, networking, and access control systems.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary font-black text-2xl">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                <div className="text-primary font-semibold text-sm mb-3">{member.role}</div>
                <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-2">
                  <Award className="w-3.5 h-3.5 text-primary" /> {member.exp} experience
                </div>
                <div className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full mt-3">{member.speciality}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage Areas ── */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Coverage</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Serve All of Delhi NCR</h2>
            <p className="text-gray-600 text-lg">Our teams are deployed across the city — most service calls reached within 2–4 hours.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {coverageAreas.map((area, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-1.5 bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin className="w-3 h-3 text-primary" /> {area}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">FAQs</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know before booking your CCTV installation.</p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-black shrink-0 mt-0.5">{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-10">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Ratings ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-10 md:p-14 shadow-sm text-center">
            <div className="flex justify-center gap-1.5 mb-5">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-8 h-8 text-yellow-400 fill-current" />)}
            </div>
            <div className="text-6xl font-black text-gray-900 mb-2">4.9 / 5</div>
            <div className="text-gray-500 text-lg mb-8">Average rating across 3000+ client reviews</div>
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
              {[["99%", "On-time"], ["100%", "Genuine Parts"], ["24/7", "Support"]].map(([v, l], i) => (
                <div key={i}>
                  <div className="text-2xl font-black text-primary">{v}</div>
                  <div className="text-gray-500 text-xs font-medium mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-primary" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Secure Your Space?</h2>
            <p className="text-primary-foreground/80 text-xl mb-10">Join 3000+ satisfied clients who trust Smart CCTV India for their complete security needs.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold" asChild>
                <Link to="/contact">Get a Free Quote Today</Link>
              </Button>
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-none" asChild>
                <Link to="/services">Our Services <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
