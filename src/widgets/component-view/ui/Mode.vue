<template>
  <div class="component-view__mode-switchers">
    <SwitchCodeButton
      type="html"
      :is-active="props.activeCodeView === 'html'"
      @click="toggleCodeView('html')"></SwitchCodeButton>
    <SwitchCodeButton
      type="css"
      :is-active="props.activeCodeView === 'css'"
      @click="toggleCodeView('css')"></SwitchCodeButton>
  </div>
</template>

<script setup lang="ts">
import { SwitchCodeButton } from "@/shared/ui/SwitchCodeButton";

const props = defineProps<{
  activeCodeView: "html" | "css";
}>();

const emit = defineEmits<{
  (e: "toggleCodeView", lang: "html" | "css"): void;
}>();

function toggleCodeView(codeLang: "html" | "css"): void {
  emit("toggleCodeView", codeLang);
}
</script>

<style scoped>
.component-view__mode-switchers {
  position: sticky;
  top: 0;
  left: 0;
}
</style>
