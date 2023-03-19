import '@/styles/globals.scss'
import header from '@/styles/navBar.module.scss';
import footer from '@/styles/Footer.module.scss';
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import Image from 'next/image';


export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <Head>
        <title>cardosoPOST</title>
        <link rel="icon" href="/favicon.icon" />

        {/* Social media meta */}
        <meta property="og:description" content="Cardoso POST | O blog do programador" />
        <meta property="og:image" content="/blog_cardoso_post.png"/>
        <link href="/blog_cardoso_post.png" rel="image_src" />
        <meta property="og:site_name" content="Cardoso POST" />
        <meta property="og:title" content="Cardoso POST | O blog do programador" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog.vinic.dev/"/>
      </Head>

      <main className={styles.main}>
        <header className={header.nav}>
          <Link href="/" passHref className={header.nav__logo}>
            <h1 className={header.nav__title}>cardoso<strong>post</strong></h1>
          </Link>

          <nav className={active ? header.nav__menuActive : header.nav__container}>
            <Link href="/">
              <p
                className={header.nav__link}
                onClick={() => setActive(false)}
              >
                Home
              </p>
            </Link>

            <Link href="/about">
              <p
                className={header.nav__link}
                onClick={() => setActive(false)}
              >
                Sobre
              </p>
            </Link>
          </nav>

          <ImMenu
            className='menu'
            onClick={() => setActive(!active)}
          />
        </header>

        <div className={styles.spaceProps}>
          <Component {...pageProps} />
        </div>

        <footer className={footer.footer}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo cardoso post"
              width={42}
              height={25}
            />
          </Link>

          <div className={footer.footer__author}>
            Powered by
            <Link href="https://github.com/vinicdev">
              Vinicius Cardoso
            </Link>
          </div>
        </footer>
      </main>
    </>

  )
}
