import * as motion from "motion/react-client";

type HeaderTitleProps = {
  title: string;
  subtitle: string;
};
function HeaderTitle({ title, subtitle }: HeaderTitleProps) {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full flex flex-col gap-10"
      >
        <h1 className="text-5xl font-medium text-amber-500 is-style-underlined-heading">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row gap-14">
          <div className="flex flex-col gap-4">
            <p className="text-white text-base font-normal leading-8">
              {subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeaderTitle;
