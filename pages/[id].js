import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../lib/notion";
import Link from "next/link";
import { databaseId } from "./index.js";
import styles from "./post.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
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
      >
        {text.link ? <a href={`/${text.link.url}`}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  
  const value = block[type];

  switch (type) {
    case "text":
      return (
        <br></br>
      );
    case "paragraph":
      return (
        <p>
          <Text text={value.text} /><br/>
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} /><br/>
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} /><br/>
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
      
        <li key={value.text}><Text text={value.text} /></li>
        
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label><br/>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}<br/>
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blockes }) {

  //POST HEADER INFORMATION
  const date = new Date(page.properties['Last Edited'].last_edited_time).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  const title = page.properties.Title.title;
  const postId = page.id;
  
 
  let imgSrc = "";
  let hasImage = false;
  if ( page.properties.Cover.files.length != 0){
      imgSrc = page.properties.Cover.files[0].file.url;
      hasImage = true;
      console.log("image") 
  } else{
      console.log('noimage')
  };
  
  const type = page.properties.Type.select.name;
  const description = page.properties.Description.rich_text[0].plain_text;
  const tags = page.properties.Tags.multi_select;

  //----------------------------------------------------------
  
  if (!page || !blockes) {
    return <div />;
  }
  return (
    <div>
       
        <Head>
        <title>{page.properties.Title.title[0].plain_text}</title>
        <link rel="icon" href="/favicon-modified.png" />
      </Head>

    <Navbar/>
      <article className={styles.container}>
      <div className="w-4/5 mx-auto mt-32">
      <p class="text-indigo-500 text-md font-medium">{type}</p>
        <h1 className="font-bold">
          <Text text={page.properties.Title.title} />
        </h1>
        <p class="text-gray-700  font-light text-lg pb-3">{description}</p>
        {(hasImage) ?  (<img alt="blog photo" src={imgSrc} class="max-h-40 w-full object-cover mb-4" />) : console.log('no image')}
                        <div class="bg-white w-full ">
                            
                          
                            
                            <div class="flex flex-wrap justify-starts items-center ">

                                    {tags.map((tag) => {
                                        return (
                                        <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                            #{tag.name}
                                        </div>
                                        )}
                                    )}
                                
                                </div>
                                </div>

        <section className="mt-4">
          {blockes.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}
            
            
            </Fragment>
                      ))}
                      
          <hr></hr>
          <p class="text-gray-700 text-sm mt-3">{date}</p>
        </section>
        </div>
      </article>
      <br></br>
      <br></br>
      <br></br>
    <Footer/>
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
  //Returns blocks AND their children
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
      blockes: blocksWithChildren,
    },
    revalidate: 1,
  };
};