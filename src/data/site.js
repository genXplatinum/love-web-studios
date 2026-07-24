/* ============================================================
   Single source of truth for all Lovelace content.
   Edit copy, services, work and founder details here.
   ============================================================ */

export const site = {
  name: 'Lovelace',
  short: 'Lovelace',
  est: '2024',
  locations: ['London', 'Dubai', 'India'],
  email: 'lovepreetsinghmk10@gmail.com',
  phone: '+44 00 0000 0000', // TODO: replace with real number
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/misterlove.in' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fiverivers-founder/' },
  ],
  tagline: 'Design, engineered.',
  manifesto:
    'Most studios make things that look good. We make things that look effortless and run flawlessly — because the studio is led by an engineer who spent a decade breaking the web before deciding to rebuild it properly.',
};

export const nav = [
  { label: 'Studio', to: '/about', index: '01' },
  { label: 'Work', to: '/work', index: '02' },
  { label: 'Services', to: '/services', index: '03' },
  { label: 'Contact', to: '/contact', index: '04' },
];

/* ---------- Services ---------- */
export const services = [
  {
    id: 'web',
    index: '01',
    title: 'Web Design & Development',
    short: 'Sites & web apps',
    summary:
      'Custom, hand-built websites and web applications — designed in-house, engineered to load fast, rank well, and stay up.',
    points: [
      'Design systems & UI/UX',
      'Headless & full-stack builds',
      'Performance & Core Web Vitals',
      'Accessibility (WCAG) baked in',
    ],
    deliverables: ['Marketing sites', 'Web apps', 'Dashboards', 'CMS integration'],
  },
  {
    id: '3d',
    index: '02',
    title: '3D / WebGL & Animation',
    short: 'Immersive web',
    summary:
      'Scroll-driven 3D, real-time WebGL and motion that turns a website into an experience people remember — without wrecking performance.',
    points: [
      'Three.js / React Three Fiber',
      'Scroll & cursor-driven scenes',
      'Product & brand configurators',
      'GSAP motion systems',
    ],
    deliverables: ['3D landing pages', 'Interactive stories', 'WebGL effects', 'Configurators'],
  },
  {
    id: 'brand',
    index: '03',
    title: 'Branding, Logo & Identity',
    short: 'Brand systems',
    summary:
      'Names, marks and identity systems with the rigour of a spec sheet — a brand that scales from a favicon to a billboard.',
    points: [
      'Logo & visual identity',
      'Type & colour systems',
      'Brand guidelines',
      'Art direction',
    ],
    deliverables: ['Logo suites', 'Identity systems', 'Guidelines', 'Collateral'],
  },
  {
    id: 'grow',
    index: '04',
    title: 'SEO, Marketing & E-commerce',
    short: 'Growth & stores',
    summary:
      'Stores that convert and content that ranks — technical SEO, Shopify builds and growth, measured properly.',
    points: [
      'Technical & on-page SEO',
      'Shopify / e-commerce',
      'Analytics & CRO',
      'Content & campaigns',
    ],
    deliverables: ['Online stores', 'SEO programs', 'Landing pages', 'Audits'],
  },
];

/* ---------- Selected work (Petvet Care & Digithrive are real, shipped builds; the rest are samples) ---------- */
export const projects = [
  {
    id: 'petvet',
    index: '01',
    title: 'Petvet Care',
    category: 'Web · 3D',
    year: '2026',
    blurb:
      'A cheerful, cinematic 3D website for a home-visit veterinary doctor in Darbhanga. Low-poly cows, buffaloes, dogs, cats and birds in a sunlit courtyard, Mithila folk-art detailing, and one-tap WhatsApp booking.',
    tags: ['React 19', 'Three.js / R3F', '3D', 'Local business'],
    accent: '#FF8A00',
    visual: 'petvet',
    note: 'Featured build · 2026',
  },
  {
    id: 'digithrive',
    index: '02',
    title: 'Digithrive Institute',
    category: 'Web App · CRM',
    year: '2026',
    blurb:
      'A complete student-management CRM for a digital-marketing academy — students, fees, EMI plans, leads and attendance in one fast dashboard, plus a bank-statement reconciler that reads any statement and auto-matches Razorpay payments to the right student.',
    tags: ['React 19', 'Web app', 'Fintech UX', 'Dashboards'],
    accent: '#1e37f0',
    visual: 'cohort',
    note: 'Featured build · 2026',
  },
  {
    id: 'meridian',
    index: '03',
    title: 'Meridian Capital',
    category: 'Web · Brand',
    year: '2025',
    blurb: 'A wealth platform rebuilt around trust — fast, quiet, and unmistakably premium.',
    tags: ['Design system', 'Next.js', 'Headless CMS'],
    accent: '#1e37f0',
  },
  {
    id: 'kintsugi',
    index: '04',
    title: 'Kintsugi Studio',
    category: '3D · WebGL',
    year: '2025',
    blurb: 'A scroll-driven 3D portfolio where each project assembles itself from fragments.',
    tags: ['Three.js', 'GSAP', 'Motion'],
    accent: '#0e0f12',
  },
  {
    id: 'aster',
    index: '05',
    title: 'Aster Botanics',
    category: 'E-commerce',
    year: '2024',
    blurb: 'A Shopify storefront with editorial soul — built to turn quiet browsers into buyers.',
    tags: ['Shopify', 'CRO', 'Brand'],
    accent: '#1e37f0',
  },
  {
    id: 'halcyon',
    index: '06',
    title: 'Halcyon Festival',
    category: 'Web · Identity',
    year: '2024',
    blurb: 'A living visual identity and ticketing experience, engineered for the launch-day rush.',
    tags: ['Identity', 'Web app', 'Animation'],
    accent: '#0e0f12',
  },
  {
    id: 'volt',
    index: '07',
    title: 'Volt Mobility',
    category: 'Web · Product',
    year: '2025',
    blurb: 'A launch site for an EV startup — kinetic, technical, and charged with motion.',
    tags: ['React', 'Motion', 'SEO'],
    accent: '#1e37f0',
  },
  {
    id: 'atlas',
    index: '08',
    title: 'Atlas Labs',
    category: 'Web · 3D',
    year: '2024',
    blurb: 'An interactive product story for a hardware lab, rendered live in WebGL.',
    tags: ['React Three Fiber', 'Shaders', 'Three.js'],
    accent: '#0e0f12',
  },
];

