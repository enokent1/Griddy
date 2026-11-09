<template>
  <div class="not-found-page">
    <div class="error-container">
      <h1 class="title">404</h1>
      <span class="description">Page not found</span>
      <RouterLink to="/" class="home-link">Back to home</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style lang="scss" scoped>
@use "NotFoundPage";
</style>
