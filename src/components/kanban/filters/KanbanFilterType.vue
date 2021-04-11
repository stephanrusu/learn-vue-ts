<template>
  <div class="flex items-center space-x-3 flex-auto">
    <label class="text-sm font-medium leading-tight text-gray-800">Type</label>
    <template v-for="filter in typeFilters">
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
import { KanbanTypeFilter } from "@/constants/enums";
import KanbanFilterButton from "./KanbanFilterButton.vue";

export default {
  name: "KanbanFilterType",
  components: { KanbanFilterButton },
  data() {
    return {
      typeFilters: KanbanTypeFilter,
    };
  },
  computed: {
    selectedFilter() {
      return this.$store.getters.type;
    },
  },
  methods: {
    updateFilter(value) {
      this.$store.dispatch("setTypeFilter", { filter: value });
    },
  },
};
</script>
