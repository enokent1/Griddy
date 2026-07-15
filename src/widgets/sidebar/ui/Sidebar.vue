<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li v-for="sidebarItem in sidebarItems" :key="sidebarItem.label">
        <AppLink
          :label="sidebarItem.label"
          :icon="sidebarItem.icon"
          :path="sidebarItem.path" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { sidebarItems } from "../config/sidebarConfig";
import { AppLink } from "@/shared/ui/AppLink";
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  padding: 2rem 1.25rem;

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>