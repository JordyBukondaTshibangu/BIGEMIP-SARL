"use client";

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export default function BGPPlus() {
  const t = useTranslations("AboutUs");

  return (
    <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 py-20 pb-32">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-14">
        <div className="flex flex-col gap-6 md:w-3/4">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-amber-500 leading-18 is-style-underlined-heading"
          >
            {t("plus.title")}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col gap-12"
        >
          <p className=" text-lg font-normal leading-8">
            {t("plus.description")}
          </p>

          <ol className="list-decimal flex flex-col gap-2 px-10">
            <li className="text-lg leading-8">{t("plus.list.item_1")}</li>
            <li className="text-lg leading-8">{t("plus.list.item_2")}</li>
            <li className="text-lg leading-8">{t("plus.list.item_3")}</li>
            <li className="text-lg leading-8">{t("plus.list.item_4")}</li>
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
