<template>
  <div class="space-y-3">
    <template v-for="n in 3">
      <div :key="n" class="shadow-small">
        <div class="flex flex-row items-center justify-between">
          <div class="text-sm text-indigo-500 font-medium flex items-center">
            <div
              class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded px-2 py-1 text-sm text-white font-medium"
            >
              CS
            </div>
            <div class="ml-2">Cameron Simmons</div>
          </div>
          <div class="text-xs text-gray-400 font-medium">{{ new Date() | taskDate }}</div>
        </div>
        <div class="text-sm p-3 text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam eaque natus quibusdam quasi
          magnam?
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "KanbanCommentsList",
};
</script>
