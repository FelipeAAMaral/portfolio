
// import { defineConfig } from "tinacms";
// import * as dotenv from "dotenv";

// dotenv.config();

// // Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.GIT_BRANCH || "main";

// export default defineConfig({
//   branch,
//   clientId: process.env.TINA_CLIENT_ID!, // Get this from tina.io
//   token: process.env.TINA_TOKEN!, // Get this from tina.io
//   build: {
//     outputFolder: "admin",
//     publicFolder: "public",
//   },
//   media: {
//     tina: {
//       mediaRoot: "uploads",
//       publicFolder: "public",
//     },
//   },
//   schema: {
//     collections: [
//       {
//         name: "blog",
//         label: "Blog Posts",
//         path: "src/content/blog",
//         fields: [
//           {
//             type: "string",
//             name: "title",
//             label: "Title",
//             isTitle: true,
//             required: true,
//           },
//           {
//             type: "string",
//             name: "date",
//             label: "Date",
//             required: true,
//           },
//           {
//             type: "string",
//             name: "excerpt",
//             label: "Excerpt",
//             required: true,
//           },
//           {
//             type: "image",
//             name: "image",
//             label: "Featured Image",
//           },
//           {
//             type: "string",
//             name: "author",
//             label: "Author",
//             required: true,
//           },
//           {
//             type: "rich-text",
//             name: "body",
//             label: "Body",
//             isBody: true,
//           },
//         ],
//       },
//     ],
//   },
// });

import { defineConfig } from "tinacms";
import * as dotenv from "dotenv";

// Carrega variáveis do .env (funciona com `.env`, `.env.local`, etc.)
dotenv.config();

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  branch: process.env.GIT_BRANCH || "main",
  build: {
    outputFolder: "admin",      // pasta gerada com o build do admin
    publicFolder: "public",     // onde ficam imagens e assets públicos
  },
  media: {
    tina: {
      mediaRoot: "",            // usa a raiz da pasta `public/`
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Posts",
        name: "post",
        path: "content/posts",    // conteúdo salvo em arquivos .md
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
            name: "excerpt",
            label: "Resumo",
          },
          {
            type: "image",
            name: "image",
            label: "Imagem",
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
  },
});
