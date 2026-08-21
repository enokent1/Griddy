<template>
  <ul class="sidebar__nav-menu">
    <li
      v-for="navItem in props.navItems"
      :key="navItem.label"
    >
      <RouterLink :to="navItem.path!">
        <component :is="navItem.icon" class="sidebar__menu-icon" />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SidebarNavItem } from "../model/types";

const props = defineProps<{
  navItems: SidebarNavItem[];
}>();
</script>

<style lang="scss" scoped>
.sidebar {
  &__nav-menu {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: medium;
  }

  &__menu-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
