import { Camera, Network, Settings2, Shield } from "lucide-react";
import { LongFormSecurityPage } from "@/components/pages/LongFormSecurityPage";

export default function CctvInstallationRepair() {
  return (
    <LongFormSecurityPage
      data={{
        title: "CCTV Camera Full Setup Installation and Repair",
        subtitle:
          "From C C T V Camera planning to Cctv Camera Installation, CCTV Camera Full Setup installation, CCTV Camera Repair, CCTV Camera Networking, CCTV DVR installation, and DVR Camera installation, this page covers the full lifecycle.",
        eyebrow: "CCTV Installation Guide",
        intro:
          "The goal is simple: explain the process clearly, show how the equipment is connected, and help readers understand what a professional CCTV Camera Full Setup installation should look like from start to finish.",
        heroImage: "/service-install.png",
        keywordChips: [
          "CCTV Camera Full Setup installation",
          "CCTV Camera Repair",
          "CCTV Camera Networking",
          "CCTV DVR installation",
          "DVR Camera installation",
          "C C T V Camera",
          "Cctv Camera Installation",
          "Video systems",
          "Security Monitoring",
        ],
        metrics: [
          { value: "Full", label: "setup support" },
          { value: "Same-day", label: "repair response" },
          { value: "HD/4K", label: "image clarity" },
          { value: "Neat", label: "installation finish" },
        ],
        pillars: [
          {
            icon: Camera,
            title: "Cctv Camera Installation",
            description:
              "We place each camera for useful coverage, then finish the job with clean cabling, correct angles, and proper power routing.",
          },
          {
            icon: Settings2,
            title: "CCTV DVR installation",
            description:
              "DVR recording is configured so playback, storage, and export options are easy to use when you need them later.",
          },
          {
            icon: Network,
            title: "CCTV Camera Networking",
            description:
              "Networking is planned carefully so remote access, mobile viewing, and stable recording work without constant dropouts.",
          },
          {
            icon: Shield,
            title: "CCTV Camera Repair",
            description:
              "Repair work covers power faults, loose connectors, damaged cameras, and recording issues before the system becomes unreliable.",
          },
        ],
        contentBlocks: [
          {
            title: "How a full installation is actually delivered",
            body:
              "A real CCTV Camera Full Setup installation includes site assessment, camera selection, cable paths, recording setup, and mobile access testing. It should never stop at mounting devices on a wall.",
            bullets: [
              "Camera placement that avoids glare, blind spots, and low-use angles.",
              "DVR or NVR setup matched to the number of cameras and storage needs.",
              "Remote access configuration so live view and playback work on phones.",
              "Handover that explains maintenance, footage export, and camera naming.",
            ],
          },
          {
            title: "Why networking changes the result",
            body:
              "CCTV Camera Networking is where a lot of installations succeed or fail. Good networking keeps the system responsive, while weak planning creates unstable streams, poor playback, and avoidable support calls.",
            bullets: [
              "Stable uplinks for mobile access and remote monitoring.",
              "Correct cabling, power distribution, and switch planning.",
              "Integration with Security Monitoring for alerts and event review.",
              "Support for future expansion when the site adds more cameras.",
            ],
          },
          {
            title: "What good repair service should cover",
            body:
              "CCTV Camera Repair should not be a guess-and-check process. It should isolate whether the problem is in the camera, cable, connector, recorder, power supply, or network layer, then fix the real cause.",
            bullets: [
              "Fixing one camera or a whole group that has stopped recording.",
              "Replacing damaged connectors and restoring signal quality.",
              "Repairing DVR faults so storage and playback are reliable again.",
              "Checking the whole system after repair so the issue does not return.",
            ],
          },
        ],
        processSteps: [
          {
            step: "01",
            title: "Survey and design",
            description:
              "We inspect the layout, identify blind spots, and decide whether the project needs analog, hybrid, or IP-based video systems.",
          },
          {
            step: "02",
            title: "Installation and cabling",
            description:
              "The team handles mounting, power, cable routing, and DVR Camera installation with a clean finish.",
          },
          {
            step: "03",
            title: "Networking and testing",
            description:
              "We verify CCTV Camera Networking, configure remote access, and test playback before the job is handed over.",
          },
          {
            step: "04",
            title: "Repair and maintenance",
            description:
              "If something fails later, the same workflow helps us diagnose it quickly and restore the system without unnecessary downtime.",
          },
        ],
        faqs: [
          {
            question: "What is included in CCTV Camera Full Setup installation?",
            answer:
              "It includes planning, camera placement, cabling, recorder configuration, mobile viewing, and a final test so the system is ready for everyday use.",
          },
          {
            question: "Can you repair an old C C T V Camera system?",
            answer:
              "Yes. We can usually repair older systems by checking power, signal, and recorder health before recommending a full replacement.",
          },
          {
            question: "Do you handle CCTV DVR installation and DVR Camera installation together?",
            answer:
              "Yes. The recorder and the cameras are planned together so storage, resolution, and channel count stay aligned from the start.",
          },
          {
            question: "Why does CCTV Camera Networking matter?",
            answer:
              "Networking affects video stability, remote access, and monitoring quality. A strong network makes the entire CCTV setup easier to use and maintain.",
          },
        ],
        ctaTitle: "Turn a camera list into a working system",
        ctaText:
          "If you need Cctv Camera Installation, CCTV Camera Repair, or a complete CCTV Camera Full Setup installation, the next step is a structured site review that matches hardware to the property.",
      }}
    />
  );
}