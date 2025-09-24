import { Banknote, FileText, Wallet } from "lucide-react";

export const useServices = () => {
  return [
    {
      icon: <Wallet className="text-amber-500" size={46} strokeWidth={1} />,
      title: "CONSULTING",
      description:
        "Acquisition des données géologiques et géophysique, Accompagnement dans toutes les phases de vos projets de recherche géologique, minière",
    },
    {
      icon: <FileText className="text-amber-500" size={46} strokeWidth={1} />,
      title: "BANQUE DES DONNEES",
      description:
        "Conception, mise en place et gestion de la banque de données",
    },
    {
      icon: <Banknote className="text-amber-500" size={46} strokeWidth={1} />,
      title: "SOLUTIONS LOGICIELLES",
      description:
        "Distribution et formation au logiciel geoscan avec le partenaire international geosigmoide",
    },
  ];
};
