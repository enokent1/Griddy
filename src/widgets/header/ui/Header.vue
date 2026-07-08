<template>
  <div class="flex items-center justify-between px-6 py-4">
    <div class="flex items-center gap-3">
      <div
        class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 font-semibold text-lg text-white">
        G
      </div>
      <div>
        <p class="text-lg font-semibold tracking-[0.2em] text-slate-100">
          GRIDDY
        </p>
      </div>
    </div>

    <RouterLink
      to="/profile"
      class="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-800/70 px-3 py-2 transition duration-200 hover:border-cyan-400/50 hover:bg-slate-700/80">
      <Avatar :name="user.name" />
      <div class="text-left">
        <p class="text-sm font-medium text-slate-100">{{ user.name }}</p>
        <p class="text-xs text-slate-400">{{ user.role }}</p>
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
