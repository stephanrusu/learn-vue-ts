<template>
  <div>
    <div class="">
      <div class="text-sm font-medium text-gray-700">Type</div>
      <div class="flex items-center space-x-4 mt-3">
        <template v-for="typeValue in typeValues">
          <button
            :key="typeValue.key"
            :class="[
              'flex-1 rounded px-3 py-2 text-sm font-medium text-white shadow-small',
              selectedType === typeValue.key
                ? typeValue.background.color
                : 'bg-gray-100 text-gray-400 bg-opacity-75 hover:bg-gray-200 hover:bg-opacity-75 hover:text-gray-500',
            ]"
            type="button"
            @click="selectedType = typeValue.key"
          >
            {{ typeValue.text }}
          </button>
        </template>
      </div>
    </div>
    <div class="">
      <div class="text-sm font-medium text-gray-700">Priority</div>
      <div class="flex items-center space-x-4 mt-3">
        <template v-for="priorityValue in priorityValues">
          <button
            :key="priorityValue.key"
            :class="[
              'flex-1 rounded px-3 py-2 text-sm font-medium text-white shadow-small',
              selectedPriority === priorityValue.key
                ? priorityValue.background.color
                : 'bg-gray-100 text-gray-400 bg-opacity-75 hover:bg-gray-200 hover:bg-opacity-75 hover:text-gray-500',
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
      <label for="taskTitle" class="text-sm font-medium text-gray-700">Team members</label>
      <div class="flex items-center">
        <div class="flex items-center space-x-2">
          <user-avatar>MR</user-avatar>
          <user-avatar>SR</user-avatar>
        </div>
        <button
          type="button"
          class="rounded-md p-2 hover:bg-gray-50 ease-in transition-colors border-2 border-dashed border-gray-200 ml-2"
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
    <div class="flex flex-row p-4 space-x-4">
      <div class="flex-1 relative">
        <div class="absolute h-2 top-0 rounded-sm w-full bg-indigo-500 shadow-medium" />
        <div class="pt-4">
          <div class="text-xs font-medium text-indigo-500">Step 1</div>
          <div class="text-sm font-medium text-gray-600">Details</div>
        </div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute h-2 top-0 rounded-sm w-full bg-indigo-500 shadow-medium" />
        <div class="pt-4">
          <div class="text-xs font-medium text-indigo-500">Step 2</div>
          <div class="text-sm font-medium text-gray-600">Members</div>
        </div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute h-2 top-0 rounded-sm w-full bg-gray-300" />
        <div class="pt-4">
          <div class="text-xs font-medium text-gray-300">Step 3</div>
          <div class="text-sm font-medium text-gray-400">Boards</div>
        </div>
      </div>
      <div class="flex-1 relative">
        <div class="absolute h-2 top-0 rounded-sm w-full bg-gray-300" />
        <div class="pt-4">
          <div class="text-xs font-medium text-gray-300">Step 4</div>
          <div class="text-sm font-medium text-gray-400">Preview</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { KanbanType, KanbanPriority } from "@/constants/enums";
export default {
  name: "ColorSelection",
  data() {
    return {
      selectedType: "",
      selectedPriority: "",
      typeValues: KanbanType,
      priorityValues: KanbanPriority,
    };
  },
};
</script>
