<template>
  <div class="mb-4">
    <div class="mt-4 shadow-card bg-white p-2 flex items-center justify-between rounded-sm">
      <div class="flex items-center">
        <router-link
          :to="{ name: 'projects' }"
          class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium ease-in transition-colors"
        >
          Projects
        </router-link>
        <div class="mx-1 cursor-default">
          <svg
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            class="feather chevron-right w-5 h-5 stroke-current text-gray-400"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
        <router-link
          :to="{ name: 'kanban', params: { projectId: selectedProject.uid } }"
          class="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium ease-in transition-colors"
        >
          {{ selectedProject.title }}
        </router-link>
      </div>
      <div class="space-x-4 flex items-center">
        <router-link
          :to="{ name: 'task-create' }"
          class="group flex items-center justify-between px-2 py-1.5 rounded-md shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors mr-4"
        >
          <span class="text-sm font-medium tracking-wide text-white mr-2">Add new</span>
          <span class="bg-indigo-400 rounded p-1 group-hover:bg-indigo-500 ease-in transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-plus stroke-current w-4 h-4 text-indigo-50"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </router-link>
        <router-link :to="{ name: 'settings' }" class="bg-white hover:bg-gray-100 p-2 rounded">
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
            class="feather feather-sliders stroke-current w-5 h-5 text-gray-700 stroke-1.5"
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
        </router-link>
        <button
          type="button"
          class="hover:bg-gray-100 p-2 rounded"
          :class="[isFilterOpen ? 'bg-gray-100' : 'bg-white']"
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
            class="feather feather-filter-2 w-5 h-5 stroke-current text-gray-700"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    >
      <div v-if="isFilterOpen" class="bg-white shadow-card border-t">
        <kanban-filter />
      </div>
    </transition>
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
  computed: {
    selectedProject() {
      return this.$store.getters.selectedProject(this.$route.params.projectId);
    },
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
