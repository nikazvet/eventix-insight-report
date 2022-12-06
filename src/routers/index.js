import { createRouter, createWebHashHistory } from "vue-router";

import SectionOne from "@/views/SectionOne.vue";
import SectionTwo from "@/views/SectionTwo.vue";
import SectionThree from "@/views/SectionThree.vue";

const routes = [
  {
    path: "/",
    redirect: "/0",
  },
  {
    path: "/0",
    meta: {
      depth: 0,
    },
    name: "SectionOne",
    component: SectionOne,
  },
  {
    path: "/1",
    meta: {
      depth: 1,
    },
    name: "SectionTwo",
    component: SectionTwo,
  },
  {
    path: "/2",
    meta: {
      depth: 2,
    },
    name: "SectionThree",
    component: SectionThree,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
