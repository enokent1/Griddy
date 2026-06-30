<template>
  <div class="input-container">
    <input
      :type="props.type"
      :name="props.name"
      :id="props.name"
      v-model="inputValue"
      @input="updateInputValue()"
      required />
    <label
      :for="props.name"
      :class="[inputValue.length !== 0 ? 'not-empty' : '', 'label-line']"
      >{{ labelName }}</label
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  type: string;
  name: string;
}

const emit = defineEmits<{
  (emit: "updateInputValue", value: string): void;
}>();

const props = defineProps<Props>();

const labelName: string = props.name ? props.name.toUpperCase() : "";

const inputValue = ref<string>("");
const updateInputValue = (): void => {
  emit("updateInputValue", inputValue.value);
};
</script>

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
  border: 2px solid #c9c9c9;
  background: transparent;
  color: #c9c9c9;
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

input:focus {
  color: oklch(86.5% 0.127 207.078);
  border-color: oklch(86.5% 0.127 207.078);
}

input:focus + .label-line {
  top: 0;
  transform: translateY(-50%) scale(0.8);
  color: oklch(86.5% 0.127 207.078);
}

.label-line.not-empty {
  top: 0;
  transform: translateY(-50%) scale(0.8);
  color: #c9c9c9;
}
</style>
