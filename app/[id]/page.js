import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import {
  getDatabase, getPage, getBlocks,
} from '../../lib/notion';
import Text from '../../components/text';
import { renderBlock } from '../../components/notion/renderer';
import styles from '../../styles/post.module.css';

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => ({ id: page.id }));
}

async function getPost(params) {
  const { id } = params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  return {
    page,
    blocks,
  };
}

export default async function Page({ params }) {
  const { page, blocks } = await getPost(params);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      {/* TODO: use generate metadata function */}
      <Head>
        <title>{page.properties.Title?.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text title={page.properties.Title?.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/" className={styles.back}>
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const database = await getDatabase(databaseId);
//   return {
//     paths: database.map((page) => {
//       return ({ params: { id: page.id } });
//     }),
//     fallback: true,
//   };
// };

// export const getStaticProps = async (context) => {
//   const { id } = context.params;
//   const page = await getPage(id);
//   const blocks = await getBlocks(id);

//   return {
//     props: {
//       page,
//       blocks,
//     },
//     revalidate: 1,
//   };
// };
