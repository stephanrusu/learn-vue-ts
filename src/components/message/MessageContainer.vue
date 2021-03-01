<template>
  <div class="flex-grid-row mt-4">
    <div class="flex-grid-col col-size-4">
      <div class="space-y-2 p-4 bg-white rounded-lg shadow-card">
        <div class="mb-4 flex flex-row space-x-2">
          <template v-for="tab in tabs">
            <div
              :key="tab.key"
              :class="[
                'z-10 cursor-pointer text-center p-2 font-medium text- 5',
                activeTab === tab.key
                  ? 'text-indigo-500 hover:text-indigo-600 border-b-2 border-indigo-500 shadow-small hover:border-indigo-600'
                  : 'text-gray-400 hover:text-gray-500 hover:border-b hover:border-gray-400',
              ]"
              @click="activeTab = tab.key"
            >
              {{ tab.text }}
            </div>
          </template>
        </div>
        <list-users v-if="activeTab === 'messages'" />
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
  data() {
    return {
      activeTab: "messages",
      tabs: [
        {
          key: "messages",
          text: "Messages",
        },
        {
          key: "contacts",
          text: "Contacts",
        },
      ],
    };
  },
};
</script>
