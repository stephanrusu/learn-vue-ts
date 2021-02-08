<template>
  <div v-frag>
    <div class="col-start-2 col-span-1 row-start-1 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-orange-500 text-white">
        Event
      </div>
    </div>

    <div class="col-start-4 col-span-1 row-start-3 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-orange-500 text-white">
          Event
        </div>
      </div>
      <div class="flex-auto flex flex-col">
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-green-500 text-white">
          Event
        </div>
        <div class="h-20"></div>
      </div>
    </div>

    <div class="col-start-1 col-span-1 row-start-10 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-purple-500 text-white">
        Event
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-orange-500 text-white">
          Event
        </div>
      </div>
      <div class="flex-auto flex flex-col">
        <div
          class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-gray-400 text-white flex flex-row"
        >
          <div class="ml-1">3 more ...</div>
        </div>
        <div class="h-20"></div>
      </div>
    </div>

    <div class="col-start-3 col-span-1 row-start-8 row-span-4 flex flex-row m-2 space-x-2">
      <div class="flex-auto flex flex-col">
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-green-500 text-white">
          Event
        </div>
        <div class="h-20"></div>
        <div class="h-10"></div>
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div class="h-10"></div>
        <div class="flex-auto p-2 rounded-md text-sm font-medium shadow-large cursor-pointer bg-orange-500 text-white">
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
