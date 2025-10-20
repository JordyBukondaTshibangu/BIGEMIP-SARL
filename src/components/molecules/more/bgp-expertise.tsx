import { useTranslations } from "next-intl";

export default function BGPExpertise() {
  const t = useTranslations("More");

  return (
    <section className="h-[80%] py-20 pb-48 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col = gap-14">
        <h2 className="text-4xl font-extrabold text-amber-500 text-center">
          {t("expertise.title")}
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          {t("mission.intro")}
        </p>

        <div className="flex flex-col gap-20">
          {(["baseMap", "geoScientific", "mining"] as const).map((key) => (
            <div key={key} className="bg-gray-50 p-12 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-amber-500 mb-4">
                {t(`expertise.${key}.title`)}
              </h3>

              <ul className="list-disc pl-6 space-y-4 text-lg leading-normal">
                {t
                  .raw(`expertise.${key}.points`)
                  .map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
