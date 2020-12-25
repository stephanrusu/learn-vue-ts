<template>
  <button
    :key="filterType.text"
    type="button"
    :class="`${isActive ? filterType.background.active : filterType.background.color} hover:${
      filterType.background.active
    } text-white px-5 py-2 rounded-md text-xs font-medium tracking-wide shadow-small`"
    @click="$emit('selectFilter', filterType.key)"
  >
    {{ filterType.text }}
  </button>
</template>

<script>
export default {
  name: "KanbanFilterButton",
  props: {
    filterType: {
      type: Object,
      default() {
        return {
          text: "Button",
          background: {
            color: "bg-blue-200",
            active: "bg-blue-300",
          },
        };
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
