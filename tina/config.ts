// tina/config.ts
import { defineConfig } from "tinacms";
import mySchema from "./schema";
import * as dotenv from "dotenv";

// Carrega variáveis de .env, .env.local, etc.
dotenv.config();

export default defineConfig({
  branch: process.env.GIT_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
      static: true,
    },
  },
  schema: mySchema,
});
