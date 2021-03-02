import Vue from "vue";
import initialKanban from "@/constants/initialKanban";
import { getUuid } from "@/utils/index";

const kanban = {
  state: {
    active: {},
    list: initialKanban,
  },
  actions: {
    setActiveKanban({ commit }, payload) {
      commit("setActiveKanban", payload);
    },
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
    listBoards: (state) => state.active.boards,
    boardsOrder: (state) => state.active.boardsOrder,
    singleBoard: (state) => (boardId) => state.active.boards[boardId],
    singleTask: (state) => (boardId, taskId) => state.active.boards[boardId].tasks[taskId],
    selectedKanban: (state) => state.active,
  },
  mutations: {
    addNewTask(state, payload) {
      const { boardId, task } = payload;
      Vue.set(state.active.boards[boardId].tasks, task.uid, task);
    },
    addTask(state, payload) {
      const { boardId, taskId, task } = payload;

      if (task !== undefined) {
        Vue.set(state.active.boards[boardId].tasks, taskId, task);
      }
    },
    removeTask(state, payload) {
      const { boardId, taskId } = payload;
      Vue.delete(state.active.boards[boardId].tasks, taskId);
    },

    addSubTask(state, payload) {
      const { boardId, taskId, text } = payload;

      const newSubTask = {
        text,
        uid: getUuid(),
        completed: false,
      };

      state.active.boards[boardId].tasks[taskId].subTasks.push(newSubTask);
    },
    toggleSubTask(state, payload) {
      const { boardId, taskId, index, completed } = payload;

      state.active.boards[boardId].tasks[taskId].subTasks[index].completed = completed;
    },
    removeSubTask(state, payload) {
      const { boardId, taskId, index } = payload;

      state.active.boards[boardId].tasks[taskId].subTasks.splice(index, 1);
    },
    setActiveKanban(state, payload) {
      state.active = state.list[payload];
    },
  },
};

export default kanban;
