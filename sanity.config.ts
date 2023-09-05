import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
const config = defineConfig({
  projectId: "eponkvgi",
  dataset: "production",
  title: "My Web",
  apiVersion: "2023-06-08",
  basePath: "/admin",
  plugins: [deskTool(), vercelDeployTool()],
  schema: { types: schemas },
});

export default config;
