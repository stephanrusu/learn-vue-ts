<template>
  <div class="w-full grid grid-cols-7 grid-flow-row">
    <template v-for="(day, index) in dayNames">
      <div :key="index" class="py-4">
        <div class="text-sm font-medium tracking-wide text-gray-500 text-center">{{ day.name }}</div>
        <div v-if="withDate" class="text-xs font-medium tracking-wide text-gray-400 text-center">
          {{ day.dateEntry }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays } from "date-fns";
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
          dateEntry: this.withDate ? format(newDate, "MMMM d") : false,
        };
        days.push(dayEntry);
      }
      return days;
    },
  },
};
</script>
