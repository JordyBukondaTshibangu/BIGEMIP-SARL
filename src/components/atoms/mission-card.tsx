import Image from "next/image";
import Button from "./button";

const MissionCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => (
  <div className="flex flex-col gap-6 shadow-lg px-4 py-3 rounded-md bg-white">
    <div className="flex flex-col gap-2 flex-1 overflow-hidden">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt={title}
        className="object-cover w-full h-full"
        priority
      />
    </div>
    <div className="flex flex-col gap-2 md:gap-4">
      <h4 className="text-lg md:text-xl font-medium text-black">{title}</h4>
      <p className="text-sm md:text-md text-[#7A7A7A] leading-7 flex-1 mb-auto min-h-[120px] ">
        {description}
      </p>
      <Button buttonText="Decouvrez nos Projets" />
    </div>
  </div>
);

export default MissionCard;
