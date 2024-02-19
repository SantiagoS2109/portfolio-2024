import { Client } from "@notionhq/client";

const DATABASE_ID = "50c320b1330e4fd7b0ce55ac2ef41b83";

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN,
});

export async function getProjects() {
  const query = { database_id: DATABASE_ID };

  const { results } = await notion.databases.query(query);

  return results.map((page) => {
    const { properties } = page;

    const { slug, title, img, description, demo, code, technologies, isShown } =
      properties;

    return {
      id: slug.rich_text[0].plain_text,
      title: title.title[0].plain_text,
      img: img.files[0].file.url,
      description: description.rich_text[0].plain_text,
      demo: demo.url,
      code: code.url,
      isShown: isShown.checkbox,
      technologies: technologies.relation,
    };
  });
}

// export async function getProjectTechnologies(technologiesIds) {
//   let technologiesProperties = [];

//   for (let i = 0; i < technologiesIds.length; i++) {
//     const query = { page_id: technologiesIds[i].id };
//     const response = await notion.pages.retrieve(query);

//     const { title, color, svg } = response.properties;

//     technologiesProperties.push({
//       title: title.title[0].plain_text,
//       color: color.select.name,
//       svg: svg.files[0].file.url,
//     });
//   }

//   return technologiesProperties;
// }
