import Vue from "vue";
import Vuex from "vuex";
import kanban from "./modules/kanban";
import project from "./modules/project";
import kanbanFilter from "./modules/kanbanFilter";
import utils from "./modules/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    project,
    kanban,
    kanbanFilter,
    utils,
  },
});
