<template>
  <div>
    <calendar-header @changeView="changeView" />
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
      <calendar-week-view v-if="activeView === 'week'" :key="activeView" />
      <calendar-day-view v-if="activeView === 'day'" :key="activeView" />
    </transition>
  </div>
</template>

<script>
import CalendarHeader from "./calendar/CalendarHeader.vue";
import CalendarDayView from "./calendar/CalendarDayView.vue";
import CalendarWeekView from "./calendar/CalendarWeekView.vue";
import CalendarMonthView from "./calendar/CalendarMonthView.vue";

export default {
  name: "CalendarPage",
  components: { CalendarMonthView, CalendarHeader, CalendarWeekView, CalendarDayView },
  data() {
    return {
      activeView: "month",
    };
  },
  methods: {
    changeView(view) {
      this.activeView = view;
    },
  },
};
</script>
