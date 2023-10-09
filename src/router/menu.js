
export const menuLink = [
  {
    title: "О центре",
    path: "/about-center",
    name: "about-center",
    component: () => import("@/views/about-center/aboutCenter.vue"),
  },
  {
    title: "Специалисты",
    path: "/specialist",
    name: "specialist",
    component: () => import("@/views/specialist/specialist.vue"),
  },
  {
    title: "Услуги",
    path: "/services",
    name: "services",
    component: () => import("@/views/services/services.vue"),
  },
  {
    title: "Цены",
    path: "/prices",
    name: "prices",
    component: () => import("@/views/prices/prices.vue"),
  },
  {
    title: "Акции",
    path: "/stock",
    name: "stock",
    component: () => import("@/views/stock/stock.vue"),
  },
  {
    title: "Контакты",
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact/contact.vue"),
  },
];
