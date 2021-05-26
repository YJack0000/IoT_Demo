import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import ModbusTest from "../components/ModbusTest.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/modbus",
    name: "ModbusTest",
    component: ModbusTest,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;