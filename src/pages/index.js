import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import getPosts from '@/lib/posts'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Blog = ({ posts }) => {
  return (
    <>
      <h1 className={styles.container__title}>Seja bem-vindo ao blog do programador!</h1>
      <p className={styles.container__subtitle}>Não perca tempo, leia nossos posts:</p>
      <ul className={styles.container__list}>
        {posts.map(({ slug, title, prev }) => (
          <li key={slug} className={styles.container__item}>
            <h2 className={styles.container__titlepost}>
              {title}
            </h2>
            <p className={styles.container__prevText}>
              {prev}
            </p>
            <Link href={`/${slug}`} className={styles.container__link}>
              Ler mais
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    }
  }
}

export default Blog;
