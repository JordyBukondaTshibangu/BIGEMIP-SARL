import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

const PHONES = ["+243 818 354 186", "+243 834 585 397"];
const EMAIL = "contact@bigemip.com";

function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");
  const ui = useTranslations("UI");

  const explore = [
    { label: nav("home"), href: "/" },
    { label: nav("services"), href: "/services" },
    { label: ui("nav.mapping"), href: "/services/en-savoir-plus" },
    { label: nav("about"), href: "/about" },
    { label: ui("nav.contact"), href: "/contact" },
  ];

  const legal = [
    { label: t("legalLinks.privacy"), href: "/privacy-policy" },
    { label: t("legalLinks.TandCs"), href: "/terms-and-conditions" },
    { label: t("legalLinks.support"), href: "/support" },
    { label: t("legalLinks.faq"), href: "/faq" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-basalt text-white/80">
      <div className="page-shell grid gap-14 pb-10 pt-20 md:grid-cols-12">
        <div className="flex flex-col gap-6 md:col-span-5">
          <Link href="/" className="flex items-center gap-3 self-start">
            <Image
              src="/assets/bigemip-mark.png"
              alt=""
              width={669}
              height={525}
              className="h-10 w-auto"
            />
            <span className="type-sub text-xl tracking-[0.06em] text-white">
              BIGEMIP SARL
            </span>
          </Link>
          <p className="max-w-[42ch]">{t("description")}</p>

          <address className="flex flex-col gap-1.5 not-italic">
            <span>9, Avenue du Port, Gombe, Kinshasa, RDC</span>
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:${p.replaceAll(" ", "")}`}
                className="link-underline self-start text-white"
              >
                {p}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="link-underline self-start text-white"
            >
              {EMAIL}
            </a>
          </address>
        </div>

        <nav
          aria-label={ui("footer.explore")}
          className="md:col-span-2 md:col-start-7"
        >
          <h2 className="type-sub mb-4 text-sm text-ore">
            {ui("footer.explore")}
          </h2>
          <ul className="flex flex-col gap-2.5">
            {explore.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={ui("footer.legal")} className="md:col-span-2">
          <h2 className="type-sub mb-4 text-sm text-ore">
            {ui("footer.legal")}
          </h2>
          <ul className="flex flex-col gap-2.5">
            {legal.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 md:col-span-2">
          <h2 className="type-sub text-sm text-ore">{t("newsletter.title")}</h2>
          <p className="text-[0.95rem]">{t("newsletter.description")}</p>
          <a
            href={`mailto:${EMAIL}?subject=Newsletter%20BIGEMIP`}
            className="link-underline self-start font-semibold text-white"
          >
            {ui("footer.subscribe")}
          </a>
        </div>
      </div>

      <div className="page-shell">
        <div className="flex flex-col gap-2 border-t border-white/12 py-7 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>
            © {year} BIGEMIP SARL. {ui("footer.rights")}
          </p>
          <p className="flex flex-wrap gap-x-5">
            <span>RCCM CD/KNG/RCCM/23-B-02483</span>
            <span>IDNAT 01-B0500-N40997H</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
