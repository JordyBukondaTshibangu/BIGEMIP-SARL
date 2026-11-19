import { ButtonLink } from "@/components/atoms/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BGPMission() {
  const t = useTranslations("Services.mission");
  const ui = useTranslations("UI.strata");

  const tools = [
    { key: "tool_1", image: "/assets/bigemip-image-9.jpg", contain: false },
    {
      key: "tool_2",
      image: "/assets/missions/flexibility.png",
      contain: false,
    },
    { key: "tool_3", image: "/assets/missions/africanite.png", contain: true },
  ] as const;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="page-shell flex flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="type-title text-[2rem] md:text-[2.6rem]">
            {t("title")}
          </h2>
          <ButtonLink href="/services/en-savoir-plus" variant="ghost-dark">
            {ui("all")}
          </ButtonLink>
        </div>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {tools.map((tool) => (
            <li key={tool.key} className="flex flex-col gap-5">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[3px] border border-ink/10 bg-survey">
                <Image
                  src={tool.image}
                  alt={tool.key}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className={
                    tool.contain ? "object-contain p-4" : "object-cover"
                  }
                />
              </div>
              <h3 className="type-sub text-xl lowercase first-letter:uppercase">
                {t(`list.${tool.key}.title`)}
              </h3>
              <p className="text-ink-muted">
                {t(`list.${tool.key}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
