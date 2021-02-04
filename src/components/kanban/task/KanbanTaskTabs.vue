<template>
  <div class="px-4 mt-2">
    <div class="mb-4 flex">
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
    <transition
      appear
      enter-active-class="transition ease-in-out duration-500"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in-out duration-500"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      tag="div"
      class="relative"
    >
      <div v-if="activeTab === 'description'" class="flex flex-col">
        <div class="text-md text-gray-500">
          {{ task.description }}
        </div>
      </div>
      <kanban-sub-tasks-list v-if="activeTab === 'subtasks'" :key="activeTab" :task-id="task.uid" :board-id="boardId" />
      <kanban-comments-list v-if="activeTab === 'comments'" :key="activeTab" />
    </transition>
  </div>
</template>

<script>
import KanbanCommentsList from "./KanbanCommentsList.vue";
import KanbanSubTasksList from "./KanbanSubTasksList.vue";

export default {
  name: "KanbanTaskTabs",
  components: { KanbanSubTasksList, KanbanCommentsList },
  props: {
    task: {
      type: Object,
      default() {
        return {};
      },
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
      activeTab: "description",
      tabs: [
        {
          text: "Description",
          key: "description",
        },
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
