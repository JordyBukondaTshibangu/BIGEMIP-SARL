import { useTranslations } from "next-intl";
import Image from "next/image";

/* Portrait field photographs, laid out as an uneven contact sheet. */
const FIELD_PHOTOS = [
  {
    src: "/assets/bigemip-image-18.jpeg",
    className: "row-span-2 md:col-start-1 md:row-start-1",
  },
  {
    src: "/assets/bigemip-image-16.jpeg",
    className: "md:col-start-2 md:row-start-1",
  },
  {
    src: "/assets/bigemip-image-20.jpeg",
    className: "row-span-2 md:col-start-3 md:row-start-1",
  },
  {
    src: "/assets/bigemip-image-12.jpeg",
    className: "md:col-start-2 md:row-start-2",
  },
  {
    src: "/assets/bigemip-image-17.jpeg",
    className: "row-span-2 md:col-start-1 md:row-start-3",
  },
  {
    src: "/assets/bigemip-image-14.jpeg",
    className: "row-span-2 md:col-start-2 md:row-start-3",
  },
  {
    src: "/assets/bigemip-image-15.jpeg",
    className: "md:col-start-3 md:row-start-3",
  },
  {
    src: "/assets/bigemip-image-10.jpg",
    className: "md:col-start-3 md:row-start-4",
  },
];

function BGPSites() {
  const t = useTranslations("HomePage.sites");
  const ui = useTranslations("UI.field");

  return (
    <section className="bg-survey py-24 md:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <h2 className="type-title text-[2rem] md:text-[2.6rem]">
            {ui("title")}
          </h2>
          <p className="type-lede text-ink-muted">{t("description_1")}</p>
          <p>{t("description_2")}</p>
        </div>

        <div
          role="group"
          aria-label={ui("alt")}
          className="grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[11rem] md:grid-cols-3 lg:col-span-8"
        >
          {FIELD_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-[3px] bg-survey-2 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={i === 0 ? ui("alt") : ""}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BGPSites;
