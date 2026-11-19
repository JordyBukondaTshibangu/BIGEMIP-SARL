import PageHeader from "@/components/molecules/_common/page-header";
import { useTranslations } from "next-intl";

export default function BGPServices() {
  const t = useTranslations("Services.services");

  return (
    <PageHeader
      title={t("title")}
      intro={
        <>
          <p>{t("subtitle")}</p>
          <p className="text-white/65">{t("description")}</p>
        </>
      }
      image={{ src: "/assets/bigemip-image-10.jpg", alt: "" }}
    />
  );
}
