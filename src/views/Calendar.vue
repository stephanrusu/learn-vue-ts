<template>
  <div class="px-4 pb-4 font-sans">
    <calendar-header />
    <calendar-page />
  </div>
</template>

<script>
import CalendarPage from "@/components/CalendarPage.vue";
import CalendarHeader from "@/components/calendar/CalendarHeader.vue";

export default {
  name: "Calendar",
  components: { CalendarPage, CalendarHeader },
};
</script>
