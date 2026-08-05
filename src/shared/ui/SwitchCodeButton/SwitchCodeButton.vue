<template>
  <button
    class="component-view__code-switcher"
    :class="{ active: props.isActive }">
    {{ props.type.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "html" | "css";
  isActive: boolean;
}>();
</script>

<style scoped>
.component-view__code-switcher {
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  transition: 0.25s ease;

  &:hover {
    background-color: var(--color-surface-hover);
  }
}

.active {
  background-color: var(--color-surface-elevated);
}
</style>
