<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="flex flex-row">
        <input
          v-model="comment"
          type="text"
          name="text"
          placeholder="What's on your mind ?"
          class="focus:border-indigo-300 mr-4 w-full border-gray-300 rounded shadow-small focus:shadow-medium text-sm"
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
            <div class="flex items-center">
              <user-avatar>CS</user-avatar>
              <div class="text-sm text-indigo-500 font-medium ml-2">Cameron Simmons</div>
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
import UserAvatar from "../common/UserAvatar.vue";
export default {
  name: "KanbanCommentsList",
  components: { UserAvatar },
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
