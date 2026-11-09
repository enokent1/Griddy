import { createRouter, createWebHistory } from "vue-router";
import { LoginPage } from "@/pages/login";
import { ElementsPage } from "@/pages/elements";
import { ElementDetailsPage } from "@/pages/element-details";
import { NotFoundPage } from "@/pages/not-found";

const routes = [
  { path: "/", name: "catalog", component: ElementsPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/elements/:id", name: "element-details", component: ElementDetailsPage },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
