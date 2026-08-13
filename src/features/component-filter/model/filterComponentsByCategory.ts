import type {
  ComponentCategory,
  CatalogComponent,
} from "@/entities/component/model/types";

export function filterComponentsByCategory(
  components: CatalogComponent[],
  category: ComponentCategory | "all",
): CatalogComponent[] {
  if (category === "all") {
    return components;
  } else {
    return components.filter((component) => component.category === category);
  }
}
