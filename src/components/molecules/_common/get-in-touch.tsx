import { ButtonLink } from "@/components/atoms/button";
import { panelContours } from "@/lib/contours";
import ContourField from "@/components/ui/contour-field";
import { useTranslations } from "next-intl";

export default function BGPGetInTouch() {
  const t = useTranslations("GetInTouch");
  const ui = useTranslations("UI.cta");

  return (
    <section className="relative isolate overflow-hidden bg-basalt-2 text-white">
      <ContourField
        set={panelContours}
        intensity={0.4}
        className="absolute inset-y-0 right-0 -z-10 h-full w-full md:w-2/3"
      />
      <div className="page-shell grid gap-10 py-24 md:grid-cols-12 md:py-28">
        <div className="flex flex-col gap-6 md:col-span-7">
          <p className="type-sub text-[0.95rem] text-ore">{t("title")}</p>
          <h2 className="type-display text-[2.4rem] md:text-[3.4rem]">
            {t("caption")}
          </h2>
          <p className="type-lede max-w-[48ch] text-white/80">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col justify-end gap-5 md:col-span-4 md:col-start-9">
          <ButtonLink
            href="/contact"
            variant="ore"
            className="w-full sm:w-auto"
          >
            {t("button")}
          </ButtonLink>
          <div className="flex flex-col gap-1 text-white/80">
            <span className="text-sm text-white/55">{ui("call")}</span>
            <a
              href="tel:+243818354186"
              className="link-underline self-start text-white"
            >
              +243 818 354 186
            </a>
          </div>
          <div className="flex flex-col gap-1 text-white/80">
            <span className="text-sm text-white/55">{ui("email")}</span>
            <a
              href="mailto:contact@bigemip.com"
              className="link-underline self-start text-white"
            >
              contact@bigemip.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
