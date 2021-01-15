<template>
  <div class="fixed inset-0 overflow-hidden">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-50"></div>
    </div>
    <section class="absolute inset-0 flex justify-end" aria-labelledby="slide-over-heading">
      <div class="flex items-center">
        <router-link :to="{ name: 'kanban' }" class="bg-white rounded-md w-2 h-32"></router-link>
      </div>
      <div :class="`relative transition-all ease-in duration-300 ${toggleFullScreen ? 'w-p-95' : 'w-p-50'} p-2`">
        <div class="min-h-full flex flex-col bg-white rounded-md">
          <slot name="header"></slot>
          <slot name="main"></slot>
          <div class="flex flex-row items-center justify-between mt-auto p-4 bg-gray-50">
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
    </section>
  </div>
</template>

<script>
export default {
  name: "KanbanTaskOverlay",
  data() {
    return {
      showModal: false,
      toggleFullScreen: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
};
</script>
