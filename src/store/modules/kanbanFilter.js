const kanbanFilter = {
  state: {
    type: "all",
    priority: "all",
  },
  actions: {
    setTypeFilter({ commit }, payload) {
      const { filter } = payload;
      commit("typeFilter", filter);
    },
    setPriorityFilter({ commit }, payload) {
      const { filter } = payload;
      commit("priorityFilter", filter);
    },
  },
  getters: {
    type: (state) => state.type,
    priority: (state) => state.priority,
  },
  mutations: {
    typeFilter(state, payload) {
      state.type = payload;
    },
    priorityFilter(state, payload) {
      state.priority = payload;
    },
  },
};

export default kanbanFilter;
