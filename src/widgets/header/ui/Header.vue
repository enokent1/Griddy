<template>
  <div class="header">
    <div class="header__brand">
      <div class="header__logo">G</div>
      <div>
        <p class="header__title">GRIDDY</p>
      </div>
    </div>

    <RouterLink to="/login" class="header__login-button">Войти</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped lang="scss">
$header-padding-vertical: 1rem;
$header-padding-horizontal: 1.5rem;
$header-gap: 0.75rem;
$header-logo-size: 2.5rem;
$header-radius: 1rem;
$transition-duration: 0.2s;

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: $header-padding-vertical $header-padding-horizontal;

  &__brand {
    display: flex;
    align-items: center;
    gap: $header-gap;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $header-logo-size;
    height: $header-logo-size;
    border-radius: $header-radius;
    font-weight: 600;
    font-size: 1.125rem;
    color: var(--color-text-inverse);
    background: linear-gradient(
      135deg,
      var(--color-header-gradient-start) 0%,
      var(--color-header-gradient-end) 100%
    );
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--color-header-text);
  }

  &__login-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: $header-radius;
    padding: 0.5rem 1.25rem;
    background-color: var(--color-action);
    color: var(--color-action-foreground);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color $transition-duration ease;

    &:hover {
      background-color: var(--color-accent-hover);
    }

    &:focus-visible {
      outline: 2px solid var(--color-accent);
      outline-offset: 4px;
    }
  }
}
</style>
