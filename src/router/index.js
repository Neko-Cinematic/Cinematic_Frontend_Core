import { createRouter, createWebHistory } from "vue-router";
import checkLoginAdmin from "./checkLoginAdmin";
const routes = [
  // client
  {
    path: "/",
    component: () => import("../components/Client/Homepage/index.vue"),
    meta: {
      layout: "client",
    },
  },

  {
    path: "/search",
    component: () => import("../components/Client/Search/index.vue"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/detail",
    component: () => import("../components/Client/Detail/index.vue"),
    meta: {
      layout: "client",
    },
  },
  {
    path: "/all-movie",
    component: () => import("../components/Client/AllMovie/index.vue"),
    meta: {
      layout: "client",
    },
  },

  // admin
  {
    path: "/dashboard",
    component: () => import("../components/Admin/Dashboard/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/phim",
    component: () => import("../components/Admin/Movies/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },

  {
    path: "/admin/quyen",
    component: () => import("../components/Admin/Quyen/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/dien-vien",
    component: () => import("../components/Admin/DienVien/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/quoc-gia",
    component: () => import("../components/Admin/QuocGia/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/nhan-vien",
    component: () => import("../components/Admin/NhanVien/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/ngon-ngu",
    component: () => import("../components/Admin/NgonNgu/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/tac-gia",
    component: () => import("../components/Admin/TacGia/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/nguoi-dung",
    component: () => import("../components/Admin/NguoiDung/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/tap",
    component: () => import("../components/Admin/Tap/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },
  {
    path: "/admin/the-loai",
    component: () => import("../components/Admin/Type/index.vue"),
    meta: {
      layout: "default",
    },
    // beforeEnter: checkLoginAdmin,
  },

  // login
  {
    path: "/client/auth",
    component: () => import("../components/Auth/AuthClient/index.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/admin/auth",
    component: () => import("../components/Auth/AuthAdmin/index.vue"),
    meta: {
      layout: "auth",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
