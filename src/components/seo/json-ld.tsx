import { COMPANY, SITE_URL } from "@/lib/site";
import { localizedUrl } from "@/lib/seo";

type JsonLdObject = Record<string, unknown>;

/** Renders schema.org structured data. `<` is escaped so content can't close the tag. */
export function JsonLd({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;

/** The company as a local professional service, plus the website it owns. */
export function organizationSchema(
  locale: string,
  description: string,
): JsonLdObject[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: COMPANY.name,
      legalName: COMPANY.legalName,
      alternateName: "BIGEMIP",
      description,
      url: localizedUrl(locale, ""),
      logo: `${SITE_URL}${COMPANY.logo}`,
      image: `${SITE_URL}/og/og-${locale}.jpg`,
      email: COMPANY.email,
      telephone: COMPANY.phones[0],
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.district,
        addressCountry: COMPANY.address.country,
      },
      areaServed: {
        "@type": "Country",
        name: "Democratic Republic of the Congo",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      contactPoint: COMPANY.phones.map((telephone) => ({
        "@type": "ContactPoint",
        telephone,
        email: COMPANY.email,
        contactType: "customer service",
        availableLanguage: ["French", "English"],
      })),
      identifier: [
        { "@type": "PropertyValue", propertyID: "RCCM", value: COMPANY.rccm },
        { "@type": "PropertyValue", propertyID: "IDNAT", value: COMPANY.idnat },
      ],
      knowsAbout: [
        "Geological mapping",
        "Geophysics",
        "Geochemistry",
        "Remote sensing",
        "Mineral exploration",
        "Petroleum exploration",
        "GIS",
        "Mining project valuation",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.name,
      inLanguage: locale,
      publisher: { "@id": ORG_ID },
    },
  ];
}

/** Home > Page breadcrumb trail for inner pages. */
export function Breadcrumbs({
  locale,
  homeLabel,
  items,
}: {
  locale: string;
  homeLabel: string;
  items: { name: string; path: string }[];
}) {
  const trail = [{ name: homeLabel, path: "" }, ...items];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: localizedUrl(locale, item.path),
        })),
      }}
    />
  );
}
