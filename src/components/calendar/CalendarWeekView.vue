<template>
  <div class="shadow-card bg-white flex flex-col rounded-sm">
    <div class="flex">
      <div class="w-20"></div>
      <week-days :with-date="true" class="flex-1" />
    </div>
    <div class="flex">
      <div class="w-20 flex flex-col">
        <template v-for="time in timeEntries">
          <div :key="time.timeStamp" class="flex-1 text-center py-1 text-sm font-medium text-gray-600 border-r">
            {{ time.timeRead }}
          </div>
        </template>
      </div>
      <div class="w-full grid grid-cols-7 grid-flow-row flex-1">
        <template v-for="n in timeEntries.length * 7">
          <div
            :key="n"
            class="p-2 h-36 border-t flex justify-end items-start"
            :class="[
              { 'border-r': n % 7 !== 0 },
              `row-start-${parseInt((n - 1) / 7) + 1}`,
              `col-start-${parseInt((n - 1) % 7) + 1} col-end-${parseInt((n - 1) % 7) + 1}`,
            ]"
          ></div>
        </template>
        <div
          class="col-start-2 col-span-1 row-start-1 row-span-4 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large m-2 cursor-pointer"
        >
          Event
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeekDays from "./partials/WeekDays.vue";
export default {
  name: "CalendarWeekView",
  components: { WeekDays },
  props: {
    timeEntries: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
