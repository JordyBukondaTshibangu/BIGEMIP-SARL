"use client";

/* eslint-disable react/no-unescaped-entities */

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

function BGPProjectsShowCases() {
  const t = useTranslations("HomePage");

  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-14 px-5 py-20">
      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-amber-500"
      >
        {t("showcase.title")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base leading-8"
      >
        {t("showcase.description")}
      </motion.p>
    </section>
  );
}

export default BGPProjectsShowCases;
