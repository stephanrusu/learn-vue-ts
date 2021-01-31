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
        <div class="flex-1 text-center py-1 text-sm font-medium text-gray-600 border-r">All day</div>
      </div>
      <div class="w-full grid grid-cols-1 grid-flow-row flex-1">
        <div class="h-20 border-t"></div>
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
            class="p-2 h-36 border-t flex justify-end items-start col-start-1"
            :class="`row-start-${n} row-end-${n}`"
          ></div>
        </template>
        <div
          class="row-start-1 row-span-1 col-start-1 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large m-2 cursor-pointer"
        >
          Event
        </div>
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
