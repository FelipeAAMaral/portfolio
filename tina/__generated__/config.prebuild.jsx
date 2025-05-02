// tina/config.ts
import { defineConfig } from "tinacms";
import * as dotenv from "dotenv";
dotenv.config();
var config_default = defineConfig({
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: process.env.GIT_BRANCH || "main",
  build: {
    outputFolder: "admin",
    // pasta gerada com o build do admin
    publicFolder: "public"
    // onde ficam imagens e assets públicos
  },
  media: {
    tina: {
      mediaRoot: "",
      // usa a raiz da pasta `public/`
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "post",
        path: "content/posts",
        // conteúdo salvo em arquivos .md
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
            name: "excerpt",
            label: "Resumo"
          },
          {
            type: "image",
            name: "image",
            label: "Imagem"
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
  }
});
export {
  config_default as default
};
