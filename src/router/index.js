import {
    createRouter,
    createWebHistory
} from "vue-router";
const routes = [{
        path: "/dashboard",
        component: () => import("../components/Admin/Dashboard/index.vue"),
    }, {
        path: "/",
        component: () => import("../components/Client/Homepage/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/search",
        component: () => import("../components/Client/Search/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/detail",
        component: () => import("../components/Client/Detail/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/movie",
        component: () => import("../components/Client/AllMovie/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/detail",
        component: () => import("../components/Client/Detail/index.vue"),
        meta: {
            layout: "client"
        },
    },
    {
        path: "/auth",
        component: () => import("../components/Auth/index.vue"),
        meta: {
            layout: "auth"
        },
    }, {
        path: "/watch",
        component: () => import("../components/Client/Watch/index.vue"),
        meta: {
            layout: "client"
        },
    },
    {
        path: "/detail",
        component: () => import("../components/Client/Detail/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/all-movie",
        component: () => import("../components/Client/AllMovie/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/detail",
        component: () => import("../components/Client/Detail/index.vue"),
        meta: {
            layout: "client"
        },
    }, {
        path: "/watch",
        component: () => import("../components/Client/Watch/index.vue"),
        meta: {
            layout: "client"
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;