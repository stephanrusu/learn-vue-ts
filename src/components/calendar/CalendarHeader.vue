<template>
  <nav class="py-4 flex items-center justify-between">
    <div class="bg-white p-2 rounded-tl-lg rounded-bl-lg shadow-card flex items-center">
      <router-link
        :to="{ name: 'projects' }"
        class="text-gray-500 hover:bg-gray-100 p-2 rounded-md text-sm font-medium"
      >
        Projects
      </router-link>
    </div>
    <div class="bg-white p-2 rounded-tr-lg rounded-br-lg shadow-card relative mr-auto">
      <div class="flex items-center space-x-2">
        <button
          type="button"
          class="flex flex-1 py-2 w-10 bg-gray-50 hover:bg-gray-100 items-center justify-center ease-in transition-colors"
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
        <button type="button" class="w-40 px-4 py-2 rounded-md hover:bg-gray-50" @click="toggleOptions">
          <div class="flex justify-center items-baseline">
            <div class="text-gray-700 text-sm font-medium mr-2">
              {{ new Date() | formatDate("MMMM") }}
            </div>
            <div class="text-gray-400 text-sm font-medium">
              {{ new Date() | formatDate("yyyy") }}
            </div>
          </div>
        </button>
        <button
          type="button"
          class="flex flex-1 py-2 w-10 bg-gray-50 hover:bg-gray-100 items-center justify-center ease-in transition-colors"
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
              :key="month.name"
              class="py-2 text-sm font-medium text-center cursor-pointer rounded-md"
              :class="[month.isSelected ? 'text-white bg-indigo-500' : 'text-gray-500 hover:bg-gray-50']"
              @click="toggleOptions"
            >
              {{ month.name }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-card flex items-center space-x-2">
      <template v-for="view in calendarViews">
        <button
          :key="view.key"
          type="button"
          class="px-4 py-2 rounded-md text-sm font-medium"
          :class="[
            activeView === view.key ? 'bg-indigo-500 text-white shadow-small' : 'text-gray-500 hover:bg-gray-100',
          ]"
          @click="toggleView(view.key)"
        >
          {{ view.name }}
        </button>
      </template>
    </div>
  </nav>
</template>

<script>
import { format, startOfYear, addMonths, isSameMonth } from "date-fns";
export default {
  name: "CalendarHeader",
  filters: {
    formatDate: (value, formatString) => {
      return format(value, formatString);
    },
  },
  props: {
    activeView: {
      type: String,
      default: "week",
    },
  },
  data() {
    return {
      toggleMonths: false,
      calendarViews: [
        {
          key: "month",
          name: "Month",
        },
        {
          key: "week",
          name: "Week",
        },
        {
          key: "day",
          name: "Day",
        },
      ],
    };
  },
  computed: {
    monthNames() {
      const dateFormat = "MMM";
      const startDate = startOfYear(new Date());

      let months = [];
      for (let i = 0; i < 12; i += 1) {
        let updateMonth = addMonths(startDate, i);
        months.push({
          name: format(updateMonth, dateFormat),
          isSelected: isSameMonth(updateMonth, new Date()),
        });
      }
      return months;
    },
  },
  methods: {
    toggleOptions() {
      this.toggleMonths = !this.toggleMonths;
    },
    toggleView(view) {
      this.$emit("changeView", view);
    },
  },
};
</script>

<style lang="scss" scoped></style>
