import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' https://cdn.sprig.com;"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
