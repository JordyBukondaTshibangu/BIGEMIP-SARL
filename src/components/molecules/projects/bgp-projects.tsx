import ServiceCard from "@/components/atoms/service-card";
import { useServices } from "@/hooks/useServices";
import * as motion from "motion/react-client";

export default function BGPServices() {
  const services = useServices();
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-medium text-white is-style-underlined-heading"
        >
          Nos Services
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
