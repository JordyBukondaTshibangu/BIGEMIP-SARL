import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import HeaderTitle from "@/components/molecules/_common/header-title";
function Faq() {
  const t = useTranslations("Faq");

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#1e2236] pb-48">
      <HeaderTitle title={t("title")} subtitle={t("subtitle")} />

      <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 -mt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <p className="text-white text-base font-normal leading-8">
            {t("description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-base font-normal leading-8 list-disc flex flex-col gap-5 px-10"
            >
              <li className="text-white leading-9">{t("list.option_1")}</li>
              <li className="text-white leading-9">{t("list.option_2")}</li>
              <li className="text-white leading-9">{t("list.option_3")}</li>
              <li className="text-white leading-9">{t("list.option_4")}</li>
              <li className="text-white leading-9">{t("list.option_5")}</li>
            </motion.ul>
          </div>
          <p className="text-white text-base font-normal leading-8">
            {t("detail")}
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default Faq;
