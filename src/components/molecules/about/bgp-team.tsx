import { Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

function BGPTeam() {
  const t = useTranslations("AboutUs");
  const ui = useTranslations("UI.about");

  const teamMembers = [
    {
      name: "Tony Chermani",
      role: t("team.list.member_1_role"),
      image: "/assets/team-members/team-member-1.png",
      linkedin: "https://www.linkedin.com/in/tony-chermani-dino-a8a1a5111/",
      email: "tonychermani@bigemip.com",
    },
    {
      name: "Renelle Tshibangu",
      role: t("team.list.member_2_role"),
      image: "/assets/team-members/team-member-2.png",
      linkedin:
        "https://www.linkedin.com/in/renelle-tshela-tshibangu-24439718b/",
      email: "renelletshibangu@bigemip.com",
    },
    {
      name: "Rhamia Chakopo",
      role: t("team.list.member_3_role"),
      image: "/assets/team-members/team-member-3.png",
      linkedin: "https://www.linkedin.com/in/rhamia-chakopo-2b3022122/",
      email: "rhamia.chakopo@bigemip.com",
    },
    {
      name: "Aline Makambo",
      role: t("team.list.member_7_role"),
      image: "/assets/team-members/team-member-7.jpg",
      linkedin: "https://www.linkedin.com/in/aline-maka-3121b1390/",
      email: "alinemaheli@bigemip.com",
    },
    {
      name: "Jordan Akwerali S.M",
      role: t("team.list.member_4_role"),
      image: "/assets/team-members/team-member-4.png",
      linkedin: "https://www.linkedin.com/in/jordan-akwerali/",
      email: "1oPZw@bigemip.com",
    },
    {
      name: "Emmanuel Asobe",
      role: t("team.list.member_5_role"),
      image: "/assets/team-members/team-member-5.png",
      linkedin: "https://www.linkedin.com/in/emmanuel-asobee-03725632/",
      email: "emmanuelasobe@bigemip.com",
    },
    {
      name: "David Djokaba",
      role: t("team.list.member_6_role"),
      image: "/assets/team-members/team-member-6.png",
      linkedin: "https://www.linkedin.com/in/david-djokaba-61374a333/",
      email: "daviddjokaba@bigemip.com",
    },
  ];

  return (
    <section className="border-t border-ink/10 bg-white py-24 md:py-32">
      <div className="page-shell flex flex-col gap-14">
        <h2 className="type-title text-[2rem] md:text-[2.6rem]">
          {t("team.title")}
        </h2>

        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {teamMembers.map((member, i) => (
            <li
              key={member.name}
              className={`flex flex-col gap-4 ${i === 0 ? "col-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden rounded-[3px] bg-survey-2 ${i === 0 ? "aspect-[4/3] md:aspect-[8/5]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 25vw, 50vw"
                  }
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <h3
                    className={`type-sub ${i === 0 ? "text-[1.4rem]" : "text-[1.05rem]"}`}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[0.95rem] text-ink-muted">{member.role}</p>
                </div>
                <div className="flex shrink-0 gap-1">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={ui("email_member", { name: member.name })}
                    className="rounded-[3px] p-2 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ui("linkedin_member", { name: member.name })}
                    className="rounded-[3px] p-2 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BGPTeam;
