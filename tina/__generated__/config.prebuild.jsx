// tina/config.ts
import { defineConfig } from "tinacms";
import * as dotenv from "dotenv";
dotenv.config();
var config_default = defineConfig({
  branch: process.env.GIT_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "21bc9557-e3ae-427a-bdac-a740447ab551",
  token: process.env.TINA_TOKEN || "6b29b18fec8ac4cf20d60a32fee827fb29219306",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
      static: true
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image"
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
