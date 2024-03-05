import "@/styles/globals.scss";
import footer from "@/styles/Footer.module.scss";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BLOG // cardosoPOST</title>
      </Head>

      <main className={styles.main}>
        <Header />

        <div className={styles.spaceProps}>
          <Component {...pageProps} />
        </div>

        <footer className={footer.footer}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo do blog sobre programação cardoso post"
              title="O Blog do programador"
              width={42}
              height={25}
            />
          </Link>

          <div className={footer.footer__author}>
            Powered by
            <Link href="https://github.com/vinicdev">Vinicius Cardoso</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
