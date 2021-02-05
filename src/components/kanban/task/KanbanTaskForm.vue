<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-t-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Task information</div>
          <div class="text-sm text-gray-500">Get started by filling the information below to create a new task</div>
        </div>
      </div>
    </template>
    <template #main>
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
        <div v-if="userSelect" :key="userSelect" class="flex flex-col">
          <users-select :users="users" :multiple="true" />
        </div>
        <div v-else :key="userSelect" class="flex flex-col p-4 space-y-4">
          <div class="space-y-2">
            <label for="taskTitle" class="text-sm font-medium text-gray-700">Title</label>
            <input
              id="taskTitle"
              type="text"
              name="task-title"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
            />
          </div>
          <div class="space-y-2">
            <label for="taskDescription" class="text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="taskDescription"
              name="task-title"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium resize-none"
              rows="3"
            ></textarea>
          </div>
          <div class="space-y-2">
            <div class="text-sm font-medium text-gray-700">Type</div>
            <div class="flex items-center">
              <template v-for="typeValue in typeValues">
                <button
                  :key="typeValue.key"
                  :class="[
                    'flex-1 px-3 py-2 text-sm font-medium border -mr-px',
                    findRounded(typeValues, typeValue.key),
                    selectedType === typeValue.key
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-500 z-40 shadow-medium hover:text-indigo-600'
                      : 'bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-500 border-gray-300 shadow-small',
                  ]"
                  type="button"
                  @click="selectedType = typeValue.key"
                >
                  {{ typeValue.text }}
                </button>
              </template>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-sm font-medium text-gray-700">Priority</div>
            <div class="flex items-center">
              <template v-for="priorityValue in priorityValues">
                <button
                  :key="priorityValue.key"
                  :class="[
                    'flex-1 px-3 py-2 text-sm font-medium border -mr-px',
                    findRounded(priorityValues, priorityValue.key),
                    selectedPriority === priorityValue.key
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-500 z-40 shadow-medium hover:text-indigo-600'
                      : 'bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-500 border-gray-300 shadow-small',
                  ]"
                  type="button"
                  @click="selectedPriority = priorityValue.key"
                >
                  {{ priorityValue.text }}
                </button>
              </template>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-sm font-medium text-gray-700">Assigned to</div>
            <div class="flex items-center space-x-2">
              <user-avatar>SR</user-avatar>
              <button
                type="button"
                class="rounded-md p-2 hover:bg-gray-50 ease-in transition-colors border-2 border-dashed border-gray-200"
                @click="toggleSelectUser"
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
                  class="feather feather-plus stroke-current w-4 h-4 text-gray-500"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </template>
    <template #footer>
      <div v-if="userSelect" class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 ease-in transition-colors"
          @click="toggleSelectUser"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="toggleSelectUser"
        >
          Select user
        </button>
      </div>
      <div v-else class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-gray-100 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Create task
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import KanbanOverlay from "@/components/KanbanOverlay.vue";
import UsersSelect from "@/components/kanban/common/UsersSelect.vue";
import { KanbanType, KanbanPriority } from "@/constants/enums";
import listUsers from "@/constants/listUsers";
import UserAvatar from "../common/UserAvatar.vue";

export default {
  name: "KanbanTaskForm",
  components: { KanbanOverlay, UsersSelect, UserAvatar },
  data() {
    return {
      userSelect: false,
      selectedType: "",
      selectedPriority: "",
      typeValues: KanbanType,
      priorityValues: KanbanPriority,
      users: listUsers,
    };
  },
  methods: {
    toggleSelectUser() {
      this.userSelect = !this.userSelect;
    },
    findRounded(values, key) {
      let typeKeys = Object.keys(values);
      let indexKey = typeKeys.indexOf(key);

      if (indexKey === 0) {
        return "rounded-l";
      }

      if (indexKey === typeKeys.length - 1) {
        return "rounded-r";
      }

      return "";
    },
  },
};
</script>
