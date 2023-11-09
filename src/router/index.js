import { createRouter, createWebHistory } from 'vue-router'
import { menuLink } from "./menu";
import { dashMenuLink } from './menu';

import { useAuthStore } from '../stores/admin/user/auth';

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
      path: '/',
      component: ()=> import('@/layout/dashboard.vue'),
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: ()=> import("../dashboard/views/dash-sidebar/dash-basic.vue")
        },
        ...dashMenuLink,
        {
          path: 'more-spec/:id',
          name: 'more-spec',
          component: ()=> import("@/dashboard/views/specialist/more-spec.vue")
        },
        {
          path: 'more-specForm/:id',
          name: 'more-specForm',
          component: ()=> import("@/dashboard/views/specialist/more-specForm.vue")
        },
        {
          path: 'more-service/:id',
          name: 'more-service',
          component: ()=> import("@/dashboard/views/service/more-service.vue")
        },
        {
          path: 'more-serviceDetail/:id',
          name: 'more-serviceDetail',
          component: ()=> import("@/dashboard/views/service/more-serviceDetail.vue")
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
  if(['login','main'].includes(to.name)) {
    next()
  }
  else {
    const authStore = useAuthStore()
    authStore.checkUser()
    next()
  }
})

export default router
