<template>
  <div class="flex-grid-row mt-4">
    <div class="flex-grid-col col-size-4">
      <div class="space-y-2 p-4 bg-white rounded-lg shadow-card">
        <list-users />
      </div>
    </div>
    <div class="flex-grid-col col-size-8">
      <div class="bg-white p-2 rounded-lg shadow-card"></div>
    </div>
  </div>
</template>

<script>
import ListUsers from "./ListUsers.vue";
export default {
  name: "MessageContainer",
  components: { ListUsers },
};
</script>
