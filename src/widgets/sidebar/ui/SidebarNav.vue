<template>
  <ul class="sidebar__nav-menu">
    <li
      v-for="navItem in props.navItems"
      :key="navItem.label"
      class="sidebar__menu-item">
      <button v-if="navItem.children" @click="toggleSubItems(navItem)">
        {{ navItem.label }}
      </button>
      <RouterLink v-else :to="navItem.path!">
        {{ navItem.label }}
      </RouterLink>
      <Transition name="submenu">
        <div
          v-if="navItem.children && openedItem === navItem.label"
          class="sidebar__submenu-container">
          <div class="sidebar__tree-view"></div>
          <ul class="sidebar__submenu">
            <li
              v-for="navSubItem in navItem.children"
              :key="navSubItem.label"
              class="sidebar__submenu-item">
              <RouterLink :to="navSubItem.path">
                {{ navSubItem.label }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </Transition>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SidebarNavItem} from "../model/types";
import { ref } from "vue";

const props = defineProps<{
  navItems: SidebarNavItem[];
}>();

const openedItem = ref<string | null>(null);

function toggleSubItems(item: SidebarNavItem): void {
  openedItem.value = openedItem.value === item.label ? null : item.label;
}
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

  &__submenu-container {
    margin-top: 0.5rem;
    display: flex;
  }

  &__tree-view {
    width: 1rem;
    border-left: 3px solid var(--color-text-primary);
    border-bottom: 3px solid var(--color-text-primary);
    border-bottom-left-radius: 1rem;
  }

  &__submenu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-left: 0.5rem;

    &-item {
      padding: 0.3rem 0.7rem;
      border-radius: 0.5rem;
      &:hover {
        background: var(--color-hover);
        cursor: pointer;
      }
    }
  }
}

.submenu {
  &-enter-from,
  &-leave-to {
    max-height: 0;
    overflow: hidden;
  }

  &-enter-to,
  &-leave-from {
    max-height: 12rem;
    overflow: hidden;
  }

  &-enter-active,
  &-leave-active {
    overflow: hidden;
    transition: max-height 0.35s ease;
  }
}
</style>
