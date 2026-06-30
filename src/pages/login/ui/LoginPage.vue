<template>
  <main
    class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
    <AuthForm @submit=""/>
  </main>
</template>

<script setup>
import { AuthForm } from "@/features/auth/ui";

</script>

<style scoped></style>
