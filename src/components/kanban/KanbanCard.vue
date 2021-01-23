<template>
  <div class="px-3 border-b">
    <header class="flex flex-row items-center justify-between py-3 border-b">
      <router-link :to="{ name: 'task-view', params: { taskId } }">
        <div class="rounded px-3 py-1 bg-teal-100 text-xs font-medium tracking-wider text-teal-800">
          {{ projectTitle }}-{{ boardId }}
        </div>
      </router-link>
      <div class="flex flex-row">
        <div :class="['rounded-tl rounded-bl px-3 py-1 text-xs font-medium text-white', taskPriority.background.color]">
          {{ taskPriority.text }}
        </div>
        <div :class="['rounded-tr rounded-br px-3 py-1 text-xs font-medium text-white', taskType.background.color]">
          {{ taskType.text }}
        </div>
      </div>
    </header>
    <main class="flex flex-row py-3">
      <div :class="['w-1 rounded mr-3', boardColor.active]"></div>
      <div class="flex-1">
        <div class="flex flex-row">
          <router-link :to="{ name: 'task-view', params: { taskId } }" class="mb-4">
            <div class="font-medium text-sm tracking-wider text-gray-700 flex-1">
              {{ taskCard.title }}
            </div>
          </router-link>
          <div class="relative ml-2">
            <button
              id="options-menu"
              type="button"
              class="inline-flex justify-center px-2 py-1 hover:bg-gray-100"
              :class="{ 'bg-gray-100': taskOptionsToggle }"
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
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
              mode="out-in"
              appear
            >
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
                    Change assignee
                  </button>
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
            </transition>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex-1 flex flex-row space-x-2">
            <div class="flex flex-row text-xs items-center">
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
              <div class="ml-2 text-gray-500 font-medium">{{ taskCard.date | taskDate }}</div>
            </div>
            <div v-if="taskCard.subTasks.length > 0" class="flex flex-row text-xs items-center">
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
                class="feather feather-check-square w-4 h-4 stroke-current text-gray-400"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              <div class="ml-2 text-gray-500 font-medium">{{ taskCard.subTasks.length }}</div>
            </div>
            <div v-if="taskCard.comments.length > 0" class="flex flex-row text-xs items-center">
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
                class="feather feather-message-square w-4 h-4 stroke-current text-gray-400"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <div class="ml-2 text-gray-500 font-medium">{{ taskCard.comments.length }}</div>
            </div>
          </div>
          <users-assigned :users="taskCard.assigned" />
        </div>
      </div>
    </main>
    <footer class="flex flex-row py-3 border-t">
      <button
        v-if="!isFirstBoard"
        type="button"
        class="flex flex-1 py-2 bg-white hover:bg-gray-50 items-center justify-center ease-in transition-colors"
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
          class="feather chevron-left w-5 h-5 stroke-current text-gray-700"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div v-if="!isFirstBoard && !isLastBoard" class="flex-none mx-2 border"></div>
      <button
        v-if="!isLastBoard"
        type="button"
        class="flex flex-1 py-2 bg-white hover:bg-gray-50 items-center justify-center ease-in transition-colors"
        @click="moveTask(1)"
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
          class="feather chevron-right w-5 h-5 stroke-current text-gray-700"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </footer>
  </div>
</template>

<script>
import UsersAssigned from "./common/UsersAssigned.vue";
import { Boards, KanbanTypeFilter, KanbanPriorityFilter } from "@/constants/enums";

export default {
  name: "KanbanCard",
  components: { UsersAssigned },
  props: {
    boardId: {
      type: String,
      default: "",
    },
    taskId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      taskOptionsToggle: false,
    };
  },
  computed: {
    projectTitle() {
      return this.$store.getters.listProject.title;
    },
    taskCard() {
      return this.$store.getters.singleTask(this.boardId, this.taskId);
    },
    boardColor() {
      return Boards[this.$store.getters.singleBoard(this.boardId).board].color;
    },
    boardsOrder() {
      return this.$store.getters.boardsOrder;
    },
    isFirstBoard() {
      const boardIndex = this.boardsOrder.indexOf(this.boardId);
      return boardIndex === 0;
    },
    isLastBoard() {
      const boardIndex = this.boardsOrder.indexOf(this.boardId);
      return boardIndex === this.boardsOrder.length - 1;
    },

    taskType() {
      return KanbanTypeFilter[this.taskCard.type];
    },
    taskPriority() {
      return KanbanPriorityFilter[this.taskCard.priority];
    },
  },
  methods: {
    moveTask(direction) {
      const boardIndex = this.boardsOrder.indexOf(this.boardId);
      const newBoardId = this.boardsOrder[boardIndex + direction];
      const movingTask = { ...this.taskCard };

      this.$store.dispatch("removeTask", { boardId: this.boardId, taskId: this.taskId });
      this.$store.dispatch("addTask", { boardId: newBoardId, taskId: this.taskId, task: movingTask });
    },
  },
};
</script>
