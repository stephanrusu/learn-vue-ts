<template>
  <div class="fixed inset-0 overflow-hidden">
    <!-- <transition
      enter-active-class="transition-opacity ease-in-out duration-500"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-500"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="in-out"
      appear
    > -->
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-50"></div>
    </div>
    <!-- </transition> -->
    <!-- <transition
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-500"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-500"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
      mode="out-in"
      appear
    > -->
    <section class="absolute inset-0 flex justify-end" aria-labelledby="slide-over-heading">
      <div class="flex items-center cursor-pointer" @click="toggleFullScreen = !toggleFullScreen">
        <div class="bg-white rounded-md w-2 h-32"></div>
      </div>
      <div :class="`relative transition-all ease-in duration-300 ${toggleFullScreen ? 'w-p-95' : 'w-p-50'} p-2`">
        <slot></slot>
      </div>
    </section>
    <!-- </transition> -->
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
