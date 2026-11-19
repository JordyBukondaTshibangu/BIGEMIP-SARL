import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/json-ld";
import BGPContactForm from "@/components/molecules/contact/bgp-contact-form";
import BGPContactHeader from "@/components/molecules/contact/bgp-contact-header";
import BGPMap from "@/components/molecules/contact/bgp-map";

function Contact() {
  return (
    <>
      <BGPContactHeader />
      <section className="py-20 md:py-28">
        <div className="page-shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BGPContactForm />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <BGPMap />
          </div>
        </div>
      </section>
    </>
  );
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({ locale, page: "contact", path: "/contact" });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const meta = await getTranslations({ locale, namespace: "Metadata" });
  const label = await getTranslations({ locale, namespace: "UI.nav" });

  return (
    <>
      <Breadcrumbs
        locale={locale}
        homeLabel={meta("breadcrumb_home")}
        items={[{ name: label("contact"), path: "/contact" }]}
      />
      <Contact />
    </>
  );
}
