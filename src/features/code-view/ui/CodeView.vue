<template>
  <div v-html="code"></div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { createHighlighter } from "../model/createHighlighter";

const props = defineProps<{
  codeString: string;
}>();

const code = ref<string>("");

const renderCode = async (): Promise<void> => {
  code.value = await createHighlighter(props.codeString, "html");
};

watch(
  () => props.codeString,
  () => {
    renderCode();
  },
  { immediate: true },
);
</script>
