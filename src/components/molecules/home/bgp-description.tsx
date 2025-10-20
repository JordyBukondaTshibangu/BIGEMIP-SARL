"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

import { useTranslations } from "next-intl";

function BGPDescription() {
  const t = useTranslations("HomePage");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto flex flex-col gap-12 px-5 py-24"
    >
      <h1 className="text-3xl font-bold text-amber-500">
        {t("welcome_to_bigemip.title")}
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 min-h-full w-full">
          <Image
            src="/assets/bigemip-image-4.jpg"
            alt="BIGEMIP Image"
            className="w-full h-full"
            width={700}
            height={700}
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-amber-500 font-bold">
              {t("welcome_to_bigemip.subtitle")}
            </h6>
            <h2 className="text-3xl font-bold">
              {t("welcome_to_bigemip.second_subtitle")}L
            </h2>
          </div>
          <p className="text-base leading-8">
            {t("welcome_to_bigemip.description_1")}
            <span>{t("welcome_to_bigemip.description_1")}</span>{" "}
            {t("welcome_to_bigemip.description_2")}
          </p>
          <ol className="list-decimal flex flex-col gap-2 px-5 italic">
            <li className="text-base leading-7">
              {t("welcome_to_bigemip.metrics.metric_1")}
            </li>
            <li className="text-base leading-7">
              {t("welcome_to_bigemip.metrics.metric_2")}
            </li>
            <li className="text-base leading-7">
              {t("welcome_to_bigemip.metrics.metric_3")}
            </li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
}

export default BGPDescription;
