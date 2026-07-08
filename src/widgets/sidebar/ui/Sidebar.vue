<template>
  <div class="h-full px-4 py-5">
    <ul class="space-y-2">
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
