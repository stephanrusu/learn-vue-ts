<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-t-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Project information</div>
          <div class="text-sm text-gray-500">Get started by filling the information below to create a new project</div>
        </div>
      </div>
    </template>
    <template #main>
      <transition
        appear
        enter-active-class="transition ease-in-out duration-500"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-500"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
        tag="div"
        class="relative"
      >
        <div v-if="membersSelect" :key="membersSelect" class="flex flex-col">
          <users-select :users="users" :multiple="true" />
        </div>
        <div v-else :key="membersSelect" class="flex flex-col p-4 space-y-3">
          <div class="space-y-2">
            <label for="projectTitle" class="text-sm font-medium text-gray-700">Title</label>
            <input
              id="projectTitle"
              type="text"
              name="project-title"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
            />
          </div>
          <div class="space-y-2">
            <label for="projectDescription" class="text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="projectDescription"
              name="project-description"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium resize-none"
              rows="3"
            ></textarea>
          </div>
          <div class="space-y-2">
            <label for="taskTitle" class="text-sm font-medium text-gray-700">Team members</label>
            <div class="flex items-center">
              <div class="flex items-center space-x-2">
                <user-avatar>MR</user-avatar>
                <user-avatar>SR</user-avatar>
              </div>
              <button
                type="button"
                class="rounded-md p-2 hover:bg-gray-50 ease-in transition-colors border-2 border-dashed border-gray-200 ml-2"
                @click="toggleSelectMembers"
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
          <div class="">
            <label for="projectDescription" class="text-sm font-medium text-gray-700">Boards</label>
          </div>
        </div>
      </transition>
    </template>
    <template #footer>
      <div v-if="membersSelect" class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-gray-100 ease-in transition-colors"
          @click="toggleSelectMembers"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="toggleSelectMembers"
        >
          Select team
        </button>
      </div>
      <div v-else class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-gray-100 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Create project
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import UsersSelect from "@/components/kanban/common/UsersSelect.vue";
import KanbanOverlay from "../KanbanOverlay.vue";
import UserAvatar from "../kanban/common/UserAvatar.vue";
import listUsers from "@/constants/listUsers";
export default {
  name: "ProjectForm",
  components: { KanbanOverlay, UsersSelect, UserAvatar },
  data() {
    return {
      membersSelect: false,
      users: listUsers,
    };
  },
  methods: {
    toggleSelectMembers() {
      this.membersSelect = !this.membersSelect;
    },
  },
};
</script>

<style lang="scss" scoped></style>
