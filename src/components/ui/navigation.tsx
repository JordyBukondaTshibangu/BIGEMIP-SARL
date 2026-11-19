"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";

import { ButtonLink } from "../atoms/button";

function LocaleSwitch({ onDark = true }: { onDark?: boolean }) {
  const t = useTranslations("UI.nav");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`flex rounded-[3px] border p-0.5 text-[0.8rem] font-semibold ${
        onDark ? "border-white/25" : "border-ink/25"
      }`}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            disabled={isPending}
            onClick={() =>
              !active &&
              startTransition(() => router.replace(pathname, { locale: code }))
            }
            className={`min-w-10 rounded-[2px] px-2.5 py-1.5 uppercase transition-colors ${
              active
                ? "bg-ore text-basalt"
                : onDark
                  ? "text-white/75 hover:text-white"
                  : "text-ink/70 hover:text-ink"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const t = useTranslations("Navigation");
  const ui = useTranslations("UI.nav");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/services/en-savoir-plus", label: ui("mapping") },
    { href: "/about", label: t("about") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || isOpen
          ? "bg-basalt/95 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur"
          : "bg-gradient-to-b from-basalt/70 to-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ore focus:px-4 focus:py-2 focus:text-basalt"
      >
        Skip to content
      </a>
      <nav className="page-shell flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={ui("home_label")}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/assets/bigemip-mark.png"
            alt=""
            width={669}
            height={525}
            priority
            className="h-9 w-auto"
          />
          <span className="type-sub text-[1.15rem] tracking-[0.06em] text-white">
            BIGEMIP
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`relative block px-3.5 py-2 text-[0.95rem] transition-colors ${
                  isActive(href)
                    ? "text-white after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:bg-ore"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitch />
          <ButtonLink href="/contact" variant="ore" className="!px-5 !py-2.5">
            {t("button")}
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label={isOpen ? ui("close") : ui("menu")}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="-mr-2 p-2 text-white lg:hidden"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-basalt lg:hidden"
        >
          <div className="page-shell flex h-full flex-col justify-between gap-10 py-8">
            <ul className="flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="border-b border-white/10">
                  <Link
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={`type-title block py-5 text-2xl ${
                      isActive(href) ? "text-ore" : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-4">
              <LocaleSwitch />
              <ButtonLink href="/contact" variant="ore">
                {t("button")}
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;
