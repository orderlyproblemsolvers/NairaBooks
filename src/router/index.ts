import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue'), // ✅ FIXED
    },
    {
      path: '/terms',
      component: () => import('../views/terms.vue'),
    },
    {
      path: '/privacy',
      component: () => import('../views/privacy.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router