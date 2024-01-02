import {
    createRouter,
    createWebHistory
} from "vue-router";
const routes = [{
    path: "/",
    component: () => import("../components/Client/Homepage/index.vue"),
    meta: {
        layout: "client"
    },
}, ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;