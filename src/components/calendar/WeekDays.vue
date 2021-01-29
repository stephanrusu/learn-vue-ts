<template>
  <div class="w-full grid grid-cols-7 grid-flow-row">
    <template v-for="(day, index) in dayNames">
      <div :key="index" class="text-xs font-medium tracking-wide text-gray-500 text-center p-4">
        {{ day }}
      </div>
    </template>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays } from "date-fns";
export default {
  name: "WeekDays",
  computed: {
    dayNames() {
      const dateFormat = "eeee";
      const startDate = startOfISOWeek(new Date());

      let days = [];
      for (let i = 0; i < 7; i += 1) {
        days.push(format(addDays(startDate, i), dateFormat));
      }
      return days;
    },
  },
};
</script>
