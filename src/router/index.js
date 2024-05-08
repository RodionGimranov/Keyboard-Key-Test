import { createRouter, createMemoryHistory } from "vue-router";
import WinOSKeyboardView from "../views/WinOSKeyboardView.vue";
import MacOSKeyboardView from "../views/MacOSKeyboardView.vue";

const routes = [
  {
    path: "/",
    name: "WinOS",
    component: WinOSKeyboardView,
    props: (route) => ({ color: route.query.color }),
  },
  {
    path: "/MacOS",
    name: "MacOS",
    component: MacOSKeyboardView,
    props: (route) => ({ color: route.query.color }),
  },
];

const router = createRouter({
  history: createMemoryHistory("/"),
  routes,
});

export default router;
