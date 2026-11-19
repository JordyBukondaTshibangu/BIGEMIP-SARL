import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

/*
  Services drawn as a geological cross-section: each service is a stratum,
  filled with the conventional map-legend symbol for a rock type
  (dots = sandstone, dashes = shale, hatching = schist) and separated by an
  irregular bedding contact.
*/

type Stratum = {
  key: "service_1" | "service_2" | "service_3";
  colour: string;
  fill: string;
  image: string;
  imageClass?: string;
  boundary: string;
};

const STRATA: Stratum[] = [
  {
    key: "service_1",
    colour: "var(--color-laterite)",
    fill: "fill-dots",
    image: "/assets/bigemip-image-14.jpeg",
    boundary:
      "M0 48 C 120 30, 240 52, 380 38 S 640 18, 780 34 S 1040 52, 1180 30 S 1380 14, 1440 26 V60 H0 Z",
  },
  {
    key: "service_2",
    colour: "var(--color-ochre)",
    fill: "fill-dashes",
    image: "/assets/bigemip-image-17.jpeg",
    boundary:
      "M0 30 C 160 44, 300 22, 460 34 S 720 56, 900 40 S 1180 18, 1300 32 S 1420 46, 1440 40 V60 H0 Z",
  },
  {
    key: "service_3",
    colour: "var(--color-schist)",
    fill: "fill-hatch",
    image: "/assets/missions/innovation.png",
    imageClass: "object-contain bg-white p-3",
    boundary:
      "M0 40 C 200 24, 340 50, 520 36 S 820 14, 980 30 S 1240 52, 1440 28 V60 H0 Z",
  },
];

function lowerFirst(text: string) {
  return text.charAt(0) + text.slice(1).toLowerCase();
}

export default function Strata({
  heading,
  intro,
  hideHeading = false,
}: {
  heading: string;
  intro?: string;
  /** Use when the page header already introduces the services. */
  hideHeading?: boolean;
}) {
  const t = useTranslations("Services.services.list");
  const ui = useTranslations("UI.strata");

  return (
    <section aria-labelledby="strata-heading" className="bg-basalt text-white">
      <div
        className={
          hideHeading
            ? "pt-14"
            : "page-shell flex flex-col gap-5 pb-24 pt-24 md:flex-row md:items-end md:justify-between md:pt-32"
        }
      >
        <h2
          id="strata-heading"
          className={
            hideHeading ? "sr-only" : "type-title text-[2rem] md:text-[2.6rem]"
          }
        >
          {heading}
        </h2>
        {intro && !hideHeading && (
          <p className="max-w-[46ch] text-white/75 md:text-right">{intro}</p>
        )}
      </div>

      <ol>
        {STRATA.map((s) => (
          <li
            key={s.key}
            className="relative isolate"
            style={{ backgroundColor: s.colour }}
          >
            {/* bedding contact with the layer above */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1440 60"
              preserveAspectRatio="none"
              className="absolute inset-x-0 top-0 h-10 w-full -translate-y-[calc(100%-1px)] md:h-14"
            >
              <path d={s.boundary} fill={s.colour} />
            </svg>
            <div
              aria-hidden="true"
              className={`absolute inset-0 -z-10 ${s.fill}`}
            />

            <div className="page-shell grid gap-10 py-16 md:grid-cols-12 md:py-20">
              <div className="flex flex-col gap-5 md:col-span-6 lg:col-span-5">
                <h3 className="type-display text-[2.2rem] md:text-[3rem]">
                  {lowerFirst(t(`${s.key}.title`))}
                </h3>
                <p className="type-lede max-w-[40ch] text-white/90">
                  {t(`${s.key}.description`)}
                </p>
                <Link
                  href="/services/en-savoir-plus"
                  className="link-underline self-start font-semibold"
                >
                  {ui("details")}
                </Link>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] shadow-[0_20px_50px_-20px_rgb(0_0_0/0.5)] md:col-span-6 md:col-start-7 lg:col-span-6 lg:col-start-7">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className={`object-cover ${s.imageClass ?? ""}`}
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
