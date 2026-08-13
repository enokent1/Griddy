<template>
  <div class="filter">
    <h2 class="filter__title">
        {{ currentFilterItem }}
    </h2>
    <div class="filter__list">
      <FilterItemButton
        v-for="item in filterItems"
        :key="item.id"
        :button-title="item.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilterItemButton from "./FilterItemButton.vue";
import { filterItems } from "../config/filterConfig.ts";
import { ref } from "vue";

const currentFilterItem = ref<string>('All')
</script>

<style scoped lang="scss">
.filter {
    &__title {
        color: var(--color-text-primary);
        font-size: 1.75rem;
        font-weight: 600;
    }

    &__list {
        display: flex;
        gap: 0.8rem;
    }
}
</style>
