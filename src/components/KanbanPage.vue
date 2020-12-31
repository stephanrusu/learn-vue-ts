<template>
  <div>
    <kanban-boards />
    <div v-if="showModal">
      <router-view />
    </div>
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
