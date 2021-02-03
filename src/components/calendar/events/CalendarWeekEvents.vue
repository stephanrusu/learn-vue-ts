<template>
  <div v-frag>
    <div class="col-start-2 col-span-1 row-start-1 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-orange-500 text-white">
        Event
      </div>
    </div>

    <div class="col-start-4 col-span-1 row-start-3 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-orange-500 text-white">
          Event
        </div>
      </div>
      <div class="flex-auto flex flex-col">
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-green-500 text-white">
          Event
        </div>
        <div class="h-20"></div>
      </div>
    </div>

    <div class="col-start-1 col-span-1 row-start-10 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-orange-500 text-white">
          Event
        </div>
      </div>
      <div class="flex-auto flex flex-col">
        <div
          class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-green-500 text-white flex flex-row"
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
          <div class="ml-1">3</div>
        </div>
        <div class="h-20"></div>
      </div>
    </div>

    <div class="col-start-3 col-span-1 row-start-8 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto flex flex-col">
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-green-500 text-white">
          Event
        </div>
        <div class="h-20"></div>
        <div class="h-10"></div>
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="h-10"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-small cursor-pointer bg-orange-500 text-white">
          Event
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarWeekEvents",
};
</script>
