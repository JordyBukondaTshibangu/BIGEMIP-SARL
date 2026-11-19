import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPPlus from "@/components/molecules/about/bgp-plus";
import BGPTeam from "@/components/molecules/about/bgp-team";
import BGPVision from "@/components/molecules/about/bgp-vision";
import BGPWhoAreWe from "@/components/molecules/about/bgp-who-are-we";

function AboutUs() {
  return (
    <>
      <BGPWhoAreWe />
      <BGPPlus />
      <BGPTeam />
      <BGPVision />
      <BGPGetInTouch />
    </>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "about", path: "/about" });
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
        items={[{ name: label("about"), path: "/about" }]}
      />
      <AboutUs />
    </>
  );
}
