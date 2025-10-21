import MissionCard from "@/components/atoms/mission-card";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export default function BGPMission() {
  const t = useTranslations("Services");

  const tools = [
    {
      title: t("mission.list.tool_1.title"),
      image: "/assets/missions/innovation.png",
      description: t("mission.list.tool_1.description"),
    },
    {
      title: t("mission.list.tool_2.title"),
      image: "/assets/missions/flexibility.png",
      description: t("mission.list.tool_2.description"),
    },
    {
      title: t("mission.list.tool_3.title"),
      image: "/assets/missions/africanite.png",
      description: t("mission.list.tool_3.description"),
    },
  ];
  return (
    <section className="bg-[#1e2236] h-[80%] py-20 md:py-48 px-5">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col  gap-20">
        <div className="w-full md:w-1/3">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-white is-style-underlined-heading"
          >
            {t("mission.title")}
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {tools.map((tool, idx) => (
            <MissionCard key={idx} {...tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
