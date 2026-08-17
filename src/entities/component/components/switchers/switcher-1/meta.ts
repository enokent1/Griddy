import Preview from "./Preview.vue";
import html from "./html.ts";
import css from "./css.ts";
import type { CatalogComponent } from "@/entities/component/model/types.ts";

export default <CatalogComponent>{
  id: "switcher-1",
  title: "IOS Switcher",
  category: "switcher",
  tags: ["switcher", "IOS"],
  preview: Preview,
  html: html,
  css: css,
};
