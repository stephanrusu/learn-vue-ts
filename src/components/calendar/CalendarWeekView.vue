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
            :class="{ 'border-r': (n + 1) % 7 !== 0 }"
          ></div>
        </template>
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
