/**
 * Single source of truth for the public site URL and company facts used in
 * metadata, the sitemap and structured data.
 *
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. in Vercel) if the domain differs.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bigemip-sarl.com"
).replace(/\/$/, "");

export const COMPANY = {
  name: "BIGEMIP SARL",
  legalName: "Bureau d'Investigations Géologique, Minière et Pétrolière SARL",
  email: "contact@bigemip.com",
  phones: ["+243818354186", "+243834585397"],
  address: {
    street: "9, Avenue du Port",
    district: "Gombe",
    city: "Kinshasa",
    country: "CD",
  },
  rccm: "CD/KNG/RCCM/23-B-02483",
  idnat: "01-B0500-N40997H",
  logo: "/assets/bigemip-logo.jpeg",
} as const;

/** Public, indexable routes (without locale prefix). */
export const ROUTES = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/services/en-savoir-plus",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.4, changeFrequency: "yearly" },
  { path: "/support", priority: 0.3, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
] as const;
