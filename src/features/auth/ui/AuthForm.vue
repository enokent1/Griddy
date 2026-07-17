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
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 30rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 1.5rem;
  background-color: var(--color-surface);

  &__tabs {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  &__radio {
    display: none;

    &:checked + .auth-form__tab {
      color: var(--color-brand);
    }
  }

  &__tab {
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: color 0.2s ease;
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
    border: 1px solid var(--color-error);
    border-radius: 1rem;
    color: var(--color-error);
    background: var(--color-error-surface);
    font-size: 0.9rem;
  }

  &__button {
    align-self: center;
    padding: 0.5rem 1.5rem;
    background: var(--color-action);
    border: none;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      background: var(--color-hover);
    }
  }

  &__button-text {
    color: var(--color-action-foreground);
    font-weight: 500;
  }
}
</style>