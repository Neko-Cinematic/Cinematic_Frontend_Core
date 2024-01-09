import {
    createRouter,
    createWebHistory
} from "vue-router";
const routes = [
    {
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
        path: "/all-movie",
        component: () => import("../components/Client/AllMovie/index.vue"),
        meta: {
          layout: "client"
        },
      },
    
      //+++++++++++++++++++++++++++++++++++++++++++
      // ADMIN 
      //+++++++++++++++++++++++++++++++++++++++++++
    
      {
        path: "/admin/chuc-nang",
        component: () => import("../components/Admin/ChucNang/index.vue"),
        meta: {
          layout: "default"
        },
      },
      // {
      //   path: "/admin/danh-gia-phim",
      //   component: () => import("../components/Admin/DanhGiaPhim/index.vue"),
      //   meta: {
      //     layout: "default"
      //   },
      // },
      // {
      //   path: "/admin/hinh-anh",
      //   component: () => import("../components/Admin/HinhAnh/index.vue"),
      //   meta: {
      //     layout: "default"
      //   },
      // },
      {
        path: "/admin/phim",
        component: () => import("../components/Admin/Movies/index.vue"),
        meta: {
          layout: "default"
        },
      },
      // {
      //   path: "/admin/tac-gia",
      //   component: () => import("../components/Admin/TacGia/index.vue"),
      //   meta: {
      //     layout: "default"
      //   },
      // },
      
      {
        path: "/admin/quyen",
        component: () => import("../components/Admin/Quyen/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/nhan-vien",
        component: () => import("../components/Admin/NhanVien/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/dien-vien",
        component: () => import("../components/Admin/DienVien/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/quoc-gia",
        component: () => import("../components/Admin/QuocGia/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/nhan-vien",
        component: () => import("../components/Admin/NhanVien/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/ngon-ngu",
        component: () => import("../components/Admin/NgonNgu/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/tac-gia",
        component: () => import("../components/Admin/TacGia/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/nguoi-dung",
        component: () => import("../components/Admin/NguoiDung/index.vue"),
        meta: {
          layout: "default"
        },
      },
      {
        path: "/admin/tap",
        component: () => import("../components/Admin/Tap/index.vue"),
        meta: {
          layout: "default"
        },
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;