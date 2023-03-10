const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 }
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" }
      ]
    }
  ]
}

export default page;