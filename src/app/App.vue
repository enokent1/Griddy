<template>
  <div
    v-if="!isauthOrRootRoute"
    class="grid h-screen grid-cols-1 grid-rows-[auto_1fr] bg-slate-950">
    <header
      class="row-start-1 border-b border-cyan-400/20 bg-slate-900/90 shadow-lg shadow-cyan-500/10">
      <Header />
    </header>
    <div class="grid grid-cols-[280px_1fr] row-start-2 overflow-hidden">
      <aside
        class="overflow-y-auto border-r border-cyan-400/20 bg-slate-900/80">
        <Sidebar />
      </aside>
      <main class="overflow-y-auto bg-slate-950/60 p-6">
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
