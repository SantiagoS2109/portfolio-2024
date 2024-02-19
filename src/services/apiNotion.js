export async function getProjects() {
  const results = await fetch("/api/fetchNotion")
    .then((res) => res.json())
    .then((data) => data.results);

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
