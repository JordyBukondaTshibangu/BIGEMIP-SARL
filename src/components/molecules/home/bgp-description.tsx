import { useTranslations } from "next-intl";
import Image from "next/image";

import ContourField from "@/components/ui/contour-field";
import { panelContours } from "@/lib/contours";

const STEP_KEYS = ["step_1", "step_2", "step_3", "step_4", "step_5"] as const;

function BGPDescription() {
  const t = useTranslations("HomePage.welcome_to_bigemip");
  const ui = useTranslations("UI.process");

  return (
    <section id="overview" className="scroll-mt-20 py-24 md:py-32">
      <div className="page-shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="flex flex-col gap-7 lg:col-span-6">
          <p className="type-sub text-[0.95rem] text-bronze">{t("subtitle")}</p>
          <h2 className="type-title text-[2rem] md:text-[2.6rem]">
            {ui("title")}
          </h2>
          <p className="type-lede prose-measure text-ink-muted">
            {t("description_1")} {t("description_2")}
          </p>
          <p className="prose-measure">{t("metrics.metric_2")}</p>
          <p className="prose-measure">{t("metrics.metric_3")}</p>
        </div>

        {/*
          Edge bleed: on large screens the photo runs off the right edge of the
          viewport (negative margin = gutter outside the 80rem shell + its padding),
          over an offset basalt block, with a gold field-note tag overlapping it.
        */}
        <figure className="relative -mr-5 pb-12 pl-6 md:-mr-10 lg:col-span-5 lg:col-start-8 lg:-mr-[calc((100vw-min(100vw,80rem))/2+2.5rem)] lg:self-center lg:pl-0">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 top-14 overflow-hidden bg-basalt lg:-left-10"
          >
            <ContourField
              set={panelContours}
              intensity={0.3}
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div className="relative aspect-[4/5] max-h-[40rem] w-full overflow-hidden bg-basalt-2 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/assets/bigemip-image-15.jpeg"
              alt={ui("photo_alt")}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <figcaption className="absolute bottom-4 left-0 z-10 flex max-w-[15rem] flex-col gap-0.5 bg-ore px-5 py-4 text-basalt shadow-[0_18px_40px_-18px_rgb(31_29_51/0.6)] lg:-left-16">
            <span className="type-sub text-[1rem]">
              {ui("field_note.title")}
            </span>
            <span className="text-[0.9rem] text-basalt/75">
              {ui("field_note.text")}
            </span>
          </figcaption>
        </figure>
      </div>

      {/* The assessment sequence described in metric_1, drawn as a survey traverse */}
      <div className="page-shell mt-20">
        <h3 className="type-sub mb-8 text-lg">{ui("steps_title")}</h3>
        <ol className="relative grid gap-y-8 md:grid-cols-5 md:gap-x-6">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-ink/20 md:left-0 md:top-[7px] md:h-px md:w-full"
          />
          {STEP_KEYS.map((key, i) => (
            <li key={key} className="relative flex gap-5 md:flex-col md:gap-4">
              <span
                aria-hidden="true"
                className={`relative z-10 mt-1 h-[15px] w-[15px] shrink-0 rotate-45 border-2 md:mt-0 ${
                  i === STEP_KEYS.length - 1
                    ? "border-laterite bg-laterite"
                    : "border-ink bg-survey"
                }`}
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold tabular-nums text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="type-sub text-[1.05rem]">
                  {ui(`steps.${key}.title`)}
                </span>
                <span className="text-[0.95rem] text-ink-muted">
                  {ui(`steps.${key}.text`)}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default BGPDescription;
