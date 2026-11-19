import { heroContours } from "@/lib/contours";
import ContourField from "@/components/ui/contour-field";
import Image from "next/image";

type PageHeaderProps = {
  title: string;
  intro?: React.ReactNode;
  kicker?: string;
  image?: { src: string; alt: string };
  children?: React.ReactNode;
};

/** Dark page opening shared by every inner page. */
export default function PageHeader({
  title,
  intro,
  kicker,
  image,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-basalt text-white">
      <ContourField
        set={heroContours}
        intensity={0.32}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div
        className={`page-shell grid gap-12 pb-16 pt-36 md:pb-20 md:pt-44 ${
          image ? "lg:grid-cols-12 lg:items-end" : ""
        }`}
      >
        <div
          className={`flex flex-col gap-6 ${image ? "lg:col-span-7" : "max-w-[56rem]"}`}
        >
          {kicker && (
            <p className="type-sub text-[0.95rem] text-ore">{kicker}</p>
          )}
          <h1 className="type-display text-[2.5rem] sm:text-[3.2rem] lg:text-[4rem]">
            {title}
          </h1>
          {intro && (
            <div className="type-lede flex max-w-[56ch] flex-col gap-4 text-white/80">
              {intro}
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] lg:col-span-5">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
