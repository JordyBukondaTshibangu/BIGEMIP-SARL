import Footer from "@/components/ui/footer";
import NavigationBar from "@/components/ui/navigation";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEO from "@/components/molecules/_common/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "BIGEMIP | Le Bureau d'Investigations Géologique, Miniere et Pétrolière",
  description:
    "BIGEMIP est un bureau qui offre ses services d'ingénieur conseil à ses clients parmi lesquels les investisseurs, les opérateurs miniers et pétroliers, et les exploitants miniers pour leur apporter les solutions les plus adaptées dans les secteurs de la géologie, de mines et du Pétrole.",
  keywords:
    "Bigemip, Congo, petrole, mines, projets, innovation, Geologie, solutions",
  robots: "index, follow",
  openGraph: {
    title:
      "BIGEMIP | Bureau d'Investigations Géologique, Miniere et Pétrolière",
    description:
      "Découvrez BIGEMIP, qui également les investisseurs en leur assistant techniquement selon leur besoin dans les secteurs ci-haut mentionnés.",
    url: "https://bigemip-sarl.com",
    type: "website",
    images: [{ url: "https://bigemip-sarl.com/assets/bigemip-logo.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BIGEMIP | Bureau d'Investigations Géologique, Miniere et Pétrolière au Congo",
    description:
      "Notre Bureau accompagne également les investisseurs en leur assistant techniquement selon leur besoin dans les secteurs ci-haut mentionnés.",
    images: [{ url: "https://bigemip-sarl.com/assets/bigemip-logo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
