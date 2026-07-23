import type { Component } from "vue";

export type ComponentCategory =
  | "input"
  | "button"
  | "switcher"
  | "loader"
  | "form"
  | "checkbox";

export interface CatalogComponent {
  id: string;
  title: string;
  category: ComponentCategory;
  tags: string[];
  preview: Component;
  html: string;
  css: string;
  code?: string;
}
