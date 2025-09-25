import * as motion from "motion/react-client";
import Image from "next/image";

const imagesSite = [
  "/assets/bigemip-image-12.jpeg",
  "/assets/bigemip-image-14.jpeg",
  "/assets/bigemip-image-15.jpeg",
  "/assets/bigemip-image-16.jpeg",
];
function BGPSites() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-32 bg-[#1e2236]">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-14">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-amber-500"
        >
          Nos Sites
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base leading-8 text-white"
        >
          La société BIGEMIP est un bureau qui offre ses services
          d&apos;ingénieur conseil à ses clients parmi lesquels les
          investisseurs, les opérateurs miniers et pétroliers, et les
          exploitants miniers pour leur apporter les solutions les plus adaptées
          dans les secteurs de la géologie, de mines et du Pétrole.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base leading-8 text-white"
        >
          BIGEMIP SARL travaille en collaboration avec des sociétés de services
          de droit américain, français, tunisien et Emiratie, afin de proposer
          les solutions techno- logiques les plus adaptées aux problèmes des
          secteurs miniers et pétroliers. BIGEMIP SARL, vous accompagne dans
          l’exploration minière et pétrolière optimale et ciblée, aidée par les
          technologies les plus avancées.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex h-full md:grid md:grid-cols-4 gap-5 overflow-auto flex-nowrap"
        >
          {imagesSite.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="BIGEMIP Image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BGPSites;
