import { ref } from "vue";
import { defineStore } from "pinia";

export const menuLink = [
  {
    id: 1,
    title: "О центре",
    path: "/about-center",
    name: "about-center",
    active: false,
    component: () => import("@/views/about-center/aboutCenter.vue"),
  },
  {
    id: 2,
    title: "Специалисты",
    path: "/specialist",
    name: "specialist",
    active: false,
    component: () => import("@/views/specialist/specialist.vue"),
  },
  {
    id: 3,
    title: "Услуги",
    path: "/services",
    name: "services",
    active: false,
    component: () => import("@/views/services/services.vue"),
  },
  {
    id: 4,
    title: "Цены",
    path: "/prices",
    name: "prices",
    active: false,
    component: () => import("@/views/prices/prices.vue"),
  },
  {
    id: 5,
    title: "Акции",
    path: "/stock",
    name: "stock",
    active: false,
    component: () => import("@/views/stock/stock.vue"),
  },
  {
    id: 6,
    title: "Контакты",
    path: "/contact",
    name: "contact",
    active: false,
    component: () => import("@/views/contact/contact.vue"),
  },
];

export const useMenuStore = defineStore("menuLink", () => {
  const menuLinkStore = ref([
    {
      id: 1,
      title: "О центре",
      path: "/about-center",
      name: "about-center",
      active: false,
      component: () => import("@/views/about-center/aboutCenter.vue"),
    },
    {
      id: 2,
      title: "Специалисты",
      path: "/specialist",
      name: "specialist",
      active: false,
      component: () => import("@/views/specialist/specialist.vue"),
    },
    {
      id: 3,
      title: "Услуги",
      path: "/services",
      name: "services",
      active: false,
      component: () => import("@/views/services/services.vue"),
    },
    {
      id: 4,
      title: "Цены",
      path: "/prices",
      name: "prices",
      active: false,
      component: () => import("@/views/prices/prices.vue"),
    },
    {
      id: 5,
      title: "Акции",
      path: "/stock",
      name: "stock",
      active: false,
      component: () => import("@/views/stock/stock.vue"),
    },
    {
      id: 6,
      title: "Контакты",
      path: "/contact",
      name: "contact",
      active: false,
      component: () => import("@/views/contact/contact.vue"),
    },
  ]);
  const setMenuLinkStore = (val) => {
    menuLinkStore.value.forEach((item) => {
      if (item.id == val) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  };

  const noActiveLink = () => {
    menuLinkStore.value.forEach((item) => {
      item.active = false;
    });
  };

  return {
    menuLinkStore,
    setMenuLinkStore,
    noActiveLink,
  };
});

export const dashMenuLink = [
  {
    title: "Специалисты",
    icon: 'user',
    path: "/dash-specialist",
    name: "dash-specialist",
    component: () => import("../dashboard/views/dash-specialist.vue"),
  },
  {
    title: "Услуги",
    icon: 'set-up',
    path: "/dash-services",
    name: "dash-services",
    component: () => import("../dashboard/views/dash-services.vue"),
  },
  {
    title: "Цены",
    icon: 'money',
    path: "/dash-prices",
    name: "dash-prices",
    component: () => import("../dashboard/views/dash-prices.vue"),
  },
];
