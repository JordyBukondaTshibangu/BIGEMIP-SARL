"use client";

import { ButtonLink } from "@/components/atoms/button";
import { heroContours } from "@/lib/contours";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function BGPHero() {
  const t = useTranslations("HomePage.hero");
  const ui = useTranslations("UI.hero");
  const reduce = useReducedMotion();

  const facts = [
    { label: ui("facts.office_label"), value: ui("facts.office_value") },
    { label: ui("facts.partners_label"), value: ui("facts.partners_value") },
    {
      label: ui("facts.registration_label"),
      value: ui("facts.registration_value"),
    },
  ];

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-basalt text-white">
      {/* Open-pit terraces: the most recognisable image of the trade */}
      <Image
        src="/assets/bigemip-image-3.jpg"
        alt="bigemip-image"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgb(31_29_51/0.96)_0%,rgb(31_29_51/0.86)_38%,rgb(31_29_51/0.45)_70%,rgb(31_29_51/0.25)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-1/3 bg-gradient-to-t from-basalt to-transparent" />

      {/* Contour survey drawn over the photograph on load */}
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${heroContours.w} ${heroContours.h}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 -z-10 h-full w-full"
        fill="none"
      >
        {heroContours.paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="var(--color-ore)"
            strokeWidth={p.major ? 1.5 : 0.8}
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: p.major ? 0.55 : 0.28 }}
            transition={{
              duration: 2.4,
              delay: 0.15 + (i % 13) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>

      <div className="page-shell flex flex-1 flex-col justify-end pb-10 pt-36 md:pb-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-w-[52rem] flex-col gap-8"
        >
          <p className="type-sub text-[0.95rem] tracking-[0.04em] text-ore">
            {t("title")}
          </p>
          <h1 className="type-display text-[2.25rem] min-[400px]:text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem]">
            {ui("headline")}
          </h1>
          <p className="type-lede max-w-[44ch] text-white/80">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/services" variant="ore">
              {ui("primary")}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost-light">
              {ui("secondary")}
            </ButtonLink>
          </div>
        </motion.div>

        <div className="mt-16 flex items-end justify-between gap-8 border-t border-white/15 pt-6 md:mt-24">
          <dl className="grid flex-1 grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col gap-0.5">
                <dt className="text-[0.8rem] text-white/55">{f.label}</dt>
                <dd className="text-[0.95rem] font-medium tabular-nums">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <a
            href="#overview"
            aria-label={ui("scroll")}
            className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-ore hover:text-ore md:flex"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BGPHero;
