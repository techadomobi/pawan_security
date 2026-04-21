import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 72488 95469",
    link: "tel:7248895469",
    linkLabel: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    value: "gaytrisecuitysolution1@gmail.com",
    link: "mailto:gaytrisecuitysolution1@gmail.com",
    linkLabel: "Send Email"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "No-100, 39 Khasra, Mittal Garden, Chhatarpur, Pahari, New Delhi, Delhi 110074",
    link: "https://maps.google.com/?q=Chhatarpur+Pahari+New+Delhi",
    linkLabel: "Get Directions"
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon–Sat: 8:00 AM – 8:00 PM\nSunday: On-call emergency only",
    link: null,
    linkLabel: null
  }
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 py-32 pt-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900 to-gray-900" />
        <motion.div
          className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">Your Space</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Get in touch for a free site assessment and quote. Our team responds within the hour during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm mb-3 whitespace-pre-line leading-relaxed">{info.value}</p>
              {info.link && (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold hover:underline"
                >
                  {info.linkLabel} →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-primary rounded-full" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Free Quote Request</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tell Us About Your Needs</h2>
            <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours with a customized quote.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">Thank you for reaching out. Our team will contact you within 24 hours to discuss your security needs.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      data-testid="input-name"
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      data-testid="input-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    data-testid="input-email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required *</label>
                  <select
                    data-testid="select-service"
                    name="service"
                    required
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="installation">CCTV Camera Installation</option>
                    <option value="repair">CCTV Repair Service</option>
                    <option value="amc">AMC Maintenance Plan</option>
                    <option value="commercial">Commercial CCTV Solutions</option>
                    <option value="residential">Residential CCTV Installation</option>
                    <option value="access-control">Door Access Control</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    data-testid="textarea-message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your property, location, and specific requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  data-testid="button-submit"
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Quote Request
                </Button>
              </form>
            )}
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 bg-primary rounded-full" />
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Find Us</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Our Office</h2>
              <p className="text-gray-600 mb-6">Drop by our office in Chhatarpur, New Delhi for an in-person consultation.</p>
              
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 mb-8">
                <iframe
                  title="Smart CCTV India Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.185!3d28.501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzA0LjAiTiA3N8KwMTEnMDYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-90"
                />
              </div>
            </div>

            {/* Quick contact callout */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">For urgent CCTV repairs or security emergencies, call us directly. We offer same-day service across Delhi NCR.</p>
              <a
                href="tel:7248895469"
                data-testid="link-call-urgent"
                className="flex items-center gap-3 bg-primary hover:bg-primary/90 transition-colors text-white font-bold py-4 px-6 rounded-xl"
              >
                <Phone className="w-6 h-6" />
                <div>
                  <div className="text-xs opacity-70 font-normal">Call us now</div>
                  <div className="text-lg">+91 72488 95469</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
