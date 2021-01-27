<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="flex flex-row">
        <input
          v-model="comment"
          type="text"
          name="text"
          placeholder="What's on your mind ?"
          class="focus:border-indigo-300 mr-4 w-full border-gray-300 rounded shadow-small focus:shadow-small-2 text-sm"
          @change="checkValidation"
        />
        <button
          type="button"
          class="rounded py-2 px-3 text-sm shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors text-white"
        >
          Post
        </button>
      </div>
      <div v-if="errorText" class="text-sm text-red-600 mt-1">This field is required</div>
    </div>
    <div class="space-y-4">
      <template v-for="n in 1">
        <div :key="`comment-${n}`" class="shadow-small">
          <div class="flex flex-row items-center justify-between px-2">
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
          <div class="text-sm p-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam eaque natus quibusdam quasi
            magnam?
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanCommentsList",
  data() {
    return {
      comment: "",
      errorText: false,
    };
  },
  methods: {
    checkValidation() {
      this.errorText = this.comment.trim() === "";
    },
  },
};
</script>
