<template>
  <div class="px-4 pb-4 font-sans">
    <kanban-header />
    <router-view />
  </div>
</template>

<script>
import KanbanHeader from "../components/kanban/KanbanHeader.vue";

export default {
  name: "Kanban",
  components: { KanbanHeader },
};
</script>
