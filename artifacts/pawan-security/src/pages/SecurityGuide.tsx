import { motion } from "framer-motion";
import { CheckCircle2, Wifi, Lock, DoorOpen, Video } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function SecurityGuide() {
  const topics = [
    "Access control systems",
    "Burglar alarms",
    "Fire alarms",
    "Monitoring service",
    "Residential security system",
    "Commercial security systems",
  ];

  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 md:px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Guide &amp; Solutions</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            This guide covers practical advice on choosing and integrating Access control systems,
            Burglar alarms, Fire alarms, and Monitoring service options. We emphasise end-to-end
            Comprehensive Security Systems tailored for both Residential and Commercial needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {topics.map((t, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 shadow-sm bg-gray-50 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">{t}</h3>
                    <p className="text-sm text-gray-700">Short explanation about {t} and how it helps secure your property. Tips for installation and maintenance included.</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="p-6 rounded-2xl bg-primary text-white shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Wifi className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Wireless systems</div>
                  <div className="text-sm opacity-90">Ideal for hard-to-wire areas and rented properties.</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Video systems</div>
                  <div className="text-sm opacity-90">CCTV Camera, DVR/NVR, and networking best practises for reliability.</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DoorOpen className="w-6 h-6" />
                <div>
                  <div className="font-semibold">Security doors</div>
                  <div className="text-sm opacity-90">Physical security plays a big role in overall protection strategy.</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Lock className="w-6 h-6" />
                <div className="text-sm opacity-90">Need help? Reach out for a free site survey and professional recommendations.</div>
              </div>
            </aside>
          </div>

          <section className="mt-8">
            <h3 className="text-xl font-bold mb-3">Installation Checklist</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Site survey and camera placement plan.</li>
              <li>Network layout for IP cameras and NVR/DVR connectivity.</li>
              <li>Power and backup planning (UPS for DVRs/NVRs).</li>
              <li>Regular maintenance and monitoring service options.</li>
            </ul>
          </section>
        </motion.div>
      </section>
    </div>
  );
}
