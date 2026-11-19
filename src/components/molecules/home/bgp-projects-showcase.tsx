import { useTranslations } from "next-intl";
import Image from "next/image";

/* Geophysics (showcase) and geological context (actuality), side by side. */
function BGPProjectsShowCases() {
  const t = useTranslations("HomePage");
  const ui = useTranslations("UI.geology");

  return (
    <section className="border-t border-ink/10 bg-survey py-24 md:py-32">
      <div className="page-shell grid gap-16 lg:grid-cols-2 lg:gap-20">
        <article className="flex flex-col gap-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[3px] bg-basalt">
            <Image
              src="/assets/bigemip-image-6.jpg"
              alt={ui("pit_alt")}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <h2 className="type-title text-[1.7rem] md:text-[2rem]">
            {t("showcase.title")}
          </h2>
          <p className="prose-measure">{t("showcase.description")}</p>
        </article>

        <article className="flex flex-col gap-6">
          <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[3px] bg-white">
            <Image
              src="/assets/bigemip-image-13.jpg"
              alt={ui("map_alt")}
              width={300}
              height={288}
              className="h-[88%] w-auto object-contain"
            />
          </div>
          <h2 className="type-title text-[1.7rem] md:text-[2rem]">
            {t("actuality.title")}
          </h2>
          <p className="prose-measure">{t("actuality.description")}</p>
        </article>
      </div>
    </section>
  );
}

export default BGPProjectsShowCases;
