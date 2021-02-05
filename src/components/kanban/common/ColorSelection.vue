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
