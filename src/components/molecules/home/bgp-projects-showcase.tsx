/* eslint-disable react/no-unescaped-entities */
import * as motion from "motion/react-client";

function BGPProjectsShowCases() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-14  py-20">
      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-amber-500"
      >
        Nos Références et Projets
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base leading-8"
      >
        La géophysique est très utilisée comme outil de détection directe de
        gisements pour l'exploration minière. En effet, le contraste entre les
        propriétés physi&apos;apos;ues spécifiques des gisements métallifères et
        l'encaissant rocheux crée des « anomalies » qui peuvent être détectées à
        l&lsquo; surface du sol, ou en aéroporté. C'est le cas pour les
        contrastes de susceptibilité magnétique, po&apos;apos;r la
        de&apos;apos;apos;sité, la conductivité électrique et pour la
        radioactivité naturelle (Thorium, Uranium et Potassium). BIGEMIP Sarl
        met ces anomalies géophysiques en relation avec les formations
        géologiques dans vos permis miniers et peut offrir les éléments
        qualitatifs et quantitatifs (si les données sont disponibles) du modèle
        géologique régional ou local susceptible de contenir une minéralisation
        utile, avec des concentrations économiquement exploitables
      </motion.p>
    </section>
  );
}

export default BGPProjectsShowCases;
