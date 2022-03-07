import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import AddC from "./pages/addC.vue";
import Stats from "./pages/stats.vue";
import BuyAgain from "./pages/buyAgain.vue";
import Info from "./pages/info.vue";
import PNF from "./pages/notFound.vue";


const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/addC",
    name: "AddC",
    component: AddC,
  },
  {
    path: "/stats",
    name: "Stats",
    component: Stats,
  },
  {
    path: "/buyAgain",
    name: "BuyAgain",
    component: BuyAgain,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PNF",
    component: PNF,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;