<template>
  <div>
    <ComponentView :component="input1" />
  </div>
</template>

<script setup lang="ts">
import { ComponentView } from "@/widgets/component-view";
import input1 from "@/entities/component/components/inputs/input-1";
</script>

<style scoped></style>
