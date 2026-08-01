<template>
  <button class="component-view__code-switcher">
    {{ props.type.toUpperCase() }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "html" | "css";
}>();
</script>

<style scoped>
.component-view__code-switcher {
  padding: 1rem;
  border: 1px solid var(--color-surface);
}
</style>
