import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../lib/notion";
import Link from "next/link";
import { databaseId } from "../index.js";
import styles from "./post.module.css";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p key={id}>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 key={id}>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={id}>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={id}>
          <Text text={value.text} />
        </h3>
      );
    case "list":
      return (<ul role="list" key={id}>
        {block.items.map((i) => <li key={i.id}>
          <Text text={i[i.type].text} />
        </li>)}
      </ul>)
    case "to_do":
      return (
        <div key={id}>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details key={id}>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p key={id}>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure key={id}>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    case "code":
      return <code key={id}>{value.text[0].plain_text}</code>
    default:
      return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
        })`;
  }
};

class Lexer {

  constructor(iterator) {
    this.iterator = iterator
    this.value = iterator.next().value
  }

  next() {
    this.value = this.iterator.next().value
  }


  lex() {
    let parsed = []
    let token = this.getToken()
    while (token) {
      parsed.push(token);
      token = this.getToken()
    }
    return parsed;
  }

  getToken() {
    const t = this.value
    switch (t?.type) {
      case undefined:
        return null;
      case "bulleted_list_item":
      case "numbered_list_item":
        const ul = {
          type: "list",
          id: t.id.substring(0, 6) + "parent",
          items: [t]
        }
        this.next();
        while (this.value?.type === "bulleted_list_item" || this.value?.type === "numbered_list_item") {
          ul.items.push(this.value)
          this.next();
        }
        return ul;
      default:
        this.next();
        return t;
    }
  }

}


export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }

  let eArr = blocks[Symbol.iterator]();
  const lexer = new Lexer(eArr)
  const parsedBlock = lexer.lex();
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        <h1 className={styles.name}>
          <Text text={page.properties.Name.title} />
        </h1>
        <section>
          {parsedBlock.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
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
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
