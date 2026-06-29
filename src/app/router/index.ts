import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/pages/login'
import { HomePage } from '@/pages/home'

const routes = [
  {path: '/', component: HomePage},
  {path: '/login', component: LoginPage},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})