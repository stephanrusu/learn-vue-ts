<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-tl-md rounded-tr-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Team</div>
          <div class="text-sm text-gray-500">Select the team members involved in this project</div>
        </div>
      </div>
    </template>
    <template #main>
      <!-- <div class="flex px-4 pt-4 pb-2">
        <input
          type="text"
          name="text"
          placeholder="Lookin' for someone ?"
          class="focus:border-indigo-300 w-full border-gray-300 rounded shadow-small focus:shadow-small-2 text-sm"
        />
      </div> -->
      <div class="py-4 px-2 flex flex-col">
        <template v-for="(user, index) in users">
          <div
            :key="user.username"
            :class="[
              'flex items-center p-2 hover:bg-gray-100 rounded-md',
              selectedUsers.indexOf(user.username) >= 0 ? 'bg-gray-50' : '',
            ]"
          >
            <div
              class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
            >
              {{ user.fullname | avatarId }}
            </div>
            <div class="ml-4 font-medium tracking-wide">
              <div class="text-sm text-gray-600">{{ user.fullname }}</div>
              <div class="text-xs text-gray-400">@{{ user.username }}</div>
            </div>
            <div class="block cursor-pointer ml-auto">
              <input
                :id="`user-${index}`"
                type="checkbox"
                class="opacity-0 absolute d-none"
                @change="toggleSelectUser(user.username)"
              />
              <label
                :for="`user-${index}`"
                :class="[
                  'flex items-center justify-center rounded p-1 shadow-sm ease-in transition-colors cursor-pointer',
                  selectedUsers.indexOf(user.username) >= 0
                    ? 'bg-indigo-500 hover:bg-indigo-600'
                    : 'bg-gray-100 hover:bg-gray-200',
                ]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-check stroke-current w-4 h-4 text-white"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </label>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 ease-in transition-colors"
          @click="closeOverlay"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
        >
          Select team
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import KanbanOverlay from "./KanbanOverlay.vue";

export default {
  name: "MembersSelection",
  components: { KanbanOverlay },
  data() {
    return {
      selectedUsers: [],
      users: [
        {
          fullname: "Zoey Ryan",
          username: "zoey.ryan",
          email: "zoey.ryan@example.com",
        },
        {
          fullname: "Cameron Simmons",
          username: "cameron.simmons",
          email: "cameron.simmons@example.com",
        },
        {
          fullname: "Josephine Davidson",
          username: "josephine.davidson",
          email: "josephine.davidson@example.com",
        },
        {
          fullname: "Mia Russo",
          username: "mia.russo",
          email: "mia.russo@example.com",
        },
        {
          fullname: "Dean Hale",
          username: "dean.hale",
          email: "dean.hale@example.com",
        },
        {
          fullname: "Jaime Garcia",
          username: "jamie.garcia",
          email: "jamie.garcia@example.com",
        },
        {
          fullname: "Sam Reid",
          username: "sam.reid",
          email: "sam.reid@example.com",
        },
        {
          fullname: "Tara Barnett",
          username: "tara.barnett",
          email: "tara.barnett@example.com",
        },
        {
          fullname: "Bianca Cruz",
          username: "bianca.cruz",
          email: "bianca.cruz@example.com",
        },
      ],
    };
  },
  methods: {
    toggleSelectUser(userName) {
      let indexUser = this.selectedUsers.indexOf(userName);

      if (indexUser < 0) {
        this.selectedUsers.push(userName);
      } else {
        this.selectedUsers.splice(indexUser, 1);
      }
    },
    closeOverlay() {
      this.$store.dispatch("slideOverlay");
    },
  },
};
</script>
