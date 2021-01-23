<template>
  <div>
    <div class="grid grid-cols-4 gap-8">
      <template v-for="n in 7">
        <project-card :key="n" :project="n" />
      </template>
      <div class="bg-gray-100 rounded-md p-4 h-64 flex items-center justify-center">
        <button
          type="button"
          class="text-indigo-600 px-4 py-2 rounded-md text-sm font-medium tracking-wide shadow-card bg-white hover:bg-gray-50 ease-in transition-colors flex items-center"
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
            class="feather feather-plus stroke-current w-5 h-5 text-indigo-600 mr-2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>New project</span>
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
  },
};
</script>
