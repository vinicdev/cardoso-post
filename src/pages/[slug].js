import ReactMarkdown from "react-markdown";
import getPosts  from "@/lib/posts";
import post from "@/styles/post.module.scss";

const Post = ({ date, markdown }) => (
    <article className={post.containter}>
        <time>{date}</time>
        <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
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

    return { props: post};
}

export default Post;