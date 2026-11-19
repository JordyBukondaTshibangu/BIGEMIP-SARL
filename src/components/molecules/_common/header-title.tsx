import PageHeader from "./page-header";

type HeaderTitleProps = {
  title: string;
  subtitle: string;
};

/** Kept for the legal pages; renders the shared page header. */
function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return <PageHeader title={title} intro={<p>{subtitle}</p>} />;
}

export default HeaderTitle;
