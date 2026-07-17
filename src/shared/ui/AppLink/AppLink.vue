<template>
  <RouterLink :to="path" class="app-link">
    <span class="app-link__icon">{{ icon }}</span>
    <span class="app-link__label">{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
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
}

.app-link__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.75rem;
  background-color: var(--color-surface-muted);
  color: var(--color-brand-bright);
  font-size: 0.75rem;
  font-weight: 700;
}

.app-link__label {
  line-height: 1.25;
}
</style>
