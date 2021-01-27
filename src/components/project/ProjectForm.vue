<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-tl-md rounded-tr-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Project infomation</div>
          <div class="text-sm text-gray-500">Get started by filling the information below to create a new project</div>
        </div>
      </div>
    </template>
    <template #main>
      <div class="flex flex-col p-4 space-y-4">
        <div class="">
          <label for="projectTitle" class="text-sm font-medium text-gray-700">Title</label>
          <input
            id="projectTitle"
            type="text"
            name="project-title"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2"
          />
        </div>
        <div class="">
          <label for="projectDescription" class="text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="projectDescription"
            name="project-description"
            class="focus:border-indigo-300 mt-2 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-small-2 resize-none"
            rows="3"
          ></textarea>
        </div>
        <div class="">
          <label for="taskTitle" class="text-sm font-medium text-gray-700">Team members</label>
          <div class="flex items-center mt-2">
            <div class="flex items-center space-x-2">
              <div
                data-v-925b48ac=""
                class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded shadow-small px-2 py-1 text-md text-white font-medium cursor-default"
              >
                MR
              </div>
              <div
                data-v-925b48ac=""
                class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded shadow-small px-2 py-1 text-md text-white font-medium cursor-default"
              >
                SR
              </div>
            </div>
            <button
              type="button"
              class="rounded-full p-2 hover:bg-gray-50 ease-in transition-colors border-2 border-dashed border-gray-200 ml-2"
            >
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
                class="feather feather-plus stroke-current w-4 h-4 text-gray-500"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
        >
          Create project
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import KanbanOverlay from "../KanbanOverlay.vue";
export default {
  name: "ProjectForm",
  components: { KanbanOverlay },
};
</script>

<style lang="scss" scoped></style>
