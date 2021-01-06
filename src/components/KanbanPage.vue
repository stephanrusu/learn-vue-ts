<template>
  <div>
    <kanban-boards />
    <transition name="fade" mode="out-in" :duration="300" appear>
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
