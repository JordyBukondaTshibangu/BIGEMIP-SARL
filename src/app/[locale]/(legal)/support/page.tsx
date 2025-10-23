import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";
import { useTranslations } from "next-intl";

function Support() {
  const t = useTranslations("Support");

  return (
    <div className="w-full min-h-screen flex flex-col lg:pt-28">
      <HeaderTitle title={t("title")} subtitle={t("subtitle")} />

      <section className="w-full lg:mx-auto flex flex-col gap-20 px-5 py-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("content.content_1.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("content.content_1.description")}
          </p>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("content.content_1.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_1.list.item_2")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_1.list.item_3")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("content.content_2.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("content.content_2.description")}
          </p>
          <div className="flex flex-col gap-14">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                {t("content.content_2.list.item_1")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("content.content_2.list.item_2")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("content.content_2.list.item_3")}
              </li>
            </motion.ul>

            <div className="flex flex-col gap-4">
              <div className="w-fit border-b border-gray-400 pb-1">
                <h4 className="text-[#1e2236] text-xl font-bold">
                  {t("content.content_3.title")}
                </h4>
              </div>
              <p>{t("content.content_3.list.item_1")}</p>
              <p>{t("content.content_3.list.item_2")}</p>
              <p>{t("content.content_3.list.item_3")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("content.content_4.title")}
          </h3>
          <p className="text-[#131c49] text-base font-normal leading-8">
            {t("content.content_4.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("content.content_4.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_4.list.item_2")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_4.list.item_3")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_4.list.item_4")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_4.list.item_5")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("content.content_5.title")}
          </h3>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("content.content_5.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_5.list.item_2")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("content.content_5.list.item_3")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("content.content_6.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("content.content_6.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                {t("content.content_6.list.item_1")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("content.content_6.list.item_2")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("content.content_6.list.item_3")}
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Support;
