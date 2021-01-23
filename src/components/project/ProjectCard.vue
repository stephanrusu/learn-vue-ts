<template>
  <div class="bg-white shadow-card rounded-md p-4 h-64 flex flex-col">
    <header>
      <div class="flex items-center justify-between">
        <div
          v-if="project % 2 !== 0"
          class="rounded px-3 py-1 bg-green-100 text-xs font-medium tracking-wider text-green-800"
        >
          Finished
        </div>
        <div v-else class="rounded px-3 py-1 bg-orange-100 text-xs font-medium tracking-wider text-orange-800">
          Ongoing
        </div>
        <div class="relative">
          <div>
            <button
              id="options-menu"
              type="button"
              class="inline-flex justify-center px-2 py-1 hover:bg-gray-100"
              :class="{ 'bg-gray-100': optionsToggle }"
              aria-haspopup="true"
              aria-expanded="true"
              @click="optionsToggle = !optionsToggle"
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
                class="feather feather-more-horizontal w-5 h-5 stroke-current text-gray-700"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
            mode="out-in"
            appear
          >
            <div
              v-if="optionsToggle"
              class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div class="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button
                  class="rounded block w-full p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 text-left"
                  role="menuitem"
                  @click="changeTeamMembers"
                >
                  Manage people
                </button>
                <button
                  class="rounded block w-full p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 text-left"
                  role="menuitem"
                  @click="toggleOptionsDropdown"
                >
                  Edit project
                </button>
                <button
                  class="rounded block w-full p-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-800 text-left"
                  role="menuitem"
                  @click="deleteProject"
                >
                  Remove project
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="text-md font-medium my-2 text-gray-700">Project Endless {{ project }}</div>
    </header>
    <main>
      <div class="text-sm text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore in architecto nam labore, cupiditate.
      </div>
    </main>
    <footer class="flex flex-col justify-between mt-auto">
      <div class="flex flex-row items-center justify-between my-2">
        <div
          class="bg-indigo-400 flex items-center justify-center rounded-md shadow-small px-2 py-1 text-md text-white font-medium cursor-default"
        >
          MR
        </div>
        <router-link
          :to="{ name: 'kanban' }"
          type="button"
          class="text-indigo-600 hover:text-white px-4 py-2 rounded-md text-sm font-medium tracking-wide shadow-card bg-gray-100 hover:bg-indigo-500 ease-in transition-colors flex items-center"
        >
          Select
        </router-link>
      </div>
      <div class="flex flex-row items-center justify-between mt-2">
        <div class="flex flex-row items-center">
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
            class="feather feather-calendar w-4 h-4 stroke-current text-gray-400"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <div class="ml-2 text-xs text-gray-500 font-medium">{{ new Date() | taskDate }}</div>
        </div>
        <div class="flex flex-row items-center">
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
            class="feather feather-users w-4 h-4 stroke-current text-gray-400"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <div class="ml-2 text-xs text-gray-500 font-medium">4</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      optionsToggle: false,
    };
  },
  methods: {
    changeTeamMembers() {
      this.$router.push({ name: "project-team", params: { projectId: this.project } });
      this.toggleOptionsDropdown();
    },
    deleteProject() {
      this.$store.dispatch("toggleNotificationActive");
      this.toggleOptionsDropdown();
    },
    toggleOptionsDropdown() {
      this.optionsToggle = !this.optionsToggle;
    },
  },
};
</script>
