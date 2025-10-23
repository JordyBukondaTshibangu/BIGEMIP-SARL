"use client";

import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

function BGPContactHeader() {
  const t = useTranslations("ContactUs");
  return (
    <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 py-20 pt-48 bg-[#1e2236]">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-10"
      >
        <h1 className="text-5xl font-medium text-amber-500 is-style-underlined-heading leading-16">
          {t("title")}
        </h1>
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-6 w-full lg:w-3/4">
            <div className="flex flex-col gap-4">
              <p className="text-white text-lg font-normal leading-8">
                {t("description")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default BGPContactHeader;
