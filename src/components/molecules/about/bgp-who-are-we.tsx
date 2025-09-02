import * as motion from "motion/react-client";
import Image from "next/image";

function BGPWhoAreWe() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full flex flex-col gap-10"
      >
        <h1 className="text-5xl font-medium text-amber-500 is-style-underlined-heading">
          A Propos de Nous
        </h1>
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-6 w-full lg:w-3/4">
            <div className="flex flex-col gap-4">
              <p className="text-white text-lg font-normal leading-8">
                La société BIGEMIP est un bureau qui offre ses services
                d&apos;ingénieur conseil à ses clients parmi lesquels les
                investisseurs, les opérateurs miniers et pétroliers, et les
                exploitants miniers pour leur apporter les solutions les plus
                adaptées dans les secteurs de la géologie, de mines et du
                Pétrole.
              </p>
              <p className="text-white text-lg font-normal leading-8">
                Notre Bureau accompagne également les investisseurs en leur
                assistant techniquement selon leur besoin dans les secteurs
                ci-haut mentionnés.
              </p>
            </div>
          </div>
          <div className="hidden md:block px-5">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              <Image
                src="/assets/bigemip-image-2.jpg"
                width={300}
                height={300}
                alt="gallery-image-1"
                className="w-full mb-4 rounded-lg object-cover break-inside-avoid"
              />
              <Image
                src="/assets/bigemip-image-3.jpg"
                width={300}
                height={300}
                alt="gallery-image-2"
                className="w-full mb-4 rounded-lg object-cover break-inside-avoid"
              />
              <Image
                src="/assets/bigemip-image-4.jpg"
                width={300}
                height={300}
                alt="gallery-image-3"
                className="w-full mb-4 rounded-lg object-cover break-inside-avoid"
              />
              <Image
                src="/assets/bigemip-image-6.jpg"
                width={350}
                height={300}
                alt="gallery-image-4"
                className="w-full mb-4 rounded-lg object-cover break-inside-avoid"
              />
              <Image
                src="/assets/bigemip-image-7.jpg"
                width={350}
                height={300}
                alt="gallery-image-5"
                className="w-full mb-4 rounded-lg object-cover break-inside-avoid"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default BGPWhoAreWe;
