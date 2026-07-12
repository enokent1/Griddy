<template>
  <main
    class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
    <AuthForm @success="handleSuccess" />
  </main>
</template>

<script setup lang="ts">
import { AuthForm } from "@/features/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const handleSuccess = (): void => {
  router.push("/dashboard");
};
</script>
