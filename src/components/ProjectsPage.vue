<template>
  <div v-frag>
    <div class="grid grid-cols-4 gap-8">
      <template v-for="project in projects">
        <project-card :key="project.uid" :project="project" />
      </template>
      <div class="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
        <router-link
          :to="{ name: 'project-create' }"
          type="button"
          class="group p-2 rounded-md shadow-card bg-white hover:bg-gray-50 ease-in transition-colors flex items-center"
        >
          <span class="text-sm font-medium tracking-wide text-indigo-600 mr-2">New project</span>
          <span class="bg-gray-100 p-1 group-hover:bg-gray-200 ease-in transition-colors rounded">
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
              class="feather feather-plus stroke-current w-4 h-4 text-indigo-600"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </router-link>
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
      <notification-container v-if="toggleNotification" :key="toggleNotification" />
    </transition>
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
      <router-view />
    </transition>
  </div>
</template>

<script>
import NotificationContainer from "@/components/NotificationContainer.vue";
import ProjectCard from "./project/ProjectCard.vue";

export default {
  name: "ProjectsPage",
  components: { ProjectCard, NotificationContainer },
  data() {
    return {};
  },
  computed: {
    toggleNotification() {
      return this.$store.getters.getNotificationActive;
    },
    projects() {
      return this.$store.getters.listProjects;
    },
  },
};
</script>
