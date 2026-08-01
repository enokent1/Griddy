<template>
  <div class="component-view">
    <div class="component-view__info-block">
      <div class="component-view__description">
        <h1>{{ props.component.title }}</h1>
      </div>
      <div class="component-view__preview">
        <component :is="props.component.preview" />
      </div>
    </div>
    <div class="component-view__code-block">
      <div class="component-view__mode-switchers">
        <SwitchCodeButton
          type="html"
          @click="toggleCodeView('html')"></SwitchCodeButton>
        <SwitchCodeButton
          type="css"
          @click="toggleCodeView('css')"></SwitchCodeButton>
      </div>
      <CodeView
        v-show="activeCodeView === 'html'"
        :code-string="props.component.html"
        code-lang="html" />
      <CodeView
        v-show="activeCodeView === 'css'"
        :code-string="props.component.css"
        code-lang="css" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CatalogComponent } from "@/entities/component/model/types";
import { CodeView } from "@/features/code-view";
import { SwitchCodeButton } from "@/shared/ui/SwitchCodeButton";

const props = defineProps<{
  component: CatalogComponent;
}>();

const activeCodeView = ref<"html" | "css">("html");

function toggleCodeView(codeLang: "html" | "css"): void {
  activeCodeView.value = codeLang;
}
</script>

<style lang="scss" scoped>
.component-view {
  height: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  &__info-block {
    grid-column: span 2;
    display: flex;
    flex-direction: column;

    & h1 {
      font-size: 38px;
      font-weight: 600;
    }
  }

  &__mode-switchers {
    position: sticky;
    top: 0;
    left: 0;
  }

  &__preview {
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: var(--color-surface-elevated);
  }

  &__code-block {
    position: relative;
    width: 475px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--color-surface-soft);
    overflow: auto;
    min-height: 0;

    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;

      &-track {
        background: transparent;
      }

      &-corner {
        background: transparent;
      }

      &-thumb {
        border-radius: 0;
        background: oklab(33.227000000000004% -0.00084 -0.00211);

        &:hover {
          background: oklab(46.737% -0.00033 -0.00349);
        }
      }
    }
  }
}
</style>
