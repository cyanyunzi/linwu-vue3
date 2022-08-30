import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menu',
      name: 'ment',
      component: () => import("../views/layout/MenuView.vue"),
    },
    {
      path: '/header',
      name: 'header',
      component: () => import("../views/layout/HeaderView.vue"),
    },
    {
      path: '/index1',
      name: 'index1',
      component: () => import("../views/index/indexView1.vue"),
    },
    {
      path: '/index2',
      name: 'index2',
      component: () => import("../views/index/indexView2.vue"),
    },
  ]
})

export default router
