<template>
  <div class="flex flex-row">
    <div
      v-for="(user, index) in users"
      :key="index"
      class="bg-indigo-500 hover:z-10 flex items-center justify-center rounded-md shadow-small px-2 py-1 text-sm text-white font-medium border border-white cursor-default"
      :class="{ '-ml-3': index > 0 }"
    >
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersAssigned",
  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
