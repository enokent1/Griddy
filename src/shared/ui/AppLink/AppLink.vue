<template>
  <RouterLink
    :to="path"
    class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition duration-200 hover:bg-slate-800 hover:text-white">
    <span
      class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-xs font-semibold text-cyan-300">
      {{ icon }}
    </span>
    <span>{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  path: string;
}>();
</script>
