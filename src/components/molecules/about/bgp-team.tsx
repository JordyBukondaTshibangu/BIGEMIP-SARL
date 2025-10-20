"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import Image from "next/image";

function BGPTeam() {
  const t = useTranslations("AboutUs");

  const teamMembers = [
    {
      name: "M. Tony Chermani",
      role: t("team.list.member_1_role"),
      image: "/assets/team-members/team-member-1.png",
      linkedin: "https://www.linkedin.com/in/tony-chermani-dino-a8a1a5111/",
      email: "mailto:tonychermani@bigemip.com",
    },
    {
      name: "Renelle Tshibangu",
      role: t("team.list.member_2_role"),
      image: "/assets/team-members/team-member-2.png",
      linkedin:
        "https://www.linkedin.com/in/renelle-tshela-tshibangu-24439718b/",
      email: "mailto:renelletshibangu@bigemip.com",
    },
    {
      name: "Rhamia Chakopo",
      role: t("team.list.member_3_role"),
      image: "/assets/team-members/team-member-3.png",
      linkedin: "https://www.linkedin.com/in/rhamia-chakopo-2b3022122/",
      email: "mailto:rhamia.chakopo@bigemip.com",
    },
    {
      name: "Jordan Akwerali S.M",
      role: t("team.list.member_4_role"),
      image: "/assets/team-members/team-member-4.png",
      linkedin: "https://www.linkedin.com/in/jordan-akwerali/",
      email: "mailto:1oPZw@bigemip.com",
    },
    {
      name: "Emmanuel Asobe",
      role: t("team.list.member_5_role"),
      image: "/assets/team-members/team-member-5.png",
      linkedin: "https://www.linkedin.com/in/emmanuel-asobee-03725632/",
      email: "mailto:emmanuelasobe@bigemip.com",
    },
    {
      name: "David Djokaba",
      role: t("team.list.member_6_role"),
      image: "/assets/team-members/team-member-6.png",
      linkedin: "https://www.linkedin.com/in/david-djokaba-61374a333/",
      email: "mailto:daviddjokaba@bigemip.com",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-20">
        <motion.h1
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-medium text-[#1e2236] is-style-underlined-heading-blue"
        >
          {t("team.title")}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 items-center justify-center"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <Image
                  src={member.image}
                  width={180}
                  height={180}
                  alt={member.name}
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-3 justify-center text-center">
                <h4 className="text-xl font-semibold text-[#1e2236]">
                  {member.name}
                </h4>
                <span className="text-lg font-medium text-[#1e2236]">
                  {member.role}
                </span>
                <div className="flex justify-center gap-4">
                  <a href={member.email} target="_blank">
                    <Mail color="#f99c00" size={18} />
                  </a>
                  <a href="">
                    <Twitter color="#f99c00" size={18} />
                  </a>
                  <a href={member.linkedin} target="_blank">
                    <Linkedin color="#f99c00" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default BGPTeam;
