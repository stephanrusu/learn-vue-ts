<template>
  <div class="flex items-center space-x-3 flex-auto">
    <label class="text-sm font-medium leading-tight text-gray-800">Priority</label>
    <template v-for="filter in priorityFilters">
      <kanban-filter-button
        :key="filter.key"
        :filter-type="filter"
        :is-active="selectedFilter === filter.key"
        @selectFilter="updateFilter"
      />
    </template>
  </div>
</template>

<script>
import { KanbanPriorityFilter } from "@/constants/enums";
import KanbanFilterButton from "./KanbanFilterButton.vue";

export default {
  name: "KanbanFilterPriority",
  components: { KanbanFilterButton },
  data() {
    return {
      priorityFilters: KanbanPriorityFilter,
    };
  },
  computed: {
    selectedFilter() {
      return this.$store.getters.priority;
    },
  },
  methods: {
    updateFilter(value) {
      this.$store.dispatch("setPriorityFilter", { filter: value });
    },
  },
};
</script>
