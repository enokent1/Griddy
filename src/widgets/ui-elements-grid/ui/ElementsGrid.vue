<template>
  <p v-if="props.componentList.length === 0" class="elements-grid-empty" role="status">
    В этой категории пока нет компонентов
  </p>
  <div v-else class="elements-grid">
    <ElementCard
      v-for="component in props.componentList"
      :key="component.id"
      :cardTags="component.tags"
      :id="component.id">
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

<style scoped>
.elements-grid-empty {
  margin-top: 1rem;
  color: var(--color-text-secondary);
}

.elements-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 1rem;
}
</style>
