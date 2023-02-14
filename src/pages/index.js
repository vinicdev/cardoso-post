import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import getPosts from '@/lib/posts'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Blog = ({ posts }) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              {title} 
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
