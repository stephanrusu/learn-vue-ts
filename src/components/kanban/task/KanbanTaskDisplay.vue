<template>
  <main class="pb-4 font-sans mt-4 shadow-card bg-white py-2 flex flex-col">
    <div class="flex items-center justify-between py-3 px-4 border-b">
      <div :class="`rounded px-3 py-1 bg-${column.board.color}-500 text-xs font-medium tracking-wider text-white`">
        {{ column.board.text }}
      </div>
      <div class="text-md text-gray-800 font-medium tracking-wide">Kanban - {{ task.uid }}</div>
      <div class="flex flex-row">
        <div
          :class="`rounded-tl rounded-bl px-3 py-1 ${task.priority.background.color} text-xs font-medium text-white`"
        >
          {{ task.priority.text }}
        </div>
        <div :class="`rounded-tr rounded-br px-3 py-1 ${task.type.background.color} text-xs font-medium text-white`">
          {{ task.type.text }}
        </div>
      </div>
    </div>
    <div class="flex flex-col py-3 px-4 border-b">
      <div class="flex items-start justify-between">
        <div>
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">
            {{ task.title }}
          </div>
          <div class="text-xs text-gray-400">
            {{ task.date | taskDate }}
          </div>
        </div>
        <div class="bg-teal-400 p-2 rounded shadow-small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user stroke-current text-white stroke-2 w-5 h-5"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>
      <div class="py-4 text-md text-gray-500">
        {{ task.description }}
      </div>
      <div class="flex flex-row py-3">
        <button
          v-if="!isFirstBoard"
          type="button"
          :class="`flex flex-1 px-3 py-2 bg-${actionsBoard.prevBoard.board.color}-50 hover:bg-${actionsBoard.prevBoard.board.color}-100 items-center justify-center shadow-sm`"
          @click="moveTask(-1)"
        >
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            :class="`feather chevron-left w-5 h-5 stroke-current text-${actionsBoard.prevBoard.board.color}-600`"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <div :class="`font-medium text-${actionsBoard.prevBoard.board.color}-500`">
            {{ actionsBoard.prevBoard.board.text }}
          </div>
        </button>
        <div v-if="!isFirstBoard && !isLastBoard" class="flex-none mx-3 border"></div>
        <button
          v-if="!isLastBoard"
          type="button"
          :class="`flex flex-1 px-3 py-2 bg-${actionsBoard.nextBoard.board.color}-50 hover:bg-${actionsBoard.nextBoard.board.color}-100 items-center justify-center shadow-sm`"
          @click="moveTask(1)"
        >
          <div :class="`font-medium text-${actionsBoard.nextBoard.board.color}-500`">
            {{ actionsBoard.nextBoard.board.text }}
          </div>
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            :class="`feather chevron-right w-5 h-5 stroke-current text-${actionsBoard.nextBoard.board.color}-600`"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "KanbanTaskDisplay",
  computed: {
    boards() {
      return this.$store.getters.listBoards;
    },
    column() {
      const taskId = this.$route.params.taskId;

      const getBoard = (taskId) => {
        // ignore key as there is an uuid inside a board
        for (const [, board] of Object.entries(this.boards)) {
          if (board.tasks[taskId] !== undefined) {
            return board;
          }
        }
        // if nothing, return first board
        return this.boards[0];
      };
      const board = getBoard(taskId);
      return board;
    },
    task() {
      const taskId = this.$route.params.taskId;
      return this.column.tasks[taskId];
    },
    boardsOrder() {
      return this.$store.getters.boardsOrder;
    },
    isFirstBoard() {
      const boardId = this.column.uid;
      const boardIndex = this.boardsOrder.indexOf(boardId);
      return boardIndex === 0;
    },
    isLastBoard() {
      const boardId = this.column.uid;
      const boardIndex = this.boardsOrder.indexOf(boardId);
      return boardIndex === this.boardsOrder.length - 1;
    },
    actionsBoard() {
      const boardId = this.column.uid;
      const boardIndex = this.boardsOrder.indexOf(boardId);

      return {
        prevBoard: this.boards[this.boardsOrder[boardIndex - 1]],
        nextBoard: this.boards[this.boardsOrder[boardIndex + 1]],
      };
    },
  },
  methods: {
    moveTask(direction) {
      const boardId = this.column.uid;
      const taskId = this.$route.params.taskId;
      const boardIndex = this.boardsOrder.indexOf(boardId);
      const newBoardId = this.boardsOrder[boardIndex + direction];
      const movingTask = { ...this.task };

      this.$store.dispatch("removeTask", { boardId, taskId });
      this.$store.dispatch("addTask", { boardId: newBoardId, taskId, task: movingTask });
    },
  },
};
</script>

<style lang="scss" scoped></style>
