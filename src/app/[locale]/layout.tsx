import Footer from "@/components/ui/footer";
import NavigationBar from "@/components/ui/navigation";
import MotionProvider from "@/components/providers/motion-provider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { JsonLd, organizationSchema } from "@/components/seo/json-ld";
import { COMPANY, SITE_URL } from "@/lib/site";

// Archivo variable (wght 100–900, wdth 62–125), self-hosted so builds never
// depend on reaching Google Fonts.
const archivo = localFont({
  src: "../../fonts/archivo-variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  style: "normal",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

export const viewport: Viewport = {
  themeColor: "#1f1d33",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t("default_title"), template: "%s | BIGEMIP" },
    description: t("home.description"),
    applicationName: "BIGEMIP",
    authors: [{ name: COMPANY.name, url: SITE_URL }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    formatDetection: { telephone: false, email: false, address: false },
    icons: {
      icon: [
        { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/assets/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    // Add the Google Search Console token here once the domain is verified:
    // verification: { google: "..." },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <html lang={locale} className={archivo.variable}>
      <body className="antialiased">
        <JsonLd data={organizationSchema(locale, t("home.description"))} />
        <NextIntlClientProvider>
          <MotionProvider>
            <NavigationBar />
            <main id="main">{children}</main>
            <Footer />
          </MotionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
