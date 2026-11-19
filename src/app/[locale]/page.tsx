import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import Strata from "@/components/molecules/_common/strata";
import BGPDescription from "@/components/molecules/home/bgp-description";
import BGPEvents from "@/components/molecules/home/bgp-events";
import BGPHero from "@/components/molecules/home/bgp-hero";
import BGPProjectsShowCases from "@/components/molecules/home/bgp-projects-showcase";
import BGPSites from "@/components/molecules/home/bgp-sites";
import { useTranslations } from "next-intl";

export default function Home() {
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
