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
          class="p-2 h-36 border-t flex justify-end items-start"
          :class="[
            date.sameMonth ? 'text-gray-600' : 'text-gray-400',
            { 'border-r': (index + 1) % 7 !== 0, 'bg-gray-50': date.today },
            gridPos[index].row, // parseInt((index + 1) / 7)
            gridPos[index].col, // parseInt((index + 1 ) % 7)
          ]"
        >
          <div
            class="w-9 h-9 text-md font-medium flex items-center justify-center"
            :class="{ 'text-center bg-cyan-500 text-white rounded shadow-small': date.today }"
          >
            {{ date.date | numberDate }}
          </div>
        </div>
      </template>
      <div
        class="col-start-4 col-span-2 row-start-2 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small self-center mx-2"
      >
        Event
      </div>
      <div
        class="col-start-1 col-span-4 row-start-3 bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small self-center mx-2"
      >
        Event
      </div>
      <div
        class="col-start-3 col-span-3 row-start-4 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small self-center mx-2"
      >
        Event
      </div>
      <div
        class="col-start-7 col-span-1 row-start-4 bg-yellow-500 text-white px-4 py-2 rounded-tl-md rounded-bl-md text-sm font-medium shadow-small self-center mx-2"
      >
        Event
      </div>
      <div
        class="col-start-1 col-span-1 row-start-5 bg-yellow-500 text-white px-4 py-2 rounded-tr-md rounded-br-md text-sm font-medium shadow-small self-center mx-2"
      >
        <span class="invisible">.</span>
      </div>
      <div
        class="col-start-2 col-span-3 row-start-6 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small self-center mx-2"
      >
        Event
      </div>
      <div
        class="col-start-2 col-span-3 row-start-6 bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small self-end mb-2 mx-2"
      >
        Event
      </div>
    </div>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays, startOfMonth, isToday, isSameDay, isSameMonth, getUnixTime } from "date-fns";
// TODO find solution for creating this dynamic
import gridPositions from "@/utils/calendarGridPositions";

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
  data() {
    return {
      gridPos: gridPositions,
    };
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
