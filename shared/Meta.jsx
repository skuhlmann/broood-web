import Head from "next/head";

export const Meta = () => {
  return (
    <Head>
      <title>BROOD</title>
      <meta
        name="description"
        content="Pooling our web3 powers to conspire against Moloch in exclusive taverns around the world."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="BROOD.BEER" />
      <meta property="og:url" content="https://brood.beer/" />
      <meta
        property="og:description"
        content="Pooling our web3 powers to conspire against Moloch in exclusive taverns around the world."
      />
      <meta property="og:image" content="https://brood.beer/preview.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@RaidBrood" />
      <meta name="twitter:title" content="BROOD.BEER" />
      <meta
        name="twitter:description"
        content="Pooling our web3 powers to conspire against Moloch in exclusive taverns around the world."
      />
      <meta name="twitter:image" content="https://brood.beer/twitter-og.png" />
    </Head>
  );
};
