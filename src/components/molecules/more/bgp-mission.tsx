import { useTranslations } from "next-intl";

export default function BGPMission() {
  const t = useTranslations("More");

  return (
    <section className="h-[80%] py-20 pt-36 px-5">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col = gap-14">
        <h2 className="text-4xl font-extrabold text-amber-500 text-center">
          {t("mission.title")}
        </h2>
        <p className="text-lg text-center max-w-3xl lg:mx-auto">
          {t("mission.intro")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {(["innovation", "flexibility", "commitment"] as const).map((key) => (
            <div
              key={key}
              className="px-6 py-8 bg-white rounded-xl shadow hover:scale-105 duration-500 hover:shadow-lg transition flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-amber-500 mb-2">
                {t(`mission.values.${key}.title`)}
              </h3>
              <p className="text-md md:text-lg font-medium text-black">
                {t(`mission.values.${key}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
