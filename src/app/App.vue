<template>
  <Header v-show="!isauthOrRootRoute" />
  <Sidebar v-show="!isauthOrRootRoute" />
  <RouterView />
</template>

<script setup lang="ts">
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { useRoute } from "vue-router";

const route = useRoute();

const isauthOrRootRoute: boolean =
  route.path === "/" || route.path === "/login" ? true : false;
  
</script>

<style>
@import "tailwindcss";
</style>
