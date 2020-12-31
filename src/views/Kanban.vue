<template>
  <div class="px-4 pb-4 font-sans">
    <kanban-header />
    <kanban-page />
  </div>
</template>

<script>
import KanbanHeader from "@/components/kanban/KanbanHeader.vue";
import KanbanPage from "@/components/KanbanPage.vue";

export default {
  name: "Kanban",
  components: { KanbanHeader, KanbanPage },
};
</script>
