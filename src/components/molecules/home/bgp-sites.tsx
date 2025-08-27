import Image from "next/image";

const imagesSite = [
  "/assets/bigemip-image-12.jpeg",
  "/assets/bigemip-image-14.jpeg",
  "/assets/bigemip-image-15.jpeg",
  "/assets/bigemip-image-16.jpeg",
];
function BGPSites() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 ">
        <h1 className="text-3xl font-bold text-amber-500">Nos Sites</h1>
        <p className="text-base leading-8 text-white">
          La société BIGEMIP est un bureau qui offre ses services
          d&apos;ingénieur conseil à ses clients parmi lesquels les
          investisseurs, les opérateurs miniers et pétroliers, et les
          exploitants miniers pour leur apporter les solutions les plus adaptées
          dans les secteurs de la géologie, de mines et du Pétrole.
        </p>

        <div className="flex h-full md:grid md:grid-cols-4 gap-5 overflow-auto flex-nowrap">
          {imagesSite.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="BIGEMIP Image"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BGPSites;
