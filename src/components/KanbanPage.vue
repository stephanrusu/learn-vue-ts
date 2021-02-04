<template>
  <div v-frag>
    <kanban-boards />
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
import KanbanBoards from "./kanban/KanbanBoards.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  name: "KanbanPage",
  components: { KanbanBoards, NotificationContainer },
  data() {
    return {
      showModal: false,
    };
  },
  computed: {
    toggleNotification() {
      return this.$store.getters.getNotificationActive;
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
};
</script>
