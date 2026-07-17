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

<style scoped lang="scss">
.input-container {
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: 3rem;
    padding: 1rem 1rem 0.3rem;
    border: 2px solid var(--color-border-subtle);
    border-radius: 1rem;
    background: transparent;
    color: var(--color-border-subtle);
    outline: none;
    box-sizing: border-box;
    transition: 0.2s ease;

    &:focus {
      color: var(--color-brand-bright);
      border-color: var(--color-brand-bright);

      + .label-line {
        top: 0;
        transform: translateY(-50%) scale(0.8);
        color: var(--color-brand-bright);
      }
    }
  }

  .label-line {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    padding: 0 0.3rem;
    background: var(--color-surface);
    color: var(--color-text-inverse);
    pointer-events: none;
    transition: 0.3s ease;

    &.not-empty {
      top: 0;
      transform: translateY(-50%) scale(0.8);
      color: var(--color-border-subtle);
    }
  }
}
</style>
