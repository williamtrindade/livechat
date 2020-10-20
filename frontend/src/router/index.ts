import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/app',
    name: 'Home',
    component: Home,
    meta: { requireAuth: true }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.requireAuth ?? false
  const accessToken = localStorage.getItem('access_token') ?? false
  if ((requireAuth && accessToken) || (!requireAuth && !accessToken)) {
    next()
    return
  }
  if (!requireAuth && accessToken) {
    router.push({ name: 'Home' })
  }
  if (requireAuth && !accessToken) {
    router.push({ name: 'Login' })
  }
  next()
})

export default router
