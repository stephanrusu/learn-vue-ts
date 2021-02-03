<template>
  <div class="shadow-card bg-white flex flex-col items-center rounded-sm">
    <div class="flex w-full">
      <div class="w-20"></div>
      <div class="py-4 text-center flex-auto relative">
        <div v-if="dayEntry.today" class="absolute h-2 left-2 right-2 top-0 rounded-sm bg-cyan-500 shadow-medium" />
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
        <div class="h-20 border-t bg-gray-50"></div>
      </div>
    </div>
    <div class="flex w-full">
      <time-entries :time="timeEntries" />
      <div class="w-full grid grid-cols-1 grid-flow-row flex-1">
        <template v-for="n in timeEntries.length">
          <div
            :key="n"
            class="p-2 h-20 border-t flex justify-end items-start col-start-1 bg-gray-50"
            :class="`row-start-${n} row-end-${n}`"
          ></div>
        </template>
        <calendar-day-events />
      </div>
    </div>
  </div>
</template>

<script>
import { format, isToday } from "date-fns";
import TimeEntries from "./partials/TimeEntries.vue";
import CalendarDayEvents from "./events/CalendarDayEvents.vue";
export default {
  name: "CalendarDayView",
  components: { TimeEntries, CalendarDayEvents },
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
        today: isToday(newDate),
        dateEntry: format(newDate, "MMMM d"),
      };
    },
  },
};
</script>
