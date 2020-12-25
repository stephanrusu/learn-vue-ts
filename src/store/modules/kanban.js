import Vue from "vue";
import initialKanban from "../../constants/initialKanban";

const kanban = {
  state: initialKanban,
  actions: {
    addNewTask({ commit }, payload) {
      commit("addNewTask", payload);
    },
    addTask({ commit }, payload) {
      commit("addTask", payload);
    },
    removeTask({ commit }, payload) {
      commit("removeTask", payload);
    },
  },
  getters: {
    listBoards: (state) => state.boards,
    boardsOrder: (state) => state.boardsOrder,
    singleBoard: (state) => (boardId) => state.boards[boardId],
    singleTask: (state) => (boardId, taskId) => state.boards[boardId].tasks[taskId],
    listProject: (state) => state,
  },
  mutations: {
    addNewTask(state, payload) {
      const { boardId, task } = payload;
      Vue.set(state.boards[boardId].tasks, task.uid, task);
    },

    addTask(state, payload) {
      const { boardId, taskId, task } = payload;

      if (task !== undefined) {
        Vue.set(state.boards[boardId].tasks, taskId, task);
      }
    },

    removeTask(state, payload) {
      const { boardId, taskId } = payload;
      Vue.delete(state.boards[boardId].tasks, taskId);
    },
  },
};

export default kanban;
