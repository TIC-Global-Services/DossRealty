import {
  ADDRESS,
  CONTACT,
  FOUNDER_NAME,
  FOUNDING_DATE,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./config";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/** Site-wide RealEstateAgent/Organization node — rendered once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/doss_logo.png`,
    image: `${SITE_URL}/doss_logo.png`,
    description: SITE_DESCRIPTION,
    foundingDate: FOUNDING_DATE,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
    },
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    telephone: CONTACT.phoneHref,
    email: CONTACT.email,
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function projectSchema(project: {
  name: string;
  path: string;
  description: string;
  locality: string;
  addressRegion: string;
  priceFrom: number;
  areaFromSqft: number;
  areaToSqft: number;
  rera: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}${project.path}/#product`,
    name: project.name,
    description: project.description,
    image: project.image ?? `${SITE_URL}/doss_logo.png`,
    brand: { "@id": ORGANIZATION_ID },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "RERA Registration",
        value: project.rera,
      },
      {
        "@type": "PropertyValue",
        name: "Plot Area Range",
        value: `${project.areaFromSqft} - ${project.areaToSqft} sq.ft.`,
      },
    ],
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}${project.path}`,
      priceCurrency: "INR",
      price: project.priceFrom,
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: project.locality,
          addressRegion: project.addressRegion,
          addressCountry: "IN",
        },
      },
      seller: { "@id": ORGANIZATION_ID },
    },
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}${post.path}/#article`,
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : undefined,
    mainEntityOfPage: `${SITE_URL}${post.path}`,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}
