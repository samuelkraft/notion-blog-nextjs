import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks, Block } from "../lib/notion";
import Link from "next/link";
import { databaseId } from "./index";
import styles from "./post.module.css";
import { getFileUrl, ValidatedPost } from "../lib/validation";
// TODO type defs

type Text = Extract<Block, { type: "paragraph" }>["paragraph"]["text"];
export const Text: React.FC<{ text: Text, parentId: string }> = ({ text, parentId }) => {
  if (!text) {
    return null;
  }
  return <>
  {
    text.map((value, i) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
      } = value;
      return (
        <span
          className={[
            bold ? styles.bold : "",
            code ? styles.code : "",
            italic ? styles.italic : "",
            strikethrough ? styles.strikethrough : "",
            underline ? styles.underline : "",
          ].join(" ")}
          style={color !== "default" ? { color } : {}}
          key={parentId + i}
        >
          <TextContent text={value}/>
        </span>
      );
    })
  }
  </>;
};

const TextContent: React.FC<{ text: Text[number] }> = ({ text }) => {
  switch(text.type) {
    case "text":
      return text.text.link ? <a href={text.text.link.url}>{text.text.content}</a> : <>{text.text.content}</>;
    default:
      console.warn(`❌ Unsupported text type: ${text.type}`);
      return null;
  }
}

const Block: React.FC<Block | BlockWithChildren> = (block) => {
  const { type, id } = block;

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={block[type].text} parentId={block.id} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={block[type].text} parentId={block.id} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={block[type].text} parentId={block.id} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={block[type].text} parentId={block.id} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={block[type].text} parentId={block.id} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={block[type].checked} />{" "}
            <Text text={block[type].text} parentId={block.id} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={block[type].text} parentId={block.id} />
          </summary>
          {"children" in block[type] && (block as BlockWithChildren)[type].children?.map((block) => <Block {...block}/>)}
        </details>
      );
    case "child_page":
      return <p>{block[type].title}</p>;
    case "image":
      const src = getFileUrl(block[type]);
      const caption = block[type].caption ? block[type].caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{block[type].text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {block[type].text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file = getFileUrl(block[type]);
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = block[type].caption ? block[type].caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    default:
      console.warn(`❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`);
      return null;
  }
};

interface PostProps {
  page: ValidatedPost;
  blocks: Block[];
}

export default function Post({ page, blocks }: PostProps) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text text={page.properties.Name.title} parentId={page.id}/>
        </h1>
        <section>
          {blocks.map((block) => <Block {...block} key={block.id}/>)}
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

// currently we use only block children for toggle, extend interface if needed
type BlockWithChildren = Block & { toggle: { children: Block[] } };

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map<BlockWithChildren>((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block as BlockWithChildren;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
