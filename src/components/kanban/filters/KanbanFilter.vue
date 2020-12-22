<template>
  <div class="flex p-4 max-w-full items-center space-x-4">
    <kanban-filter-priority />
    <kanban-filter-type />
  </div>
</template>

<script>
import KanbanFilterPriority from "./KanbanFilterPriority.vue";
import KanbanFilterType from "./KanbanFilterType.vue";
export default {
  name: "KanbanBase",
  components: { KanbanFilterPriority, KanbanFilterType },
};
</script>
