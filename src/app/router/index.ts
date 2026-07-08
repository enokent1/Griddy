import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/pages/login'
import { HomePage } from '@/pages/home'
import { DashboardPage } from '@/pages/dashboard'

const routes = [
  {path: '/', component: HomePage},
  {path: '/login', component: LoginPage},
  {path: '/dashboard', component: DashboardPage}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})