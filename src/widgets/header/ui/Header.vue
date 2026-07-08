<template>
  <div class="flex justify-between p-2">
    <span class="text-2xl font-bold text-slate-100">GRIDDY</span>
    <RouterLink to="/profile" class="flex items-center gap-2 cursor-pointer">
      <Avatar :name="user.name"/>
      <div class="text-white">
        <p class="text-sm text-gray-300">{{ user.name }}</p>
        <p class="text-xs text-gray-400">{{ user.role }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { Avatar } from '@/shared/ui/Avatar';
const user = {
  name: "Андрей Зотин",
  role: "Frontend-разработчик",
};
</script>
