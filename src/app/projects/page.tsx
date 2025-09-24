import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPServices from "@/components/molecules/projects/bgp-projects";
import BGPPourquoiBigemip from "@/components/molecules/projects/bgp-why-us";

function Projects() {
  return (
    <div className="w-full flex flex-col">
      <BGPServices />
      <BGPPourquoiBigemip />
      <BGPGetInTouch />
    </div>
  );
}

export default Projects;
