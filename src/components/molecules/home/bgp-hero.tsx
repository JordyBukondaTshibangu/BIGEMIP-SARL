import Button from "@/components/atoms/button";

function BGPHero() {
  return (
    <section className="bg-[url('/assets/bigemip-hero-image.jpg')] bg-cover w-full flex flex-col items-center h-[60%]">
      <div className="flex flex-col gap-48 md:items-center  w-full h-full bg-black/70 pt-64 lg:pt-72 pb-48">
        <div className="flex flex-col md:items-center gap-14 w-full lg:w-1/2 px-5">
          <h1 className="text-[52px] font-medium text-white md:text-center leading-[1.2]">
            <span className="text-amber-500 font-bold block lg:inline">
              BIGEMIP SARL
            </span>
            <span className="block font-bold">
              Le Bureau d&apos;Investigations Géologique, Minière et Pétrolière
              SARL
            </span>
          </h1>
          <p className="text-lg text-white md:text-center w-3/5">
            vous accompagne dans l&apos;exploration minière optimale et ciblée,
            aidée par les technologies les plus avancées.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Button buttonText="Consultez-nous" />
            <Button buttonText="Decouvrez nos Projets" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BGPHero;
