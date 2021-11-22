import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;
const externalDatabaseId = process.env.NOTION_EXTERNAL_POSTS_DATABASE_ID;
const RECOMMENDED_TAG_NAME = "POST";

export default function Home({ posts, externalPosts }) {
  return (
    <div>
      <Head>
        <title>THE YOSHIXJ SITE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logos}></div>
          <h1>THE YOSHIXJ SITE</h1>
          <p>
            このサイトは @yoshixj の個人サイトです。 @yoshixj
            は北関東出身、東京で働いているソフトウェアエンジニーアです。 経歴は
            <a
              href="https://github.com/yoshixj/resume/blob/master/README.md"
              target="_blank"
            >
              こちら
            </a>
            をご確認ください。
          </p>
        </header>

        <section className={styles.section}>
          <details>
            <summary style={{ height: "20px" }}>
              <span className={styles.summary}> External POSTS </span>
            </summary>
            <ol className={styles.posts}>
              {externalPosts.map((post) => {
                const date = new Date(post.created_time).toLocaleString(
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
                      <a href={post.properties.URL.url} target="_blank">
                        <Text text={post.properties.Name?.title} />
                      </a>
                    </h3>

                    <p className={styles.postDescription}>{date}</p>

                    <a href={post.properties.URL.url} target="_blank">
                      {
                        post.properties.URL.url?.match(
                          /^https?:\/{2,}(.*?)(?:\/|\?|#|$)/
                        )[1]
                      }
                      →
                    </a>
                  </li>
                );
              })}
            </ol>
          </details>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>All Posts</h2>
          <ol className={styles.posts}>
            {posts.map((post) => {
              const date = new Date(
                post.properties.Date.date?.start
              ).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });
              return (
                <li key={post.id} className={styles.post}>
                  <h3 className={styles.postTitle}>
                    <Link
                      href={`/${post.properties.Slug.rich_text[0]?.plain_text}`}
                    >
                      <a>
                        <Text text={post.properties.Name?.title} />
                      </a>
                    </Link>
                  </h3>

                  <p className={styles.postDescription}>{date}</p>
                  <Link
                    href={`/${post.properties.Slug.rich_text[0]?.plain_text}`}
                  >
                    <a> Read post →</a>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  const externalDatabase = await getDatabase(externalDatabaseId);
  console.log(externalDatabase);
  console.log(externalDatabase.map((el) => el.properties.Name.title));

  const publishedPosts = database
    .filter((el) => el.properties.Published.checkbox)
    .sort(
      (a, b) =>
        new Date(b.properties.Date.date?.start) -
        new Date(a.properties.Date.date?.start)
    );
  const recommendedPosts = publishedPosts.filter((el) =>
    el.properties.Tags.multi_select
      .map((tag) => tag.name)
      .includes(RECOMMENDED_TAG_NAME)
  );

  return {
    props: {
      externalPosts: externalDatabase,
      posts: publishedPosts,
      recommendedPosts,
    },
    revalidate: 1,
  };
};
