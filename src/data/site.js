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
  tagline: 'Design that works.',
  manifesto:
    'We design websites, brands and digital products. Design and development happen under one roof, so the work looks good, loads quickly and is easy to use.',
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
      'We design and build custom websites and web apps. Each project is planned, designed, coded and tested by our own team.',
    points: [
      'Website strategy and UI/UX',
      'Headless and full stack development',
      'Speed and Core Web Vitals',
      'Accessibility and WCAG',
    ],
    deliverables: ['Marketing sites', 'Web apps', 'Dashboards', 'CMS integration'],
  },
  {
    id: '3d',
    index: '02',
    title: '3D / WebGL & Animation',
    short: '3D web & motion',
    summary:
      'We use 3D, WebGL and motion when they help tell the story. The experience stays clear and fast on everyday devices.',
    points: [
      'Three.js / React Three Fiber',
      'Animation tied to scrolling and cursor movement',
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
      'We create names, logos and visual identities that work across websites, social media, print and everything in between.',
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
    title: 'SEO, Marketing & Online Stores',
    short: 'Growth & stores',
    summary:
      'We build online stores, improve search visibility and use clear reporting to see what is working.',
    points: [
      'Technical and on page SEO',
      'Shopify and online stores',
      'Analytics and conversion reviews',
      'Content and campaigns',
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
      'A friendly 3D website for a veterinary doctor who makes home visits in Darbhanga. Visitors can explore the animated courtyard and book a visit on WhatsApp.',
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
      'A student management system for a digital marketing institute. It brings students, fees, payment plans, leads, attendance and Razorpay reconciliation into one dashboard.',
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
    blurb: 'A calm, clear website for a wealth management platform that makes complex information easier to understand.',
    tags: ['Design system', 'Next.js', 'Headless CMS'],
    accent: '#1e37f0',
  },
  {
    id: 'kintsugi',
    index: '04',
    title: 'Kintsugi Studio',
    category: '3D · WebGL',
    year: '2025',
    blurb: 'A 3D portfolio where each project comes together as the visitor scrolls.',
    tags: ['Three.js', 'GSAP', 'Motion'],
    accent: '#0e0f12',
  },
  {
    id: 'aster',
    index: '05',
    title: 'Aster Botanics',
    category: 'Online store',
    year: '2024',
    blurb: 'A Shopify store with a strong editorial style and a simpler path from browsing to buying.',
    tags: ['Shopify', 'CRO', 'Brand'],
    accent: '#1e37f0',
  },
  {
    id: 'halcyon',
    index: '06',
    title: 'Halcyon Festival',
    category: 'Web · Identity',
    year: '2024',
    blurb: 'A visual identity and ticketing website built to handle a busy festival launch.',
    tags: ['Identity', 'Web app', 'Animation'],
    accent: '#0e0f12',
  },
  {
    id: 'volt',
    index: '07',
    title: 'Volt Mobility',
    category: 'Web · Product',
    year: '2025',
    blurb: 'A product website for an electric vehicle startup, with clear technical details and considered motion.',
    tags: ['React', 'Motion', 'SEO'],
    accent: '#1e37f0',
  },
  {
    id: 'atlas',
    index: '08',
    title: 'Atlas Labs',
    category: 'Web · 3D',
    year: '2024',
    blurb: 'An interactive product page for a hardware company, rendered in real time with WebGL.',
    tags: ['React Three Fiber', 'Shaders', 'Three.js'],
    accent: '#0e0f12',
  },
];

/* ---------- Process (encodes a real sequence: how Lovelace works) ---------- */
export const process = [
  {
    step: '01',
    title: 'Learn',
    body: 'We start by learning about your business, your customers and the problem you want to solve.',
  },
  {
    step: '02',
    title: 'Plan',
    body: 'We agree on the content, page structure, visual direction and technical approach before production begins.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Our designers and developers work together, so important decisions do not get lost between teams.',
  },
  {
    step: '04',
    title: 'Test',
    body: 'Before launch, we check speed, accessibility, security and the small details across phones and computers.',
  },
];

/* ---------- Stats ---------- */
export const stats = [
  { value: 'Top 100', label: 'Ethical hackers worldwide' },
  { value: '3', label: 'Continents · LDN · DXB · IND' },
  { value: '15+', label: 'Cyber cases resolved' },
  { value: '2030', label: 'The long term business goal' },
];

/* ---------- Founder ---------- */
export const founder = {
  name: 'Lovepreet Singh',
  role: 'Founder & Managing Director',
  short: 'Founder',
  photo: import.meta.env.BASE_URL + 'founder.jpg', // resolves at any base (GitHub Pages subfolder or root); place file at public/founder.jpg
  // Pulled from public profiles. Verify or edit before launch.
  headline: 'A designer and engineer who still likes to get into the details.',
  bio: [
    'Lovepreet Singh is a technology entrepreneur and the Founder and Managing Director of Five Rivers Inc. The group works across cybersecurity, AI and IoT, with offices in India, London and Dubai. He started Lovelace to bring design and development together in one studio.',
    'He wrote his first code at six, made his first website at ten and started his first company at fifteen. His work has since included cybersecurity research and support for public agencies on more than 15 digital forensics cases. His profile also lists recognition from Microsoft and Guinness World Records.',
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
    'A great website should be easy to use, fast to load and dependable. If people notice the technology more than the experience, we have missed the point.',
};

/* ---------- Capabilities marquee ---------- */
export const capabilities = [
  'Web Design', 'WebGL', 'Brand Identity', 'Three.js', 'UI/UX', 'Motion',
  'Shopify', 'SEO', 'Design Systems', 'Frontend', 'Art Direction', 'Performance',
];

/* ---------- Founder "in the room" gallery (About page) ---------- */
export const founderGallery = [
  { src: 'media/g-keynote.jpg', caption: 'SecurityVerse 2025 keynote' },
  { src: 'media/g-boardroom.jpg', caption: 'Boardroom strategy session' },
  { src: 'media/g-government.jpg', caption: 'Government engagement' },
  { src: 'media/g-advisory.jpg', caption: 'One to one advisory' },
  { src: 'media/g-dinner.jpg', caption: 'Partnerships, worldwide' },
  { src: 'media/g-desk.jpg', caption: 'Heads down, building' },
];
