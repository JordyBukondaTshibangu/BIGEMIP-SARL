import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import Strata from "@/components/molecules/_common/strata";
import BGPMission from "@/components/molecules/services/bgp-mission";
import BGPServices from "@/components/molecules/services/bgp-services";
import BGPPourquoiBigemip from "@/components/molecules/services/bgp-why-us";
import { useTranslations } from "next-intl";

function Services() {
  const ui = useTranslations("UI.strata");

  return (
    <>
      <BGPServices />
      <Strata heading={ui("title")} hideHeading />
      <BGPPourquoiBigemip />
      <BGPMission />
      <BGPPartners />
      <BGPGetInTouch />
    </>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "services", path: "/services" });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const label = await getTranslations({ locale, namespace: "Navigation" });

  return (
    <>
      <Breadcrumbs
        locale={locale}
        homeLabel={meta("breadcrumb_home")}
        items={[{ name: label("services"), path: "/services" }]}
      />
      <Services />
    </>
  );
}
