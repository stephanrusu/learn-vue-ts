<template>
  <div class="w-full">
    <div class="mb-4">
      <div class="flex flex-row">
        <input
          v-model="subTaskText"
          type="text"
          name="text"
          placeholder="What do you need to do?"
          class="focus:border-indigo-300 mr-4 w-full border-gray-300 rounded shadow-small focus:shadow-small-2 text-sm"
          @change="checkValidation"
        />
        <button
          type="button"
          class="rounded py-2 px-3 shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="addSubTask"
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
            class="feather feather-plus stroke-current w-5 h-5 text-white"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div v-if="errorText" class="text-sm text-red-600 mt-1">This field is required</div>
    </div>
    <div class="">
      <template v-for="(sub, index) in listSubTasks">
        <div
          :key="sub.uid"
          class="flex flex-row items-center justify-between p-2 border-gray-300 rounded hover:bg-gray-50"
        >
          <label class="flex flex-row items-center cursor-pointer" :for="`subtask-${sub.uid}`">
            <input
              :id="`subtask-${sub.uid}`"
              type="checkbox"
              class="opacity-0 absolute hidden"
              :checked="sub.completed"
              @change="toggleSubTask(sub, index)"
            />
            <label
              :for="`subtask-${sub.uid}`"
              :class="`rounded p-1 shadow-small ease-in transition-colors mr-3 cursor-pointer ${
                sub.completed ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200'
              }`"
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
                class="feather feather-check stroke-current w-4 h-4 text-white"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </label>
            <div :class="['text-md', sub.completed ? 'text-gray-400' : 'text-gray-700']">
              {{ sub.text }}
            </div>
          </label>
          <div
            v-if="sub.completed"
            class="bg-indigo-100 hover:z-10 flex items-center justify-center rounded shadow-small px-2 py-1 text-md text-indigo-500 font-medium cursor-default ml-auto mr-4"
          >
            SR
          </div>
          <button
            type="button"
            class="rounded p-2 shadow-small bg-red-300 hover:bg-red-400 ease-in transition-colors"
            @click="removeSubTask(index)"
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
              class="feather feather-plus stroke-current w-4 h-4 text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanSubTasksList",
  props: {
    taskId: {
      type: String,
      default: "",
      required: true,
    },
    boardId: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      subTaskText: "",
      errorText: false,
    };
  },
  computed: {
    listSubTasks() {
      return this.$store.getters.singleTask(this.boardId, this.taskId).subTasks;
    },
  },
  methods: {
    checkValidation() {
      this.errorText = this.subTaskText.trim() === "";
    },
    addSubTask() {
      if (this.subTaskText.trim() !== "") {
        this.$store.dispatch("addSubTask", {
          boardId: this.boardId,
          taskId: this.taskId,
          text: this.subTaskText,
        });

        this.subTaskText = "";
        this.errorText = false;
      } else {
        this.errorText = true;
      }
    },

    toggleSubTask(subtask, index) {
      console.info(index);
      this.$store.dispatch("toggleSubTask", {
        boardId: this.boardId,
        taskId: this.taskId,
        index: index,
        completed: !subtask.completed,
      });
    },

    removeSubTask(index) {
      this.$store.dispatch("removeSubTask", {
        boardId: this.boardId,
        taskId: this.taskId,
        index: index,
      });
    },
  },
};
</script>
