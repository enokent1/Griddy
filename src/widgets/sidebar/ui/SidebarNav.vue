<template>
  <ul class="sidebar__nav-menu">
    <li v-for="navItem in props.navItems" :key="navItem.label">
      <RouterLink
        :to="navItem.path!"
        class="sidebar__nav-link"
        :class="{
          'sidebar__nav-link-active':
            router.currentRoute.value.path === navItem.path,
        }"
      >
        <component :is="navItem.icon" class="sidebar__menu-icon" />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { SidebarNavItem } from "../model/types";

const props = defineProps<{
  navItems: SidebarNavItem[];
}>();

const router = useRouter();
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

  &__nav-link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid transparent;
    border-right: none;
    border-radius: 0.5rem 0 0 0.5rem;

    &-active {
      background-color: var(--color-background);
      border: 1px solid var(--color-border-subtle);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -2px;
        width: 2px;
        height: 100%;
        background-color: var(--color-background);
      }
    }
  }
}
</style>
