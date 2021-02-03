<template>
  <div class="w-full grid grid-cols-7 grid-flow-row">
    <template v-for="(day, index) in dayNames">
      <div :key="index" class="py-4 relative">
        <div v-if="day.today" class="absolute h-2 left-0 right-0 top-0 rounded-sm bg-cyan-500 shadow-medium" />
        <div class="flex flex-col items-center">
          <div class="text-sm font-medium tracking-wide text-gray-500">{{ day.name }}</div>
          <div v-if="withDate" class="text-xs font-medium tracking-wide text-gray-400">
            {{ day.dateEntry }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays, isToday } from "date-fns";
export default {
  name: "WeekDays",
  props: {
    withDate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dayNames() {
      const startDate = startOfISOWeek(new Date());

      let days = [];
      for (let i = 0; i < 7; i += 1) {
        let newDate = addDays(startDate, i);
        let dayEntry = {
          name: format(newDate, "eeee"),
          today: isToday(newDate),
          dateEntry: this.withDate ? format(newDate, "MMMM d") : false,
        };
        days.push(dayEntry);
      }
      return days;
    },
  },
};
</script>
