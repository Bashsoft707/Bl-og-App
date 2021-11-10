import { InferGetStaticPropsType } from 'next'
import Post from '../components/Post'
import styles from "../styles/Home.module.css";

export default function Home ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.grid}>
      {posts.map((post, id) => (
        <Post key={id} post={post} />
      ))}
    </div>
  )
}

type Post = {
  author: string
  content: string
  key: number
  post: {}
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      posts,
    },
  }
} 