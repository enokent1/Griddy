import Preview from "./Preview.vue";
import html from "./html.ts";
import css from "./css.ts";
import type { CatalogComponent } from "@/entities/component/model/types.ts";

export default <CatalogComponent>{
  id: "input-2",
  title: "Active shadow input",
  category: "input",
  tags: ["input", "text", "minimalism"],
  preview: Preview,
  html: html,
  css: css,
};
