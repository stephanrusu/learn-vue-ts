import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "@/views/Auth.vue";
import Projects from "@/views/Projects.vue";
import Kanban from "@/views/Kanban.vue";
import FlexGrid from "@/views/FlexGrid.vue";
import Calendar from "@/views/Calendar.vue";
import Message from "@/views/Message.vue";
import DataTable from "@/views/DataTable.vue";
import NotFound from "@/views/NotFound.vue";

import SignIn from "@/components/auth/SignIn.vue";
import SignUp from "@/components/auth/SignUp.vue";
import ForgotPass from "@/components/auth/ForgotPassword.vue";
import ResetPass from "@/components/auth/ResetPassword.vue";

import KanbanTaskDisplay from "@/components/kanban/task/KanbanTaskDisplay.vue";
import KanbanTaskForm from "@/components/kanban/task/KanbanTaskForm.vue";
import ChangeAssignee from "@/components/kanban/task/ChangeAssignee.vue";

import MembersSelection from "@/components/project/MembersSelection.vue";
import ProjectForm from "@/components/project/ProjectForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/projects",
  },
  // projects
  {
    path: "/projects",
    name: "projects",
    component: Projects,
    children: [
      {
        path: "create",
        name: "project-create",
        component: ProjectForm,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "edit/:projectId",
        name: "project-edit",
        component: ProjectForm,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "team/:projectId",
        name: "project-team",
        component: MembersSelection,
        meta: {
          showModal: true,
        },
        props: true,
      },
    ],
  },
  // auth
  {
    path: "/auth",
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
  // kanban
  {
    path: "/kanban",
    component: Kanban,
    name: "kanban",
    children: [
      {
        path: "create",
        name: "task-create",
        component: KanbanTaskForm,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "edit/:taskId",
        name: "task-edit",
        component: KanbanTaskForm,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "assign/:taskId",
        name: "task-assign",
        component: ChangeAssignee,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "view/:taskId",
        name: "task-view",
        component: KanbanTaskDisplay,
        meta: {
          showModal: true,
        },
        props: true,
      },
      {
        path: "settings",
        name: "settings",
        component: ProjectForm,
        meta: {
          showModal: true,
        },
        props: true,
      },
    ],
  },
  // calendar
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
  },
  // flexgrid
  {
    path: "/flexgrid",
    name: "flex-grid",
    component: FlexGrid,
  },
  // datatable
  {
    path: "/datatable",
    name: "data-table",
    component: DataTable,
  },
  // messages
  {
    path: "/messages",
    name: "messages",
    component: Message,
  },
  // not found
  { path: "*", name: "not-found", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
