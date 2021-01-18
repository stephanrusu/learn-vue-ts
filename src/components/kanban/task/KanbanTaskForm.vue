<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-tl-md rounded-tr-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">New task</div>
          <div class="text-sm text-gray-600">Get started by filling the information below to create a new task</div>
        </div>
      </div>
    </template>
    <template #main>
      <div class="flex flex-col p-4">
        <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Demo</div>
      </div>
    </template>
    <template #footer> Test </template>
  </kanban-overlay>
</template>

<script>
import KanbanOverlay from "@/components/KanbanOverlay.vue";
export default {
  name: "KanbanTaskForm",
  components: { KanbanOverlay },
};
</script>
