<template>
  <main
    class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
    <div
      class="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl shadow-black/30">
      <h1 class="text-3xl font-semibold tracking-tight text-white">
        Добро пожаловать в <span class="text-cyan-400">Griddy</span>
      </h1>
      <RouterLink
        to="/login"
        class="mt-6 inline-flex rounded-2xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
        Авторизация
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
