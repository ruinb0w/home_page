import type { RouteRecordRaw } from "vue-router";
import { createWebHashHistory, createRouter } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("./views/MainView/MainView.vue"),
    children: [
      { path: "home", component: () => import("./views/HomeView/HomeView.vue") },
      { path: "about", component: () => import("./views/AboutView/AboutView.vue") },
      {
        path: "collections",
        component: () => import("./views/CollectionsView/CollectionsView.vue"),
      },
      {
        path: "blog",
        component: () => import("./views/BlogView/BlogView.vue"),
      },
      { path: "note", component: () => import("./views/NoteView/NoteView.vue") },
      { path: "projects", component: () => import("./views/ProjectsView/ProjectsView.vue") },
    ],
  },
  {
    path: "/projects/project/:id",
    component: () => import("./views/ProjectsView/ProjectDetail/ProjectDetail.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
