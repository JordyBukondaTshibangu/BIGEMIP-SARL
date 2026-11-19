import { useTranslations } from "next-intl";

const CLIENT_KEYS = ["item_1", "item_2", "item_3", "item_4"] as const;

export default function BGPPlus() {
  const t = useTranslations("AboutUs.plus");
  const ui = useTranslations("UI.about");

  return (
    <section className="py-24 md:py-32">
      <div className="page-shell grid gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <h2 className="type-title text-[2rem] md:text-[2.6rem]">
            {t("title")}
          </h2>
          <p className="type-lede prose-measure text-ink-muted">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-5 lg:col-start-8">
          <dl className="grid gap-5 border-l-2 border-ore pl-6">
            <div>
              <dt className="text-sm text-ink-muted">
                {ui("registration_label")}
              </dt>
              <dd className="font-semibold tabular-nums">
                RCCM CD/KNG/RCCM/23-B-02483
              </dd>
            </div>
            <div>
              <dt className="text-sm text-ink-muted">IDNAT</dt>
              <dd className="font-semibold tabular-nums">01-B0500-N40997H</dd>
            </div>
          </dl>

          <div>
            <h3 className="type-sub mb-4 text-lg">{ui("clients_title")}</h3>
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {CLIENT_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 shrink-0 rotate-45 bg-laterite"
                  />
                  {t(`list.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
