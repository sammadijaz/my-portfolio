// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "AutoCod",
    description:
      "Capture and record browser tabs with auto-scroll, stylish Beauty Mode videos, and full-page screenshots.",
    href: "https://autocod.sammadijaz.me/",
    image: "public/assets/projects/autocod.png",
    bgImage: "public/assets/backgrounds/blanket.jpg",
    techstack: [
      { id: 1, name: "JavaScript (ES6+)" },
      { id: 2, name: "Chrome Manifest V3" },
      { id: 3, name: "Canvas2D" },
      { id: 4, name: "Formspree" },
      { id: 5, name: "Git + GitHub" },
      { id: 6, name: "Firebase" },
      { id: 7, name: "MediaRecorder API" },
    ],
  },
  {
    id: 2,
    name: "Grabs AI",
    description:
      "Grabs AI is an enterprise-grade lead scraping and enrichment platform that automates the discovery, extraction, and normalization of business contact data from Google Maps at scale.",
    href: "https://www.grabsai.app/",
    image: "assets/projects/grabs-ai.png",
    bgImage: "assets/backgrounds/curtains.jpg",
    techstack: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Polar" },
      { id: 6, name: "Three.js" },
      { id: 7, name: "Render" },
      { id: 8, name: "Puppeteer" },
      { id: 9, name: "Docker" },
      { id: 10, name: "Supabase" },
    ],
  },
  {
    id: 3,
    name: "Cozy Starfall",
    description:
      "Cozy Starfall Tab is a Chrome Manifest V3 extension that transforms the browser's default New Tab into a fully interactive, animated night sky environment. It serves as a multi-purpose productivity and mindfulness tool that combines real-time countdown/countup timers with ambient visual effects, quick-access shortcuts to recently visited sites, and deep customization options—all stored locally on the user's device with zero server dependencies.",
    href: "",
    image: "assets/projects/cozy-starfall.png",
    bgImage: "assets/backgrounds/map.jpg",
    techstack: [
      { id: 1, name: "JavaScript (ES6+)" },
      { id: 2, name: "Chrome Manifest V3" },
      { id: 3, name: "HTML5" },
      { id: 4, name: "CSS3" },
      { id: 5, name: "Git + GitHub" },
    ],
  },
  {
    id: 4,
    name: "Lumina Flip Clock",
    description:
      "The most aesthetic flip clock extension for your browser. Focus better, look better.",
    href: "https://lumina.sammadijaz.me/",
    image: "assets/projects/lumina-flip-clock.png",
    bgImage: "assets/backgrounds/poster.jpg",
    techstack: [
      { id: 1, name: "JavaScript (ES6+)" },
      { id: 2, name: "Chrome Manifest V3" },
      { id: 3, name: "HTML5" },
      { id: 4, name: "CSS3" },
      { id: 5, name: "Git + GitHub" },
    ],
  },
  {
    id: 5,
    name: "UAS - Universal Appp Store",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "https://uas.sammadijaz.me/",
    image: "assets/projects/home-decor-store.jpg",
    bgImage: "assets/backgrounds/table.jpg",
    techstack: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "assets/projects/game-store.jpg",
    bgImage: "assets/backgrounds/curtains.jpg",
    techstack: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
  {
    id: 7,
    name: "Mobile Accessories Shop",
    description:
      "A sleek e-commerce platform for mobile accessories featuring cases, chargers, earbuds and more with fast checkout.",
    href: "",
    image: "assets/projects/mobile-accessories-store.jpg",
    bgImage: "assets/backgrounds/blanket.jpg",
    techstack: [
      { id: 1, name: "React" },
      { id: 2, name: "Express.js" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Stripe" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  // { name: "Instagram", href: "https://www.instagram.com/iamsammadijaz" },
  // {
  //   name: "Youtube",
  //   href: "https://www.youtube.com/channel/",
  // },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sammadijaz/" },
  { name: "GitHub", href: "https://github.com/sammadijaz" },
];
