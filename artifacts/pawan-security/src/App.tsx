import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/layout/FloatingContactButtons";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Nebsarai from "@/pages/locations/Nebsarai";
import Saket from "@/pages/locations/Saket";
import MalviyaNagar from "@/pages/locations/MalviyaNagar";
import GreenPark from "@/pages/locations/GreenPark";
import HauzKhas from "@/pages/locations/HauzKhas";
import Ghitorni from "@/pages/locations/Ghitorni";
import VasantKunj from "@/pages/locations/VasantKunj";
import Chhatarpur from "@/pages/locations/Chhatarpur";
import Rajpur from "@/pages/locations/Rajpur";
import Sultanpur from "@/pages/locations/Sultanpur";
import Khanpur from "@/pages/locations/Khanpur";

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const cityRoutes = [
  { delhiPath: "/nebsarai-delhi", legacyPath: "/nebsarai", element: <Nebsarai /> },
  { delhiPath: "/saket-delhi", legacyPath: "/saket", element: <Saket /> },
  { delhiPath: "/malviya-nagar-delhi", legacyPath: "/malviya-nagar", element: <MalviyaNagar /> },
  { delhiPath: "/green-park-delhi", legacyPath: "/green-park", element: <GreenPark /> },
  { delhiPath: "/hauz-khas-delhi", legacyPath: "/hauz-khas", element: <HauzKhas /> },
  { delhiPath: "/ghitorni-delhi", legacyPath: "/ghitorni", element: <Ghitorni /> },
  { delhiPath: "/vasant-kunj-delhi", legacyPath: "/vasant-kunj", element: <VasantKunj /> },
  { delhiPath: "/chhatarpur-delhi", legacyPath: "/chhatarpur", element: <Chhatarpur /> },
  { delhiPath: "/rajpur-delhi", legacyPath: "/rajpur", element: <Rajpur /> },
  { delhiPath: "/sultanpur-delhi", legacyPath: "/sultanpur", element: <Sultanpur /> },
  { delhiPath: "/khanpur-delhi", legacyPath: "/khanpur", element: <Khanpur /> },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="grow">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {cityRoutes.map((city) => (
              <Route key={city.delhiPath} path={city.delhiPath} element={city.element} />
            ))}
            {cityRoutes.map((city) => (
              <Route
                key={city.legacyPath}
                path={city.legacyPath}
                element={<Navigate to={city.delhiPath} replace />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={base}>
          <AnimatedRoutes />
          <FloatingContactButtons />
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
