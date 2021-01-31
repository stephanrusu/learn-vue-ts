<template>
  <div class="px-4 pb-4 font-sans">
    <calendar-page />
  </div>
</template>

<script>
import CalendarPage from "@/components/CalendarPage.vue";
export default {
  name: "Calendar",
  components: { CalendarPage },
};
</script>
