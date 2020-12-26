<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
    </div>
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="w-p-60 z-20 rounded-md">
        <slot />
      </div>
    </div>
    <button
      type="button"
      class="absolute z-20 top-6 right-6 p-2 hover:bg-gray-600 rounded-full"
      @click="$emit('modalToggle')"
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
        class="feather feather-x stroke-current text-white"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",
  mounted() {
    document.body.style.overflow = "hidden";
  },
  destroyed() {
    document.body.style = "";
  },
};
</script>
