<template>
  <div class="header">
    <div class="header__brand">
      <div class="header__logo">G</div>
      <div>
        <p class="header__title">GRIDDY</p>
      </div>
    </div>

    <RouterLink to="/profile" class="header__profile-link">
      <Avatar :name="user.name" />
      <div class="header__profile-info">
        <p class="header__profile-name">{{ user.name }}</p>
        <p class="header__profile-role">{{ user.role }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { Avatar } from "@/shared/ui/Avatar";

const user = {
  name: "Андрей Зотин",
  role: "Frontend-разработчик",
};
</script>

<style scoped lang="scss">
$header-padding-vertical: 1rem;
$header-padding-horizontal: 1.5rem;
$header-gap: 0.75rem;
$header-logo-size: 2.5rem;
$header-radius: 1rem;
$header-gradient-start: oklch(78.9% 0.154 211.53);
$header-gradient-end: oklch(50.5% 0.24 235);
$header-text: oklch(96.8% 0.007 247.896);
$header-muted-text: oklch(71% 0.017 251);
$header-border: oklch(20.8% 0.042 265.755 / 0.7);
$header-bg-hover: oklch(28% 0.055 262 / 0.8);
$profile-bg: oklch(20.8% 0.042 265.755 / 0.7);
$profile-border-hover: oklch(78.9% 0.154 211.53 / 0.5);
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
    color: oklch(100% 0 0 / 1);
    background: linear-gradient(
      135deg,
      $header-gradient-start 0%,
      $header-gradient-end 100%
    );
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: $header-text;
  }

  &__profile {
    &-link {
      display: flex;
      align-items: center;
      gap: $header-gap;
      border-radius: $header-radius;
      border: 1px solid $header-border;
      background-color: $profile-bg;
      padding: 0.5rem 0.75rem;
      transition:
        background-color $transition-duration ease,
        border-color $transition-duration ease;
      text-decoration: none;

      &:hover {
        border-color: $profile-border-hover;
        background-color: $header-bg-hover;
      }
    }

    &-info {
      text-align: left;
    }

    &-name {
      font-size: 0.875rem;
      font-weight: 500;
      color: $header-text;
      margin: 0;
    }

    &-role {
      font-size: 0.75rem;
      color: $header-muted-text;
      margin: 0;
    }
  }
}
</style>
