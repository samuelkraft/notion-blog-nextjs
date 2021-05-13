import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../lib/notion";
import Link from "next/link";
import { databaseId } from "./index.js";
import styles from "./post.module.css";

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  const name = page?.properties.Name.title[0]?.plain_text;
  return (
    <div>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <section>
          {blocks.map((block) => {
            const { type, id } = block;
            const value = block[type];

            if (type === "paragraph") {
              return (
                <p key={id}>
                  {value.text.map((p) => {
                    return p.text.link ? (
                      <a href={p.text.link.url}>{p.text.content}</a>
                    ) : (
                      p.text.content
                    );
                  })}
                </p>
              );
            }
            if (type === "heading_1") {
              return <h1 key={id}>{value.text.map((p) => p.plain_text)}</h1>;
            }
            if (type === "heading_2") {
              return <h2 key={id}>{value.text.map((p) => p.plain_text)}</h2>;
            }
            if (
              type === "numbered_list_item" ||
              type === "bulleted_list_item"
            ) {
              return (
                <Fragment key={id}>
                  {value.text.map((p) => (
                    <li>{p.plain_text}</li>
                  ))}
                </Fragment>
              );
            }
            return (
              <Fragment key={id}>{`❌ Unsupported type (${type})`}</Fragment>
            );
          })}
          <Link href="/">
            <a className={styles.back}>← Go home</a>
          </Link>
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 1,
  };
};
