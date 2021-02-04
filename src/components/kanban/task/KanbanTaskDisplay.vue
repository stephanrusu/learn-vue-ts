<template>
  <kanban-overlay>
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
          <task-options :task-id="task.uid" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="rounded px-3 py-1 bg-teal-100 text-xs font-medium tracking-wider text-teal-800">
              {{ task.code }}
            </div>
            <div
              :class="[columnDetails.color.active, 'rounded px-3 py-1 text-xs font-medium tracking-wider text-white']"
            >
              {{ columnDetails.text }}
            </div>
            <div class="flex flex-row">
              <div
                :class="[
                  taskPriority.background.color,
                  'rounded-tl rounded-bl px-3 py-1 text-xs font-medium text-white',
                ]"
              >
                {{ taskPriority.text }}
              </div>
              <div
                :class="[taskType.background.color, 'rounded-tr rounded-br px-3 py-1 text-xs font-medium text-white']"
              >
                {{ taskType.text }}
              </div>
            </div>
          </div>

          <users-assigned :users="task.assigned" />
        </div>
      </div>
    </template>
    <template #main>
      <kanban-task-tabs :task="task" :board-id="column.uid" />
    </template>
    <template #footer>
      <div class="flex-1 flex flex-row max-w-xs">
        <button
          v-if="!isFirstBoard"
          type="button"
          :class="[
            'flex flex-1 px-3 py-2 items-center justify-center shadow-small rounded-md ease-in transition-colors',
            `${actionsBoardDetails.prevBoard.color.active} hover:${actionsBoardDetails.prevBoard.color.hover}`,
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
            {{ actionsBoardDetails.prevBoard.text }}
          </div>
        </button>
        <div v-if="!isFirstBoard && !isLastBoard" class="flex-none mx-3 border"></div>
        <button
          v-if="!isLastBoard"
          type="button"
          :class="[
            `flex flex-1 px-3 py-2 items-center justify-center shadow-small rounded-md ease-in transition-colors`,
            `${actionsBoardDetails.nextBoard.color.active} hover:${actionsBoardDetails.nextBoard.color.hover}`,
          ]"
          @click="moveTask(1)"
        >
          <div class="font-medium text-white text-sm">
            {{ actionsBoardDetails.nextBoard.text }}
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
  </kanban-overlay>
</template>

<script>
import UsersAssigned from "@/components/kanban/common/UsersAssigned.vue";
import KanbanOverlay from "@/components/KanbanOverlay.vue";
import KanbanTaskTabs from "./KanbanTaskTabs.vue";
import { Boards, KanbanTypeFilter, KanbanPriorityFilter } from "@/constants/enums";
import TaskOptions from "@/components/kanban/common/TaskOptions.vue";

export default {
  name: "KanbanTaskDispay",
  components: { KanbanOverlay, UsersAssigned, KanbanTaskTabs, TaskOptions },
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
    actionsBoardDetails() {
      const boardId = this.column.uid;
      const boardIndex = this.boardsOrder.indexOf(boardId);

      return {
        prevBoard: this.getBoardDetails(this.boards[this.boardsOrder[boardIndex - 1]]),
        nextBoard: this.getBoardDetails(this.boards[this.boardsOrder[boardIndex + 1]]),
      };
    },

    taskType() {
      return KanbanTypeFilter[this.task.type];
    },
    taskPriority() {
      return KanbanPriorityFilter[this.task.priority];
    },
    columnDetails() {
      return Boards[this.column.board];
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
    getBoardDetails(boardData) {
      if (boardData !== undefined) {
        return Boards[boardData.board];
      }

      return null;
    },
  },
};
</script>
