<template>
  <ComponentView v-if="targetComponent" :component="targetComponent" />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { UIComponentList } from "@/entities/component";
import { ComponentView } from "@/widgets/component-view";

const route = useRoute();
const itemId = computed(() => route.params.id);

const targetComponent = computed(() =>
  UIComponentList.find((component) => component.id === itemId.value),
);
</script>

<style scoped></style>
