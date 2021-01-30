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
            gridPos[index].row, //wip parseInt((index + 1) / 7)
            gridPos[index].col, //wip parseInt((index + 1 ) % 7)
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
      <div
        class="col-start-4 col-span-2 row-start-1 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        Event
      </div>
      <div
        class="col-start-1 col-span-4 row-start-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        Event
      </div>
      <div
        class="col-start-3 col-span-3 row-start-3 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        Event
      </div>
      <div
        class="col-start-7 col-span-1 row-start-3 bg-yellow-500 text-white px-4 py-2 rounded-tl-md rounded-bl-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        Event
      </div>
      <div
        class="col-start-1 col-span-1 row-start-4 bg-yellow-500 text-white px-4 py-2 rounded-tr-md rounded-br-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        <span class="invisible">.</span>
      </div>
      <div
        class="col-start-2 col-span-3 row-start-5 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
      >
        Event
      </div>
      <div
        class="col-start-2 col-span-3 row-start-5 bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-end mb-2 mx-2 cursor-pointer"
      >
        Event
      </div>
    </div>
  </div>
</template>

<script>
import { startOfISOWeek, format, addDays, startOfMonth, isToday, isSameDay, isSameMonth } from "date-fns";
// TODO find solution for creating this dynamic
import gridPositions from "@/utils/calendarGridPositions";
import WeekDays from "./WeekDays.vue";

export default {
  name: "CalendarPage",
  components: { WeekDays },
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
