import PageHeader from "@/components/molecules/_common/page-header";
import { useTranslations } from "next-intl";

function BGPWhoAreWe() {
  const t = useTranslations("AboutUs.who_are_we");
  const nav = useTranslations("UI.about");

  return (
    <PageHeader
      title={t("title")}
      intro={
        <>
          <p>{t("description_1")}</p>
          <p className="text-white/65">{t("description_2")}</p>
        </>
      }
      image={{ src: "/assets/bigemip-image-7.jpg", alt: nav("gallery_alt") }}
    />
  );
}

export default BGPWhoAreWe;
