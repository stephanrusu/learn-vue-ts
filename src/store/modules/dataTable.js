import initialDataTable from "@/constants/initialDataTable";

const dataTable = {
  state: {
    data: initialDataTable,
    currentPage: 1,
    itemsPerPage: 10,
  },
  actions: {
    updateCurrentPage({ commit }, payload) {
      commit("setCurrentPage", payload);
    },
    updateItemsPerPage({ commit }, payload) {
      commit("setItemsPerPage", payload);
    },
  },
  getters: {
    listData: (state) => state.data,
    pageCount: (state) => Math.ceil(state.data.length / state.itemsPerPage),
  },
  mutations: {
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setItemsPerPage(state, payload) {
      state.itemsPerPage = payload;
    },
  },
};

export default dataTable;
