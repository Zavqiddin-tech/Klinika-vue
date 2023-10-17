import { createRouter, createWebHistory } from 'vue-router'
import { menuLink } from "./menu";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
      component: ()=> import('@/layout/main.vue'),
      children: [
        {
            path: "/main",
            name: "main",
            component: () => import("@/views/home/home.vue"),
        },
        ...menuLink,
        {
          path: 'specialist/:id',
          component: ()=> import('@/views/specialist/info-specialist/info-specialist.vue')
        },
        {
          path: 'services-detail/specialist/:id',
          component: ()=> import('@/views/specialist/info-specialist/info-specialist.vue')
        },
        {
          path: 'services-detail/:id',
          component: ()=> import('@/views/services/comp/services-about.vue')
        },
        {
          path: 'price-services',
          component: ()=> import('@/views/services/price-services.vue')
        },
        {
          path: 'stock-order',
          component: ()=> import('@/views/stock/stock-page/stock-order.vue')
        },
        {
          path: 'stock-order:detail',
          component: ()=> import('@/views/stock/stock-page/stock-order-detail.vue')
        },
      ]
      
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: ()=> import('@/layout/dashboard.vue')
    }
  ]
})

export default router