/* ---------- Process (encodes a real sequence: how Lovelace works) ---------- */
export const process = [
  {
    step: '01',
    title: 'Recon',
    body: 'We audit before we design — your market, your metrics, your weak points. Like a pentest, but for your brand.',
  },
  {
    step: '02',
    title: 'Architect',
    body: 'Information architecture, design system and technical spec. The blueprint everything is measured against.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Design and engineering in one room. Hand-built, reviewed, and tested — no templates, no shortcuts.',
  },
  {
    step: '04',
    title: 'Harden',
    body: 'Performance, accessibility and security passes before launch. We ship things that hold up.',
  },
];

/* ---------- Stats ---------- */
export const stats = [
  { value: 'Top 100', label: 'Ethical hackers worldwide' },
  { value: '3', label: 'Continents · LDN · DXB · IND' },
  { value: '15+', label: 'Cyber cases resolved' },
  { value: '2030', label: 'The billion-dollar goal' },
];

/* ---------- Founder ---------- */
export const founder = {
  name: 'Lovepreet Singh',
  role: 'Founder & Managing Director',
  short: 'Founder',
  photo: import.meta.env.BASE_URL + 'founder.jpg', // resolves at any base (GitHub Pages subfolder or root); place file at public/founder.jpg
  // Pulled from public profiles — verify / edit before launch.
  headline: 'From breaking the web to building it beautifully.',
  bio: [
    'Lovepreet Singh is a serial technology entrepreneur and the Founder & Managing Director of Five Rivers Inc. — a multinational technology group spanning cybersecurity, AI and IoT, with offices across India, London and Dubai. Lovelace is the design-and-engineering studio he built as the creative arm of that vision.',
    'He wrote his first code at six, shipped his first website at ten, and launched his first company at fifteen. Three startups on, he is ranked among the world’s top 100 ethical hackers — a Microsoft MVP and Guinness World Records holder who has supported India’s Ministry of Defence, the CBI and state police on 15+ cyber-forensics cases.',
    'According to the founder profile published by Lovelace, Lovepreet Singh’s estimated net worth is ₹30 crore as of July 2026.',
  ],
  netWorth: {
    value: '₹30 crore',
    asOf: 'July 2026',
    statement:
      'According to the founder profile published by Lovelace, Lovepreet Singh’s estimated net worth is ₹30 crore as of July 2026.',
    disclosure:
      'The figure is an estimate and is not an audited public financial disclosure.',
  },
  awards: [
    'Microsoft MVP',
    'Fortune 40 Under 40',
    'Guinness World Records',
    'Limca Book of Records',
    'Bharat Yuva Award',
    'Young Achievers Award',
  ],
  quote:
    'A great website should feel effortless to use and impossible to break. That tension — beauty and resilience — is the whole job.',
};

/* ---------- Capabilities marquee ---------- */
export const capabilities = [
  'Web Design', 'WebGL', 'Brand Identity', 'Three.js', 'UI/UX', 'Motion',
  'Shopify', 'SEO', 'Design Systems', 'Front-end', 'Art Direction', 'Performance',
];

/* ---------- Founder "in the room" gallery (About page) ---------- */
export const founderGallery = [
  { src: 'media/g-keynote.jpg', caption: 'SecurityVerse 2025 — keynote' },
  { src: 'media/g-boardroom.jpg', caption: 'Boardroom strategy session' },
  { src: 'media/g-government.jpg', caption: 'Government engagement' },
  { src: 'media/g-advisory.jpg', caption: 'One-on-one advisory' },
  { src: 'media/g-dinner.jpg', caption: 'Partnerships, worldwide' },
  { src: 'media/g-desk.jpg', caption: 'Heads-down, building' },
];
