import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

import Button from "@/atoms/button";
import ContactInfoBlock from "@/atoms/contact-info-block";
import SocialIconLink from "@/atoms/social-icon-link";

const socialLinks = [
  { icon: <Facebook size={20} color="#fff" />, href: "#" },
  { icon: <Twitter size={20} color="#fff" />, href: "#" },
  { icon: <Instagram size={20} color="#fff" />, href: "#" },
  { icon: <Youtube size={20} color="#fff" />, href: "#" },
];

function Footer() {
  const contactBlocks = [
    {
      icon: <Phone size={30} color="#f99c00" />,
      title: "Contactez-nous",
      value: "(+021) 645 863 232",
    },
    {
      icon: <Mail size={30} color="#f99c00" />,
      title: "Envoyez-nous un email",
      value: "support@bigemip.com",
    },
    {
      icon: <MapPin size={30} color="#f99c00" />,
      title: "Notre Adresse",
      value: "9, Avenue du Port, GOMBE, KINSHASA, RDC",
    },
  ];

  const quickLinks = [
    { label: "A Propos de Nous", href: "/about" },
    { label: "Nos Projects", href: "/projects" },
    { label: "Nos Services", href: "/projects" },
    { label: "Contactez-nous", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Politique de Confidentialite", href: "/privacy-policy" },
    { label: "Termes et Conditions", href: "/terms-and-conditions" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="w-full bg-[#1e2236] min-w-screen">
      <div className="max-w-7xl mx-auto w-full py-16 flex flex-col gap-20 px-5">
        <div className="flex justify-between flex-wrap gap-6">
          {contactBlocks.map((block, i) => (
            <ContactInfoBlock key={i} {...block} />
          ))}
        </div>

        <div className="flex justify-between flex-wrap gap-12 border-t border-[#343940] pt-8">
          <div className="w-full lg:max-w-md flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-white">BIGEMIP SARL</h3>
            <p className="text-white leading-7">
              BIGEMIP, vous accompagne dans exploration minière optimale et
              ciblée, aidée par les technologies les plus avancées.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <SocialIconLink key={i} {...link} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/4">
            <h3 className="font-medium text-amber-500">Liens Rapides</h3>
            <ul className="flex flex-col gap-2 list-disc px-5 py-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label} className="text-white hover:text-amber-500">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/4">
            <h3 className="font-medium text-amber-500">Liens legaux</h3>
            <ul className="flex flex-col gap-2 list-disc px-5 py-4">
              {legalLinks.map(({ label, href }) => (
                <li key={href} className="text-white hover:text-amber-500">
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:max-w-1/2 lg:max-w-md flex flex-col gap-4">
            <h3 className="font-medium text-amber-500">Newsletter</h3>
            <p className="text-white leading-7">
              Restez informé de nos dernières actualités et offres. Abonnez-vous
              dès maintenant à notre newsletter !
            </p>
            <Button buttonText="S'abonner" />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#343940] py-8 flex-wrap gap-4">
          <p className="text-white text-sm">
            BIGEMIP SRAL © 2023. Tous droits r&eacute;serv&eacute;s.
          </p>
          <div className="flex gap-4 text-gray-400">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
