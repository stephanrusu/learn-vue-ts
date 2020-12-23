<template>
  <div class="flex-1">
    <div class="bg-white shadow-card rounded-md">
      <header
        :class="`flex justify-between bg-${boardColumn.board.color}-500 text-white p-3 rounded-tl-md rounded-tr-md`"
      >
        <div class="text-white font-medium">{{ boardColumn.board.text }}</div>
        <span class="bg-white text-gray-700 h-6 px-2 rounded-sm text-xs font-medium inline-flex items-center">
          {{ tasksList.length }}
        </span>
      </header>
      <main>
        <template v-for="taskId in tasksList">
          <kanban-card :key="taskId" :board-id="boardId" :task-id="taskId" />
        </template>
      </main>
    </div>
    <footer v-if="boardColumn.allowNew" class="py-3 w-full">
      <button
        type="button"
        class="bg-blue-50 text-blue-500 hover:bg-blue-100 px-3 py-2 rounded-md text-sm font-medium w-full"
      >
        Add new task
      </button>
    </footer>
  </div>
</template>

<script>
import KanbanCard from "./KanbanCard";

export default {
  name: "KanbanColumn",
  components: {
    KanbanCard,
  },
  props: {
    boardId: {
      type: String,
      default: "",
    },
  },
  computed: {
    boardColumn() {
      return this.$store.getters.singleBoard(this.boardId);
    },
    tasksList() {
      return Object.keys(this.boardColumn.tasks);
    },
  },
};
</script>
