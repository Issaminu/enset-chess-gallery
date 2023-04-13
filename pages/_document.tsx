import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from The ENSET Chess Championship 2023 event."
          />
          <meta property="og:site_name" content="ensetchess.live" />
          <meta
            property="og:description"
            content="See pictures from The ENSET Chess Championship 2023 event."
          />
          <meta
            property="og:title"
            content="The ENSET Chess Championship 2023 Pictures"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="The ENSET Chess Championship 2023 Pictures"
          />
          <meta
            name="twitter:description"
            content="See pictures from The ENSET Chess Championship 2023 event."
          />
        </Head>
        <body className="antialiased bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
