<template>
  <div class="sidebar">
    <SidebarNav :navItems="sidebarNavItems" />
  </div>
</template>

<script setup lang="ts">
import { sidebarNavItems } from "../config/sidebarConfig";
import SidebarNav from "./SidebarNav.vue";
</script>

<style scoped lang="scss">
.sidebar {
  height: 100%;
  padding: 2rem 1.25rem;
}
</style>