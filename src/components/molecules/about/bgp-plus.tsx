import * as motion from "motion/react-client";

export default function BGPPlus() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 pb-32">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-14">
        <div className="flex flex-col gap-6 md:w-3/4">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-amber-500 leading-18 is-style-underlined-heading"
          >
            Qui sommes-nous?
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col gap-12"
        >
          <p className=" text-lg font-normal leading-8">
            Le Bureau d’Investigations Géologique, Minière et Pétrolière SARL,
            BIGEMIP SARL, en sigle, est une société de droit congolais, inscrite
            sous le RCCM CD/KNG/ RCCM/23-B-02483 et IDNAT : 01-B0500-N40997H
            ayant son siège social dans la ville province de Kinshasa, en
            République démocratique du Congo. BIGEMIP SARL, offre un paquet de
            services en ingénierie conseil à des clients aux profils variés,
            parmi lesquels se trouvent :
          </p>

          <ol className="list-decimal flex flex-col gap-2 px-10">
            <li className="text-lg leading-8">
              Les investisseurs dans les secteurs miniers et pétroliers
            </li>
            <li className="text-lg leading-8">
              Les opérateurs miniers et pétroliers,
            </li>
            <li className="text-lg leading-8">Les exploitants miniers</li>
            <li className="text-lg leading-8">
              Les institutions étatiques dévouées au secteur minier et
              pétrolier.
            </li>
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
