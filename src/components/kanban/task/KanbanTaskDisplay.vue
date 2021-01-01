<template>
  <kanban-task-overlay>
    <div class="h-full flex flex-col bg-white">
      <!-- Replace with your content -->
      <main class="flex flex-col">
        <div class="p-6 border-b bg-gray-50">
          <div class="flex justify-between items-center pb-4">
            <div class="text-md font-medium text-gray-800">{{ projectTitle }} - {{ task.uid }}</div>
            <router-link :to="{ name: 'kanban' }" class="rounded-md text-gray-300 hover:text-white focus:outline-none">
              <span class="sr-only">Close panel</span>
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
                class="feather feather-x stroke-current text-gray-500"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </router-link>
          </div>
          <div class="flex items-center justify-between">
            <div
              :class="`rounded px-3 py-1 bg-${column.board.color}-500 text-xs font-medium tracking-wider text-white`"
            >
              {{ column.board.text }}
            </div>
            <div class="flex flex-row">
              <div
                :class="`rounded-tl rounded-bl px-3 py-1 ${task.priority.background.color} text-xs font-medium text-white`"
              >
                {{ task.priority.text }}
              </div>
              <div
                :class="`rounded-tr rounded-br px-3 py-1 ${task.type.background.color} text-xs font-medium text-white`"
              >
                {{ task.type.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col py-4 px-6">
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
          <div class="py-4 text-sm text-gray-500">
            {{ task.description }}
          </div>
        </div>
      </main>
      <div class="flex flex-row pb-6 px-6 mt-auto border-t pt-3">
        <button
          v-if="!isFirstBoard"
          type="button"
          :class="`flex flex-1 px-3 py-2 bg-${actionsBoard.prevBoard.board.color}-500 hover:bg-${actionsBoard.prevBoard.board.color}-600 items-center justify-center shadow-small rounded-md ease-in transition-colors`"
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
            :class="`feather chevron-left w-5 h-5 stroke-current text-white`"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <div :class="`font-medium text-white`">
            {{ actionsBoard.prevBoard.board.text }}
          </div>
        </button>
        <div v-if="!isFirstBoard && !isLastBoard" class="flex-none mx-3 border"></div>
        <button
          v-if="!isLastBoard"
          type="button"
          :class="`flex flex-1 px-3 py-2 bg-${actionsBoard.nextBoard.board.color}-500 hover:bg-${actionsBoard.nextBoard.board.color}-600 items-center justify-center shadow-small rounded-md ease-in transition-colors`"
          @click="moveTask(1)"
        >
          <div :class="`font-medium text-white`">
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
            :class="`feather chevron-right w-5 h-5 stroke-current text-white`"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <!-- /End replace -->
    </div>
  </kanban-task-overlay>
</template>

<script>
import KanbanTaskOverlay from "../KanbanTaskOverlay.vue";

export default {
  name: "KanbanTaskDispay",
  components: { KanbanTaskOverlay },
  computed: {
    projectTitle() {
      return this.$store.getters.listProject.title;
    },
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
