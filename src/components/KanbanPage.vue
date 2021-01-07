<template>
  <div class="">
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
      <router-view />
    </transition>
  </div>
</template>

<script>
import KanbanBoards from "./kanban/KanbanBoards.vue";

export default {
  name: "KanbanPage",
  components: { KanbanBoards },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
