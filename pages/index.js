import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"
import Feature from "../components/Feature.js"
import BlogPosts from "../components/BlogPosts.js"
import Footer from "../components/Footer.js";
//import { useState } from "react";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {

  //const [posts, setPosts] = useState(posts);
  return (
    <div class="flex flex-col min-h-screen ">
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>
      <div class="flex-grow">

      <Navbar/>
      <Feature/>
      <main className={styles.container}>
      <div class="w-4/5 mx-auto">
      <div class="divide-y divide-stone">

<h2 class="text-2xl font-bold text-center mb-3 mt-9 md:mt-0">Blog Posts</h2>

<div>
      <BlogPosts posts={posts}/>
    </div>
    </div>
             </div> 
      </main>
      </div>
      <Footer/>

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