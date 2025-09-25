import Link from "next/link";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-6 shadow-lg px-7 py-6 rounded-md bg-white">
    <div className="flex flex-col gap-2">{icon}</div>
    <div className="flex flex-col gap-2">
      <h4 className="text-lg md:text-xl font-medium text-black">{title}</h4>
      <p className="text-sm md:text-md text-gray-600 leading-7 h-28">
        {description}
      </p>
      <Link href="/services">
        <span className="text-sm md:text-md text-amber-500 hover:underline">
          Learn More
        </span>
      </Link>
    </div>
  </div>
);

export default ServiceCard;
