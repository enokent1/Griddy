<template>
  <main
    class="auth-page">
    <AuthForm @success="handleSuccess" />
  </main>
</template>

<script setup lang="ts">
import { AuthForm } from "@/features/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const handleSuccess = (): void => {
  router.push("/elements");
};
</script>

<style scope lang="scss">
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text-primary);
}
</style>