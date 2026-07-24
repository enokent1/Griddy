<template>
  <div class="component-view">
    <div class="component-view__preview-block">
      <component :is="props.component.preview" />
    </div>
    <div class="component-view__code-block">
      <CodeView :code-string="props.component.html" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CatalogComponent } from "@/entities/component/model/types";
import { CodeView } from "@/features/code-view";

const props = defineProps<{
  component: CatalogComponent;
}>();
</script>

<style lang="scss" scoped>
.component-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #24292e;

  &__preview-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
