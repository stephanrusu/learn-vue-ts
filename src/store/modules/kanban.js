import initialKanban from "../../constants/initialKanban";

const kanban = {
  state: initialKanban,
  actions: {},
  getters: {
    getBoards: (state) => state.kanban.boards,
    getBoardsOrder: (state) => state.kanban.boardsOrder,
    getBoard: (state) => (boardId) => state.kanban.boards[boardId],
    getTask: (state) => (boardId, taskId) => state.kanban.boards[boardId].tasks[taskId],
  },
  mutations: {},
};

export default kanban;
