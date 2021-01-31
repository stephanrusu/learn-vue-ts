<template>
  <div class="shadow-card bg-white flex flex-col items-center rounded-sm">
    <div class="flex w-full">
      <div class="w-20"></div>
      <div class="py-4 text-center flex-1">
        <div class="text-sm font-medium tracking-wide text-gray-500 text-center">{{ dayEntry.name }}</div>
        <div class="text-xs font-medium tracking-wide text-gray-400 text-center">
          {{ dayEntry.dateEntry }}
        </div>
      </div>
    </div>
    <div class="flex w-full">
      <div class="w-20 flex flex-col">
        <template v-for="time in timeEntries">
          <div :key="time.timeStamp" class="flex-1 text-center py-1 text-sm font-medium text-gray-600 border-r">
            {{ time.timeRead }}
          </div>
        </template>
      </div>
      <div class="w-full grid grid-cols-1 grid-flow-row flex-1">
        <template v-for="n in timeEntries.length">
          <div
            :key="n"
            class="p-2 h-36 border-t flex justify-end items-start"
            :class="{ 'border-r': (n + 1) % 7 !== 0 }"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "CalendarDayView",
  props: {
    timeEntries: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    dayEntry() {
      let newDate = new Date();
      return {
        name: format(newDate, "eeee"),
        dateEntry: format(newDate, "MMMM d"),
      };
    },
  },
};
</script>
