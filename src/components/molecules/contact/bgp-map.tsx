"use client";

import { BriefcaseBusiness, Map, Phone } from "lucide-react";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

type ContactInfoBlockProps = {
  icon: React.ElementType;
  title: string;
  details: string[];
};

const ContactInfo = ({ title, details, icon: Icon }: ContactInfoBlockProps) => (
  <div className="flex-1 flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <Icon size={36} color="#f99c00" strokeWidth={2} />
      <h4 className="text-3xl font-semibold text-white">{title}</h4>
    </div>
    <div className="flex flex-col gap-1 px-12">
      {details.map((line, index) => (
        <span key={index} className="text-lg text-white">
          {line}
        </span>
      ))}
    </div>
  </div>
);

function BGPMap() {
  const t = useTranslations("ContactUs");

  const detailOne = t("info.info_1.details") as string;
  const detailTwo = t("info.info_2.details") as string;
  const detailThree = t("info.info_3.details") as string;

  return (
    <section className="relative bg-[url('/assets/bigemip-image-3.jpg')] bg-cover w-full flex flex-col items-center md:min-h-[95%]">
      <div className="flex flex-col gap-48 md:items-center w-full h-full bg-black/70 py-48 md:py-72">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto w-full px-5 flex flex-col md:flex-row gap-16 justify-center"
        >
          <ContactInfo
            icon={Map}
            title={t("info.info_1.title")}
            details={[detailOne]}
          />

          <ContactInfo
            icon={Phone}
            title={t("info.info_2.title")}
            details={[
              "Renelle Tshibangu Tshela",
              "+243 812 071 429",
              detailTwo,
            ]}
          />

          <ContactInfo
            icon={BriefcaseBusiness}
            title={t("info.info_3.title")}
            details={["David Mutumbo", detailThree]}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default BGPMap;
