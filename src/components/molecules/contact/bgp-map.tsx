import { Building2, Clock, MapPin, Phone, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

const ADDRESS = "9, Avenue du Port, Gombe, Kinshasa, RDC";

/* Contact details column (formerly the full-bleed "map" banner). */
function BGPMap() {
  const t = useTranslations("ContactUs.info");
  const ui = useTranslations("UI.contact");

  return (
    <aside className="flex flex-col gap-10">
      <div className="flex gap-4">
        <MapPin
          aria-hidden="true"
          className="mt-1 shrink-0 text-bronze"
          size={22}
        />
        <div className="flex flex-col gap-1">
          <h2 className="type-sub text-lg">{t("info_1.title")}</h2>
          <p>{t("info_1.details")}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline self-start font-semibold"
          >
            {ui("directions")}
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Phone
          aria-hidden="true"
          className="mt-1 shrink-0 text-bronze"
          size={22}
        />
        <div className="flex flex-col gap-1">
          <h2 className="type-sub text-lg">{t("info_2.title")}</h2>
          <p className="text-ink-muted">Renelle Tshibangu Tshela</p>
          <a href="tel:+243834585397" className="link-underline self-start">
            +243 834 585 397
          </a>
          <a href="tel:+243818354186" className="link-underline self-start">
            +243 818 354 186
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Mail
          aria-hidden="true"
          className="mt-1 shrink-0 text-bronze"
          size={22}
        />
        <div className="flex flex-col gap-1">
          <h2 className="type-sub text-lg">Email</h2>
          <a
            href="mailto:contact@bigemip.com"
            className="link-underline self-start"
          >
            contact@bigemip.com
          </a>
        </div>
      </div>

      <div className="flex gap-4">
        <Clock
          aria-hidden="true"
          className="mt-1 shrink-0 text-bronze"
          size={22}
        />
        <div className="flex flex-col gap-1">
          <h2 className="type-sub text-lg">{ui("hours")}</h2>
          <p>{t("info_2.details")}</p>
        </div>
      </div>

      <div className="flex gap-4 border-t border-ink/15 pt-8">
        <Building2
          aria-hidden="true"
          className="mt-1 shrink-0 text-bronze"
          size={22}
        />
        <div className="flex flex-col gap-1">
          <h2 className="type-sub text-lg">{t("info_3.title")}</h2>
          <p className="text-ink-muted">David Mutumbo</p>
          <p className="text-[0.95rem] text-ink-muted">{t("info_3.details")}</p>
        </div>
      </div>
    </aside>
  );
}

export default BGPMap;
