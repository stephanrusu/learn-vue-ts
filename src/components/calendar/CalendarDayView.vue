<template>
  <div class="shadow-card bg-white flex flex-col items-center justify-between rounded-sm">
    <div class="py-4">
      <div class="text-sm font-medium tracking-wide text-gray-500 text-center">{{ dayEntry.name }}</div>
      <div class="text-xs font-medium tracking-wide text-gray-400 text-center">
        {{ dayEntry.dateEntry }}
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "CalendarDayView",
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
