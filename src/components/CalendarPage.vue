<template>
  <div>
    <calendar-header :active-view="activeView" @changeView="changeView" />
    <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    >
      <calendar-month-view v-if="activeView === 'month'" :key="activeView" />
      <calendar-week-view v-if="activeView === 'week'" :key="activeView" :time-entries="timeEntries" />
      <calendar-day-view v-if="activeView === 'day'" :key="activeView" :time-entries="timeEntries" />
    </transition>
  </div>
</template>

<script>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarDayView from "./calendar/CalendarDayView.vue";
import CalendarWeekView from "./calendar/CalendarWeekView.vue";
import CalendarMonthView from "./calendar/CalendarMonthView.vue";
import { format, addHours } from "date-fns";

export default {
  name: "CalendarPage",
  components: { CalendarMonthView, CalendarHeader, CalendarWeekView, CalendarDayView },
  data() {
    return {
      activeView: "month",
    };
  },
  computed: {
    timeEntries() {
      let dayTime = new Date();
      dayTime.setHours(7, 0, 0);

      let entries = [];
      for (let i = 0; i < 15; i += 1) {
        entries.push({
          timeStamp: addHours(dayTime, i).getTime(),
          timeRead: format(addHours(dayTime, i), "HH:mm"),
        });
      }
      return entries;
    },
  },
  methods: {
    changeView(view) {
      this.activeView = view;
    },
  },
};
</script>

<style>
.row-start-13 {
  grid-row-start: 13;
}
.row-end-13 {
  grid-row-end: 13;
}
.row-span-13 {
  grid-row: span 13 / span 13;
}
.row-start-14 {
  grid-row-start: 14;
}
.row-end-14 {
  grid-row-end: 14;
}
.row-span-14 {
  grid-row: span 14 / span 14;
}
.row-start-15 {
  grid-row-start: 15;
}
.row-end-15 {
  grid-row-end: 15;
}
.row-span-15 {
  grid-row: span 15 / span 15;
}
</style>
