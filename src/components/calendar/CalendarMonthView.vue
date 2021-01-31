<template>
  <div class="shadow-card bg-white flex flex-col items-center justify-between rounded-sm">
    <week-days />
    <div class="w-full grid grid-cols-7 grid-flow-row">
      <template v-for="(date, index) in listDates">
        <div
          :key="date.date"
          class="p-2 h-36 border-t flex justify-end items-start"
          :class="[
            date.sameMonth ? 'text-gray-600' : 'text-gray-400',
            { 'border-r': (index + 1) % 7 !== 0, 'bg-gray-50': date.today },
            `row-start-${parseInt(index / 7) + 1}`,
            `col-start-${parseInt(index % 7) + 1} col-end-${parseInt(index % 7) + 1}`,
          ]"
        >
          <div
            class="w-9 h-8 text-md font-medium flex items-center justify-center cursor-pointer hover:bg-gray-100"
            :class="{ 'text-center bg-cyan-500 text-white rounded shadow-small hover:bg-cyan-600': date.today }"
          >
            {{ date.date | formatDate("d") }}
          </div>
        </div>
      </template>
      <calendar-events />
    </div>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays, startOfMonth, isToday, isSameDay, isSameMonth } from "date-fns";
// TODO find solution for creating this dynamic
import gridPositions from "@/utils/calendarGridPositions";
import WeekDays from "./partials/WeekDays.vue";
import CalendarEvents from "./CalendarEvents.vue";

export default {
  name: "CalendarMonthView",
  components: { WeekDays, CalendarEvents },
  filters: {
    formatDate: (value, formatString) => {
      return format(value, formatString);
    },
  },
  data() {
    return {
      gridPos: gridPositions,
    };
  },
  computed: {
    listDates() {
      const days = startOfISOWeek(startOfMonth(new Date()));

      let dates = [];

      while (dates.length < 42) {
        const date = addDays(days, dates.length);
        dates.push({
          date: date.getTime(),
          today: isToday(date),
          sameDate: isSameDay(date, new Date()),
          sameMonth: isSameMonth(date, new Date()),
        });
      }

      return dates;
    },
  },
};
</script>
