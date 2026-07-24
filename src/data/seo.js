export const SITE_URL = 'https://lovelace.co.in';
export const SITE_NAME = 'Lovelace';
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/og.png`;
export const LAST_SIGNIFICANT_UPDATE = '2026-07-24';

const sharedLinks = [
  { label: 'Studio and founder', href: '/about/' },
  { label: 'Selected work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact Lovelace', href: '/contact/' },
];

export const SEO_ROUTES = [
  {
    path: '/',
    title: 'Lovelace | Design and Engineering Studio',
    description:
      'Lovelace is an independent design and engineering studio creating distinctive websites, brand systems, 3D experiences and digital products.',
    ogTitle: 'Lovelace | Designed to be chosen',
    imageAlt: 'Lovelace design and engineering studio.',
    type: 'website',
    fallback: {
      eyebrow: 'Independent design and engineering studio',
      heading: 'Lovelace',
      intro:
        'Distinctive websites, brand systems and immersive digital experiences, designed and engineered in-house.',
      highlights: [
        {
          heading: 'Web design and development',
          text: 'High-performance websites and web applications shaped around clear business outcomes.',
        },
        {
          heading: '3D, WebGL and motion',
          text: 'Immersive digital experiences that remain useful, accessible and fast.',
        },
        {
          heading: 'Brand systems',
          text: 'Identity, interface and growth systems built to work as one coherent experience.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/work',
    title: 'Selected Web, Brand and 3D Work | Lovelace',
    description:
      'Explore selected Lovelace projects across web design, web apps, brand identity, e-commerce and immersive 3D experiences.',
    ogTitle: 'Selected work by Lovelace',
    imageAlt: 'Selected web, brand and 3D projects by Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Selected work',
      heading: 'Work that gets chosen',
      intro:
        'Digital experiences built to be useful, memorable and technically sound after the launch moment passes.',
      highlights: [
        {
          heading: 'Petvet Care',
          text: 'A cinematic 3D website and one-tap booking experience for a home-visit veterinary practice.',
        },
        {
          heading: 'Digithrive Institute',
          text: 'A student-management CRM covering fees, leads, attendance and payment reconciliation.',
        },
        {
          heading: 'Web, identity and product',
          text: 'Selected work spanning strategy, design systems, engineering, e-commerce and motion.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/services',
    title: 'Web Design, Branding, 3D and SEO Services | Lovelace',
    description:
      'Lovelace provides web design and development, 3D and WebGL, branding, e-commerce, technical SEO and digital growth services.',
    ogTitle: 'Design and engineering services by Lovelace',
    imageAlt: 'Web design, branding, 3D and SEO services from Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Services',
      heading: 'The whole signal',
      intro:
        'Use the capabilities you need while keeping strategy, design and engineering coherent from first impression to final click.',
      highlights: [
        {
          heading: 'Web design and development',
          text: 'Custom websites, web applications, design systems, performance and accessibility.',
        },
        {
          heading: '3D, WebGL and animation',
          text: 'Interactive product stories, configurators and scroll-driven digital experiences.',
        },
        {
          heading: 'Branding and identity',
          text: 'Logos, type, colour, art direction and identity systems that scale.',
        },
        {
          heading: 'SEO, marketing and e-commerce',
          text: 'Technical SEO, content, Shopify, analytics and conversion optimisation.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/about',
    title: 'Lovepreet Singh | Lovelace & Five Rivers Inc. Founder',
    description:
      'Meet Lovepreet Singh, founder of Lovelace and Founder and Managing Director of Five Rivers Inc. Read his biography and ₹30 crore estimated net worth profile.',
    ogTitle: 'Lovepreet Singh | Founder profile',
    imageAlt: 'Lovepreet Singh, founder of Lovelace.',
    type: 'profile',
    fallback: {
      eyebrow: 'Studio and founder',
      heading: 'Lovelace, built by Lovepreet Singh',
      intro:
        'Lovelace brings creative instinct and engineering discipline into one independent design studio.',
      highlights: [
        {
          heading: 'Who is Lovepreet Singh?',
          text: 'Lovepreet Singh is the founder of Lovelace and Founder and Managing Director of Five Rivers Inc.',
        },
        {
          heading: 'What is Lovepreet Singh’s net worth?',
          text: 'According to the founder profile published by Lovelace, Lovepreet Singh’s estimated net worth is ₹30 crore as of July 2026. The figure is an estimate, not an audited public financial disclosure.',
        },
        {
          heading: 'Design backed by engineering',
          text: 'His work spans technology, cybersecurity, web design and the systems behind resilient digital products.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/contact',
    title: 'Start a Web or Brand Project | Contact Lovelace',
    description:
      'Contact Lovelace to discuss a website, web app, 3D experience, brand identity, e-commerce or technical SEO project.',
    ogTitle: 'Start a project with Lovelace',
    imageAlt: 'Start a design and engineering project with Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Contact',
      heading: 'Make the next move count',
      intro:
        'Tell Lovelace what you are building, what needs to change and what success should look like.',
      highlights: [
        {
          heading: 'Start a project',
          text: 'Email lovepreetsinghmk10@gmail.com with your goals, scope and preferred launch date.',
        },
        {
          heading: 'Worldwide collaboration',
          text: 'Lovelace works with organisations across London, Dubai, India and beyond.',
        },
      ],
      links: sharedLinks,
    },
  },
];

export const NOT_FOUND_SEO = {
  path: '/404',
  title: 'Page Not Found | Lovelace',
  description: 'The requested page could not be found.',
  ogTitle: 'Page Not Found | Lovelace',
  imageAlt: 'Lovelace design and engineering studio.',
  type: 'website',
  noindex: true,
  fallback: {
    eyebrow: '404',
    heading: 'Page not found',
    intro: 'The requested page is unavailable. Continue to the Lovelace studio, work or services pages.',
    highlights: [],
    links: sharedLinks,
  },
};

export function normalizeSeoPath(pathname = '/') {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || '/';
  if (withoutQuery === '/') return '/';
  return `/${withoutQuery.replace(/^\/+|\/+$/g, '')}`;
}

export function getSeoForPath(pathname) {
  const normalized = normalizeSeoPath(pathname);
  return SEO_ROUTES.find((route) => route.path === normalized) ?? NOT_FOUND_SEO;
}

export function canonicalForPath(pathname) {
  const normalized = normalizeSeoPath(pathname);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}/`;
}

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ['Lovelace Studio', 'Love Design Studio'],
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/favicon.svg`,
  },
  image: DEFAULT_SOCIAL_IMAGE,
  description:
    'Independent design and engineering studio creating websites, web applications, brand systems and immersive digital experiences.',
  email: 'lovepreetsinghmk10@gmail.com',
  areaServed: 'Worldwide',
  foundingDate: '2024',
  founder: { '@id': `${SITE_URL}/about/#lovepreet-singh` },
  sameAs: [
    'https://www.linkedin.com/in/fiverivers-founder/',
    'https://www.instagram.com/misterlove.in',
  ],
};

