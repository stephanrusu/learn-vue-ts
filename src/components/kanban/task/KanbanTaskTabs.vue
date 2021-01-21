<template>
  <div>
    <div class="flex mt-3 mb-4">
      <template v-for="tab in tabs">
        <div
          :key="tab.key"
          :class="[
            'z-10 cursor-pointer text-center py-2 px-3 font-medium text-sm rounded',
            activeTab === tab.key ? 'text-white bg-indigo-500 shadow-small' : 'text-indigo-300 hover:text-indigo-600',
          ]"
          @click="activeTab = tab.key"
        >
          {{ tab.text }}
        </div>
      </template>
    </div>
    <div class="">
      <kanban-sub-tasks-list v-if="activeTab === 'subtasks'" :task-id="taskId" :board-id="boardId" />
      <kanban-comments-list v-if="activeTab === 'comments'" />
    </div>
  </div>
</template>

<script>
import KanbanCommentsList from "./KanbanCommentsList.vue";
import KanbanSubTasksList from "./KanbanSubTasksList.vue";

export default {
  name: "KanbanTaskTabs",
  components: { KanbanSubTasksList, KanbanCommentsList },
  props: {
    taskId: {
      type: String,
      default: "",
      required: true,
    },
    boardId: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      activeTab: "",
      tabs: [
        {
          text: "Subtasks",
          key: "subtasks",
        },
        {
          text: "Comments",
          key: "comments",
        },
        {
          text: "Files",
          key: "files",
        },
      ],
    };
  },
};
</script>
