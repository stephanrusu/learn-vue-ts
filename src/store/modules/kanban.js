import initialKanban from "../../constants/initialKanban";

const kanban = {
  state: initialKanban,
  actions: {},
  getters: {
    listBoards: (state) => state.boards,
    boardsOrder: (state) => state.boardsOrder,
    singleBoard: (state) => (boardId) => state.boards[boardId],
    singleTask: (state) => (boardId, taskId) => state.boards[boardId].tasks[taskId],
    listProject: (state) => state,
  },
  mutations: {},
};

export default kanban;
