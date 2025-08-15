export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string; // card image
  banner: string; // banner image for detail page
  techStack: string[];
  content: string[]; // paragraphs
};

export const allProjects: Project[] = [
  {
    slug: "rival-finance",
    title: "Rival Finance",
    description: "Digital Banking & Payment Solution - A next-generation fintech platform offering virtual Visa cards, international transfers, and complete financial services.",
    image: "/projects/rivalHero.png",
    banner: "/projects/rivalBanner.png",
    techStack: ["React Native", "React.js", "Material-UI", "Node.js", "MongoDB", "AWS", "Stripe API", "KYC SDK", "Redux Toolkit", "Firebase"],
    content: [
      "Developed responsive and pixel-perfect UI components for both mobile and web applications",
      "Integrated REST APIs for payments, KYC verification, eSIM purchases, and transaction handling",
      "Optimized rendering performance and reduced app startup time by 20%",
      "Ensured cross-platform UI consistency for iOS and Android platforms",
      "Mentored junior developers and conducted code reviews to maintain quality standards",
      "Implemented robust error handling and background processing for seamless transactions"
    ],
  },
  {
    slug: "ponttual",
    title: "Ponttual",
    description: "Ride-Hailing & On-Demand Service Platform - A dual-role platform (User & Driver apps) with real-time tracking, KYC verification, and safety features.",
    image: "/projects/uber.png",
    banner: "/projects/uber.png",
    techStack: ["React Native", "React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "AWS", "Google Maps API", "Socket.IO", "Redux Toolkit"],
    content: [
      "Built ride booking & tracking flow for both User & Driver applications",
      "Integrated Google Places API for fetching nearest pickup locations",
      "Developed KYC & document verification module for driver onboarding",
      "Implemented in-app wallet system for both adding money and receiving earnings",
      "Added SOS button with backend alert handling for passenger safety",
      "Created real-time chat between drivers and users using Socket.IO"
    ],
  },
  {
    slug: "tawle",
    title: "Tawle",
    description: "Restaurant Booking & Management Platform - Connects customers with restaurants for real-time table reservations, menu browsing, and loyalty programs.",
    image: "/projects/tawlehero.png",
    banner: "/projects/tawleBanner.png",
    techStack: ["React Native", "React.js", "Material-UI", "Node.js", "Express.js", "MongoDB", "AWS", "Google Maps API", "Redux Toolkit", "Firebase"],
    content: [
      "Developed table reservation UI and integrated it with real-time APIs",
      "Implemented Google Maps API for restaurant location search and discovery",
      "Created filter & search functionality for menus and promotional offers",
      "Worked closely with backend team to ensure low-latency API responses",
      "Assisted restaurants in onboarding and resolving technical issues during setup",
      "Implemented push notifications for booking confirmations and promotional updates"
    ],
  },
];


