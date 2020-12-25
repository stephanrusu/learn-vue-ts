import Vue from "vue";
import Vuex from "vuex";
import kanban from "./modules/kanban";
import kanbanFilter from "./modules/kanbanFilter";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    kanban,
    kanbanFilter,
  },
});
