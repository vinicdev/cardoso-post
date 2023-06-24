import useScript from "@/lib/use-script";
import React, { useRef } from "react";
import styles from '@/components/comments/styles.module.scss';


const Comments = () => {
    const comment = useRef(null);

    const status = useScript({
        url: "https://utteranc.es/client.js",
        theme: "github-dark",
        issueTerm: "url",
        repo: "vinicdev/blog-comments",
        ref: comment
    });

    return (
        <div ref={comment} className={styles.title}>
            Compartilhe sua opinião sobre esta publicação 💬
        </div>
    );
};

export default Comments;