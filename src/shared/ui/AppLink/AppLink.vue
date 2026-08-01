<template>
  <RouterLink :to="path" class="app-link">
    <span class="app-link__label">{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  path: string;
}>();
</script>

<style scoped lang="scss">
.app-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: var(--color-header-hover-background);
    color: var(--color-text-inverse);
  }

  &__label {
    line-height: 1.25;
  }
}

</style>
