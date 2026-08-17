<template>
  <button
    class="filter__item"
    :class="{ 'filter__item--active': props.isActive }"
    @click="emit('select', props.buttonTitle)">
    {{ props.buttonTitle }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  buttonTitle: string;
  isActive?: boolean;
}>();

const emit = defineEmits<{
  (e: "select", value: string): void;
}>();
</script>

<style scoped lang="scss">
.filter__item {
  padding: 0.3rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  font-size: small;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: var(--color-surface-hover);
    border: 1px solid var(--color-border-hover);
  }

  &--active {
    background-color: var(--color-surface-hover);
    border-color: var(--color-border-hover);
    color: var(--color-text-primary);
  }
}
</style>
