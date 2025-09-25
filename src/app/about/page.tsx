import BGPPlus from "@/components/molecules/about/bgp-plus";
import BGPTeam from "@/components/molecules/about/bgp-team";
import BGPVision from "@/components/molecules/about/bgp-vision";
import BGPWhoAreWe from "@/components/molecules/about/bgp-who-are-we";

function AboutUs() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <BGPWhoAreWe />
      <BGPTeam />
      <BGPPlus />
      <BGPVision />
    </div>
  );
}

export default AboutUs;
