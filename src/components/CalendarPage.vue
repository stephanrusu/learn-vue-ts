<template>
  <div class="mt-4 shadow-card bg-white flex items-center justify-between rounded-sm">
    <div class="w-full grid grid-cols-7 grid-flow-row">
      <template v-for="(day, index) in dayNames">
        <div :key="index" class="text-xs font-medium tracking-wide text-gray-500 text-center p-4">
          {{ day }}
        </div>
      </template>
      <template v-for="(date, index) in listDates">
        <div
          :key="date.date | unixTime"
          class="p-2 h-32 border-t flex justify-end items-start"
          :class="[
            date.sameMonth ? 'text-gray-600' : 'text-gray-400',
            { 'border-r': (index + 1) % 7 !== 0, 'bg-gray-50': date.today },
          ]"
        >
          <div
            class="p-2 text-md font-medium"
            :class="{ 'w-10 h-10 text-center bg-indigo-500 text-white rounded shadow-small': date.today }"
          >
            {{ date.date | numberDate }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays, startOfMonth, isToday, isSameDay, isSameMonth, getUnixTime } from "date-fns";
export default {
  name: "CalendarPage",
  filters: {
    numberDate: (value) => {
      return format(value, "d");
    },

    unixTime: (value) => {
      return getUnixTime(value);
    },
  },
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
    listDates() {
      const days = startOfISOWeek(startOfMonth(new Date()));

      let dates = [];

      while (dates.length < 42) {
        const date = addDays(days, dates.length);
        dates.push({
          date,
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
