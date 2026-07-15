<template>
  <form
    class="auth-form">
    <div class="auth-form__tabs">
      <input
        class="auth-form__radio"
        type="radio"
        name="auth-mode"
        value="signup"
        id="signup"
        checked />
      <label
        for="signup"
        class="auth-form__tab"
        >Вход</label
      >
      <input
        class="auth-form__radio"
        type="radio"
        name="auth-mode"
        value="register"
        id="register" />
      <label
        for="register"
        class="auth-form__tab"
        >Регистрация</label
      >
    </div>

    <div class="auth-form__inputs">
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
      class="auth-form__error">
      <span>
        {{ error }}
      </span>
    </div>

    <button
      @click.prevent="submitForm"
      :disabled="isLoading"
      class="auth-form__button">
      <span class="auth-form__button-text">Войти</span>
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

<style scope lang="scss">
$border-color: oklch(85.4% 0.15 195.2 / 0.6);
$backdround-color: oklch(20.8% 0.042 265.755);
$accent-color: oklch(78.9% 0.154 211.53);
$base-color: oklch(92.9% 0.013 255.508);
$error-color: oklch(70.4% 0.191 22.216);
$error-background-color: oklch(63.7% 0.237 25.331 / 0.3);
$button-background: oklch(71.5% 0.143 215.221);
$button-text-color: oklch(27.9% 0.041 260.031);


.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 30rem;
  padding: 1.5rem;
  border: 1px solid $border-color;
  border-radius: 1.5rem;
  background-color: $backdround-color;

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  &__radio {
    display: none;

    &:checked + .auth-form__tab {
      color: $accent-color;
    }
  }

  &__tab {
    cursor: pointer;
    color: $base-color;
    transition:color 0.2s ease;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 2rem;
  }

  &__error {
    display: flex;
    justify-content: center;
    padding: 0.75rem;
    border: 1px solid $error-color;
    border-radius: 1rem;
    color: $error-color;
    background: $error-background-color;
    font-size: 0.9rem;
  }

  &__button {
    align-self: center;
    padding: 0.5rem 1.5rem;
    background: $button-background;
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: #0891b2;
    }
  }

  &__button-text {
    color: $button-text-color;
    font-weight: 500;
  }
}
</style>