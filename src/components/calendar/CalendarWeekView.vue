<template>
  <div class="shadow-card bg-white flex flex-col items-center justify-between rounded-sm">
    <week-days :with-date="true" />
  </div>
</template>

<script>
import WeekDays from "./partials/WeekDays.vue";
export default {
  name: "CalendarWeekView",
  components: { WeekDays },
};
</script>
