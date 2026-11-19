import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import * as motion from "motion/react-client";

import HeaderTitle from "@/components/molecules/_common/header-title";
import { useTranslations } from "next-intl";

function AboutUs() {
  const t = useTranslations("TermsAndCondition");

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeaderTitle title={t("title")} subtitle={t("subtitle")} />
      <motion.section className="w-full lg:mx-auto flex flex-col gap-16 px-5 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_1.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_1.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
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
          </div>
        </div>
        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_2.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_2.description")}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_3.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_3.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
              <li className="text-ink leading-8">
                {t("content.content_3.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_3.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_3.list.item_3")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_3.list.item_4")}
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_4.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_4.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
              <li className="text-ink leading-8">
                {t("content.content_4.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_4.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_4.list.item_3")}
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_5.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_5.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
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
          </div>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_6.title")}
          </h3>

          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
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
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_7.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_7.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
              <li className="text-ink leading-8">
                {t("content.content_7.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_7.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_7.list.item_3")}
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_8.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_8.description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
              <li className="text-ink leading-8">
                {t("content.content_8.list.item_1")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_8.list.item_2")}
              </li>
              <li className="text-ink leading-8">
                {t("content.content_8.list.item_3")}
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_9.title")}
          </h3>

          <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
            <li className="text-ink leading-8">
              {t("content.content_9.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_9.list.item_2")}
            </li>
          </motion.ul>
        </div>
        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_10.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_10.description")}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_11.title")}
          </h3>

          <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
            <li className="text-ink leading-8">
              {t("content.content_11.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_11.list.item_2")}
            </li>
          </motion.ul>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_12.title")}
          </h3>

          <motion.ul className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-2 pl-6">
            <li className="text-ink leading-8">
              {t("content.content_12.list.item_1")}
            </li>
            <li className="text-ink leading-8">
              {t("content.content_12.list.item_2")}
            </li>
          </motion.ul>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_13.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_13.description")}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[52rem] flex flex-col gap-6">
          <h3 className="type-title text-[1.5rem] md:text-[1.75rem]">
            {t("content.content_14.title")}
          </h3>
          <p className="text-ink text-base font-normal leading-8">
            {t("content.content_14.description")}
          </p>
        </div>
      </motion.section>
    </div>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "terms", path: "/terms-and-conditions" });
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
        items={[{ name: label("terms.title"), path: "/terms-and-conditions" }]}
      />
      <AboutUs />
    </>
  );
}
