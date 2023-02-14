import '@/styles/globals.scss'
import header from '@/styles/navBar.module.scss';
import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { ImMenu } from 'react-icons/im';


export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <Head>
        <title>cardosoPOST</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

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

      <Component {...pageProps} />
    </>

  )
}
