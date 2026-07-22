import type { SidebarNavItem } from "../model/types";

export const sidebarNavItems: SidebarNavItem[] = [
  {
    label: "Elements",
    children: [
      {label: "All", path: "/elements"},
      { label: "Inputs", path: "/elements/inputs" },
      { label: "Buttons", path: "/elements/buttons" },
      { label: "Switches", path: "/elements/switches" },
      { label: "Loaders", path: "/elements/loaders" },
      { label: "Forms", path: "/elements/forms" },
    ],
  },
  {
    label: "Projects",
    path: "/projects"
  }
];
