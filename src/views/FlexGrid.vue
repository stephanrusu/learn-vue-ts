<template>
  <div>
    <div class="mt-4 px-4">
      <div class="flex flex-row -mx-4 flex-0-auto box-border flex-wrap mb-4">
        <div class="max-w-12/12 basis-12/12 lg:max-w-2/12 lg:basis-2/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="max-w-12/12 basis-12/12 lg:max-w-8/12 lg:basis-8/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="max-w-12/12 basis-12/12 lg:max-w-2/12 lg:basis-2/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
      </div>

      <div class="flex flex-row -mx-4 flex-0-auto box-border flex-wrap mb-4">
        <div class="max-w-12/12 basis-12/12 lg:max-w-2/12 lg:basis-2/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="max-w-12/12 basis-12/12 lg:max-w-8/12 lg:basis-8/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="max-w-12/12 basis-12/12 lg:max-w-2/12 lg:basis-2/12 px-4 flex flex-col">
          <div class="p-4 bg-teal-500"></div>
        </div>
      </div>
    </div>

    <div class="mt-4 px-4">
      <div class="flex-grid-row mb-4">
        <div class="flex-grid-col col-size-12 lg:col-size-2">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="flex-grid-col col-size-12 lg:col-size-8">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="flex-grid-col col-size-12 lg:col-size-2">
          <div class="p-4 bg-teal-500"></div>
        </div>
      </div>

      <div class="flex-grid-row">
        <div class="flex-grid-col col-size-12 lg:col-size-2">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="flex-grid-col col-size-12 lg:col-size-8">
          <div class="p-4 bg-teal-500"></div>
        </div>
        <div class="flex-grid-col col-size-12 lg:col-size-2">
          <div class="p-4 bg-teal-500"></div>
        </div>
      </div>
    </div>

    <div class="mt-4 px-4">
      <label id="listbox-label" class="block text-sm font-medium text-gray-700"> Assigned to </label>
      <div class="mt-2 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          class="relative w-full bg-white border border-gray-300 rounded-md shadow-small pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          @keyup.esc="isOpen = false"
          @keydown.tab="isOpen = !isOpen"
          @click="isOpen = !isOpen"
        >
          <span class="flex items-center">
            <user-avatar>{{ selectedUser.fullname | avatarId }}</user-avatar>
            <span class="ml-3 block font-normal truncate">
              {{ selectedUser.fullname }}
            </span>
          </span>
          <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              class="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div class="absolute mt-2 w-full rounded-md bg-white shadow-large">
          <ul
            v-if="isOpen"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            class="max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          >
            <li
              v-for="user in users"
              id="listbox-item-0"
              :key="user.username"
              tabindex="0"
              role="option"
              class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-indigo-500 hover:text-white"
              @click="changeSelectedUser(user)"
            >
              <div class="flex items-center">
                <user-avatar>{{ user.fullname | avatarId }}</user-avatar>
                <span class="ml-3 block font-normal truncate">
                  {{ user.fullname }}
                </span>
              </div>
              <span
                v-show="user.username === selectedUser.username"
                class="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <svg
                  class="h-5 w-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-4 px-4">
      <div class="flex cursor-pointer mr-4 space-x-2">
        <label
          for="inputCheckbox"
          :class="[
            'flex items-center justify-center rounded p-1 shadow-sm ease-in transition-colors cursor-pointer',
            checkboxSelected ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
          ]"
        >
          <input id="inputCheckbox" type="checkbox" name="members" class="opacity-0 absolute hidden" />
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

        <label
          for="inputRadio"
          :class="[
            'flex items-center justify-center rounded-full p-2 shadow-sm ease-in transition-colors cursor-pointer',
            radioSelected ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
          ]"
        >
          <input id="inputRadio" type="radio" name="members" class="opacity-0 absolute hidden" />
          <div class="w-2 h-2 rounded-full" :class="[radioSelected ? 'bg-white' : 'bg-gray-100']"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from "../components/kanban/common/UserAvatar.vue";
export default {
  name: "FlexGrid",
  components: { UserAvatar },
  data() {
    return {
      isOpen: false,
      checkboxSelected: false,
      radioSelected: false,
      selectedUser: {
        fullname: "Sam Reid",
        username: "sam.reid",
        email: "sam.reid@example.com",
      },
    };
  },
  computed: {
    users() {
      return this.$store.getters.listUsers;
    },
  },
  methods: {
    changeSelectedUser(user) {
      this.selectedUser = user;
      this.isOpen = false;
    },
  },
};
</script>
