
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.GIT_BRANCH || "main";

export default defineConfig({
  branch: "main",
  clientId: "21bc9557-e3ae-427a-bdac-a740447ab551", // Get this from tina.io
  token: "6b29b18fec8ac4cf20d60a32fee827fb29219306", // Get this from tina.io
  // clientId: process.env.TINA_CLIENT_ID!, // Get this from tina.io
  // token: process.env.TINA_TOKEN!, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});