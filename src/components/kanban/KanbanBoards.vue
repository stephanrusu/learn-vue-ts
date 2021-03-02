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
    selectedProject() {
      return this.$store.getters.selectedProject(this.$route.params.projectId);
    },
    boardsOrder() {
      return this.$store.getters.boardsOrder;
    },
  },
  mounted() {
    this.$store.dispatch("setActiveKanban", this.selectedProject.kanbanId);
  },
};
</script>
