<template>
  <div class="flex-grid-row mt-4 flex-1">
    <div class="flex-grid-col col-size-4">
      <div class="space-y-2 p-4 bg-white rounded-lg shadow-card h-full relative">
        <div class="mb-4 flex flex-row space-x-4">
          <template v-for="tab in tabs">
            <div
              :key="tab.key"
              :class="[
                'z-10 cursor-pointer text-center p-2 font-medium text-sm flex-1',
                activeTab === tab.key
                  ? 'text-indigo-500 hover:text-indigo-600 border-b-2 border-indigo-500 shadow-small hover:border-indigo-600'
                  : 'text-gray-400 hover:text-gray-500 hover:border-b hover:border-gray-400',
              ]"
              @click="selectTab(tab.key)"
            >
              {{ tab.text }}
            </div>
          </template>
        </div>
        <transition
          appear
          enter-active-class="transition ease-out-in duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in-out duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <list-messages v-if="activeTab === 'messages'" :key="activeTab" />
          <list-contacts v-if="activeTab === 'contacts'" :key="activeTab" />
        </transition>
      </div>
    </div>
    <message-chat-section />
  </div>
</template>

<script>
import ListContacts from "./ListContacts.vue";
import ListMessages from "./ListMessages.vue";
import MessageChatSection from "./MessageChatSection.vue";
export default {
  name: "MessageContainer",
  components: { ListMessages, MessageChatSection, ListContacts },
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
  methods: {
    selectTab(tabEntry) {
      this.activeTab = tabEntry;
    },
  },
};
</script>
