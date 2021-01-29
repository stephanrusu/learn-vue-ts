<template>
  <calendar-month-view />
</template>

<script>
import CalendarMonthView from "./calendar/CalendarMonthView.vue";

export default {
  name: "CalendarPage",
  components: { CalendarMonthView },
  data() {
    return {
      activeView: "month",
    };
  },
};
</script>
