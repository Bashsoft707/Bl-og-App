import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router'

const Post = ({ post }) => {
  const router = useRouter()
  const { pid } = router.query
  return (
    <div className={styles.card}>
      <h2>
        {post.title.slice(0, 12)} &rarr; {post.id}
      </h2>
      <p>{post.body.slice(0, 45)}....</p>
      <Link as={`/blog/${post.id}`} href="/blog/[id]">
        <a className="btn">Read More: {pid}</a>
      </Link>
    </div>
  );
}

export default Post;
