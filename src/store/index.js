import Vue from "vue";
import Vuex from "vuex";
import kanban from "./modules/kanban";
import project from "./modules/project";
import user from "./modules/user";
import kanbanFilter from "./modules/kanbanFilter";
import dataTable from "./modules/dataTable";
import utils from "./modules/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    kanban,
    kanbanFilter,
    dataTable,
    project,
    user,
    utils,
  },
});
