import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { languageAlternates, localizedUrl } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages: languageAlternates(route.path) },
    })),
  );
}
