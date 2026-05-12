import { ShieldCheck, Signal, Wifi, Smartphone } from "lucide-react";
import { LongFormSecurityPage } from "@/components/pages/LongFormSecurityPage";

export default function WirelessSecurityMonitoring() {
  return (
    <LongFormSecurityPage
      data={{
        title: "Wireless Security Systems, Networking Solutions and Monitoring",
        subtitle:
          "Wireless Security System planning, Wireless Alarm design, Safety Alarm placement, Alarm Systems tuning, and Security Monitoring all work better when the network is designed for the real property layout.",
        eyebrow: "Wireless and Monitoring Guide",
        intro:
          "This page connects Wireless systems, Wireless Security System planning, Mobile Network Booster ideas, and Networking Solutions into one article that is useful for both residential and commercial readers.",
        heroImage: "/service-commercial.png",
        keywordChips: [
          "Wireless Security System",
          "Wireless Alarm",
          "Safety Alarm",
          "Alarm Systems",
          "Mobile Network Booster",
          "Networking Solutions",
          "Security Doors",
          "Security Monitoring",
          "Comprehensive Security Systems",
        ],
        metrics: [
          { value: "WiFi", label: "ready deployment" },
          { value: "Stable", label: "network design" },
          { value: "Smart", label: "alert logic" },
          { value: "24/7", label: "monitoring focus" },
        ],
        pillars: [
          {
            icon: Wifi,
            title: "Wireless Security System coverage",
            description:
              "Wireless systems reduce cabling complexity while still delivering dependable alerts and visibility for the right use cases.",
          },
          {
            icon: Signal,
            title: "Networking Solutions",
            description:
              "Networking Solutions are planned so cameras, alarms, and apps stay connected even in larger or harder-to-wire sites.",
          },
          {
            icon: Smartphone,
            title: "Security Monitoring on mobile",
            description:
              "Security Monitoring becomes far more useful when alerts, live view, and playback are available on the device people actually carry.",
          },
          {
            icon: ShieldCheck,
            title: "Alarm Systems and response",
            description:
              "Alarm Systems should be easy to arm, simple to understand, and tuned so a Safety Alarm triggers the right response at the right time.",
          },
        ],
        contentBlocks: [
          {
            title: "When wireless makes sense",
            body:
              "Wireless Security System planning works best when the property needs flexibility, fast deployment, or fewer visible cables. That includes rented spaces, modern interiors, and sites where changing layouts are common.",
            bullets: [
              "Wireless systems for quick installation and clean interiors.",
              "Alarm Systems with simple app controls and direct notifications.",
              "Security Doors and entry alerts that fit into a broader access plan.",
              "Security Monitoring that keeps the setup useful after installation.",
            ],
          },
          {
            title: "How Mobile Network Booster ideas help",
            body:
              "A Mobile Network Booster can support areas where signal quality is poor, which helps remote alerts, camera access, and mobile monitoring stay reliable. The goal is not just to install devices but to keep them reachable.",
            bullets: [
              "Better app responsiveness for live view and recorded footage.",
              "More stable alerts when the property has weak signal zones.",
              "Useful for larger homes, basements, and commercial back-of-house areas.",
              "Works well with Wireless Alarm setups and remote security checks.",
            ],
          },
          {
            title: "Security Monitoring that stays practical",
            body:
              "Monitoring only works when the signals are understandable and the workflow is simple. That is why we keep alarm names, access rules, and event reviews easy to navigate, even when the site uses Comprehensive Security Systems.",
            bullets: [
              "Clear alert naming and event history for faster review.",
              "Support for mixed properties that use both wired and wireless systems.",
              "Escalation paths for Safety Alarm events and intrusion alerts.",
              "Guidance for businesses that need commercial and residential flexibility.",
            ],
          },
        ],
        processSteps: [
          {
            step: "01",
            title: "Signal and site check",
            description:
              "We inspect signal strength, likely blind spots, and entry points before recommending a wireless layout.",
          },
          {
            step: "02",
            title: "Network and power planning",
            description:
              "Networking Solutions are aligned with alarm placement so the system stays stable and easy to maintain.",
          },
          {
            step: "03",
            title: "Setup and mobile pairing",
            description:
              "We pair devices, verify notifications, and configure Security Monitoring for the people who will actually use it.",
          },
          {
            step: "04",
            title: "Support and expansion",
            description:
              "If the site grows, we expand the system with the same structure instead of forcing a rework from scratch.",
          },
        ],
        faqs: [
          {
            question: "Is a Wireless Security System enough for every property?",
            answer:
              "Not always. Wireless systems are excellent for flexibility and clean installation, but some sites still need a hybrid approach with Security Doors and wired devices.",
          },
          {
            question: "What is the role of a Mobile Network Booster?",
            answer:
              "It helps improve connectivity in weak-signal spaces so mobile alerts and remote monitoring stay dependable.",
          },
          {
            question: "Can Wireless Alarm and Safety Alarm features work together?",
            answer:
              "Yes. A Wireless Alarm can trigger the response while the Safety Alarm logic determines what gets escalated and how quickly.",
          },
          {
            question: "Do you support Comprehensive Security Systems?",
            answer:
              "Yes. We design Comprehensive Security Systems that combine monitoring, alarms, networking, and access control in one practical plan.",
          },
        ],
        ctaTitle: "Make wireless security dependable",
        ctaText:
          "The right wireless project is not just about removing cables. It is about creating a secure, stable, and easy-to-manage system with strong Networking Solutions and clear Security Monitoring.",
      }}
    />
  );
}