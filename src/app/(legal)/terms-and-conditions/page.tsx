import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";

function AboutUs() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeaderTitle
        title="Termes et Conditions"
        subtitle="Les présentes Conditions Générales d’Utilisation et de Vente (ci-après les « Conditions ») définissent les droits et obligations applicables à toute utilisation des services et produits proposés par Bigemip.
En accédant à notre site internet, à nos plateformes ou en utilisant nos services, vous acceptez sans réserve ces Conditions."
      />
      <motion.section className="w-full mx-auto flex flex-col gap-20 px-5 py-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">1. Objet</h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Les présentes Conditions ont pour objet de régir :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                L’accès et l’utilisation de notre site et de nos services
              </li>
              <li className="text-[#1e2236] leading-9">
                Les modalités de souscription, d’achat et d’utilisation des
                prestations fournies par Bigemip
              </li>
              <li className="text-[#1e2236] leading-9">
                Les droits et obligations réciproques entre Bigemip et ses
                utilisateurs/clients
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            2. Acceptation des Conditions
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Toute utilisation de nos services implique l’acceptation pleine et
            entière des présentes Conditions. Si vous n’acceptez pas ces
            Conditions, vous ne pouvez pas utiliser nos services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            3. Services proposés
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Bigemip met à disposition des utilisateurs :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Des prestations de conseil, d’analyse et d’accompagnement
              </li>
              <li className="text-[#1e2236] leading-9">
                Des solutions numériques et technologiques
              </li>
              <li className="text-[#1e2236] leading-9">
                Des services de formation, de communication et de support
              </li>
              <li className="text-[#1e2236] leading-9">
                D’autres services complémentaires précisés sur notre site ou
                lors de la signature d’un contrat
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            4. Accès aux services
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            L’accès à nos services peut nécessiter :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Une inscription préalable ou la création d’un compte utilisateur
              </li>
              <li className="text-[#1e2236] leading-9">
                La fourniture d’informations exactes et à jour
              </li>
              <li className="text-[#1e2236] leading-9">
                Le respect des obligations techniques (connexion internet,
                logiciels requis, etc.)
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            5. Commandes et contrats
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Toute commande ou souscription à nos services :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Doit être validée par écrit (email, devis signé ou contrat)
              </li>
              <li className="text-[#1e2236] leading-9">
                N’est considérée comme définitive qu’après confirmation par
                Bigemip
              </li>
              <li className="text-[#1e2236] leading-9">
                Implique l’acceptation sans réserve des présentes Conditions
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            6. Tarifs et paiement
          </h3>

          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Les prix de nos services sont indiqués en [devise à préciser,
                ex. FCFA / EUR / USD], hors taxes et frais supplémentaires
                éventuels.
              </li>
              <li className="text-[#1e2236] leading-9">
                Les paiements doivent être effectués selon les modalités
                convenues (virement bancaire, carte, espèces, etc.).
              </li>
              <li className="text-[#1e2236] leading-9">
                En cas de retard de paiement, Bigemip se réserve le droit de
                suspendre l’accès aux services.
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            7. Responsabilités de l’utilisateur
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            L’utilisateur s’engage à :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Fournir des informations exactes et actualisées
              </li>
              <li className="text-[#1e2236] leading-9">
                Utiliser les services de manière conforme aux lois et règlements
                en vigueur
              </li>
              <li className="text-[#1e2236] leading-9">
                Ne pas porter atteinte à la sécurité, à l’intégrité ou au bon
                fonctionnement des plateformes de Bigemip
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            8. Responsabilités de Bigemip
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Bigemip s’engage à :
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
              <li className="text-[#1e2236] leading-9">
                Fournir les services avec diligence et professionnalisme
              </li>
              <li className="text-[#1e2236] leading-9">
                Mettre en place des moyens techniques raisonnables pour assurer
                la sécurité des données et des accès
              </li>
              <li className="text-[#1e2236] leading-9">
                Respecter les obligations légales et contractuelles liées à ses
                prestations
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            9. Propriété intellectuelle
          </h3>

          <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
            <li className="text-[#1e2236] leading-9">
              Tous les contenus (textes, images, logos, logiciels, documents,
              etc.) diffusés par Bigemip sont protégés par les lois relatives à
              la propriété intellectuelle.
            </li>
            <li className="text-[#1e2236] leading-9">
              Toute reproduction, diffusion ou exploitation sans autorisation
              écrite est strictement interdite.
            </li>
          </motion.ul>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            10. Données personnelles
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Le traitement des données personnelles est régi par notre Politique
            de Confidentialité, consultable sur notre site.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">11. Résiliation</h3>

          <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
            <li className="text-[#1e2236] leading-9">
              Chaque partie peut résilier le contrat en cas de manquement grave
              par l’autre partie, après mise en demeure restée sans effet.
            </li>
            <li className="text-[#1e2236] leading-9">
              Bigemip peut suspendre ou supprimer un compte utilisateur en cas
              d’usage frauduleux, abusif ou non conforme aux présentes
              Conditions.
            </li>
          </motion.ul>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            12. Limitation de responsabilité
          </h3>

          <motion.ul className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10">
            <li className="text-[#1e2236] leading-9">
              Bigemip ne pourra être tenu responsable des dommages indirects,
              pertes de données, pertes financières ou préjudices immatériels
              subis par l’utilisateur.
            </li>
            <li className="text-[#1e2236] leading-9">
              La responsabilité de Bigemip, si elle venait à être engagée, sera
              limitée au montant payé par le client pour le service concerné.
            </li>
          </motion.ul>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            13. Force majeure
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Bigemip ne saurait être tenu responsable en cas d’événement de force
            majeure (catastrophe naturelle, panne généralisée, conflit social,
            guerre, décision administrative, etc.) rendant impossible
            l’exécution des services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 lg:w-3/4">
          <h3 className="text-[#1e2236] text-3xl font-bold">
            14. Modification des Conditions
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            Bigemip se réserve le droit de modifier les présentes Conditions à
            tout moment. La version applicable est celle publiée sur notre site
            au moment de l’utilisation des services.
          </p>
        </div>
      </motion.section>
    </div>
  );
}

export default AboutUs;
