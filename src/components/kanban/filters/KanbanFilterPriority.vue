<template>
  <div class="flex items-center space-x-3 flex-auto">
    <label class="text-sm font-medium leading-tight text-gray-800">Priority</label>
    <template v-for="filter in priorityFilters">
      <button
        :key="filter.text"
        type="button"
        :class="`${filter.color} text-white px-5 py-2 rounded-md text-xs font-medium tracking-wide shadow-small`"
      >
        {{ filter.text }}
      </button>
    </template>
  </div>
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
