import BGPPartners from "@/components/molecules/_common/bgp-partenairs";
import BGPGetInTouch from "@/components/molecules/_common/get-in-touch";
import BGPActualities from "@/components/molecules/home/bgp-actualities";
import BGPDescription from "@/components/molecules/home/bgp-description";
import BGPEvents from "@/components/molecules/home/bgp-events";
import BGPHero from "@/components/molecules/home/bgp-hero";
import BGPProjectsShowCases from "@/components/molecules/home/bgp-projects-showcase";
import BGPSites from "@/components/molecules/home/bgp-sites";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <BGPHero />
      <BGPDescription />
      <BGPEvents />
      <BGPActualities />
      <BGPSites />
      <BGPProjectsShowCases />
      <BGPPartners />
      <BGPGetInTouch />
    </div>
  );
}
