<template>
  <main class="flex-grid-row">
    <template v-for="boardId in boardsOrder">
      <kanban-column :key="boardId" :board-id="boardId" />
    </template>
  </main>
</template>

<script>
import KanbanColumn from "./KanbanColumn.vue";

export default {
  name: "KanbanBoards",
  components: {
    KanbanColumn,
  },
  computed: {
    boardsOrder() {
      return this.$store.getters.boardsOrder;
    },
  },
};
</script>
