<template>
  <div class="py-4 px-2 flex flex-col space-y-2">
    <template v-for="(user, index) in users">
      <label
        :key="user.username"
        :for="`user-${index}`"
        class="flex items-center p-2 hover:bg-gray-100 rounded-md"
        :class="{ 'bg-gray-50': checkValidation(user.username) }"
      >
        <div class="block cursor-pointer mr-4">
          <div
            v-if="multiple"
            :class="[
              'flex items-center justify-center rounded p-1 shadow-sm ease-in transition-colors cursor-pointer',
              checkValidation(user.username) ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
            ]"
          >
            <input
              :id="`user-${index}`"
              type="checkbox"
              name="members"
              class="opacity-0 absolute hidden"
              @change="toggleSelectUser(user.username)"
            />
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
          </div>

          <div
            v-else
            :class="[
              'flex items-center justify-center rounded-full p-2 shadow-sm ease-in transition-colors cursor-pointer',
              checkValidation(user.username) ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
            ]"
          >
            <input
              :id="`user-${index}`"
              type="radio"
              name="members"
              class="opacity-0 absolute hidden"
              @change="toggleSelectUser(user.username)"
            />
            <div
              class="w-2 h-2 rounded-full"
              :class="[selectedUsers === user.username ? 'bg-white' : 'bg-gray-100']"
            ></div>
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="bg-indigo-400 hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
          >
            {{ user.fullname | avatarId }}
          </div>
          <div class="ml-4 font-medium tracking-wide">
            <div :class="['text-sm', selectedUsers.indexOf(user.username) >= 0 ? 'text-indigo-600' : 'text-gray-600']">
              {{ user.fullname }}
            </div>
            <div :class="['text-xs text-gray-400']">@{{ user.username }}</div>
          </div>
        </div>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  name: "UsersSelect",
  props: {
    users: {
      type: Array,
      default() {
        return [];
      },
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedUsers: [],
    };
  },
  methods: {
    checkValidation(username) {
      if (this.multiple) {
        return this.selectedUsers.indexOf(username) >= 0;
      } else {
        return this.selectedUsers === username;
      }
    },
    toggleSelectUser(username) {
      if (this.multiple) {
        let indexUser = this.selectedUsers.indexOf(username);

        if (indexUser < 0) {
          this.selectedUsers.push(username);
        } else {
          this.selectedUsers.splice(indexUser, 1);
        }
      } else {
        this.selectedUsers = username;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
