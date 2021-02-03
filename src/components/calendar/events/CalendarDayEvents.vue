<template>
  <div v-frag>
    <div class="flex flex-row row-start-1 row-span-4 col-start-1">
      <div
        class="flex-auto bg-purple-500 text-white p-2 rounded-md text-sm font-medium shadow-small m-2 cursor-pointer"
      >
        Event
      </div>
      <div class="flex-auto flex flex-col">
        <div class="h-20"></div>
        <div
          class="flex-auto bg-orange-500 text-white p-2 rounded-md text-sm font-medium shadow-small m-2 cursor-pointer"
        >
          Event
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarDayEvents",
};
</script>
