<template>
  <div class="flex-grid-row mt-4">
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
          <list-users v-if="activeTab === 'messages'" :key="activeTab" />
          <div v-if="activeTab === 'contacts'" :key="activeTab">list</div>
        </transition>
      </div>
    </div>
    <div class="flex-grid-col col-size-8">
      <div class="bg-white p-4 rounded-lg shadow-card h-full">
        <div class="flex items-center bg-white relative rounded-md">
          <div
            class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-orange-400 text-white font-medium cursor-default"
          >
            MR
          </div>
          <div class="ml-4 font-medium tracking-wide space-y-1">
            <div class="text-sm text-gray-700">Mia Russo</div>
          </div>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            class="inline-flex justify-center px-2 py-1 hover:bg-gray-100 ml-auto"
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
              class="feather feather-more-horizontal w-5 h-5 stroke-current text-gray-700"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
        <div class="py-2">
          <div class="flex flex-col items-center mt-2 mb-4">
            <hr class="w-full" />
            <span
              class="text-gray-400 flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-md border text-xs font-medium"
            >
              Today
            </span>
          </div>
          <div class="flex mt-2 justify-start">
            <div class="space-y-1 text-sm text-gray-600 font-medium flex flex-col items-start max-w-lg">
              <div class="bg-gray-100 shadow-small p-3 rounded-r-md rounded-tl-md">
                Pastry chupa chups liquorice chocolate cupcake.
              </div>
              <div class="bg-gray-100 shadow-small p-3 rounded-r-md rounded-bl-md">Biscuit pastry cake.</div>
              <div class="text-xs text-gray-400 leading-none pt-1">5 min ago</div>
            </div>
          </div>
          <div class="flex mt-2 justify-end">
            <div class="space-y-1 text-white text-sm font-medium flex flex-col items-end max-w-lg">
              <div class="bg-indigo-400 shadow-small p-3 rounded-l-md rounded-tr-md">
                Fruitcake marshmallow cookie jujubes cake sugar plum chocolate bar sugar plum.
              </div>
              <div class="bg-indigo-400 shadow-small p-3 rounded-l-md">
                Chocolate dessert cotton candy lollipop lemon drops cookie jelly-o tart.
              </div>
              <div class="bg-indigo-400 shadow-small p-3 rounded-l-md rounded-br-md">Biscuit pastry cake.</div>
              <div class="text-xs text-gray-400 leading-none text-right pt-1">2 min ago</div>
            </div>
          </div>
        </div>
      </div>
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
  methods: {
    selectTab(tabEntry) {
      this.activeTab = tabEntry;
    },
  },
};
</script>
