<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <Header />
    </header>
    <div class="app-layout__body">
      <aside class="app-layout__sidebar">
        <Sidebar />
      </aside>
      <main class="app-layout__main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

onMounted(() => {
  const theme = localStorage.getItem("theme") ?? "dark";
  document.documentElement.dataset.theme = theme;
});
</script>

<style scoped lang="scss">
.app-layout {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--color-background);

  &__header {
    grid-row: 1 / 2;
    border-bottom: 1px solid var(--color-border-subtle);
    background: var(--color-header-background);
  }

  &__body {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-row-start: 2;
    overflow: hidden;
  }

  &__sidebar {
    background: var(--color-sidebar-background);
    border-right: 1px solid var(--color-border-subtle);
    overflow-y: auto;
  }

  &__main {
    padding: 2rem;
    overflow-y: auto;
  }
}
</style>
