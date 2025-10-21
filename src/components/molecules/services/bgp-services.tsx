import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import ServiceCard from "@/components/atoms/service-card";

import { useServices } from "@/hooks/useServices";
export default function BGPServices() {
  const t = useTranslations("Services");

  const services = useServices();
  return (
    <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-medium text-white is-style-underlined-heading"
        >
          {t("services.title")}
        </motion.h1>
        <p className="text-white text-lg font-normal -my-10">
          {t("services.subtitle")}
        </p>

        <p className="text-white text-lg font-normal -my-4">
          {t("services.description")}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
