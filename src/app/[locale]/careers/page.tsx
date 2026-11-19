import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
function Careers() {
  return <div>Careers</div>;
}

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return pageMetadata({
    locale,
    page: "careers",
    path: "/careers",
    noindex: true,
  });
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <Careers />;
}
