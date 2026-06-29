<template>
  <div
    class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-slate-100">
    <form
      class="w-full max-w-md rounded-3xl border border-cyan-300/60 bg-slate-900 p-6 shadow-2xl shadow-black/30">
      <div class="flex justify-center gap-10">
        <input
          class="peer/signup appearance-none hidden"
          type="radio"
          name="auth-mode"
          value="signup"
          id="signup" />
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
        <div class="input-container">
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder=" " />
          <label for="username" class="label-line">Username</label>
        </div>
        <div class="input-container">
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder=" " />
          <label for="password" class="label-line">Password</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
.input-container {
  position: relative;
  width: 100%;
}

input {
  width: 100%;
  height: 3rem;
  padding: 1rem 1rem 0.3rem;
  border-radius: 1rem;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  outline: none;
  transition: 0.2s ease;
  box-sizing: border-box;
}

.label-line {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  padding: 0 0.3rem;
  background-color: oklch(20.8% 0.042 265.755);
  transition: 0.3s ease;
  pointer-events: none;
}

input:focus,
input:valid {
  color: oklch(86.5% 0.127 207.078);
  border-color: oklch(86.5% 0.127 207.078);
}

input:focus + .label-line,
input:valid + .label-line {
  top: 0;
  transform: translateY(-50%) scale(0.8);
  color: oklch(86.5% 0.127 207.078);
}
</style>
