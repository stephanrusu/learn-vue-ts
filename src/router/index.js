import Vue from "vue";
import VueRouter from "vue-router";

import Kanban from "@/views/Kanban.vue";
import KanbanTaskDisplay from "@/components/kanban/task/KanbanTaskDisplay.vue";
import KanbanPage from "@/components/KanbanPage.vue";

import Auth from "@/views/Auth.vue";
import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import ForgotPass from "@/components/auth/ForgotPassword.vue";
import ResetPass from "@/components/auth/ResetPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/kanban",
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    children: [
      {
        path: "",
        name: "sign-in",
        component: SignIn,
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: SignUp,
      },
      {
        path: "forget-pass",
        name: "forget-pass",
        component: ForgotPass,
      },
      {
        path: "reset-pass",
        name: "reset-pass",
        component: ResetPass,
      },
    ],
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
