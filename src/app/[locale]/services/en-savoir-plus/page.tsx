import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPConsulting from "@/components/molecules/more/bgp-consulting";
import BGPExpertise from "@/components/molecules/more/bgp-expertise";
import BGPMapping from "@/components/molecules/more/bgp-mapping";
import BGPMission from "@/components/molecules/more/bgp-mission";

function ServicesPage() {
  return (
    <>
      <BGPConsulting />
      <BGPMapping />
      <BGPExpertise />
      <BGPMission />
      <BGPGetInTouch />
    </>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    page: "more",
    path: "/services/en-savoir-plus",
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const label = await getTranslations({ locale, namespace: "UI.nav" });

  return (
    <>
      <Breadcrumbs
        locale={locale}
        homeLabel={meta("breadcrumb_home")}
        items={[{ name: label("mapping"), path: "/services/en-savoir-plus" }]}
      />
      <ServicesPage />
    </>
  );
}
