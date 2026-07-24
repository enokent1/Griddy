<template>
  <router-link :to="`elements/${props.id}`" class="element-card">
    <div class="element-card__tag-list">
      <span v-for="tag in cardTags" :key="tag" class="element-card__tag-item">
        {{ tag }}
      </span>
    </div>
    <div class="element-card__preview">
      <div @click.stop.prevent><slot></slot></div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  cardTags: string[];
  id: string;
}>();
</script>

<style lang="scss" scoped>
.element-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 280px;
  max-width: 350px;
  min-height: 250px;
  max-height: 420px;
  background-color: var(--color-surface-soft);
  border-radius: 1rem;
  padding: 1rem;

  &__tag-list {
    display: flex;
    gap: 0.5rem;
  }

  &__tag-item {
    font-size: small;
    color: var(--color-text-secondary);
    padding: 0.3rem 0.7rem;
    border-radius: 0.5rem;
    background-color: var(--color-surface);
  }

  &__preview {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
