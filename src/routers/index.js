import { createRouter, createWebHashHistory } from "vue-router";

import SectionOne from "@/views/SectionOne.vue";
import SectionTwo from "@/views/SectionTwo.vue";
import SectionThree from "@/views/SectionThree.vue";
import SectionFour from "@/views/SectionFour.vue";
import SectionFive from "@/views/SectionFive.vue";
import SectionSix from "@/views/SectionSix.vue";

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
  {
    path: "/3",
    meta: {
      depth: 3,
    },
    name: "SectionFour",
    component: SectionFour,
  },
  {
    path: "/4",
    meta: {
      depth: 4,
    },
    name: "SectionFive",
    component: SectionFive,
  },
  {
    path: "/5",
    meta: {
      depth: 5,
    },
    name: "SectionSix",
    component: SectionSix,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
