import Button from "@/components/atoms/button";

import * as motion from "motion/react-client";
import Link from "next/link";

export default function BGPGetInTouch() {
  return (
    <section className="relative bg-[url('/assets/bigemip-image-2.jpg')] bg-cover w-full flex flex-col items-center min-h-[95%]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center w-full h-full bg-black/70 gap-20 py-36"
      >
        <div className="w-11/12 md:w-1/2 flex flex-col justify-center gap-10 items-center text-center">
          <h3 className="font-medium  text-md md:text-lg text-amber-500">
            Entrez en Contact
          </h3>
          <h2 className="text-xl md:text-3xl font-medium text-white leading-10">
            Vous hésitez encore sur nos fonctionnalités ?
            <span className="block text-[#9b59b6] mt-4">
              Demandez une consultation.
            </span>
          </h2>
          <p className="text-base text-white leading-8">
            Vous avez des questions ou souhaitez en savoir plus sur nos services
            ? Contactez-nous dès aujourd’hui pour discuter de vos besoins et
            obtenir un accompagnement personnalisé.
          </p>
        </div>

        <Link href="/contact">
          <Button buttonText="Contactez-nous" />
        </Link>
      </motion.div>
    </section>
  );
}
