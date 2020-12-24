import Vue from "vue";
import VueRouter from "vue-router";
import Kanban from "@/views/Kanban.vue";
import KanbanTaskDisplay from "@/components/kanban/task/KanbanTaskDisplay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "kanban",
    component: Kanban,
  },
  {
    path: "/create",
    name: "task-create",
  },
  {
    path: "/edit/:taskId",
    name: "task-edit",
  },
  {
    path: "/view/:taskId",
    name: "task-view",
    component: KanbanTaskDisplay,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
