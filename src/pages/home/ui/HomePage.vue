<template>
  <main
    class="home-page">
    <div
      class="home-page__card">
      <h1 class="home-page__title">
        Добро пожаловать в <span class="home-page__title-highlight">Griddy</span>
      </h1>
      <RouterLink
        to="/login"
        class="home-page__action-button">
        Авторизация
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
.home-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
  color: var(--color-text-primary);

  &__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: var(--color-card-background);
    border: 3px solid var(--color-card-border);
    border-radius: 1.5rem;
  }

  &__title {
    font-size: large;
    font-weight: 500;
    color: white;

    &-highlight {
      color: var(--color-brand);
      font-weight: 600;
    }
  }

  &__action-button {
    align-self: center;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 1.25rem;
    background-color: var(--color-action);
    color: var(--color-background);
    transition: 0.2s ease;

    &:hover {
      background-color: var(--color-brand);
    }
  }
}
</style>