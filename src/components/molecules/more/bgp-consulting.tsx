import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import Image from "next/image";

export default function BGPConsulting() {
  const t = useTranslations("More");

  return (
    <section className="bg-[#1e2236] h-[80%] py-20 md:py-48 px-5">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium text-white min-w-max"
          >
            {t("consulting.title")}
          </motion.h1>
          <p className="text-lg leading-10 text-white">
            {t("consulting.description")}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src="/assets/bigemip-image-3.jpg"
            alt="Consulting"
            width={800}
            height={350}
            className="rounded shadow-md object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
