import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Google tag (gtag.js) */}
        <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-JZF158YLN1"></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
        >
          {`
          
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JZF158YLN1');
          `}
        </Script>
      </body>
    </Html>
  )
}
