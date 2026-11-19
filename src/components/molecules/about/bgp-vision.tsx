import { useTranslations } from "next-intl";
import { Cpu, Globe2, Layers, Target } from "lucide-react";

const ITEMS = [
  { key: "vision_1", Icon: Globe2 },
  { key: "vision_2", Icon: Layers },
  { key: "vision_3", Icon: Target },
  { key: "vision_4", Icon: Cpu },
] as const;

export default function BGPVision() {
  const t = useTranslations("AboutUs.vision");

  return (
    <section className="bg-survey-2 py-24 md:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <h2 className="type-title text-[2rem] md:text-[2.6rem] lg:col-span-4">
          {t("title")}
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-[3px] bg-ink/12 sm:grid-cols-2 lg:col-span-8">
          {ITEMS.map(({ key, Icon }) => (
            <li key={key} className="flex flex-col gap-5 bg-survey p-8">
              <Icon
                aria-hidden="true"
                size={26}
                strokeWidth={1.5}
                className="text-bronze"
              />
              <p className="text-[1.05rem] font-medium leading-snug">
                {t(`list.${key}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
