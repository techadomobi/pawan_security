import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Home,
  MapPin,
  Phone,
  Shield,
  Store,
  Users,
  Video,
  Wifi,
  Wrench,
} from "lucide-react";
import type { LocationPageData } from "@/pages/locations/locationData";

const solutionCards = [
  {
    icon: Home,
    title: "Residential CCTV",
    description: "Entry gates, staircases, terraces, and parking spaces monitored with clear day-and-night footage.",
  },
  {
    icon: Store,
    title: "Retail and Shop CCTV",
    description: "Cash counters, shelves, and customer-facing zones covered to reduce theft risk and improve visibility.",
  },
  {
    icon: Building2,
    title: "Office and Clinic CCTV",
    description: "Reception, waiting areas, records rooms, and access points protected with tidy, professional installation.",
  },
  {
    icon: Wifi,
    title: "Remote Viewing Setup",
    description: "Mobile access configured on your phone so you can check live footage and recordings from anywhere.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Site Visit and Planning",
    description: "We inspect the property, identify blind spots, and map camera placements for the best possible coverage.",
  },
  {
    step: "02",
    title: "Transparent Estimate",
    description: "You receive a clear quote covering cameras, DVR or NVR, wiring, accessories, and installation labour.",
  },
  {
    step: "03",
    title: "Professional Installation",
    description: "Our technicians install the system cleanly, configure recording, and test the full setup before handover.",
  },
  {
    step: "04",
    title: "Demo and Support",
    description: "We show you how to use the app, playback, alerts, and backups, then stay available for after-sales support.",
  },
];

export function LocationPage({ data }: { data: LocationPageData }) {
  useEffect(() => {
    document.title = `${data.name} CCTV Installation | Smart CCTV India`;
    window.scrollTo(0, 0);
  }, [data.name]);

  return (
    <div className="bg-white">
      <section className="relative bg-gray-950 py-20 sm:py-24 md:py-36 pt-32 sm:pt-36 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/70 via-gray-950 to-gray-900" />
        <img src={data.heroImage} alt={data.name} className="absolute inset-0 h-full w-full object-cover opacity-10 sm:opacity-15" />
        <motion.div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl hidden md:block" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-white/90 font-semibold tracking-wider uppercase text-xs sm:text-sm">Service Area</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-5 md:mb-6 leading-tight">
              CCTV Installation in {data.name}
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {data.heroSubtitle}
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 sm:gap-4 mt-7 sm:mt-8 max-w-xl">
              <Button size="lg" asChild className="h-12 px-8 w-full sm:w-auto">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-white/25 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto" asChild>
                <a href="tel:7248895469" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 text-xs sm:text-sm text-white/80">
              {data.searchTerms.map((term) => (
                <span key={term} className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                  {term}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary py-10 relative z-10 shadow-lg shadow-primary/20">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 text-white text-center">
          {[
            { icon: MapPin, value: data.name, label: "Local service zone" },
            { icon: Clock, value: "2-4 hrs", label: "Typical response window" },
            { icon: Shield, value: "Free", label: "Site assessment" },
            { icon: Users, value: "24/7", label: "Post-install support" },
          ].map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex flex-col items-center gap-2">
              <stat.icon className="w-7 h-7 opacity-80" />
              <div className="text-2xl sm:text-3xl font-black">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why This Area Matters</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">Security planning built around {data.name}</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                {data.intro}
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-7 md:mb-8">
                We focus on the details that matter in real life: stable recordings, easy playback, mobile alerts, and camera placement that actually reduces blind spots. That approach works especially well in {data.name}, where properties often combine residential privacy, business activity, and frequent visitor movement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {data.localHighlights.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <img src={data.heroImage} alt={`${data.name} CCTV installation`} className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]" />
              <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-gray-950/40 via-transparent to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-sm border border-white/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Local installation team</div>
                    <div className="text-sm text-gray-500">CCTV setup tailored for {data.name}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We handle installation, configuration, remote access, cable management, and handover in one smooth process so the system is ready to use the same day on most residential projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Best Fit Solutions</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Security systems we install in {data.name}</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Whether the property is a family home, a retail counter, or a larger worksite, we choose cameras and recording gear that match the layout instead of forcing a one-size-fits-all setup.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8">
            {solutionCards.map((card, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Local Coverage</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">What makes our service reliable in {data.name}</h2>
              <div className="space-y-4">
                {[
                  "A clear site visit before installation so the camera count and locations are correct from the start.",
                  "Neat cable work, strong mounting, and recording configuration tested before handover.",
                  "Mobile app setup, playback training, and troubleshooting support after the installation is complete.",
                  "Service coverage for nearby streets and surrounding neighborhoods to reduce delays when you need help.",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-primary text-white flex items-center justify-center font-bold">{index + 1}</div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Property types we commonly handle</h3>
                  <p className="text-sm text-gray-500">Chosen to fit the way {data.name} properties are used.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {data.propertyTypes.map((type, index) => (
                  <div key={index} className="rounded-2xl bg-white p-5 border border-gray-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {index % 4 === 0 && <Home className="w-4 h-4" />}
                        {index % 4 === 1 && <Store className="w-4 h-4" />}
                        {index % 4 === 2 && <Building2 className="w-4 h-4" />}
                        {index % 4 === 3 && <Wrench className="w-4 h-4" />}
                      </div>
                      <span className="font-semibold text-gray-900">{type}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Designed for dependable monitoring, easy playback, and low-maintenance operation.
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-primary/10 p-5">
                <div className="flex items-center gap-2 mb-3 text-primary font-semibold">
                  <MapPin className="w-4 h-4" /> Nearby areas we also cover
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.nearbyAreas.map((area) => (
                    <span key={area} className="rounded-full bg-white px-3 py-1.5 text-sm text-gray-700 border border-gray-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 to-gray-900" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Process</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How we work in {data.name}</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              A simple process keeps the installation predictable, quick, and easy to review.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm">
                <div className="text-5xl font-black text-primary/25 mb-4 leading-none">{step.step}</div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Frequently Asked Questions</span>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common questions from {data.name} customers</h2>
            <p className="text-gray-600 text-base md:text-lg">If you are comparing CCTV options, these answers should help you plan the right setup faster.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
            {[
              {
                q: `How quickly can you install CCTV in ${data.name}?`,
                a: `Most residential jobs in ${data.name} can be completed the same day or within 24 hours, depending on the number of cameras and the property's wiring needs.`,
              },
              {
                q: "Will I get mobile access to the cameras?",
                a: "Yes. We configure remote viewing on your phone so you can check live footage, recordings, and alerts from anywhere with an internet connection.",
              },
              {
                q: "Do you help choose the right camera count?",
                a: "Yes. We inspect the layout first and then recommend the right number of cameras based on entry points, blind spots, lighting, and storage needs.",
              },
              {
                q: `Can you support nearby areas around ${data.name}?`,
                a: `Yes. We regularly serve surrounding areas near ${data.name}, and our technicians are used to handling both small homes and larger mixed-use properties in the same zone.`,
              },
            ].map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-7">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-primary" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4" /> Free site visit available in {data.name}
            </div>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight">Book your {data.name} CCTV visit today</h2>
            <p className="text-primary-foreground/85 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
              Call us for a free survey, a clear estimate, and a CCTV plan that fits your property instead of forcing a generic package.
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