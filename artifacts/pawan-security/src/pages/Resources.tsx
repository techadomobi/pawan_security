import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fade = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function Resources() {
  const keywords = [
    "Security doors",
    "Silent alarms",
    "Video systems",
    "Wireless systems",
    "Networking Solutions",
    "Security Monitoring",
  ];

  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 md:px-6 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources &amp; Services Directory</h1>
          <p className="text-gray-600 mb-6">Browse expert services and short notes on common solutions we provide. Each item below links to contact and quote options.</p>

          <div className="grid gap-4">
            {keywords.map((k, i) => (
              <div key={i} className="p-5 rounded-lg border border-gray-100 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{k}</h3>
                  <p className="text-sm text-gray-600">Short description about {k} and when it's appropriate for homes or commercial properties.</p>
                </div>
                <Link to="/contact" className="text-primary font-semibold">Get Quote</Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/services" className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow hover:opacity-95">View Full Services</Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
