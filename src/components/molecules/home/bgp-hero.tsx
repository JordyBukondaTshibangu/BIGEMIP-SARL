"use client";

import Button from "@/components/atoms/button";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Link from "next/link";

function BGPHero() {
  const t = useTranslations("HomePage");

  return (
    <section className="bg-[url('/assets/bigemip-hero-image.jpg')] bg-cover w-full flex flex-col items-center h-[60%]">
      <div className="flex flex-col gap-48 md:items-center  w-full h-full bg-black/70 pt-64 lg:pt-72 pb-48">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:items-center gap-14 w-full lg:w-1/2 px-5"
        >
          <h1 className="text-[52px] font-medium text-white md:text-center leading-[1.2] flex flex-col gap-10">
            <span className="text-amber-500 font-bold block lg:inline">
              {t("hero.title")}
            </span>
            <span className="block font-bold">
              {t("hero.title_description_1")}
            </span>
          </h1>
          <p className="text-lg text-white md:text-center w-3/5">
            {t("hero.description")}
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/services">
              <Button buttonText={t("hero.button")} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BGPHero;
