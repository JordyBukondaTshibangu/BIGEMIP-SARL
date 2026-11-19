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

export default Services;
