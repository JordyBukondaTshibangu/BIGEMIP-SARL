import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import Strata from "@/components/molecules/_common/strata";
import BGPDescription from "@/components/molecules/home/bgp-description";
import BGPEvents from "@/components/molecules/home/bgp-events";
import BGPHero from "@/components/molecules/home/bgp-hero";
import BGPProjectsShowCases from "@/components/molecules/home/bgp-projects-showcase";
import BGPSites from "@/components/molecules/home/bgp-sites";
import { useTranslations } from "next-intl";

function Home() {
  const ui = useTranslations("UI.strata");
  const services = useTranslations("Services.services");

  return (
    <>
      <BGPHero />
      <BGPDescription />
      <Strata heading={ui("title")} intro={services("subtitle")} />
      <BGPSites />
      <BGPProjectsShowCases />
      <BGPEvents />
      <BGPPartners />
      <BGPGetInTouch />
    </>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "home", path: "" });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Home />;
}
