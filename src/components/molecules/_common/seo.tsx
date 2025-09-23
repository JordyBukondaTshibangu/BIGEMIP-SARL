import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Title */}
      <title>
        BIGEMIP | Le Bureau d'Investigations Géologique, Miniere et Pétrolière
      </title>

      {/* Meta Description */}
      <meta
        name="description"
        content="BIGEMIP est un bureau qui offre ses services d'ingénieur conseil à ses clients parmi lesquels les investisseurs, les opérateurs miniers et pétroliers, et les
                exploitants miniers pour leur apporter les solutions les plus
                adaptées dans les secteurs de la géologie, de mines et du
                Pétrole."
      />

      {/* Keywords */}
      <meta
        name="keywords"
        content="Bigemip, Congo, petrole, mines, projets, innovation, Geologie, solutions"
      />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph (Facebook & LinkedIn) */}
      <meta
        property="og:title"
        content="BIGEMIP | Bureau d'Investigations Géologique, Miniere et Pétrolière"
      />
      <meta
        property="og:description"
        content="Découvrez BIGEMIP, qui également les investisseurs en leur
                assistant techniquement selon leur besoin dans les secteurs
                ci-haut mentionnés."
      />
      <meta property="og:url" content="https://bigemip-sarl.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://bigemip-sarl.com/assets/bigemip-logo.jpeg"
      />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="BIGEMIP | Bureau d'Investigations Géologique, Miniere et Pétrolière au Congo"
      />
      <meta
        name="twitter:description"
        content=" Notre Bureau accompagne également les investisseurs en leur
                assistant techniquement selon leur besoin dans les secteurs
                ci-haut mentionnés."
      />
      <meta
        name="twitter:image"
        content="https://bigemip-sarl.com/assets/bigemip-logo.jpeg"
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
