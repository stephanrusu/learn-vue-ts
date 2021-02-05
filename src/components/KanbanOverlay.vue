<template>
  <section class="fixed inset-0 overflow-hidden flex justify-end">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
    </div>
    <div class="z-20 mr-auto p-4">
      <button
        class="rounded-full text-gray-300 hover:text-white hover:bg-gray-500 p-2 ease-in transition-colors hover:bg-opacity-70"
        @click="closeAction"
      >
        <span class="sr-only">Close panel</span>
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
          class="feather feather-x stroke-current text-white w-5 h-5"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <transition
      enter-active-class="transform transition ease-in-out duration-300"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-out-in duration-300"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
      mode="out-in"
      appear
      tag="div"
    >
      <div :key="toggleSlide" class="flex relative w-full justify-end">
        <div class="flex items-center z-20">
          <button type="button" class="bg-white rounded-md w-2 h-32" @click="closeAction"></button>
        </div>
        <div :class="['z-20 relative transition-all ease-in duration-300 p-2', toggleFullScreen ? 'w-95%' : 'w-50%']">
          <div :key="showModal" class="min-h-full flex flex-col bg-white rounded-md">
            <slot name="header"></slot>
            <slot name="main"></slot>
            <div class="flex flex-row items-center justify-between mt-auto p-4 rounded-b-md bg-gray-50">
              <button
                type="button"
                class="flex-0-auto px-2 py-2 bg-indigo-500 hover:bg-indigo-600 items-center justify-center rounded-md ease-in transition-colors shadow-small"
                @click="toggleFullScreen = !toggleFullScreen"
              >
                <svg
                  v-if="!toggleFullScreen"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather w-4 h-4 stroke-current text-white"
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-minimize-2 w-4 h-4 stroke-current text-white"
                >
                  <polyline points="4 14 10 14 10 20"></polyline>
                  <polyline points="20 10 14 10 14 4"></polyline>
                  <line x1="14" y1="10" x2="21" y2="3"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              </button>
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "KanbanTaskOverlay",
  data() {
    return {
      showModal: false,
      toggleFullScreen: false,
      toggleSlide: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.showModal = (newVal.meta && newVal.meta.showModal) ?? false;
      },
    },
  },
  beforeMount() {
    this.toggleSlide = !this.toggleSlide;
  },
  methods: {
    closeAction() {
      if (this.showModal) {
        this.$router.go(-1);
      } else {
        this.$store.dispatch("slideOverlay");
      }
      this.toggleSlide = !this.toggleSlide;
    },
  },
};
</script>
