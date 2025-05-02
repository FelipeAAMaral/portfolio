// tina/config.ts
import { defineConfig } from "tinacms";
import mySchema from "./schema";
import * as dotenv from "dotenv";

// Carrega variáveis de .env, .env.local, etc.
dotenv.config();

export default defineConfig({
  branch: process.env.GIT_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "21bc9557-e3ae-427a-bdac-a740447ab551",
  token: process.env.TINA_TOKEN || "6b29b18fec8ac4cf20d60a32fee827fb29219306",
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
