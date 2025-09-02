import HeaderTitle from "@/components/molecules/_common/header-title";
import * as motion from "motion/react-client";

function Faq() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#1e2236] pb-48">
      <HeaderTitle
        title="FAQ"
        subtitle="Bienvenue sur notre page Foire Aux Questions (FAQ).Vous trouverez ici les réponses aux interrogations les plus fréquentes concernant Bigemip, nos services et nos solutions."
      />

      <section className="w-full mx-auto flex flex-col gap-8 px-5 -mt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <p className="text-white text-base font-normal leading-8">
            Notre objectif est de vous accompagner et de vous fournir des
            informations claires et rapides sur :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-base font-normal leading-8 list-disc flex flex-col gap-5 px-10"
            >
              <li className="text-white leading-9">
                Nos offres et prestations
              </li>
              <li className="text-white leading-9">
                Les démarches et processus d’inscription ou de souscription
              </li>
              <li className="text-white leading-9">
                Le support technique et l’assistance client
              </li>
              <li className="text-white leading-9">
                Les modalités de paiement et de facturation
              </li>
              <li className="text-white leading-9">
                Toute autre question pratique liée à nos activités
              </li>
            </motion.ul>
          </div>
          <p className="text-white text-base font-normal leading-8">
            Si vous ne trouvez pas la réponse à votre question, n’hésitez pas à
            nous contacter directement via notre formulaire de contact ou par
            email. Notre équipe sera ravie de vous aider.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default Faq;
