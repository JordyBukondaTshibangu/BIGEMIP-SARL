import EventCard from "@/components/atoms/event-block";

const events: { [key: string]: string }[] = [
  {
    title: "Webinaires base de données et analyses des sols urbains",
    subtitle: "Webinaire",
    description:
      "Découvrez les meilleures pratiques pour collecter, organiser et analyser des données urbaines afin de mieux comprendre les sols en milieu urbain.",
    date: "2025-09-15T10:00:00Z",
    displayDate: "15 Septembre 2025, 10h00",
    iconSrc: "/assets/icons/event-icon.svg",
    bgImage: "/assets/bigemip-hero-image.jpg",
  },
  {
    title: "Atelier sur la cartographie numérique",
    subtitle: "Atelier",
    description:
      "Un atelier interactif pour apprendre à utiliser des outils de cartographie numérique dans le cadre de projets environnementaux.",
    date: "2025-09-20T14:00:00Z",
    displayDate: "20 Septembre 2025, 14h00",
    iconSrc: "/assets/icons/map-icon.svg",
    bgImage: "/assets/bigemip-image-2.jpg",
  },
  {
    title: "Conférence internationale sur l’innovation durable",
    subtitle: "Conférence",
    description:
      "Un événement rassemblant des experts et chercheurs autour des innovations pour un avenir durable.",
    date: "2025-10-05T09:00:00Z",
    displayDate: "5 Octobre 2025, 09h00",
    iconSrc: "/assets/icons/conference-icon.svg",
    bgImage: "/assets/bigemip-image-3.jpg",
  },
  {
    title: "Session Q&A avec nos experts",
    subtitle: "Session Live",
    description:
      "Posez vos questions à nos spécialistes sur les enjeux urbains et environnementaux.",
    date: "2025-10-12T17:00:00Z",
    displayDate: "12 Octobre 2025, 17h00",
    iconSrc: "/assets/icons/qa-icon.svg",
    bgImage: "/assets/bigemip-image-4.jpg",
  },
];

function BGPEvents() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-32 bg-[#1e2236]">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 ">
        <h1 className="text-3xl font-bold text-amber-500">Événements</h1>

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
      </div>
    </section>
  );
}

export default BGPEvents;
