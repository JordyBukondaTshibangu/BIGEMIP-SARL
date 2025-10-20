"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

import { useTranslations } from "next-intl";

function BGPActualities() {
  const t = useTranslations("HomePage");

  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-8 px-5 py-20">
      <motion.h1
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-amber-500"
      >
        {t("actuality.title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base leading-8"
      >
        {t("actuality.description")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="self-center w-full flex-1 flex items-center justify-center min-h-full max-w-[500px] py-10"
      >
        <Image
          src="/assets/bigemip-image-13.jpg"
          alt="BIGEMIP Image"
          className="w-full h-full"
          width={300}
          height={300}
        />
      </motion.div>
    </section>
  );
}

export default BGPActualities;
