import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { SITE_URL } from "./site";

export type PageKey =
  | "home"
  | "services"
  | "more"
  | "about"
  | "contact"
  | "faq"
  | "privacy"
  | "terms"
  | "support"
  | "careers";

const OG_LOCALE: Record<string, string> = { fr: "fr_CD", en: "en_US" };

export function localizedUrl(locale: string, path: string) {
  return `${SITE_URL}/${locale}${path}`;
}

/** hreflang map for a route, including x-default (the default locale). */
export function languageAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = localizedUrl(l, path);
  languages["x-default"] = localizedUrl(routing.defaultLocale, path);
  return languages;
}

/**
 * Builds localized metadata for a page: title, description, canonical,
 * hreflang alternates, Open Graph and Twitter cards.
 */
export async function pageMetadata({
  locale,
  page,
  path,
  noindex = false,
}: {
  locale: string;
  page: PageKey;
  path: string;
  noindex?: boolean;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t(`${page}.title`);
  const description = t(`${page}.description`);
  const url = localizedUrl(locale, path);
  const ogImage = {
    url: `/og/og-${locale}.jpg`,
    width: 1200,
    height: 630,
    alt: t("og_alt"),
  };

  return {
    // The home title is already complete; other pages use the layout template.
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: t("site_name"),
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => OG_LOCALE[l]),
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
  };
}
