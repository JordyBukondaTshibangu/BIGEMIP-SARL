import PageHeader from "@/components/molecules/_common/page-header";
import { useTranslations } from "next-intl";

function BGPContactHeader() {
  const t = useTranslations("ContactUs");
  return (
    <PageHeader title={t("title")} intro={<p>{t("form.description")}</p>} />
  );
}

export default BGPContactHeader;
