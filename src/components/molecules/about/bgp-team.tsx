import { Linkedin, Mail, Twitter } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

const teamMembers = [
  {
    name: "M. Tony Chermany",
    role: "Founder & CEO",
    image: "/assets/team-members/team-member-1.jpg",
  },
  {
    name: "Renelle Tshibangu",
    role: "Coordinatrice",
    image: "/assets/team-members/team-member-4.jpg",
  },
  {
    name: "Mr Emmanuel Asobe",
    role: "Geologue Senior",
    image: "/assets/team-members/team-member-3.jpg",
  },
  {
    name: "David Djokaba",
    role: "Project Geologist",
    image: "/assets/team-members/team-member-2.jpg",
  },
];

function BGPTeam() {
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
          Notre Equipe
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-10"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 items-center"
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
              <div className="flex flex-col items-center gap-3">
                <h4 className="text-xl font-semibold text-[#1e2236]">
                  {member.name}
                </h4>
                <span className="text-lg font-medium text-[#1e2236]">
                  {member.role}
                </span>
                <div className="flex justify-center gap-4">
                  <a href="">
                    <Mail color="#f99c00" size={18} />
                  </a>
                  <a href="">
                    <Twitter color="#f99c00" size={18} />
                  </a>
                  <a href="">
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
