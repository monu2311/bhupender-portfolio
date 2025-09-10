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
    slug: "tarality",
    title: "Tarality",
    description: "A blockchain-based crypto exchange offering multi-currency wallets, INR trading, KYC verification, escrow services, BNPL, referral rewards, and AI-powered fraud detection for secure and transparent transactions.",
    image: "/projects/TaralityBanner.png",
    banner: "/projects/TaralityBanner.png",
    techStack: ["React.js", "Express.js", "JavaScript", "Material-UI", "Git"],
    content: [
      "Developed and exposed a CRUD application using a RESTful API built with React.js",
      "Integrated REST APIs to make the website dynamic and data-driven",
      "Implemented code reuse strategies to enhance application performance and stability",
      "Integrated third-party APIs to fetch ads and other web information",
      "Collaborated with the team to maintain clean, scalable, and maintainable code"
    ],
  },
  {
    slug: "pay2p-ewallet",
    title: "PAY2P eWallet",
    description: "A peer-to-peer digital wallet platform enabling secure money transfers, instant payments, multi-currency support, and seamless financial management with advanced security features.",
    image: "/projects/P2P.png",
    banner: "/projects/P2P.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Material-UI", "Firebase", "Blockchain", "KYC SDK", "AWS"],
    content: [
      "Developed a secure P2P wallet platform for instant money transfers and digital payments",
      "Integrated KYC verification and multi-layered authentication for user trust and compliance",
      "Implemented multi-currency wallet support with smooth INR and international transactions",
      "Designed and built responsive UI with React.js and Material-UI for an intuitive experience",
      "Optimized backend with Node.js and Express.js to handle high-volume transaction requests",
      "Added escrow and fraud detection mechanisms to ensure safe and transparent operations",
      "Provided seamless transaction history, rewards, and wallet-to-wallet payment features"
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
  {
  slug: "beatnami-nft-marketplace",
  title: "BeatNami NFT Marketplace",
  description: "A blockchain-powered marketplace for minting, buying, and selling NFTs, offering wallet integration, auctions, royalties, and seamless user experience.",
  image: "/projects/Bite.png",
  banner: "/projects/Bite.png",
  techStack: ["React.js", "Next.js", "Web3.js", "Solidity", "Alphanumeric Smart Contracts", "Material-UI", "Node.js", "MongoDB", "IPFS", "AWS"],
  content: [
    "Built a decentralized NFT marketplace supporting minting, bidding, and purchasing of unique digital assets",
    "Integrated blockchain smart contracts using Solidity and Web3.js to manage ownership, auctions, and royalties",
    "Developed wallet integrations (e.g., MetaMask) for secure onboarding and transactions",
    "Designed responsive and immersive UI/UX with React.js, Next.js, and Material-UI",
    "Implemented IPFS-based decentralized storage for reliable metadata and media delivery",
    "Optimized backend services using Node.js and MongoDB for listings, user profiles, and transaction data",
    "Integrated analytics and event tracking to monitor marketplace activity and inform feature enhancements"
  ],
}

];


