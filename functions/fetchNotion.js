const { Client } = require("@notionhq/client");

const { NOTION_KEY, DATABASE_ID } = process.env;

const notion = new Client({
  auth: NOTION_KEY,
});

exports.handler = async function () {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: { property: "isShown", checkbox: { equals: true } },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
