<template>
  <ComponentFilter />
  <UIElementsGrid :componentList="UIComponentList"/>
</template>

<script setup lang="ts">
import { UIElementsGrid } from '@/widgets/ui-elements-grid';
import { UIComponentList } from '@/entities/component';
import { ComponentFilter } from '@/features/component-filter';
</script>
