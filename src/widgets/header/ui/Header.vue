<template>
  <div class="header">
    <RouterLink to="/" class="header__brand">
      <Logo />
    </RouterLink>

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
import { Logo } from "@/shared/ui/Logo";
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

  &__profile {
    &-link {
      display: flex;
      align-items: center;
      gap: $header-gap;
      border-radius: $header-radius;
      border: 1px solid var(--color-profile-border-hover);
      background-color: var(--color-profile-background);
      padding: 0.5rem 0.75rem;
      transition:
        background-color $transition-duration ease,
        border-color $transition-duration ease;
      text-decoration: none;

      &:hover {
        border-color: var(--color-profile-border-hover);
        background-color: var(--color-header-hover-background);
      }
    }

    &-info {
      text-align: left;
    }

    &-name {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--color-header-text);
      margin: 0;
    }

    &-role {
      font-size: 0.75rem;
      color: var(--color-header-muted-text);
      margin: 0;
    }
  }
}
</style>
