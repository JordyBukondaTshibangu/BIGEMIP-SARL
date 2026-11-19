import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPConsulting from "@/components/molecules/more/bgp-consulting";
import BGPExpertise from "@/components/molecules/more/bgp-expertise";
import BGPMapping from "@/components/molecules/more/bgp-mapping";
import BGPMission from "@/components/molecules/more/bgp-mission";

export default function ServicesPage() {
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
