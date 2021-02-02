<template>
  <div class="relative">
    <button
      id="options-menu"
      type="button"
      class="inline-flex justify-center px-2 py-1 hover:bg-gray-100"
      :class="{ 'bg-gray-100': taskOptionsToggle }"
      aria-haspopup="true"
      aria-expanded="true"
      @click="toggleOptions"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-more-horizontal w-5 h-5 stroke-current text-gray-700"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
      mode="out-in"
      appear
    >
      <div
        v-if="taskOptionsToggle"
        class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div class="p-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <button
            class="rounded block w-full p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 text-left"
            role="menuitem"
            @click="changeAssignee"
          >
            Change assignee
          </button>
          <button
            class="rounded block w-full p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-800 text-left"
            role="menuitem"
            @click="editTask"
          >
            Edit task
          </button>
          <button
            class="rounded block w-full p-2 text-sm text-red-700 hover:bg-gray-100 hover:text-red-800 text-left"
            role="menuitem"
            @click="deleteTask"
          >
            Remove task
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TaskOptions",
  props: {
    taskId: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      taskOptionsToggle: false,
    };
  },
  methods: {
    toggleOptions() {
      this.taskOptionsToggle = !this.taskOptionsToggle;
    },
    editTask() {
      this.$router.push({ name: "task-edit", params: { taskId: this.taskId } });
      this.toggleOptions();
    },
    changeAssignee() {
      this.$router.push({ name: "task-assign", params: { taskId: this.taskId, multiple: true } });
      this.toggleOptions();
    },
    deleteTask() {
      this.$store.dispatch("toggleNotificationActive");
      this.toggleOptions();
    },
  },
};
</script>

<style lang="scss" scoped></style>
