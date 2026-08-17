<template>
  <ComponentFilter @change="handleFilterChange" />
  <UIElementsGrid :componentList="filteredComponentList" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { UIElementsGrid } from "@/widgets/ui-elements-grid";
import { UIComponentList } from "@/entities/component";
import { ComponentFilter, filterComponentsByCategory } from "@/features/component-filter";
import type { ComponentCategory } from "@/entities/component/model/types";

const selectedCategory = ref<ComponentCategory | "all">("all");

const filteredComponentList = computed(() =>
  filterComponentsByCategory(UIComponentList, selectedCategory.value),
);

const handleFilterChange = (category: ComponentCategory | "all") => {
  selectedCategory.value = category;
};
</script>
