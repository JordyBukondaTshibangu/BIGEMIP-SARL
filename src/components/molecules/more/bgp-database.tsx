import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import Image from "next/image";

export default function BGPDatabase() {
  const t = useTranslations("More");

  return (
    <section className="bg-[#1e2236] h-[80%] py-20 pb-36 px-5">
      <div className="lg:max-w-7xl lg:mx-auto w-full flex flex-col-reverse lg:flex-row-reverse  gap-20">
        <div className="w-full flex flex-col gap-10">
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-medium text-white g"
          >
            {t("database.title")}
          </motion.h1>
          <ul className="list-disc pl-6 space-y-4 text-lg text-white">
            {t.raw("database.points").map((point: string, i: number) => (
              <li key={i} className="text-lg leading-10">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <Image
            src="/assets/bigemip-image-4.jpg"
            alt="Consulting"
            width={800}
            height={650}
            className="rounded shadow-md object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
