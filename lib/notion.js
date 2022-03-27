import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Status",
      select: {
         equals: "Complete",
      },
    },
  });

  return response.results;
};


export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId  });
  
  return response;
};


//EVERYTHING COMMENTED IS FOR PAGINATION OF BLOCKS - just experimenting a little but not needed :)
export const getBlocks = async (blockId) => {
  const blocks = [];
//let cursor;

//  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
//      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);  //3 dots is a spread operator - in this case passes each item in results array as individual elements into blocks array

//    if (!next_cursor) {
//    break;
//    }
//    cursor = next_cursor;
//  }
  return blocks;
};

//export const getTags = async ()