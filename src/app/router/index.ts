import { createRouter, createWebHistory } from "vue-router";
import { LoginPage } from "@/pages/login";
import { HomePage } from "@/pages/home";
import { AllElementsPage } from "@/pages/all-elements";
import { ElementDetailsPage } from "@/pages/element-details";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/elements", component: AllElementsPage },
  { path: "/elements/:id", component: () => ElementDetailsPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
