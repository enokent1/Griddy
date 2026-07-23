<template>
  <div class="elements-grid">
    <ElementCard
      v-for="component in props.componentList"
      :key="component.id"
      :cardTags="component.tags"
    >
      <component :is="component.preview" />
    </ElementCard>
  </div>
</template>

<script setup lang="ts">
import { ElementCard } from "@/shared/ui/ElementCard";
import type { CatalogComponent } from "@/entities/component/model/types";

const props = defineProps<{
  componentList: CatalogComponent[];
}>();
</script>

<style scoped></style>
