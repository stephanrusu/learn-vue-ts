import Vue from "vue";
import Vuex from "vuex";
import kanban from "./modules/kanban";
import kanbanFilter from "./modules/kanbanFilter";
import utils from "./modules/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    kanban,
    kanbanFilter,
    utils,
  },
});
