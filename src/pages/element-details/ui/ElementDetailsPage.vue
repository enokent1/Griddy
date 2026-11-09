<template>
  <ComponentView v-if="targetComponent" :component="targetComponent" />
  <div v-else class="component-not-found">
    <h1 class="component-not-found__title">Компонент не найден</h1>
    <RouterLink :to="{ name: 'catalog' }" class="component-not-found__link">
      Вернуться в каталог
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { computed } from "vue";
import { UIComponentList } from "@/entities/component";
import { ComponentView } from "@/widgets/component-view";

const route = useRoute();
const itemId = computed(() => route.params.id);

const targetComponent = computed(() =>
  UIComponentList.find((component) => component.id === itemId.value),
);
</script>

<style scoped lang="scss">
.component-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 100%;
  text-align: center;

  &__title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  &__link {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 0.2em;

    &:hover {
      color: var(--color-accent-hover);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
    }
  }
}
</style>
