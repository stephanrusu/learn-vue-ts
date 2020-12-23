<template>
  <div class="flex items-center space-x-3 flex-auto">
    <label class="text-sm font-medium leading-tight text-gray-800">Type</label>
    <template v-for="filter in typeFilters">
      <kanban-filter-button :key="filter.text" :filter-type="filter" />
    </template>
  </div>
</template>

<script>
import { KanbanTypeFilter } from "@/constants/enums";
import KanbanFilterButton from "./KanbanFilterButton.vue";
export default {
  name: "KanbanFilterPriority",
  components: { KanbanFilterButton },
  data() {
    return {
      typeFilters: KanbanTypeFilter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
