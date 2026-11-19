import Footer from "@/components/ui/footer";
import NavigationBar from "@/components/ui/navigation";
import MotionProvider from "@/components/providers/motion-provider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://bigemip-sarl.com"),
  title:
    "BIGEMIP | Le Bureau d'Investigations Géologique, Minière et Pétrolière",
  description:
    "BIGEMIP est un bureau qui offre ses services d'ingénieur conseil à ses clients parmi lesquels les investisseurs, les opérateurs miniers et pétroliers, et les exploitants miniers pour leur apporter les solutions les plus adaptées dans les secteurs de la géologie, des mines et du pétrole.",
  keywords:
    "Bigemip, Congo, RDC, pétrole, mines, géologie, cartographie, SIG, exploration minière, Kinshasa",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/assets/favicon-32x32.png", sizes: "32x32" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "BIGEMIP | Bureau d'Investigations Géologique, Minière et Pétrolière",
    description:
      "BIGEMIP accompagne les investisseurs et opérateurs miniers et pétroliers avec une assistance technique adaptée à leurs besoins.",
    url: "https://bigemip-sarl.com",
    type: "website",
    images: [{ url: "/assets/bigemip-logo.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BIGEMIP | Bureau d'Investigations Géologique, Minière et Pétrolière au Congo",
    description:
      "Notre bureau accompagne les investisseurs avec une assistance technique adaptée à leurs besoins dans les secteurs de la géologie, des mines et du pétrole.",
    images: [{ url: "/assets/bigemip-logo.jpeg" }],
  },
};

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

  return (
    <html lang={locale} className={archivo.variable}>
      <body className="antialiased">
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
