import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";

function Support() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeaderTitle
        title="Support Chez BIGEMIP"
        subtitle="Bienvenue sur la page Support de Bigemip.
Notre équipe est à votre disposition pour vous aider à résoudre vos problèmes, répondre à vos questions et vous accompagner dans l’utilisation de nos services."
      />
      <section className="w-full mx-auto flex flex-col gap-20 px-5 py-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            🔎 Trouvez rapidement une réponse
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Avant de contacter notre équipe, nous vous invitons à consulter :
          </p>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              La FAQ (Foire aux Questions) : vous y trouverez les réponses aux
              questions les plus fréquentes.
            </li>
            <li className="text-[#1e2236] leading-9">
              La Politique de Confidentialité : pour comprendre comment nous
              traitons vos données.
            </li>
            <li className="text-[#1e2236] leading-9">
              Les Termes et Conditions : pour connaître vos droits et
              obligations.
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            📩 Contacter le support
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Si vous ne trouvez pas la solution à votre problème, notre équipe
            reste disponible :
          </p>
          <div className="flex flex-col gap-14">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                📧 Email support : support@bigemip.com
              </li>
              <li className="text-[#1e2236] leading-9">
                📞 Téléphone : (+021) 645 863 232
              </li>
              <li className="text-[#1e2236] leading-9">
                📍 Adresse : 9, Avenue du Port, GOMBE, KINSHASA, RDC
              </li>
            </motion.ul>

            <div className="flex flex-col gap-4">
              <div className="w-fit border-b border-gray-400 pb-1">
                <h4 className="text-[#1e2236] text-xl font-bold">
                  ⏰ Nos horaires d’assistance :
                </h4>
              </div>
              <p>📅 Lundi au Vendredi de 9h00 à 18h00</p>
              <p>📅 Samedi de 9h00 à 14h00</p>
              <p> Dimanche & jours fériés : Fermé</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            🛠️ Types de demandes que nous traitons
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Notre équipe support peut vous accompagner pour :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Problèmes techniques liés à l’utilisation de nos plateformes et
              services
            </li>
            <li className="text-[#1e2236] leading-9">
              Assistance à la configuration ou à l’installation
            </li>
            <li className="text-[#1e2236] leading-9">
              Questions sur la facturation et les paiements
            </li>
            <li className="text-[#1e2236] leading-9">
              Demandes d’informations sur nos offres et solutions
            </li>
            <li className="text-[#1e2236] leading-9">
              Signalement d’un bug, d’un incident ou d’une erreur
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            📢 Suivi et résolution
          </h3>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Chaque demande est enregistrée et reçoit un numéro de ticket.
            </li>
            <li className="text-[#1e2236] leading-9">
              Vous pouvez suivre l’évolution de votre demande via email ou
              téléphone.
            </li>
            <li className="text-[#1e2236] leading-9">
              Notre objectif : vous fournir une réponse sous 24 à 48h ouvrées.
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            🤝 Engagement qualité
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Chez Bigemip, nous nous engageons à :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                Vous offrir une assistance claire et personnalisée
              </li>
              <li className="text-[#1e2236] leading-9">
                Vous répondre dans les meilleurs délais
              </li>
              <li className="text-[#1e2236] leading-9">
                Améliorer nos services grâce à vos retours
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Support;
