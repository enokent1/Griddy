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
$background-color: oklch(12.9% 0.042 264.695);
$text-color: oklch(96.8% 0.007 247.896);
$card-background-color: oklch(20.8% 0.042 265.755 / 0.8);
$card-border-color: oklch(27.9% 0.041 260.031);
$title-accent-color: oklch(78.9% 0.154 211.53);
$button-background: oklch(71.5% 0.143 215.221);

.home-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $background-color;
  color: $text-color;

  &__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background: $card-background-color;
    border: 3px solid $card-border-color;
    border-radius: 1.5rem;
  }

  &__title {
    font-size: large;
    font-weight: 500;
    color: white;

    &-highlight {
      color: $title-accent-color;
      font-weight: 600;
    }
  }

  &__action-button {
    align-self: center;
    margin-top: 1rem;
    padding: 1rem 2rem;
    border-radius: 1.25rem;
    background-color: $button-background;
    color: $background-color;
    transition: 0.2s ease;

    &:hover {
      background-color: $title-accent-color;
    }
  }
}
</style>