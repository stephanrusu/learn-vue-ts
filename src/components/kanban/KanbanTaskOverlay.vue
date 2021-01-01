<template>
  <div class="fixed inset-0 overflow-hidden">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-50"></div>
    </div>
    <section class="absolute inset-y-0 right-0 w-full flex justify-end" aria-labelledby="slide-over-heading">
      <div class="relative w-screen max-w-1/2">
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
