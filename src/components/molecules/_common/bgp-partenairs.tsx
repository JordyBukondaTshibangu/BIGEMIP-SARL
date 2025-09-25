import * as motion from "motion/react-client";
import Image from "next/image";

const partners = [
  {
    image: "/assets/partenaires/geosigmoid-group.png",
    name: "Geosigmoid Group",
    alt: "Geosigmoid Group",
  },
  {
    image: "/assets/partenaires/Geoscan-soft.png",
    name: "Geoscan Soft",
    alt: "Geoscan Soft",
  },
  {
    image: "/assets/partenaires/gamac-energy.png",
    name: "Gamac Energy",
    alt: "Gamac Energy",
  },
];
function BGPPartners() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-amber-500"
        >
          Nos Partenaires
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex h-full  flex-col md:grid md:grid-cols-3 gap-14 md:gap-10 overflow-auto flex-nowrap"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-20"
            >
              <Image
                src={partner?.image}
                alt={partner?.alt}
                className="w-full h-full object-contain"
                width={500}
                height={500}
              />
              <h4 className="text-2xl font-semibold uppercase text-[#1e2236] tracking-widest">
                {partner?.name}
              </h4>
              <hr className="w-20 border-t-2 border-amber-500 md:hidden" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BGPPartners;
