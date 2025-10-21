"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";

import Button from "../atoms/button";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Navigation");

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
  ];

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <>
      <nav className="bg-[#1e2236] shadow-lg sticky top-0 z-50">
        <div className="lg:max-w-7xl lg:mx-auto px-6">
          <div className="flex justify-between items-center h-28">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/bigemip-logo.jpeg"
                alt="BIGEMIP Logo"
                className="h-10 w-auto"
                width={100}
                height={100}
                priority
              />
              <span className="text-white font-bold text-xl tracking-wide">
                BIGEMIP
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#f0a500] text-lg hover:text-white transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="hidden xl:flex gap-4 items-center">
              <Link
                href="/contact"
                className=" w-full  bg-amber-500 hover:bg-amber-600 active:bg-amber-700  cursor-pointer text-white font-medium py-4 px-8 rounded uppercase focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-amber-300 disabled:text-gray-500 disabled:cursor-not-allowed duration-200"
              >
                {t("button")}
              </Link>

              <select
                value={locale}
                onChange={handleChange}
                disabled={isPending}
                className="border-[#f0a500] rounded-md border p-4 text-sm text-amber-500 shadow-sm hover:shadow-md transition"
              >
                {locales.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="xl:hidden text-[#f0a500] focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-[#1e2236] flex flex-col justify-center items-center gap-14 z-50 overflow-hidden">
          <span
            className="text-[#f0a500] text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </span>

          <Link
            href="/"
            className="flex items-center space-x-2 font-extrabold text-4xl tracking-wide text-[#f0a500]"
          >
            BIGEMIP
          </Link>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#f0a500] text-lg hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <select
            value={locale}
            onChange={handleChange}
            disabled={isPending}
            className="border-[#f0a500] rounded-md border p-4 text-sm text-amber-500 shadow-sm hover:shadow-md transition"
          >
            {locales.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
          <Link
            key="/contact"
            href="/contact"
            className="text-[#f0a500] text-lg hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            <Button buttonText="Contactez-nous" type="button" />
          </Link>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
