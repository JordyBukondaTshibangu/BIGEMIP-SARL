import { useTranslations } from "next-intl";

const VALUES = ["innovation", "flexibility", "commitment"] as const;

export default function BGPMission() {
  const t = useTranslations("More.mission");

  return (
    <section className="bg-basalt py-24 text-white md:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <h2 className="type-title text-[2rem] lowercase first-letter:uppercase md:text-[2.6rem]">
            {t("title")}
          </h2>
          <p className="type-lg text-white/75">{t("intro")}</p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[3px] bg-white/12 md:grid-cols-3 lg:col-span-8">
          {VALUES.map((key) => (
            <li key={key} className="flex flex-col gap-4 bg-basalt-2 p-8">
              <h3 className="type-sub text-lg lowercase text-ore first-letter:uppercase">
                {t(`values.${key}.title`)}
              </h3>
              <p className="text-white/80">{t(`values.${key}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
