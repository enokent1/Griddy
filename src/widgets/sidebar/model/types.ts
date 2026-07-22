export type SidebarSubmenu = {
  label: string,
  path: string
}

export type SidebarNavItem = {
  label: string;
  path?: string;
  children?: SidebarSubmenu[]
};
