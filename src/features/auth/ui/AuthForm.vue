<template>
  <form
    class="flex flex-col gap-5 w-full max-w-md rounded-3xl border border-cyan-300/60 bg-slate-900 p-6 shadow-2xl shadow-black/30">
    <div class="flex justify-center gap-10">
      <input
        class="peer/signup appearance-none hidden"
        type="radio"
        name="auth-mode"
        value="signup"
        id="signup"
        checked />
      <label
        for="signup"
        class="cursor-pointer text-slate-300 peer-checked/signup:text-cyan-400"
        >Вход</label
      >
      <input
        class="peer/register hidden appearance-none"
        type="radio"
        name="auth-mode"
        value="register"
        id="register" />
      <label
        for="register"
        class="cursor-pointer text-slate-300 peer-checked/register:text-cyan-400"
        >Регистрация</label
      >
    </div>

    <div class="flex flex-col mt-6 gap-5">
      <AuthInput
        type="text"
        name="username"
        @updateInputValue="usernameInput = $event" />
      <AuthInput
        type="password"
        name="password"
        @updateInputValue="userPasswordInput = $event" />
    </div>

    <div
      v-if="error"
      class="flex justify-center rounded-2xl bg-red-500/10 border border-red-500/30 p-3 text-red-400 text-sm">
      <span>
        {{ error }}
      </span>
    </div>

    <button
      @click.prevent="submitForm"
      :disabled="isLoading"
      class="px-6 py-2 w-fit self-center bg-cyan-500 rounded-full cursor-pointer">
      <span class="text-slate-800">Войти</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import AuthInput from "./AuthInput.vue";
import { useAuth } from "@/features/auth/model/useAuth";
import type { LoginPayload } from "../model/types";
import { ref } from "vue";

const emit = defineEmits<{
  (emit: "success"): void;
}>();

const { login, isLoading, error, user } = useAuth();

const usernameInput = ref<string>("");
const userPasswordInput = ref<string>("");

const submitForm = async (): Promise<void> => {
  const payload: LoginPayload = {
    username: usernameInput.value,
    password: userPasswordInput.value,
  };
  const response = await login(payload);

  if (response && user.value) {
    emit("success");
  }
};
</script>
