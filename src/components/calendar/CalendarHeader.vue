<template>
  <nav class="py-4 flex items-center justify-between">
    <div class="flex items-center">
      <div class="bg-white p-2 rounded-lg shadow-card flex items-center mr-4">
        <router-link
          :to="{ name: 'projects' }"
          class="text-gray-500 hover:bg-gray-100 p-2 rounded-md text-sm font-medium"
        >
          Projects
        </router-link>
      </div>
      <div class="bg-white p-2 rounded-lg shadow-card flex items-center space-x-2">
        <div class="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-small">Month</div>
        <div class="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Week</div>
        <div class="text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium">Day</div>
      </div>
    </div>
    <div class="flex flex-col items-center p-2">
      <div class="text-gray-700 font-medium tracking-wide text-xl mr-2">
        {{ new Date() | formatDate("MMMM") }}
      </div>
      <div class="text-gray-400 font-medium text-sm">
        {{ new Date() | formatDate("yyyy") }}
      </div>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-card relative">
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
        <button
          type="button"
          class="text-gray-700 w-24 px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-gray-50"
          @click="toggleOptions"
        >
          {{ new Date() | formatDate("MMMM") }}
        </button>

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
      <div
        v-if="toggleMonths"
        class="origin-top-right absolute right-0 mt-4 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="p-2 grid grid-cols-3 gap-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <template v-for="month in monthNames">
            <div
              :key="month"
              class="p-2 text-sm font-medium text-gray-500 text-center hover:bg-gray-50 cursor-pointer"
              @click="toggleOptions"
            >
              {{ month }}
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { format, startOfYear, addMonths } from "date-fns";
export default {
  name: "CalendarHeader",
  filters: {
    formatDate: (value, formatString) => {
      return format(value, formatString);
    },
  },
  data() {
    return {
      toggleMonths: false,
    };
  },
  computed: {
    monthNames() {
      const dateFormat = "MMM";
      const startDate = startOfYear(new Date());

      let months = [];
      for (let i = 0; i < 12; i += 1) {
        months.push(format(addMonths(startDate, i), dateFormat));
      }
      return months;
    },
  },
  methods: {
    toggleOptions() {
      this.toggleMonths = !this.toggleMonths;
    },
  },
};
</script>

<style lang="scss" scoped></style>
