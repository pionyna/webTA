import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
