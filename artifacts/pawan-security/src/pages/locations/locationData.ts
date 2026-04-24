export interface LocationPageData {
  name: string;
  slug: string;
  heroImage: string;
  heroSubtitle: string;
  intro: string;
  localHighlights: string[];
  propertyTypes: string[];
  landmarks: string[];
  nearbyAreas: string[];
  searchTerms: string[];
}

export const locationPages: LocationPageData[] = [
  {
    name: "Neb Sarai",
    slug: "nebsarai",
    heroImage: "/about-bg.png",
    heroSubtitle: "Reliable CCTV installation for compact homes, builder floors, and local shops in the Neb Sarai belt.",
    intro:
      "Neb Sarai has a practical mix of homes, rented floors, small retail counters, and service spaces that need focused CCTV coverage. We design clean, dependable systems for gates, staircases, terraces, parking pockets, and internal corridors so you can monitor the property clearly from your phone or laptop.",
    localHighlights: [
      "Ideal for narrow lanes, compact plots, and multi-level residential buildings.",
      "Neat cable routing and weather-ready outdoor camera placement.",
      "Fast support for homes, rental units, and neighborhood shops.",
    ],
    propertyTypes: ["Builder floors", "Compact villas", "Local shops", "Small offices"],
    landmarks: ["Saket side connectivity", "South Delhi residential lanes", "Terrace and parking access points"],
    nearbyAreas: ["Saket", "Chhatarpur", "Mehrauli", "Malviya Nagar"],
    searchTerms: ["Nebsarai", "Neb Sarai", "CCTV in Neb Sarai"],
  },
  {
    name: "Saket",
    slug: "saket",
    heroImage: "/service-repair.png",
    heroSubtitle: "Professional CCTV solutions for homes, clinics, offices, malls, and high-footfall commercial properties in Saket.",
    intro:
      "Saket needs security systems that can handle a mix of premium apartments, clinics, shopping zones, and business spaces. Our team plans for entrances, basement parking, reception counters, lift lobbies, and service corridors so the entire property stays visible without clutter.",
    localHighlights: [
      "Strong coverage for retail, health care, and residential complexes.",
      "Mobile viewing and recording setup for busy owners and managers.",
      "Efficient installation for occupied buildings with minimal disturbance.",
    ],
    propertyTypes: ["Apartments", "Clinics", "Retail outlets", "Offices"],
    landmarks: ["Select CITYWALK corridor", "Saket District Centre", "Metro-linked commercial blocks"],
    nearbyAreas: ["Malviya Nagar", "Hauz Khas", "Mehrauli", "Green Park"],
    searchTerms: ["Saket CCTV", "CCTV installation in Saket"],
  },
  {
    name: "Malviya Nagar",
    slug: "malviya-nagar",
    heroImage: "/gallery-2.png",
    heroSubtitle: "Long-lasting CCTV setups for dense residential lanes, coaching institutes, shops, and offices in Malviya Nagar.",
    intro:
      "Malviya Nagar is one of South Delhi's busiest mixed-use neighborhoods, so security needs to be practical, tidy, and easy to manage. We focus on main entrances, staircases, shop counters, back doors, and common areas to help families and business owners get clear footage day and night.",
    localHighlights: [
      "Good fit for compact shops, tuition centers, and multi-floor homes.",
      "Reliable night vision for active lanes and market-facing properties.",
      "Easy remote access for owners who manage properties from outside the area.",
    ],
    propertyTypes: ["Homes", "Shops", "Coaching centers", "Offices"],
    landmarks: ["Malviya Nagar market belt", "Metro access zone", "Residential colony lanes"],
    nearbyAreas: ["Saket", "Hauz Khas", "Green Park", "Greater Kailash"],
    searchTerms: ["Malye Nagar", "Malviya Nagar CCTV"],
  },
  {
    name: "Green Park",
    slug: "green-park",
    heroImage: "/service-install.png",
    heroSubtitle: "Elegant CCTV installations for premium homes, clinics, restaurants, and offices in Green Park.",
    intro:
      "Green Park properties often need a security system that is discreet, dependable, and suited to premium interiors. We build camera plans for entry gates, parking areas, waiting rooms, reception points, and private access routes so the system works quietly in the background while giving you strong visibility.",
    localHighlights: [
      "Balanced security for premium homes and customer-facing businesses.",
      "Clean indoor installation that respects modern interiors.",
      "Suitable for clinics, cafes, offices, and multi-entry residences.",
    ],
    propertyTypes: ["Homes", "Clinics", "Restaurants", "Offices"],
    landmarks: ["Green Park Metro side", "Aurobindo Marg access", "Pocket markets and residential blocks"],
    nearbyAreas: ["Hauz Khas", "South Extension", "Safdarjung Enclave", "Malviya Nagar"],
    searchTerms: ["Green Park CCTV", "CCTV installation in Green Park"],
  },
  {
    name: "Hauz Khas",
    slug: "hauz-khas",
    heroImage: "/gallery-1.png",
    heroSubtitle: "Smart CCTV support for homes, cafes, creative studios, and hospitality spaces in Hauz Khas.",
    intro:
      "Hauz Khas combines residential living with hospitality, offices, and creative workspaces, which means security has to cover both people flow and property assets. We install systems that watch entrances, kitchens, cash points, terraces, and shared access areas with crisp footage and easy playback.",
    localHighlights: [
      "Good for restaurants, studios, and premium residences.",
      "Supports busy customer areas and staff-only zones at the same time.",
      "Flexible wiring and WiFi camera options for modern properties.",
    ],
    propertyTypes: ["Cafes", "Homes", "Studios", "Offices"],
    landmarks: ["Hauz Khas Village", "Deer Park side", "Metro and market approaches"],
    nearbyAreas: ["Green Park", "SDA", "Malviya Nagar", "Saket"],
    searchTerms: ["House Kausz", "Hauz Khas CCTV"],
  },
  {
    name: "Ghitorni",
    slug: "ghitorni",
    heroImage: "/service-commercial.png",
    heroSubtitle: "Wide-area CCTV coverage for farmhouses, villas, warehouses, and service spaces in Ghitorni.",
    intro:
      "Ghitorni properties often sit on larger plots, edge roads, or mixed-use stretches that need broader camera angles and stronger perimeter protection. We build surveillance systems with long-range visibility, driveway coverage, gate monitoring, and dependable night vision so large properties stay under control.",
    localHighlights: [
      "Ideal for larger compounds, warehouse spaces, and farmhouse plots.",
      "Perimeter-first camera planning for gates, walls, and open areas.",
      "Weather-resistant outdoor installs with strong night footage.",
    ],
    propertyTypes: ["Farmhouses", "Villas", "Warehouses", "Service units"],
    landmarks: ["MG Road corridor", "Large plot layouts", "Service-road access points"],
    nearbyAreas: ["Vasant Kunj", "Sultanpur", "Mehrauli", "Chhatarpur"],
    searchTerms: ["Gitohirni", "Ghitorni CCTV"],
  },
  {
    name: "Vasant Kunj",
    slug: "vasant-kunj",
    heroImage: "/hero-bg.png",
    heroSubtitle: "High-performance CCTV installation for villas, apartments, offices, and retail properties in Vasant Kunj.",
    intro:
      "Vasant Kunj needs polished security solutions that work across apartments, villas, commercial complexes, showrooms, and office environments. We map out every entry point, lobby, lift zone, basement, and terrace access route so the cameras support both privacy and full visibility.",
    localHighlights: [
      "Suited for premium residential and mixed commercial properties.",
      "Supports multi-floor camera plans and secure mobile access.",
      "Great choice for complex layouts with several gate and parking points.",
    ],
    propertyTypes: ["Villas", "Apartments", "Showrooms", "Corporate offices"],
    landmarks: ["Vasant Kunj sector blocks", "Mall and retail zones", "Apartment society entries"],
    nearbyAreas: ["Sultanpur", "Ghitorni", "Chhatarpur", "Mehrauli"],
    searchTerms: ["Vasntkunj", "Vasant Kunj CCTV"],
  },
  {
    name: "Chhatarpur",
    slug: "chhatarpur",
    heroImage: "/about-bg.png",
    heroSubtitle: "Trusted CCTV installation for villas, farmhouses, temples, and builder floors in Chhatarpur.",
    intro:
      "Chhatarpur is one of our strongest service zones because it includes villas, farmhouses, temple properties, and varied residential pockets. These spaces usually need strong outdoor coverage, driveway visibility, and long-range night vision, all of which we plan carefully during the site visit.",
    localHighlights: [
      "Excellent fit for large plots, long boundaries, and multiple entry gates.",
      "Practical coverage for homes that receive frequent guests or service visits.",
      "Reliable support for both indoor and outdoor surveillance needs.",
    ],
    propertyTypes: ["Villas", "Farmhouses", "Temples", "Builder floors"],
    landmarks: ["Chhatarpur Temple belt", "Farmhouse pockets", "Residential colony routes"],
    nearbyAreas: ["Saket", "Mehrauli", "Vasant Kunj", "Ghitorni"],
    searchTerms: ["Chhattarpur", "Chhatarpur CCTV"],
  },
  {
    name: "Rajpur",
    slug: "rajpur",
    heroImage: "/service-residential.png",
    heroSubtitle: "Practical CCTV security for homes and small businesses in Rajpur.",
    intro:
      "Rajpur properties often need perimeter-focused security because houses and business units may sit away from the main road or behind internal access points. We focus on gates, boundary walls, parking spaces, and visitor movement so owners can track what is happening at the property with confidence.",
    localHighlights: [
      "Good for private homes, small commercial units, and mixed-use plots.",
      "Strong perimeter visibility for gate and driveway monitoring.",
      "Simple mobile access for owners who are often away from the site.",
    ],
    propertyTypes: ["Homes", "Small offices", "Retail spaces", "Plot-based properties"],
    landmarks: ["South Delhi edge routes", "Internal colony roads", "Gate and parking access points"],
    nearbyAreas: ["Sultanpur", "Chhatarpur", "Khanpur", "Mehrauli"],
    searchTerms: ["Rajpur CCTV", "CCTV installation in Rajpur"],
  },
  {
    name: "Sultanpur",
    slug: "sultanpur",
    heroImage: "/service-door.png",
    heroSubtitle: "Dependable CCTV systems for homes, shops, warehouses, and commercial spaces in Sultanpur.",
    intro:
      "Sultanpur has a practical mix of homes, commercial pockets, and storage-style properties that benefit from dependable recording and clear live monitoring. We place cameras where they matter most - at the entrance, loading or utility points, internal movement areas, and any blind corners that could otherwise be missed.",
    localHighlights: [
      "Useful for mixed commercial and residential properties.",
      "Helps track deliveries, visitors, and after-hours movement.",
      "Flexible camera plans for both compact and mid-sized spaces.",
    ],
    propertyTypes: ["Homes", "Shops", "Warehouses", "Workspaces"],
    landmarks: ["Sultanpur metro side", "Market roads", "Storage and service pockets"],
    nearbyAreas: ["Ghitorni", "Vasant Kunj", "Rajpur", "Khanpur"],
    searchTerms: ["Sultanpur CCTV", "CCTV installation in Sultanpur"],
  },
  {
    name: "Khanpur",
    slug: "khanpur",
    heroImage: "/service-amc.png",
    heroSubtitle: "Flexible CCTV support for residential colonies, shops, and small offices in Khanpur.",
    intro:
      "Khanpur needs security solutions that are flexible enough for residential lanes, shops, and smaller office setups. We pay special attention to front gates, staircases, terrace access, and street-facing blind spots so your cameras capture the moments that matter most.",
    localHighlights: [
      "Works well for compact urban properties and local businesses.",
      "Good option for owners who want affordable, practical CCTV coverage.",
      "Supports quick maintenance and easy mobile monitoring.",
    ],
    propertyTypes: ["Residential homes", "Local shops", "Small offices", "Rental units"],
    landmarks: ["Khanpur market cluster", "Residential lanes", "Street-facing entry points"],
    nearbyAreas: ["Saket", "Chhatarpur", "Sultanpur", "Mehrauli"],
    searchTerms: ["Khanpur CCTV", "CCTV installation in Khanpur"],
  },
];

export function getLocationPageBySlug(slug: string) {
  const location = locationPages.find((page) => page.slug === slug);

  if (!location) {
    throw new Error(`Unknown location slug: ${slug}`);
  }

  return location;
}