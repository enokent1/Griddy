import Preview from "./Preview.vue";
import html from "./html.ts";
import css from "./css.ts";
import type { CatalogComponent } from "@/entities/component/model/types.ts";

export default <CatalogComponent>{
  id: "button-1",
  title: "Swipe button",
  category: "button",
  tags: ["button", "swipe", "animation"],
  preview: Preview,
  html: html,
  css: css,
};
