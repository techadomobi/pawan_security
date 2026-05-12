import { Building2, Flame, Home, ShieldCheck } from "lucide-react";
import { LongFormSecurityPage } from "@/components/pages/LongFormSecurityPage";

export default function ComprehensiveSecuritySolutions() {
  return (
    <LongFormSecurityPage
      data={{
        title: "Comprehensive Security Solutions for Homes and Businesses",
        subtitle:
          "Access control systems, burglar alarms, commercial security systems, fire alarms, monitoring service, and residential security system planning for properties that need reliable protection without confusing jargon.",
        eyebrow: "Security Planning Guide",
        intro:
          "This page is written for people comparing Security doors, Security bars, Silent alarms, Video systems, and Wireless systems. It is also useful when you need a clear explanation of how Comprehensive Security Systems and Comprehensive Security Solutions fit together in one practical plan.",
        heroImage: "/about-bg.png",
        keywordChips: [
          "Access control systems",
          "Burglar alarms",
          "Commercial security systems",
          "Fire alarms",
          "Monitoring service",
          "Residential security system",
          "Security bars",
          "Security doors",
          "Silent alarms",
          "Video systems",
          "Wireless systems",
        ],
        metrics: [
          { value: "360°", label: "coverage planning" },
          { value: "24/7", label: "monitoring ready" },
          { value: "Fast", label: "response support" },
          { value: "All-in-one", label: "security design" },
        ],
        pillars: [
          {
            icon: Home,
            title: "Residential security system design",
            description:
              "We map entry points, family routines, and parking areas so the Residential security system protects the spaces people actually use every day.",
          },
          {
            icon: Building2,
            title: "Commercial security systems",
            description:
              "Offices, stores, clinics, and warehouses get layered coverage with access control systems, video systems, and clear monitoring service workflows.",
          },
          {
            icon: ShieldCheck,
            title: "Silent alarms and burglar alarms",
            description:
              "Silent alarms reduce escalation while burglar alarms create a visible deterrent for intrusions, helping the property react before loss grows.",
          },
          {
            icon: Flame,
            title: "Fire alarms and response planning",
            description:
              "Fire alarms are paired with notification logic and exit planning so teams can act quickly during an emergency instead of improvising.",
          },
        ],
        contentBlocks: [
          {
            title: "What a complete security plan should include",
            body:
              "A serious deployment is more than one device. It brings together Security doors, Security bars, silent alarms, video systems, Wireless systems, and a monitoring service that makes the entire stack usable when it matters.",
            bullets: [
              "Access control systems for staff entry, visitor handling, and zone-based permissions.",
              "Burglar alarms that trigger fast alerts and discourage break-ins before they spread.",
              "Fire alarms with clear escalation paths and practical placement decisions.",
              "Residential security system options that stay simple enough for families to use.",
            ],
          },
          {
            title: "Where the system works best",
            body:
              "Commercial security systems need different priorities from a home setup, but both benefit from the same discipline: good coverage, strong hardware, and a clean handover that users understand. The right combination of Security doors, monitoring service, and wireless systems keeps the system effective long after installation day.",
            bullets: [
              "Apartment towers, gated homes, and villas that want a residential security system with easy daily use.",
              "Retail stores and offices that need visitor control, logging, and reliable after-hours visibility.",
              "Warehouses and campuses where video systems and alarm systems reduce blind spots.",
              "Buildings that need a mix of physical barriers and electronic alerts in one plan.",
            ],
          },
          {
            title: "Why monitoring matters as much as hardware",
            body:
              "Even the best hardware loses value when nobody is watching the right events. Monitoring service gives silent alarms, fire alarms, and intrusion alarms a clear follow-up process so the incident gets attention instead of being ignored.",
            bullets: [
              "Incident tracking that helps managers review what happened and when.",
              "Notification routines that make security doors and sensors part of a larger response.",
              "Support for upgrades when a site grows from a small setup to a Comprehensive Security System.",
              "Practical guidance for families and teams who want straightforward security, not complexity.",
            ],
          },
        ],
        processSteps: [
          {
            step: "01",
            title: "Risk review",
            description:
              "We look at entry paths, vulnerable points, and user flow so the solution is built around the property instead of a generic template.",
          },
          {
            step: "02",
            title: "Layered system design",
            description:
              "Security doors, alarms, cameras, and access control systems are selected together so they work as one stack.",
          },
          {
            step: "03",
            title: "Installation and testing",
            description:
              "Each component is mounted, configured, and tested before handover so the monitoring service is ready from day one.",
          },
          {
            step: "04",
            title: "Training and support",
            description:
              "We explain how to use the system, what each alarm does, and how to request support when the site changes.",
          },
        ],
        faqs: [
          {
            question: "Do I need both alarms and cameras?",
            answer:
              "Yes, in most cases. Burglar alarms and silent alarms help detect an event, while video systems explain what happened and support response decisions.",
          },
          {
            question: "What if I only need a residential security system?",
            answer:
              "A home-focused plan can stay compact while still including the right mix of security doors, wireless systems, and alerting features that are easy to use every day.",
          },
          {
            question: "How do commercial security systems scale?",
            answer:
              "They scale by zones. That means access control systems, monitoring service, and fire alarms are expanded property by property instead of forcing one giant bundle.",
          },
          {
            question: "Can you combine physical and electronic protection?",
            answer:
              "Yes. Security bars, security doors, sensors, and alarms usually deliver the strongest result when they are planned together as one Comprehensive Security Solution.",
          },
        ],
        ctaTitle: "Build a stronger security baseline",
        ctaText:
          "If you are planning a new security setup, the best next step is a site review that turns the keyword list into a real-world protection plan with the right balance of physical and electronic layers.",
      }}
    />
  );
}