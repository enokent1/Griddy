<template>
  <main
    class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
    <AuthForm @submit="onSubmitLoginForm($event)" />
  </main>
</template>

<script setup lang="ts">
import { AuthForm } from "@/features/auth/ui";
import { useAuth } from "@/features/auth/model/useAuth";
import type { LoginPayload } from "@/features/auth/model/types";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const { login, isLoading, error } = useAuth();
const showError = ref<boolean>(false);

const onSubmitLoginForm = async (payload: LoginPayload): Promise<void> => {
  const response = await login(payload);
  if (response) router.push("/dashboard");
};
</script>

<style scoped></style>
