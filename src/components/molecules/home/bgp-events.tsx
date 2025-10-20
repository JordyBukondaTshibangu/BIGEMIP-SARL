"use client";

import EventCard from "@/components/atoms/event-block";
import * as motion from "motion/react-client";

import { useTranslations } from "next-intl";

function BGPEvents() {
  const t = useTranslations("HomePage");

  const events: { [key: string]: string }[] = [
    {
      title: t("events.event_1.title"),
      subtitle: t("events.event_1.subtitle"),
      description: t("events.event_1.description"),
      date: t("events.event_1.date"),
      displayDate: t("events.event_1.displayDate"),
      iconSrc: "/assets/icons/event-icon.svg",
      bgImage: "/assets/bigemip-hero-image.jpg",
    },
    {
      title: t("events.event_2.title"),
      subtitle: t("events.event_2.subtitle"),
      description: t("events.event_2.description"),
      date: t("events.event_2.date"),
      displayDate: t("events.event_2.displayDate"),
      iconSrc: "/assets/icons/map-icon.svg",
      bgImage: "/assets/bigemip-image-2.jpg",
    },
    {
      title: t("events.event_3.title"),
      subtitle: t("events.event_3.subtitle"),
      description: t("events.event_3.description"),
      date: t("events.event_3.date"),
      displayDate: t("events.event_3.displayDate"),
      iconSrc: "/assets/icons/conference-icon.svg",
      bgImage: "/assets/bigemip-image-3.jpg",
    },
    {
      title: t("events.event_4.title"),
      subtitle: t("events.event_4.subtitle"),
      description: t("events.event_4.description"),
      date: t("events.event_4.date"),
      displayDate: t("events.event_4.displayDate"),
      iconSrc: "/assets/icons/qa-icon.svg",
      bgImage: "/assets/bigemip-image-4.jpg",
    },
  ];

  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-32 bg-[#1e2236]">
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full mx-auto flex flex-col gap-8 "
      >
        <h1 className="text-3xl font-bold text-amber-500">
          {t("events.title")}
        </h1>

        <div className="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              subtitle={event.subtitle}
              description={event.description}
              displayDate={event.displayDate}
              bgImage={event.bgImage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default BGPEvents;
