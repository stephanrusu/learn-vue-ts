<template>
  <div class="w-20 flex flex-col">
    <template v-for="entry in time">
      <div :key="entry.timeStamp" class="flex-1 text-center py-1 text-sm font-medium text-gray-600 border-r">
        {{ entry.timeRead }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "TimeEntries",
  props: {
    time: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
