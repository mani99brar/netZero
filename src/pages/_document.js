import { Html, Head, Main, NextScript } from "next/document";
import keywords from "@/layouts/metadata";
import Image from "next/image";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="netzerologo.png"
        />
        <meta key="og:type" property="og:type" content={"website"} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta
          name="description"
          content="Explore the Net Zero Carbon Homes Pilot Project in Mohali, INDIA. Learn about sustainable and eco-friendly building practices."
        />

        <title>Net Zero Carbon Homes Pilot Project, Mohali, INDIA</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
