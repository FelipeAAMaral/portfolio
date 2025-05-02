// tina/schema.ts
import { defineSchema } from "tinacms";

export default defineSchema({
  collections: [
    {
      label: "Posts",
      name: "post",
      path: "src/content/posts", 
      format: "md",
      ui: {
        router: ({ document }) => `/blog/${document._sys.filename}`,
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Título",
          isTitle: true,
          required: true,
        },
        {
          type: "datetime",
          name: "date",
          label: "Data",
          required: true,
        },
        {
          type: "string",
          name: "author",
          label: "Autor",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Conteúdo",
          isBody: true,
        },
      ],
    },
  ],
});
