import { FileText, Handshake, Wallpaper } from "lucide-react";
import { useTranslations } from "next-intl";

export const useServices = () => {
  const t = useTranslations("Services");
  return [
    {
      icon: <Handshake className="text-amber-500" size={46} strokeWidth={1} />,
      title: t("services.list.service_1.title"),
      description: t("services.list.service_1.description"),
    },
    {
      icon: <FileText className="text-amber-500" size={46} strokeWidth={1} />,
      title: t("services.list.service_2.title"),
      description: t("services.list.service_2.description"),
    },
    {
      icon: <Wallpaper className="text-amber-500" size={46} strokeWidth={1} />,
      title: t("services.list.service_3.title"),
      description: t("services.list.service_3.description"),
    },
  ];
};
