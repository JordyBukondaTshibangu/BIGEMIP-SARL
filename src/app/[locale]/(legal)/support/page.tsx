import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";
import { useTranslations } from "next-intl";

function Support() {
  const t = useTranslations("Support");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeaderTitle title={t("title")} subtitle={t("subtitle")} />

      <section className="w-full lg:mx-auto flex flex-col gap-16 px-5 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_1.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_1.description")}
          </p>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6"
          >
            <li className="text-ink leading-8">
              {t("content.content_1.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_1.list.item_2")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_1.list.item_3")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_2.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_2.description")}
          </p>
          <div className="flex flex-col gap-14">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6"
            >
              <li className="text-ink leading-8">
                {t("content.content_2.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_2.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_2.list.item_3")}
              </li>
            </motion.ul>

            <div className="flex flex-col gap-4">
              <div className="w-fit border-b border-gray-400 pb-1">
                <h4 className="type-sub text-xl">
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
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_4.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_4.description")}
          </p>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6"
          >
            <li className="text-ink leading-8">
              {t("content.content_4.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_4.list.item_2")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_4.list.item_3")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_4.list.item_4")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_4.list.item_5")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_5.title")}
          </h3>
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6"
          >
            <li className="text-ink leading-8">
              {t("content.content_5.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_5.list.item_2")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_5.list.item_3")}
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_6.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_6.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6"
            >
              <li className="text-ink leading-8">
                {t("content.content_6.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_6.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_6.list.item_3")}
              </li>
            </motion.ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "support", path: "/support" });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const label = await getTranslations({ locale, namespace: "Metadata" });

  return (
    <>
      <Breadcrumbs
        locale={locale}
        homeLabel={meta("breadcrumb_home")}
        items={[{ name: label("support.title"), path: "/support" }]}
      />
      <Support />
    </>
  );
}
