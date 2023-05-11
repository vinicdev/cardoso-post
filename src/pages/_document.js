import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="icon" href="/favicon.icon" />
        <meta charset="UTF-8" />
        <meta name="description" content="Aprimore suas habilidades em programação com o Cardoso Post - tutoriais, dicas e artigos de qualidade para iniciantes e especialistas. Confira agora!" />
        <meta name="author" content="Vinicius Cardoso" />

        {/* Social media meta */}
        <meta property="og:description" content="Cardoso POST | O blog do programador" />
        <meta property="og:image" content="/blog_cardoso_post.png" />
        <link href="/blog_cardoso_post.png" rel="image_src" />
        <meta property="og:site_name" content="Cardoso POST" />
        <meta property="og:title" content="Cardoso POST | O blog do programador" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.vinic.dev/" />
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
