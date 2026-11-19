import { useTranslations } from "next-intl";
import Image from "next/image";

const partners = [
  {
    image: "/assets/partenaires/geosigmoid-group.png",
    name: "Geosigmoid Group",
    w: 410,
    h: 284,
  },
  {
    image: "/assets/partenaires/Geoscan-soft.png",
    name: "Geoscan Soft",
    w: 440,
    h: 220,
  },
  {
    image: "/assets/partenaires/gamac-energy.png",
    name: "Gamac Energy",
    w: 496,
    h: 272,
  },
];

function BGPPartners() {
  const t = useTranslations("HomePage.partners");
  const ui = useTranslations("UI.partners");

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-4">
          <h2 className="type-title text-[1.7rem] md:text-[2rem]">
            {t("title")}
          </h2>
          <p className="text-ink-muted">{ui("intro")}</p>
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:col-span-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-36 items-center justify-center bg-white px-8"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="max-h-20 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BGPPartners;
