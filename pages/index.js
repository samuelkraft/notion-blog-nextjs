import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Navbar from "../components/Navbar.js"
import Feature from "../components/Feature.js"

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
        <header className={styles.header}>
          
        </header>

        <h2 className={styles.heading}>All Posts</h2>
        <ol className={styles.posts}>
          
          {posts.map((post) => {
          /*  if (post.properties.Status.select.name == 'Complete'){*/
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
        
            return (
              
              <li key={post.id} className={styles.post}>
                <h3 className={styles.postTitle}>
                  <Link href={`/${post.id}`}>
                    <a>
                      <Text text={post.properties.Title.title} />
                    </a>
                  </Link>
                </h3>

                <p className={styles.postDescription}>{date}</p>
                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>


                <h3>
                  <a>
                  <Text text = {post.properties.tags}></Text>
                  </a>
                </h3>
              </li>

              
            );
         
          })}
        
        </ol>
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