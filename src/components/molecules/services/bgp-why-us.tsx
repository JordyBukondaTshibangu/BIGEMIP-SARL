import { useTranslations } from "next-intl";

export default function BGPPourquoiBigemip() {
  const t = useTranslations("Services.whyUs");

  const stats = [
    { value: "20", label: t("stats.stat_1") },
    { value: "5+", label: t("stats.stat_2") },
    { value: "98%", label: t("stats.stat_3") },
    { value: "20", label: t("stats.stat_4") },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="page-shell flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="type-title text-[2rem] md:text-[2.6rem]">
            {t("title")}
          </h2>
          <p className="type-lede text-ink-muted">{t("description")}</p>
        </div>
        <dl className="grid grid-cols-1 border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 border-b border-ink/20 py-8 sm:pr-8 lg:border-b-0 lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <dd className="type-display order-first text-[3.4rem] tabular-nums text-ink">
                {stat.value}
              </dd>
              <dt className="max-w-[24ch] text-ink-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
