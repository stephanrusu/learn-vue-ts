<template>
  <div class="mb-4">
    <div class="mt-4 shadow-card bg-white px-4 py-2 flex items-center justify-between rounded-sm">
      <router-link :to="{ name: 'kanban' }" class="py-2">
        <h1 class="text-md font-medium leading-tight text-gray-900">Dashboard</h1>
      </router-link>
      <div v-if="hideActions" class="space-x-4">
        <button type="button" class="bg-white hover:bg-gray-100 p-1.5" @click="isModalOpen = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-sliders stroke-current text-gray-700 stroke-1.5"
          >
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
        </button>
        <button
          type="button"
          :class="`${isFilterOpen ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100 p-1.5`"
          @click="isFilterOpen = !isFilterOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-filter-2 stroke-current text-gray-700"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isFilterOpen" class="bg-white shadow-card border-t">
      <kanban-filter />
    </div>
  </div>
</template>

<script>
import KanbanFilter from "./filters/KanbanFilter.vue";
export default {
  name: "KanbanHeader",
  components: { KanbanFilter },
  data() {
    return {
      isFilterOpen: false,
      hideActions: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.hideActions = newVal.name === "kanban" ? true : false;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
