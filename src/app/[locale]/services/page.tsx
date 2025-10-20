import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPMission from "@/components/molecules/services/bgp-mission";
import BGPServices from "@/components/molecules/services/bgp-services";
import BGPPourquoiBigemip from "@/components/molecules/services/bgp-why-us";

function Services() {
  return (
    <div className="w-full flex flex-col">
      <BGPServices />
      <BGPPourquoiBigemip />
      <BGPGetInTouch />
      <BGPMission />
      <BGPPartners />
    </div>
  );
}

export default Services;
