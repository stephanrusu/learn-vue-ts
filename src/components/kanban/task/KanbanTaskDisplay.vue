<template>
  <kanban-task-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-tl-md rounded-tr-md shadow-small">
        <div class="flex items-start justify-between pb-4">
          <div>
            <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">
              {{ task.title }}
            </div>
            <div class="flex flex-row items-center">
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
                class="feather feather-calendar w-4 h-4 stroke-current text-gray-400"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div class="ml-2 text-xs text-gray-400 font-medium">{{ task.date | taskDate }}</div>
            </div>
          </div>
          <users-assigned :users="task.assigned" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="flex flex-row pr-4">
              <div
                :class="[
                  task.priority.background.color,
                  'rounded-tl rounded-bl px-3 py-1 text-xs font-medium text-white',
                ]"
              >
                {{ task.priority.text }}
              </div>
              <div
                :class="[task.type.background.color, 'rounded-tr rounded-br px-3 py-1 text-xs font-medium text-white']"
              >
                {{ task.type.text }}
              </div>
            </div>
            <div
              :class="[
                column.board.color.active,
                'rounded px-3 py-1 bg-${}-500 text-xs font-medium tracking-wider text-white',
              ]"
            >
              {{ column.board.text }}
            </div>
          </div>
          <div class="relative">
            <div>
              <button
                id="options-menu"
                type="button"
                :class="[
                  'inline-flex justify-center px-2 py-1 hover:bg-gray-100 focus:outline-none',
                  taskOptionsToggle ? 'bg-gray-100' : '',
                ]"
                aria-haspopup="true"
                aria-expanded="true"
                @click="taskOptionsToggle = !taskOptionsToggle"
              >
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
                  class="feather feather-more-horizontal w-5 h-5 stroke-current text-gray-700"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
            <div
              v-if="taskOptionsToggle"
              class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div class="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  class="rounded block w-full p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 text-left"
                  role="menuitem"
                  @click="taskOptionsToggle = !taskOptionsToggle"
                >
                  Edit task
                </button>
                <button
                  class="rounded block w-full p-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-800 text-left"
                  role="menuitem"
                  @click="taskOptionsToggle = !taskOptionsToggle"
                >
                  Remove task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #main>
      <div class="flex flex-col p-4">
        <div class="text-md text-gray-500">
          {{ task.description }}
        </div>
        <kanban-task-tabs :task-id="task.uid" :board-id="column.uid" />
      </div>
    </template>
    <template #footer>
      <div class="flex-1 flex flex-row max-w-xs">
        <button
          v-if="!isFirstBoard"
          type="button"
          :class="[
            'flex flex-1 px-3 py-2 items-center justify-center shadow-small rounded-md ease-in transition-colors',
            `${actionsBoard.prevBoard.board.color.active} hover:${actionsBoard.prevBoard.board.color.hover}`,
          ]"
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
            class="feather chevron-left w-5 h-5 stroke-current text-white"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <div class="font-medium text-white text-sm">
            {{ actionsBoard.prevBoard.board.text }}
          </div>
        </button>
        <div v-if="!isFirstBoard && !isLastBoard" class="flex-none mx-3 border"></div>
        <button
          v-if="!isLastBoard"
          type="button"
          :class="[
            `flex flex-1 px-3 py-2 items-center justify-center shadow-small rounded-md ease-in transition-colors`,
            `${actionsBoard.nextBoard.board.color.active} hover:${actionsBoard.nextBoard.board.color.hover}`,
          ]"
          @click="moveTask(1)"
        >
          <div class="font-medium text-white text-sm">
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
            class="feather chevron-right w-5 h-5 stroke-current text-white"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </template>
  </kanban-task-overlay>
</template>

<script>
import UsersAssigned from "../common/UsersAssigned.vue";
import KanbanTaskOverlay from "../KanbanTaskOverlay.vue";
import KanbanTaskTabs from "./KanbanTaskTabs.vue";

export default {
  name: "KanbanTaskDispay",
  components: { KanbanTaskOverlay, UsersAssigned, KanbanTaskTabs },
  data() {
    return {
      taskOptionsToggle: false,
    };
  },
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
