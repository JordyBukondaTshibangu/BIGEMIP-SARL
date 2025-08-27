import Image from "next/image";

function BGPDescription() {
  return (
    <section className="max-w-7xl w-full mx-auto flex flex-col gap-12 px-5 py-20">
      <h1 className="text-3xl font-bold text-amber-500">
        Bienvenue sur BIGEMIP
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1 bg-red-300 min-h-full w-full">
          <Image
            src="/assets/bigemip-image-4.jpg"
            alt="BIGEMIP Image"
            className="w-full h-full"
            width={700}
            height={700}
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="text-amber-500 font-bold">A Propos de Nous</h6>
            <h2 className="text-3xl font-bold">Un appercu de BIGEMIP SARL</h2>
          </div>
          <p className="text-base leading-8">
            Le Bureau d&apos;Investigations Géologique, Minière et Pétrolière
            SARL,
            <span>BIGEMIP SARL</span> vous accompagne dans l&apos;exploration
            minière optimale et ciblée, aidée par les technologies les plus
            avancées.
          </p>
          <ol className="list-decimal flex flex-col gap-2 px-5 italic">
            <li className="text-base leading-7">
              Nous évaluons ensemble vos permis de recherche : de la première
              cartographie géologique en passant par les études géophysiques,
              géochimiques et la télédétection, jusqu&apos;à l&apos;estimation
              financière de votre projet minier
            </li>
            <li className="text-base leading-7">
              Nous vous accompagnons dans toutes les étapes de vos projets de
              recherche géologique, minière.
            </li>
            <li className="text-base leading-7">
              Nous proposons les études listées ci-après, de manière spécifique
              ou globale selon vos besoins.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default BGPDescription;
