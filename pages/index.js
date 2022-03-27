import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"
import Feature from "../components/Feature.js"
import BlogPosts from "../components/BlogPosts.js"

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>

      <Navbar/>
      <Feature/>
      <main className={styles.container}>

      <BlogPosts posts={posts}/>
    
              
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};