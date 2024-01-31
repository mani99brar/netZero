import { Html, Head, Main, NextScript } from "next/document";
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
        <title>Net Zero Carbon Homes Pilot Project, Mohali, INDIA</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
