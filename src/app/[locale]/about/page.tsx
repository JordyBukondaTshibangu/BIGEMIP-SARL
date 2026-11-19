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

export default AboutUs;
