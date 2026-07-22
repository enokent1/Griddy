import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/pages/login'
import { HomePage } from '@/pages/home'
import { AllElementsPage } from '@/pages/elements'

const routes = [
  {path: '/', component: HomePage},
  {path: '/login', component: LoginPage},
  {path: '/elements', component: AllElementsPage, children: [
    
  ]}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})