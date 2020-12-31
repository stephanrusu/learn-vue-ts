<template>
  <div>
    <kanban-boards />
  </div>
</template>

<script>
import KanbanBoards from "./kanban/KanbanBoards.vue";

export default {
  name: "KanbanPage",
  components: { KanbanBoards },
};
</script>
