// tina/config.ts
import { defineConfig } from "tinacms";

// tina/schema.ts
import { defineSchema } from "tinacms";
var schema_default = defineSchema({
  collections: [
    {
      label: "Posts",
      name: "post",
      path: "content/posts",
      format: "md",
      ui: {
        router: ({ document }) => `/blog/${document._sys.filename}`
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "T\xEDtulo",
          isTitle: true,
          required: true
        },
        {
          type: "datetime",
          name: "date",
          label: "Data",
          required: true
        },
        {
          type: "string",
          name: "author",
          label: "Autor"
        },
        {
          type: "rich-text",
          name: "body",
          label: "Conte\xFAdo",
          isBody: true
        }
      ]
    }
  ]
});

// tina/config.ts
import * as dotenv from "dotenv";
dotenv.config();
var config_default = defineConfig({
  branch: process.env.GIT_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
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
  schema: schema_default
});
export {
  config_default as default
};
