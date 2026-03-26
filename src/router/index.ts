import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'), // ✅ FIXED
    },
    {
      path: '/terms',
      component: () => import('../views/Terms.vue'),
    },
    {
      path: '/privacy',
      component: () => import('../views/Privacy.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router