import { useLocale, useTranslations } from "next-intl";

const EVENT_KEYS = ["event_1", "event_2", "event_3", "event_4"] as const;

/* An agenda, not a card grid: dates are the primary information. */
function BGPEvents() {
  const t = useTranslations("HomePage.events");
  const ui = useTranslations("UI.events");
  const locale = useLocale();
  const now = Date.now();

  const day = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    timeZone: "UTC",
  });
  const month = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <section className="bg-survey-2 py-24 md:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-12">
        <h2 className="type-title text-[2rem] md:text-[2.6rem] lg:col-span-4">
          {t("title")}
        </h2>

        <ol className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-8">
          {EVENT_KEYS.map((key) => {
            const date = new Date(t(`${key}.date`));
            const past = date.getTime() < now;
            return (
              <li
                key={key}
                className="grid grid-cols-[4.5rem_1fr] gap-x-6 gap-y-2 py-7 sm:grid-cols-[6rem_1fr_auto]"
              >
                <time
                  dateTime={t(`${key}.date`)}
                  className="row-span-2 flex flex-col leading-none"
                >
                  <span className="type-display text-[2.4rem] tabular-nums">
                    {day.format(date)}
                  </span>
                  <span className="mt-2 text-sm text-ink-muted">
                    {month.format(date)}
                  </span>
                </time>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-bronze">
                    {t(`${key}.subtitle`)}
                  </span>
                  <h3 className="type-sub text-[1.2rem]">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="max-w-[60ch] text-ink-muted">
                    {t(`${key}.description`)}
                  </p>
                </div>
                <span
                  className={`col-start-2 self-start justify-self-start rounded-full px-3 py-1 text-xs font-semibold sm:col-start-3 sm:row-start-1 ${
                    past ? "bg-ink/8 text-ink-muted" : "bg-laterite text-white"
                  }`}
                >
                  {past ? ui("past") : ui("upcoming")}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default BGPEvents;
