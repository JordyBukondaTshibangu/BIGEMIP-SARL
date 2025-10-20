"use client";

import BGPConsulting from "@/components/molecules/more/bgp-consulting";
import BGPDatabase from "@/components/molecules/more/bgp-database";
import BGPExpertise from "@/components/molecules/more/bgp-expertise";
import BGPMapping from "@/components/molecules/more/bgp-mapping";
import BGPMission from "@/components/molecules/more/bgp-mission";

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      <BGPMapping />
      <BGPConsulting />
      <BGPDatabase />
      <BGPMission />
      <BGPExpertise />
    </div>
  );
}
