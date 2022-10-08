import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/menuPage',
      name: 'menuPage',
      component: () => import("../views/menu/MenuPage.vue"),
    },
    {
      path: '/menuAdd',
      name: 'menuAdd',
      component: () => import("../views/menu/MenuAdd.vue"),
    },
    {
      path: '/menuDetail',
      name: 'menuDetail',
      component: () => import("../views/menu/MenuDetail.vue"),
    },
    {
      path: '/dictPage',
      name: 'dictPage',
      component: () => import("../views/dict/DictPage.vue"),
    },

  ]
})

export default router
