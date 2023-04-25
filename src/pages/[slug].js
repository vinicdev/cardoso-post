import ReactMarkdown from "react-markdown";
import getPosts from "@/lib/posts";
import post from "@/styles/post.module.scss";
import Link from "next/link";
import Head from "next/head";

const Post = ({ date, markdown, title, descriptionSeo}) => (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        <article className={post.containter}>
            <time>{date}</time>
            <ReactMarkdown>{markdown}</ReactMarkdown>

            <hr />

            <p>
                Gostaria muito de saber sua opinião sobre esta publicação! Deixe um feedback em meu <Link href="https://www.instagram.com/c4rdos0_/">Instagram</Link>  ou <Link href="https://www.linkedin.com/in/vinicdev/">LinkedIn</Link> e compartilhe suas ideias ou sugestões. Espero que o conteúdo tenha sido útil para você e agregado valor ao seu conhecimento.
            </p>

            <p>
                Obrigado, até a próxima!
            </p>
        </article>
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