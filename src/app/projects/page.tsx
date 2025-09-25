import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPMission from "@/components/molecules/projects/bgp-mission";
import BGPServices from "@/components/molecules/projects/bgp-projects";
import BGPPourquoiBigemip from "@/components/molecules/projects/bgp-why-us";

function Projects() {
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

export default Projects;
