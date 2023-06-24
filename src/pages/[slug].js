import ReactMarkdown from "react-markdown";
import getPosts from "@/lib/posts";
import post from "@/styles/post.module.scss";
import Link from "next/link";
import Head from "next/head";
import Comments from "@/components/comments";

const Post = ({ date, markdown, title, slug }) => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="canonical" href={`https://blog.vinic.dev/${slug}`} />

        </Head>

        <article className={post.containter}>
            <time>{date}</time>
            <ReactMarkdown>{markdown}</ReactMarkdown>

            <hr />

            <p>
                Gostaria muito de saber sua opinião sobre esta publicação! Deixe um feedback em meu  <Link href="https://www.instagram.com/c4rdos0_/">Instagram</Link>, <Link href="https://www.linkedin.com/in/vinicdev/">LinkedIn</Link> ou no campo de comentário abaixo e compartilhe suas ideias ou sugestões. Espero que o conteúdo tenha sido útil para você e agregado valor ao seu conhecimento.
            </p>

            <p>
                Obrigado, até a próxima!
            </p>
        </article>

        <Comments />
    </>
);

export const getStaticPaths = async () => {
    const posts = await getPosts();

    return {
        paths: posts.map((post) => `/${post.slug}`),
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const posts = await getPosts();
    const post = posts.find((post) => post.slug === slug);

    return { props: post };
}

export default Post;