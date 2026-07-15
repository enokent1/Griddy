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
  router.push("/dashboard");
};
</script>

<style scope lang="scss">
$background-color: oklch(12.9% 0.042 264.695);
$text-color: oklch(96.8% 0.007 247.896);

.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: $background-color;
  color: $text-color;
}
</style>