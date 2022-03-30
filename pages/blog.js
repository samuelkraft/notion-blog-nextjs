import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"

import BlogPosts from "../components/BlogPosts.js"

export const databaseId = process.env.NOTION_DATABASE_ID;

function BlogPage({ blogPosts }) {
    
  return (
    <div>
      <Head>
        <title>Ayush's Blog</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>

      <Navbar/>
      
      <main className={styles.container}>
        <div class="w-4/5 mx-auto">
            <div class="divide-y divide-stone mt-32">
                
            <div>
            <h2 class="text-2xl font-bold text-left mb-6">Blog</h2>
            <h2 class="text-md text-left mb-3 mb-9">Welcome to the blog page! This is the place where I plan to put all my thoughts. Don't take it too seriously lol...it's a work in progress :)</h2>
            </div>

             
            <div>
                    <BlogPosts posts={blogPosts}/>
            </div>
              </div>  
            </div>
           
            </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  
  return {
    props: {
      blogPosts: database,
    },
    revalidate: 1,
  };
};

export default BlogPage