import { createRouter, createWebHashHistory } from "vue-router";

import SectionOne from "@/views/SectionOne.vue";
import SectionTwo from "@/views/SectionTwo.vue";

const routes = [
  {
    path: "/",
    name: "SectionOne",
    component: SectionOne,
  },
  {
    path: "/2",
    name: "SectionTwo",
    component: SectionTwo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
