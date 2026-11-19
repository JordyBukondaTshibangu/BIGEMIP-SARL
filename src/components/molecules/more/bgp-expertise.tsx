import { useTranslations } from "next-intl";

/* The three families of maps BIGEMIP produces, styled as a map legend. */
const GROUPS = [
  { key: "baseMap", swatch: "fill-dots", colour: "var(--color-laterite)" },
  { key: "geoScientific", swatch: "fill-dashes", colour: "var(--color-ochre)" },
  { key: "mining", swatch: "fill-hatch", colour: "var(--color-schist)" },
] as const;

export default function BGPExpertise() {
  const t = useTranslations("More.expertise");

  return (
    <section className="py-24 md:py-32">
      <div className="page-shell flex flex-col gap-14">
        <div className="flex max-w-[48rem] flex-col gap-5">
          <h2 className="type-title text-[2rem] lowercase first-letter:uppercase md:text-[2.6rem]">
            {t("title")}
          </h2>
          <p className="type-lg text-ink-muted">{t("baseMap.description")}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {GROUPS.map(({ key, swatch, colour }) => (
            <article
              key={key}
              className="flex flex-col gap-6 border-t-2 border-ink pt-6"
            >
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`h-10 w-14 shrink-0 rounded-[2px] ${swatch}`}
                  style={{ backgroundColor: colour }}
                />
                <h3 className="type-sub text-[1.1rem] lowercase first-letter:uppercase">
                  {t(`${key}.title`)}
                </h3>
              </div>
              <ul className="flex flex-col divide-y divide-ink/10">
                {(t.raw(`${key}.points`) as string[]).map((point) => (
                  <li key={point} className="py-3 text-[0.98rem]">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
