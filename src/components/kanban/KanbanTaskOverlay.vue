<template>
  <div class="fixed inset-0 overflow-hidden">
    <!-- <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    > -->
    <div class="fixed inset-0" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-50"></div>
    </div>
    <!-- </transition> -->
    <section class="absolute inset-y-0 right-0 w-full flex justify-end" aria-labelledby="slide-over-heading">
      <div class="flex items-center">
        <div class="bg-white rounded-md w-2 h-32"></div>
      </div>
      <div class="relative w-screen max-w-1/2 m-2">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "KanbanTaskOverlay",
};
</script>
