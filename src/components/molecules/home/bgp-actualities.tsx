import * as motion from "motion/react-client";
import Image from "next/image";

function BGPActualities() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-8 px-5 py-20">
      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-amber-500"
      >
        Actualités
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base leading-8"
      >
        Sur la base de cartes géologiques de la RD Congo, vos permis miniers
        sont placés dans leur contexte géologique global et régional. Ainsi, une
        description des formations géologiques, structurales et géologiques en
        relation avec les indices miniers connus des services géologiques et
        dans la littérature est présentée dans le but d&apos;orienter vos
        explorations. En effet, les cartes géologiques fournissent de nombreuses
        informations importantes sur les couches géologiques qui affleurent,
        telles que leurs lithologies, leurs âges (stratigraphie), leurs
        positions structurales (tectonique) et la localisation des mines
        ancienne et en activité, ainsi que les indices miniers potentiels.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="self-center w-full flex-1 flex items-center justify-center min-h-full max-w-[500px] py-10"
      >
        <Image
          src="/assets/bigemip-image-13.jpg"
          alt="BIGEMIP Image"
          className="w-full h-full"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
}

export default BGPActualities;
