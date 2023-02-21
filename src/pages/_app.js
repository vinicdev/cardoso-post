import '@/styles/globals.scss'
import header from '@/styles/navBar.module.scss';
import footer from '@/styles/Footer.module.scss';
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Image from 'next/image';


export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <Head>
        <title>cardosoPOST</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className={styles.main}>
        <header className={header.nav}>
          <Link href="/" passHref className={header.nav__logo}>
            <h1 className={header.nav__title}>cardoso<strong>post</strong></h1>
          </Link>

          <nav className={active ? header.nav__menuActive : header.nav__container}>
            <Link href="/">
              <p className={header.nav__link}>Home</p>
            </Link>
            <Link href="#posts">
              <p className={header.nav__link}>Posts</p>
            </Link>
            <Link href="/about">
              <p className={header.nav__link}>Sobre</p>
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
          <Image
            src="/logo.png"
            alt="Logo cardoso post"
            width={42}
            height={25}
          />
          <nav className={footer.footer__container}>
            <ul className={footer.footer__list}>
              <Link href="https://www.linkedin.com/in/vinicdev/" className={footer.footer__link}>
                <li className={footer.footer__item}>
                  <BsLinkedin className={footer.footer__icons} />
                </li>
              </Link>

              <Link href="https://github.com/vinicdev" className={footer.footer__link}>
                <li className={footer.footer__item}>
                  <BsGithub className={footer.footer__icons} />
                </li>
              </Link>
            </ul>
          </nav>
        </footer>
      </main>
    </>

  )
}
