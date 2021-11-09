import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { posts } from "../posts";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog App</title>
        <meta name="Blog, News, Dev, App" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>My Blog App</h1>
        <div className={styles.grid}>
          {posts.map((post, id) => (
            <a href="http" className={styles.card} key={id}>
              <h2>{post.title.slice(0,12)} &rarr;</h2>
              <p>{post.body}.</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
