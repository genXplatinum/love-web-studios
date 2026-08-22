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
    title: 'Lovelace | Web Design and Development Studio',
    description:
      'Lovelace designs and builds websites, web apps, brand identities and 3D web experiences for businesses worldwide.',
    ogTitle: 'Lovelace | Web Design and Development',
    imageAlt: 'Lovelace web design and development studio.',
    type: 'website',
    fallback: {
      eyebrow: 'Independent web and brand studio',
      heading: 'Lovelace',
      intro:
        'We design and build websites, brands and digital products for businesses that care about how they look and how they work.',
      highlights: [
        {
          heading: 'Web design and development',
          text: 'Fast, accessible websites and web apps planned, designed and built by our own team.',
        },
        {
          heading: '3D, WebGL and motion',
          text: '3D and motion that help explain a product or make a useful experience more memorable.',
        },
        {
          heading: 'Branding and identity',
          text: 'Names, logos and visual identities that work across websites, social media and print.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/work',
    title: 'Selected Web, Brand and 3D Work | Lovelace',
    description:
      'See websites, web apps, brand identity, online store and 3D projects planned, designed and built by Lovelace.',
    ogTitle: 'Selected work by Lovelace',
    imageAlt: 'Selected web, brand and 3D projects by Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Selected work',
      heading: 'Selected work made with care',
      intro:
        'A selection of websites, apps and brand projects made for real businesses and practical needs.',
      highlights: [
        {
          heading: 'Purani Dhun',
          text: 'A music site for 369 old Hindi and Punjabi records, where every song draws its own rangoli.',
        },
        {
          heading: 'Petvet Care',
          text: 'A friendly 3D website with WhatsApp booking for a veterinary doctor who makes home visits.',
        },
        {
          heading: 'Digithrive Institute',
          text: 'A student management system covering fees, leads, attendance and payment reconciliation.',
        },
        {
          heading: 'Web, identity and product',
          text: 'Selected work across websites, brand identity, online stores, business tools and motion.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/services',
    title: 'Web Design, Branding, 3D and SEO Services | Lovelace',
    description:
      'Lovelace provides web design and development, 3D and WebGL, branding, online stores, technical SEO and digital marketing.',
    ogTitle: 'Web, brand, 3D and SEO services by Lovelace',
    imageAlt: 'Web design, branding, 3D and SEO services from Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Services',
      heading: 'What we do and how we help',
      intro:
        'Choose one service or ask our team to plan, design and build the full project.',
      highlights: [
        {
          heading: 'Web design and development',
          text: 'Custom websites, web applications, design systems, performance and accessibility.',
        },
        {
          heading: '3D, WebGL and animation',
          text: 'Interactive product pages, configurators and animation controlled by scrolling.',
        },
        {
          heading: 'Branding and identity',
          text: 'Logos, type, colour, art direction and practical brand guidelines.',
        },
        {
          heading: 'SEO, marketing and online stores',
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
        'Lovelace brings design and development together in one independent studio.',
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
          heading: 'Design and technical work',
          text: 'His work spans technology, cybersecurity, web design and digital product development.',
        },
      ],
      links: sharedLinks,
    },
  },
  {
    path: '/contact',
    title: 'Start a Web or Brand Project | Contact Lovelace',
    description:
      'Contact Lovelace to discuss a website, web app, 3D experience, brand identity, online store or technical SEO project.',
    ogTitle: 'Start a project with Lovelace',
    imageAlt: 'Start a design and engineering project with Lovelace.',
    type: 'website',
    fallback: {
      eyebrow: 'Contact',
      heading: 'Tell us about your project',
      intro:
        'Tell us what you are making, why it matters and where you need help.',
      highlights: [
        {
          heading: 'Start a project',
          text: 'Email lovepreetsinghmk10@gmail.com with your goals, scope and preferred launch date.',
        },
        {
          heading: 'Where we work',
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
  imageAlt: 'Lovelace web design and development studio.',
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
    'Independent studio that designs and builds websites, web apps, brand identities and 3D web experiences.',
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
          'SEO, Marketing and Online Stores',
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
          ['Purani Dhun', 'A music site for 369 old Hindi and Punjabi records, where every song draws its own rangoli.'],
          ['Petvet Care', 'A friendly 3D website for a veterinary doctor who makes home visits.'],
          ['Digithrive Institute', 'A student management system with payment reconciliation.'],
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
