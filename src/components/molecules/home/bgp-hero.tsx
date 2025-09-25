import Button from "@/components/atoms/button";
import * as motion from "motion/react-client";
import Link from "next/link";

function BGPHero() {
  return (
    <section className="bg-[url('/assets/bigemip-hero-image.jpg')] bg-cover w-full flex flex-col items-center h-[60%]">
      <div className="flex flex-col gap-48 md:items-center  w-full h-full bg-black/70 pt-64 lg:pt-72 pb-48">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:items-center gap-14 w-full lg:w-1/2 px-5"
        >
          <h1 className="text-[52px] font-medium text-white md:text-center leading-[1.2]">
            <span className="text-amber-500 font-bold block lg:inline">
              BIGEMIP SARL
            </span>
            <span className="block font-bold">
              Bureau d&apos;Investigations Géologique, Minière et Pétrolière
              SARL.
            </span>
          </h1>
          <p className="text-lg text-white md:text-center w-3/5">
            BIGEMIP vous accompagne dans l&apos;exploration minière optimale et
            ciblée, aidée par les technologies les plus avancées.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/services">
              <Button buttonText="Decouvrez nos Projets" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BGPHero;
