<template>
  <div>
    <div class="mt-2 mb-4 flex">
      <div class="flex flex-row space-x-2">
        <template v-for="tab in tabs">
          <div
            :key="tab.key"
            :class="[
              'z-10 cursor-pointer text-center p-2 font-medium text-sm',
              activeTab === tab.key
                ? 'text-indigo-500 hover:text-indigo-600 border-b-2 border-indigo-500 shadow-small hover:border-indigo-600'
                : 'text-gray-400 hover:text-gray-500 hover:border-b hover:border-gray-400',
            ]"
            @click="activeTab = tab.key"
          >
            {{ tab.text }}
          </div>
        </template>
      </div>
    </div>
    <transition-group
      enter-active-class="transition-opacity ease-in-out duration-750"
      enter-class="opacity-0"
      enter-to-class="opacity-100 absolute"
      leave-active-class="transition-opacity ease-in-out duration-750"
      leave-class="opacity-100"
      leave-to-class="opacity-0 absolute"
      mode="out-in"
      appear
      tag="div"
      class="relative"
    >
      <kanban-sub-tasks-list v-if="activeTab === 'subtasks'" :key="activeTab" :task-id="taskId" :board-id="boardId" />
      <kanban-comments-list v-if="activeTab === 'comments'" :key="activeTab" />
    </transition-group>
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
