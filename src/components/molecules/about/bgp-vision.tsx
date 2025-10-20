"use client";

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export default function BGPVision() {
  const t = useTranslations("AboutUs");

  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 pb-56 bg-[#1e2236]">
      <div className="max-w-7xl mx-auto w-full flex flex-col = gap-14">
        <div className="flex flex-col gap-6 md:w-3/4">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-amber-500 leading-18 is-style-underlined-heading"
          >
            {t("vision.title")}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10"
        >
          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">1</span>
            <span className="text-lg font-medium text-white">
              {t("vision.list.vision_1")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">2</span>
            <span className="text-lg font-medium text-white">
              {t("vision.list.vision_2")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">3</span>
            <span className="text-lg font-medium text-white">
              {t("vision.list.vision_3")}
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">4</span>
            <span className="text-lg font-medium text-white">
              {t("vision.list.vision_4")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
