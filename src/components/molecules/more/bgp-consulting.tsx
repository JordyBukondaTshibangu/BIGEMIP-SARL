import PageHeader from "@/components/molecules/_common/page-header";
import { useTranslations } from "next-intl";

/* Page opening for /services/en-savoir-plus */
export default function BGPConsulting() {
  const ui = useTranslations("UI.more");
  return <PageHeader title={ui("title")} intro={<p>{ui("intro")}</p>} />;
}
