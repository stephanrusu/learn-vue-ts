<template>
  <div></div>
</template>

<script>
import { KanbanPriorityFilter } from "@/constants/enums";
export default {
  name: "KanbanFilterPriority",
  data() {
    return {
      priorityFilters: KanbanPriorityFilter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
