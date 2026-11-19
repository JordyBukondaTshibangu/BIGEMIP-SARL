import { useTranslations } from "next-intl";
import FeatureRow from "./feature-row";

export default function BGPMapping() {
  const t = useTranslations("More");
  const ui = useTranslations("UI.more");

  return (
    <section className="py-10 md:py-16">
      <div className="page-shell divide-y divide-ink/10">
        <FeatureRow
          title={t("mapping.title")}
          points={t.raw("mapping.points") as string[]}
          image="/assets/bigemip-image-11.jpg"
          imageAlt={ui("image_alt")}
          accent="var(--color-schist)"
        />
        <FeatureRow
          title={t("consulting.title")}
          description={t("consulting.description")}
          image="/assets/bigemip-image-14.jpeg"
          imageAlt={ui("consulting.title")}
          accent="var(--color-laterite)"
          reverse
        />
        <FeatureRow
          title={t("database.title")}
          points={t.raw("database.points") as string[]}
          image="/assets/bigemip-image-4.jpg"
          imageAlt={t("database.title")}
          accent="var(--color-ochre)"
        />
      </div>
    </section>
  );
}
