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
      activeView: "day",
    };
  },
  computed: {
    timeEntries() {
      let dayTime = new Date();
      dayTime.setHours(7, 0, 0);

      let entries = [];
      for (let i = 0; i < 16; i += 1) {
        entries.push({
          timeStamp: dayTime.getTime(),
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
