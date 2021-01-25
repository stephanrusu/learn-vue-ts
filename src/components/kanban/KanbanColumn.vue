<template>
  <div class="flex-grid-col col-size-3">
    <div class="bg-white shadow-card rounded-md">
      <header
        :class="[
          'flex justify-between text-white p-3',
          boardDetails.color.active,
          tasksList.length > 0 ? 'rounded-tl-md rounded-tr-md' : 'rounded-md',
        ]"
      >
        <div class="text-white font-medium">{{ boardDetails.text }}</div>
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
  </div>
</template>

<script>
import KanbanCard from "./KanbanCard";
import { displayFilters } from "@/utils";
import { Boards } from "@/constants/enums";

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
    priorityFilter() {
      return this.$store.getters.priority;
    },
    typeFilter() {
      return this.$store.getters.type;
    },
    tasksList() {
      return Object.keys(displayFilters(this.boardColumn.tasks, this.priorityFilter, this.typeFilter));
    },
    boardDetails() {
      return Boards[this.boardColumn.board];
    },
  },
};
</script>
