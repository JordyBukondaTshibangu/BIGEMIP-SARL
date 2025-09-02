import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";

function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeaderTitle
        title="Privacy Policy"
        subtitle="Chez Bigemip, nous accordons une importance primordiale à la protection de vos données personnelles et à votre vie privée.
                Cette Politique de Confidentialité a pour objectif de vous expliquer de manière claire et transparente"
      />

      <section className="w-full mx-auto flex flex-col gap-8 px-5 -mt-12 pb-20 bg-[#1e2236]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <p className="text-white text-base font-normal leading-8">
            Bienvenue sur notre page Politique de Confidentialité. Chez Bigemip,
            la protection de vos données personnelles est une priorité.
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-base font-normal leading-8 list-disc flex flex-col gap-5 px-10"
            >
              <li className="text-white leading-9">
                Les types de données que nous collectons
              </li>
              <li className="text-white leading-9">
                L’utilisation que nous faisons de vos informations
              </li>
              <li className="text-white leading-9">
                La durée de conservation de vos données
              </li>
              <li className="text-white leading-9">
                Les mesures de sécurité mises en place pour les protéger
              </li>
              <li className="text-white leading-9">
                Vos droits en matière d’accès, de rectification et de
                suppression de vos données
              </li>
            </motion.ul>
          </div>
          <p className="text-white text-base font-normal leading-8">
            Nous nous engageons à traiter vos informations avec la plus grande
            confidentialité et conformément aux réglementations en vigueur
            (comme le RGPD). Si vous avez la moindre question ou souhaitez
            exercer vos droits, vous pouvez nous contacter directement via notre
            formulaire de contact ou par email.
          </p>
        </motion.div>
      </section>

      <section className="w-full mx-auto flex flex-col gap-20 px-5 py-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-8 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-4xl font-bold">
            Politique de Confidentialité – Bigemip
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Chez Bigemip, nous accordons une importance primordiale à la
            protection de vos données personnelles et à votre vie privée. Cette
            Politique de Confidentialité a pour objectif de vous expliquer de
            manière claire et transparente :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-4 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Quelles données nous collectons
            </li>
            <li className="text-[#1e2236] leading-9">
              Comment et pourquoi nous les utilisons
            </li>
            <li className="text-[#1e2236] leading-9">
              Les mesures mises en place pour les protéger
            </li>
            <li className="text-[#1e2236] leading-9">
              Les droits dont vous disposez concernant vos informations
            </li>
          </motion.ul>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            En utilisant nos services, vous acceptez les termes décrits
            ci-dessous.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            1. Données que nous collectons
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Nous collectons uniquement les données nécessaires à la fourniture
            et à l’amélioration de nos services :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                Informations personnelles : nom, prénom, adresse email, numéro
                de téléphone, fonction, entreprise.
              </li>
              <li className="text-[#1e2236] leading-9">
                Informations techniques : adresse IP, type de navigateur,
                système d’exploitation, pages consultées, temps de visite.
              </li>
              <li className="text-[#1e2236] leading-9">
                Données de communication : échanges par email, formulaires
                remplis, messages envoyés via nos plateformes.
              </li>
              <li className="text-[#1e2236] leading-9">
                Données contractuelles : informations liées à la facturation,
                moyens de paiement, historiques de commandes ou de prestations.
              </li>
            </motion.ul>
          </div>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            En utilisant nos services, vous acceptez les termes décrits
            ci-dessous.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            2. Finalités de l’utilisation des données
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Vos données sont collectées et utilisées uniquement pour les
            objectifs suivants :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Fournir et améliorer nos services et solutions
            </li>
            <li className="text-[#1e2236] leading-9">
              Gérer vos demandes, inscriptions et projets
            </li>
            <li className="text-[#1e2236] leading-9">
              Personnaliser votre expérience utilisateur
            </li>
            <li className="text-[#1e2236] leading-9">
              Communiquer avec vous (informations, offres, newsletters,
              événements)
            </li>
            <li className="text-[#1e2236] leading-9">
              Assurer le suivi administratif, légal et financier
            </li>
            <li className="text-[#1e2236] leading-9">
              Prévenir et détecter les fraudes ou activités malveillantes
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
            3. Partage de vos données
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Nous ne vendons ni ne louons vos données à des tiers. Cependant, vos
            informations peuvent être partagées uniquement dans les cas suivants
            :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Partenaires de confiance : lorsque cela est nécessaire pour
              fournir le service (ex. prestataires techniques, hébergeurs).
            </li>
            <li className="text-[#1e2236] leading-9">
              Obligations légales : en cas d’exigence des autorités judiciaires
              ou réglementaires.
            </li>
            <li className="text-[#1e2236] leading-9">
              Transferts sécurisés : dans le cadre d’outils tiers (par exemple
              Google Workspace, LinkedIn ou autres logiciels utilisés pour nos
              activités), uniquement si ces services garantissent un niveau
              adéquat de protection des données.
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
            4. Sécurité et protection
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Les accès non autorisés
            </li>
            <li className="text-[#1e2236] leading-9">
              Les pertes, fuites ou vols
            </li>
            <li className="text-[#1e2236] leading-9">
              Les altérations ou destructions accidentelles
            </li>
            <li className="text-[#1e2236] leading-9">Hébergement sécurisé</li>
            <li className="text-[#1e2236] leading-9">
              Connexions chiffrées (SSL/HTTPS)
            </li>
            <li className="text-[#1e2236] leading-9">
              Gestion restreinte des accès en interne
            </li>
            <li className="text-[#1e2236] leading-9">Sauvegardes régulières</li>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            5. Conservation des données
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Vos données sont conservées uniquement le temps nécessaire à la
            réalisation des finalités décrites ci-dessus, puis supprimées ou
            anonymisées. Certaines informations peuvent être conservées plus
            longtemps afin de respecter nos obligations légales et fiscales.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">6. Vos droits</h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants :
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              Accès : savoir quelles données nous détenons sur vous
            </li>
            <li className="text-[#1e2236] leading-9">
              Rectification : corriger vos informations si elles sont inexactes
              ou incomplètes
            </li>
            <li className="text-[#1e2236] leading-9">
              Suppression : demander l’effacement de vos données personnelles
            </li>
            <li className="text-[#1e2236] leading-9">
              Opposition : refuser l’utilisation de vos données à certaines fins
              (marketing, prospection)
            </li>
            <li className="text-[#1e2236] leading-9">
              Portabilité : obtenir une copie de vos données dans un format
              lisible
            </li>
            <li className="text-[#1e2236] leading-9">
              Limitation : restreindre le traitement de vos données dans
              certains cas
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
            7. Cookies et technologies similaires
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Notre site peut utiliser des cookies et outils de suivi afin de :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                Faciliter votre navigation
              </li>
              <li className="text-[#1e2236] leading-9">
                Mesurer l’audience et améliorer l’expérience utilisateur
              </li>
              <li className="text-[#1e2236] leading-9">
                Personnaliser le contenu et les offres
              </li>
            </motion.ul>
          </div>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Vous pouvez configurer votre navigateur pour refuser les cookies ou
            être informé lors de leur utilisation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            8. Modifications de cette politique
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Nous pouvons mettre à jour cette Politique de Confidentialité afin
            de refléter l’évolution de nos pratiques, de nos services ou de la
            législation. La version la plus récente sera toujours disponible sur
            cette page.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
