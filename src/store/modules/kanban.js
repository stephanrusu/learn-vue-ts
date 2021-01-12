import Vue from "vue";
import initialKanban from "../../constants/initialKanban";
import { getUuid } from "../../utils/index";

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

    addSubTask({ commit }, payload) {
      commit("addSubTask", payload);
    },
    toggleSubTask({ commit }, payload) {
      commit("toggleSubTask", payload);
    },
    removeSubTask({ commit }, payload) {
      commit("removeSubTask", payload);
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

    addSubTask(state, payload) {
      const { boardId, taskId, text } = payload;

      const newSubTask = {
        text,
        uid: getUuid(),
        completed: false,
      };

      state.boards[boardId].tasks[taskId].subTasks.push(newSubTask);
    },
    toggleSubTask(state, payload) {
      const { boardId, taskId, index, completed } = payload;

      state.boards[boardId].tasks[taskId].subTasks[index].completed = completed;
    },
    removeSubTask(state, payload) {
      const { boardId, taskId, index } = payload;

      state.boards[boardId].tasks[taskId].subTasks.splice(index, 1);
    },
  },
};

export default kanban;
