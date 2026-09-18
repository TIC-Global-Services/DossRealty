export const SITE_URL = "https://dossrealty.in";

/** Root opengraph-image.tsx output — used as the OG/Twitter image fallback for
 * routes that don't define their own opengraph-image/twitter-image file, since
 * Next does not inherit file-convention images across route segments. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

export const SITE_NAME = "Doss Realty";

export const LEGAL_NAME = "Doss Developers Pvt Ltd";

export const SITE_DESCRIPTION =
  "Doss Realty is a Chennai-based real estate developer building considered, RERA-approved plotted communities and residential developments across Tamil Nadu since 1991.";

export const CONTACT = {
  phone: "+91 99629 96977",
  phoneHref: "+919962996977",
  email: "info@dossrealty.in",
  whatsapp: "https://wa.me/+919962996977",
};

export const ADDRESS = {
  streetAddress: "14, Prathap Palace, Porur-Kundrathur Main Road, Kovur",
  addressLocality: "Chennai",
  addressRegion: "Tamil Nadu",
  postalCode: "600128",
  addressCountry: "IN",
};

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/dossrealty",
  "https://www.facebook.com/share/1EDcbDawXJ/?mibextid=wwXIfr",
  "https://www.instagram.com/dossrealty/",
];

export const FOUNDING_DATE = "1991";

export const FOUNDER_NAME = "D.V. Prathap Reddy";

export const BRAND = {
  bg: "#121212",
  gold: "#B59A52",
  goldAlt: "#C59D5F",
  white: "#FFFFFF",
};

export const PROJECTS = {
  metropettai: {
    name: "Metropettai",
    slug: "metropettai",
    path: "/projects/metropettai",
    tagline: "Connected West Chennai plots in Poonamallee",
    description:
      "Metropettai is a CMDA and RERA-approved plotted community in Nazarethpettai, Poonamallee, with plots from 711 to 2,400 sq. ft., priced from ₹45L onwards, connected to the upcoming Metro corridor and Chennai–Bengaluru Highway.",
    locality: "Nazarethpettai, Poonamallee",
    addressRegion: "Tamil Nadu",
    postalCode: "",
    priceFrom: 4500000,
    areaFromSqft: 711,
    areaToSqft: 2400,
    rera: "TN/01/Reg-Layout/0995/2023",
    approval: "CMDA 11/2023",
    units: 270,
  },
  promisePark: {
    name: "Promise Park",
    slug: "promise-park",
    path: "/projects/promise-park",
    tagline: "DTCP-approved plots near Kanchipuram",
    description:
      "Promise Park is a DTCP and RERA-approved plotted community near White Gate, Kanchipuram, with plots from 443 to 2,348 sq. ft., priced from ₹15L onwards, off the Kanchi–Arakkonam Highway.",
    locality: "White Gate, Kanchipuram",
    addressRegion: "Tamil Nadu",
    postalCode: "",
    priceFrom: 1500000,
    areaFromSqft: 443,
    areaToSqft: 2348,
    rera: "TN/01/Layout/1680/2023",
    approval: "DTCP 12/2023",
    units: 99,
  },
};
