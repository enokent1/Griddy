<template>
  <div
    v-if="!isauthOrRootRoute"
    class="app-layout">
    <header
      class="app-layout__header">
      <Header />
    </header>
    <div class="app-layout__body">
      <aside
        class="app-layout__sidebar">
        <Sidebar />
      </aside>
      <main class="app-layout__main">
        <RouterView />
      </main>
    </div>
  </div>
  <RouterView v-else />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { useRoute } from "vue-router";

const route = useRoute();

const isauthOrRootRoute = computed<boolean>(
  () => route.path === "/" || route.path === "/login",
);
</script>

<style scope lang="scss">
$background-color: oklch(12.9% 0.042 264.695);
$border-color: oklch(78.9% 0.154 211.53 / 0.2);
$header-background-color: oklch(20.8% 0.042 265.755 / 0.9);
$sidebar-background-color: oklch(20.8% 0.042 265.755 / 0.8);

.app-layout {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: $background-color;

  &__header {
    grid-row: 1 / 2;
    border-bottom: 1px solid $border-color;
    background: $header-background-color;
  }

  &__body {
    display: grid;
    grid-template-columns: minmax(10%, 20%) 1fr;
    grid-row-start: 2;
    overflow: hidden;
  }

  &__sidebar {
    background: $sidebar-background-color;
    border-right: 1px solid $border-color;
    overflow-y: auto;
  }

  &__main {
    padding: 2rem;
    overflow-y: auto;
  }
}
</style>