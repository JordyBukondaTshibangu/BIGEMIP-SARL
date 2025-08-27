import Image from "next/image";

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  displayDate?: string;
  iconSrc?: string;
  bgImage?: string;
}

function EventCard({
  title,
  subtitle,
  description,
  iconSrc = "/assets/icons/event-icon.svg",
  bgImage,
}: CardProps) {
  return (
    <div className="relative flex flex-col gap-5 shadow-2xl bg-[#2a304a] px-5 py-5 cursor-pointer overflow-hidden group h-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-80 transition-opacity duration-500"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col gap-5 transition-all duration-500 group-hover:-translate-y-4">
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`${title} Icon`}
            className="w-full h-full transition-opacity duration-500 group-hover:opacity-0"
            width={80}
            height={80}
          />
        )}
        <div className="flex flex-col gap-4">
          {subtitle && (
            <span className="text-amber-500 text-base uppercase">
              {subtitle}
            </span>
          )}
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {description && <p className="text-base text-white">{description}</p>}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
