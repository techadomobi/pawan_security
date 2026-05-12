import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const fade = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Blog() {
  const keywords = [
    "CCTV Camera Full Setup installation",
    "CCTV Camera Repair",
    "CCTV Camera Networking",
    "DVR Camera installation",
    "Wireless Security System",
    "Mobile Network Booster",
  ];

  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 md:px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Security Insights &amp; Blog</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to our blog — a practical resource covering CCTV Camera Installation, Networking, Repair
            and modern Wireless Security System approaches. We write detailed guides, troubleshooting
            tips and best-practices to help homeowners and businesses choose and maintain robust
            Comprehensive Security Solutions.
          </p>

          <div className="grid gap-6">
            {keywords.map((k, i) => (
              <article key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-semibold mb-2">{k}</h2>
                <p className="text-gray-700 mb-3">
                  {k} — our team explains when to choose this option, how the installation is typically
                  carried out, and what maintenance you should plan for. Topics include camera placement,
                  DVR vs NVR tradeoffs, power and networking considerations, and how to keep recordings
                  secure and accessible.
                </p>
                <Link to="/contact" className="text-primary font-semibold inline-flex items-center gap-2">
                  Contact us <ChevronRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          <section className="mt-10">
            <h3 className="text-xl font-bold mb-3">Helpful Reading</h3>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Comprehensive Security Systems &amp; how to plan a site survey</li>
              <li>Wireless systems: bridging convenience with reliability</li>
              <li>Network design tips for cameras and NVRs — avoid common pitfalls</li>
              <li>How to select between DVR and IP camera deployments</li>
            </ul>
          </section>
        </motion.div>
      </section>
    </div>
  );
}
