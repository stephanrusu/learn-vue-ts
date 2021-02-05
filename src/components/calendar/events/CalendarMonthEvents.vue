<template>
  <div v-frag>
    <div
      class="col-start-4 col-span-2 row-start-1 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-5 col-span-1 row-start-1 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-end mx-2 cursor-pointer mb-2 flex flex-row items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-plus stroke-current w-5 h-5 text-white -ml-1"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <div class="ml-1">5</div>
    </div>
    <div
      class="col-start-1 col-span-4 row-start-2 bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-3 col-span-3 row-start-3 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-7 col-span-1 row-start-3 bg-yellow-500 text-white px-4 py-2 rounded-l-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-1 col-span-1 row-start-4 bg-yellow-500 text-white px-4 py-2 rounded-r-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      <span class="invisible">.</span>
    </div>
    <div
      class="col-start-5 col-span-2 row-start-4 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-2 col-span-3 row-start-5 bg-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-center mx-2 cursor-pointer"
    >
      Event
    </div>
    <div
      class="col-start-2 col-span-3 row-start-5 bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-large self-end mb-2 mx-2 cursor-pointer"
    >
      Event
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarMonthEvents",
};
</script>
