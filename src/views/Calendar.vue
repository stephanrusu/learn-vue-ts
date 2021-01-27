<template>
  <div class="px-4 pb-4 font-sans">
    <nav class="py-4 flex items-center justify-between">
      <div class="bg-white p-2 rounded-lg shadow-card">
        <div class="flex items-center space-x-2">
          <div class="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small">Month</div>
          <div class="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Week</div>
          <div class="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Day</div>
        </div>
      </div>
      <div class="flex flex-row items-baseline p-2">
        <div class="text-gray-700 font-medium tracking-wide text-xl mr-2">
          {{ new Date() | formatDate("MMMM") }}
        </div>
        <div class="text-gray-400 font-medium text-xs">
          {{ new Date() | formatDate("yyyy") }}
        </div>
      </div>
      <div class="bg-white p-2 rounded-lg shadow-card">
        <div class="flex items-center space-x-2">
          <button
            type="button"
            class="flex flex-1 py-2 w-10 bg-white hover:bg-gray-50 items-center justify-center ease-in transition-colors"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              class="feather chevron-left w-5 h-5 stroke-current text-gray-700"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div class="text-gray-700 w-24 px-4 py-2 rounded-md text-sm font-medium text-center">
            {{ new Date() | formatDate("MMMM") }}
          </div>
          <button
            type="button"
            class="flex flex-1 py-2 w-10 bg-white hover:bg-gray-50 items-center justify-center ease-in transition-colors"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              class="feather chevron-right w-5 h-5 stroke-current text-gray-700"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <calendar-page />
  </div>
</template>

<script>
import CalendarPage from "@/components/CalendarPage.vue";
import { format } from "date-fns";
export default {
  name: "Calendar",
  components: { CalendarPage },
  filters: {
    formatDate: (value, formatString) => {
      return format(value, formatString);
    },
  },
};
</script>
