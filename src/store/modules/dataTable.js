import initialDataTable from "@/constants/initialDataTable";

const dataTable = {
  state: {
    data: initialDataTable,
    currentPage: 1,
    itemsPerPage: 10,
  },
  actions: {
    ["update:currentPage"]({ commit }, payload) {
      commit("setCurrentPage", payload);
    },
    ["update:itemsPerPage"]({ commit }, payload) {
      commit("setItemsPerPage", payload);
    },
  },
  getters: {
    listData: (state) => state.data,
    listDataSize: (state) => state.data.length,
    pageSize: (state) => state.itemsPerPage,
    pageNumber: (state) => state.currentPage,
    pageCount: (state) => Math.ceil(state.data.length / state.itemsPerPage),
    paginateData: (state) =>
      state.data.slice((state.currentPage - 1) * state.itemsPerPage, state.currentPage * state.itemsPerPage),
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
