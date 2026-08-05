<template>
  <button class="btn">
    <component class="btn__icon" :is="props.icon" />
    <span>
      {{ props.text }}
    </span>
  </button>
</template>

<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  text: string;
}>();
</script>

<style scoped lang="scss">
.btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-surface-hover);
  padding: 1rem;
  border: 2px solid var(--color-surface-hover);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    border: 2px solid var(--color-border-hover);
  }

  &__icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
