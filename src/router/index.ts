import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
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
  ]
})

export default router
