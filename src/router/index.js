import Vue from "vue";
import VueRouter from "vue-router";
import Kanban from "@/views/Kanban.vue";
import KanbanTaskDisplay from "@/components/kanban/task/KanbanTaskDisplay.vue";
import KanbanPage from "@/components/KanbanPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/kanban",
  },
  {
    path: "/kanban",
    component: Kanban,
    children: [
      {
        path: "",
        name: "kanban",
        component: KanbanPage,
      },
      {
        path: "create",
        name: "task-create",
      },
      {
        path: "edit/:taskId",
        name: "task-edit",
      },
      {
        path: "view/:taskId",
        name: "task-view",
        component: KanbanTaskDisplay,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
