import { createRouter, createWebHistory } from "vue-router";
import { LoginPage } from "@/pages/login";
import { ElementsPage } from "@/pages/elements";
import { ElementDetailsPage } from "@/pages/element-details";
import { NotFoundPage } from "@/pages/not-found";

const routes = [
  { path: "/", component: ElementsPage },
  { path: "/login", component: LoginPage },
  { path: "/elements/:id", component: ElementDetailsPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
