import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";
import { useTranslations } from "next-intl";

function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="w-full min-h-screen flex flex-col lg:pt-28">
      <HeaderTitle title={t("title")} subtitle={t("description_1")} />

      <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 -mt-12 pb-20 bg-[#1e2236]">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <p className="text-white text-base font-normal leading-8">
            {t("description_1")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-base font-normal leading-8 list-disc flex flex-col gap-5 px-10"
            >
              <li className="text-white leading-9">{t("list_1.option_1")}</li>
              <li className="text-white leading-9">{t("list_1.option_2")}</li>
              <li className="text-white leading-9">{t("list_1.option_3")}</li>
              <li className="text-white leading-9">{t("list_1.option_4")}</li>
              <li className="text-white leading-9">{t("list_1.option_5")}</li>
            </motion.ul>
          </div>
          <p className="text-white text-base font-normal leading-8">
            {t("description_2")}
          </p>
        </motion.div>
      </section>

      <section className="w-full lg:mx-auto flex flex-col gap-20 px-5 py-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-8 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-4xl font-bold">
            {t("main.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-4 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("main.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.list.item_2")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.list.item_3")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.list.item_4")}
            </li>
          </motion.ul>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.detail")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("main.content.content_1.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_1.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_1.list.item_1")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_1.list.item_2")}.
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_1.list.item_3")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_1.list.item_4")}
              </li>
            </motion.ul>
          </div>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_1.detail")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("main.content.content_2.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_2.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_2")}.
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_3")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_4")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_5")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_2.list.item_6")}
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
            {t("main.content.content_3.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_3.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_3.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_3.list.item_2")}.
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_3.list.item_3")}
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
            {t("main.content.content_4.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_4.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_2")}.
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_3")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_4")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_5")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_6")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_4.list.item_7")}
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
            {t("main.content.content_5.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_5.description")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("main.content.content_6.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_6.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
          >
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_1")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_2")}.
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_3")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_4")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_5")}
            </li>
            <li className="text-[#1e2236] leading-9">
              {t("main.content.content_6.list.item_6")}
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
            {t("main.content.content_7.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_7.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#1e2236] text-base font-normal leading-8 list-disc flex flex-col gap-2 px-10"
            >
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_7.list.item_1")}
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_7.list.item_2")}.
              </li>
              <li className="text-[#1e2236] leading-9">
                {t("main.content.content_7.list.item_3")}
              </li>
            </motion.ul>
          </div>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_7.detail")}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:max-w-7xl lg:mx-auto w-full flex flex-col gap-6 lg:w-3/4"
        >
          <h3 className="text-[#1e2236] text-3xl font-bold">
            {t("main.content.content_8.title")}
          </h3>
          <p className="text-[#1e2236] text-base font-normal leading-8">
            {t("main.content.content_8.description")}
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
