import MissionCard from "@/components/atoms/mission-card";
import * as motion from "motion/react-client";

export default function BGPMission() {
  const tools = [
    {
      title: "INNOVATION",
      image: "/assets/missions/innovation.png",
      description:
        "Toujours à l’affût des nouvelles technologies pour vous offrir des solutions modernes et efficaces dans le métier des investigations géologiques et minières",
    },
    {
      title: "FLEXIBILITE",
      image: "/assets/missions/flexibility.png",
      description:
        "Chaque projet mérite une attention minutieuse et un engagement total pour garantir un résultat à la hauteur de vos attentes.",
    },
    {
      title: "AFRICANITE",
      image: "/assets/missions/africanite.png",
      description:
        "bigemip est une société africaine, focalisée sur le marché africain. Notre savoir faire et notre corps de métier propose des solutions pour l’émergence de l’économie de notre beau continent .",
    },
  ];
  return (
    <section className="bg-[#1e2236] h-[80%] py-20 md:py-48 px-5">
      <div className="max-w-7xl mx-auto w-full flex flex-col  gap-20">
        <div className="w-full md:w-1/3">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-white is-style-underlined-heading"
          >
            Notre Mission
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
