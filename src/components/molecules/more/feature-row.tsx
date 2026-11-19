import Image from "next/image";

type FeatureRowProps = {
  title: string;
  description?: string;
  points?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  /** Rock-legend colour marking this row's discipline. */
  accent: string;
};

export default function FeatureRow({
  title,
  description,
  points,
  image,
  imageAlt,
  reverse,
  accent,
}: FeatureRowProps) {
  return (
    <article className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-[3px] bg-basalt lg:col-span-6 ${reverse ? "lg:order-last lg:col-start-7" : ""}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div
        className={`flex flex-col gap-6 lg:col-span-5 ${reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-14"
          style={{ backgroundColor: accent }}
        />
        <h2 className="type-title text-[1.9rem] lowercase first-letter:uppercase md:text-[2.3rem]">
          {title}
        </h2>
        {description && (
          <p className="type-lede text-ink-muted">{description}</p>
        )}
        {points && (
          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-2 w-2 shrink-0 rotate-45"
                  style={{ backgroundColor: accent }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
