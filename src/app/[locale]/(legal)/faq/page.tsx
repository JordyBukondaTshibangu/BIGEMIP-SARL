import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

import HeaderTitle from "@/components/molecules/_common/header-title";
function Faq() {
  const t = useTranslations("Faq");

  return (
    <div className="w-full min-h-screen flex flex-col pb-24">
      <HeaderTitle title={t("title")} subtitle={t("subtitle")} />

      <section className="w-full lg:mx-auto flex flex-col gap-8 px-5 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-[52rem] flex flex-col gap-6"
        >
          <p className="text-ink text-base font-normal leading-8">
            {t("description")}
          </p>
          <div className="flex flex-col gap-5">
            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-ink text-base font-normal leading-8 list-disc marker:text-bronze flex flex-col gap-3 pl-6"
            >
              <li className="text-ink leading-8">{t("list.option_1")}</li>
              <li className="text-ink leading-8">{t("list.option_2")}</li>
              <li className="text-ink leading-8">{t("list.option_3")}</li>
              <li className="text-ink leading-8">{t("list.option_4")}</li>
              <li className="text-ink leading-8">{t("list.option_5")}</li>
            </motion.ul>
          </div>
          <p className="text-ink text-base font-normal leading-8">
            {t("detail")}
          </p>
        </motion.div>
      </section>
    </div>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "faq", path: "/faq" });
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
        items={[{ name: label("faq.title"), path: "/faq" }]}
      />
      <Faq />
    </>
  );
}
