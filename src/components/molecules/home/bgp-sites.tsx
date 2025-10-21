"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

import { useTranslations } from "next-intl";

const imagesSite = [
  "/assets/bigemip-image-12.jpeg",
  "/assets/bigemip-image-14.jpeg",
  "/assets/bigemip-image-15.jpeg",
  "/assets/bigemip-image-16.jpeg",
];
function BGPSites() {
  const t = useTranslations("HomePage");

  return (
    <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 py-32 bg-[#1e2236]">
      <div className="lg:max-w-7xl w-full lg:mx-auto flex flex-col gap-14">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-amber-500"
        >
          {t("sites.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base leading-8 text-white"
        >
          {t("sites.description_1")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base leading-8 text-white"
        >
          {t("sites.description_2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col h-full md:grid md:grid-cols-4 gap-5 overflow-auto flex-nowrap"
        >
          {imagesSite.map((image, index) => (
            <div key={index} className="flex-1 w-full h-full">
              <Image
                src={image}
                alt="BIGEMIP Image"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BGPSites;
