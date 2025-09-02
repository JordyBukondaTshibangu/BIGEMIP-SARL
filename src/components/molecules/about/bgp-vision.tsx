import * as motion from "motion/react-client";

export default function BGPVision() {
  return (
    <section className="w-full mx-auto flex flex-col gap-8 px-5 py-20 bg-[#1e2236]">
      <div className="max-w-7xl mx-auto w-full flex flex-col = gap-14">
        <div className="flex flex-col gap-6 md:w-3/4">
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-medium text-amber-500 leading-18 is-style-underlined-heading"
          >
            Pourquoi Choisir BIGEMIP
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10"
        >
          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">1</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum totam ut inventore quia? Harum dolor laborum ad minus
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">2</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">3</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum or laborum ad minus
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">4</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">5</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque m
              dolor laborum ad minus omnis!
            </span>
          </div>

          <div className="flex gap-6">
            <span className="text-6xl font-semibold text-white">6</span>
            <span className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              earum totam ut inventore quia? Harum dolor laborum ad minuso
              omnis!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