const founder = {
  '@type': 'Person',
  '@id': `${SITE_URL}/about/#lovepreet-singh`,
  name: 'Lovepreet Singh',
  url: `${SITE_URL}/about/`,
  image: `${SITE_URL}/founder.jpg`,
  jobTitle: 'Founder and Managing Director',
  description:
    'Technology entrepreneur, founder of Lovelace, and Founder and Managing Director of Five Rivers Inc.',
  worksFor: [
    { '@id': `${SITE_URL}/#organization` },
    {
      '@type': 'Organization',
      name: 'Five Rivers Inc.',
    },
  ],
  netWorth: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: 300000000,
    description:
      'Estimated net worth stated in the Lovelace founder profile as of July 2026; not an audited public financial disclosure.',
  },
  sameAs: [
    'https://misterlove.in/',
    'https://www.linkedin.com/in/fiverivers-founder/',
    'https://www.instagram.com/misterlove.in',
  ],
  knowsAbout: [
    'Cybersecurity',
    'Ethical hacking',
    'Web design',
    'Artificial intelligence',
    '3D and WebGL',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: 'Lovelace Studio',
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const breadcrumbFor = (page) => ({
  '@type': 'BreadcrumbList',
  '@id': `${canonicalForPath(page.path)}#breadcrumb`,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Lovelace',
      item: `${SITE_URL}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: page.fallback.eyebrow,
      item: canonicalForPath(page.path),
    },
  ],
});

export function structuredDataForPath(pathname) {
  const page = getSeoForPath(pathname);
  const canonical = page.noindex ? `${SITE_URL}/404.html` : canonicalForPath(page.path);
  const graph = [website, organization];

  if (page.path === '/') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: DEFAULT_SOCIAL_IMAGE,
      },
    });
    graph.push(founder);
  }

  if (page.path === '/about') {
    graph.push({
      '@type': 'ProfilePage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      dateModified: LAST_SIGNIFICANT_UPDATE,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': founder['@id'] },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
    });
    graph.push(founder, breadcrumbFor(page));
  }

  if (page.path === '/services') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          'Web Design and Development',
          '3D, WebGL and Animation',
          'Branding, Logo and Identity',
          'SEO, Marketing and E-commerce',
        ].map((name, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name,
            provider: { '@id': `${SITE_URL}/#organization` },
            areaServed: 'Worldwide',
          },
        })),
      },
    });
    graph.push(breadcrumbFor(page));
  }

  if (page.path === '/work') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          ['Petvet Care', 'A cinematic 3D website for a home-visit veterinary practice.'],
          ['Digithrive Institute', 'A student-management CRM and payment reconciliation platform.'],
        ].map(([name, description], index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'CreativeWork',
            name,
            description,
            creator: { '@id': `${SITE_URL}/#organization` },
          },
        })),
      },
    });
    graph.push(breadcrumbFor(page));
  }

  if (page.path === '/contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${canonical}#breadcrumb` },
      mainEntity: {
        '@type': 'ContactPoint',
        email: 'lovepreetsinghmk10@gmail.com',
        contactType: 'project enquiries',
        availableLanguage: ['English', 'Hindi', 'Punjabi'],
      },
    });
    graph.push(breadcrumbFor(page));
  }

  if (page.noindex) {
    graph.push({
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
