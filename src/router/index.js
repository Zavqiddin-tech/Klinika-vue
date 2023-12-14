import { createRouter, createWebHistory } from 'vue-router'
import { menuLink } from "./menu";
import { dashMenuLink } from './menu';

import { useAuthStore } from '@/stores/admin/user/auth';

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
          component: ()=> import('@/views/specialist/info-specialist/info-specialist.vue'),
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
          path: 'price',
          component: ()=> import('@/views/prices/price.vue')
        },
        {
          path: 'stock-order',
          component: ()=> import('@/views/stock/stock-page/stock-order.vue')
        },
        {
          path: 'stock-order-detail',
          component: ()=> import('@/views/stock/stock-page/stock-order-detail.vue')
        },
      ]
      
    },
    {
      path: '/',
      component: ()=> import('@/layout/dashboard.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: ()=> import("../dashboard/views/dash-sidebar/dash-basic.vue"),
          meta: { secure: true }
        },
        ...dashMenuLink,
        {
          path: 'more-spec/:id',
          name: 'more-spec',
          component: ()=> import("@/dashboard/views/specialist/more-spec.vue"),
          meta: { secure: true }
        },
        {
          path: 'more-specForm/:id',
          name: 'more-specForm',
          component: ()=> import("@/dashboard/views/specialist/more-specForm.vue"),
          meta: { secure: true }
        },
        {
          path: 'more-service/:id',
          name: 'more-service',
          component: ()=> import("@/dashboard/views/service/more-service.vue"),
          meta: { secure: true }
        },
        {
          path: 'more-serviceDetail/:id',
          name: 'more-serviceDetail',
          component: ()=> import("@/dashboard/views/service/more-serviceDetail.vue"),
          meta: { secure: true }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/layout/auth.vue')
    },
  ]
})

router.beforeEach((to, from, next)=> {
  if(to.meta.secure) {
    const authStore = useAuthStore()
    authStore.checkUser()
    next()
  }
  else {
    next()
  }
})

export default router
