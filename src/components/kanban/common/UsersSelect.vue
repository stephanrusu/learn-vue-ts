<template>
  <div class="flex flex-col space-y-2">
    <template v-for="(user, index) in users">
      <label
        :key="user.username"
        :for="`user-${index}`"
        class="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        :class="{ 'bg-gray-50': checkValidation(user.username) }"
      >
        <input
          v-if="multiple"
          :id="`user-${index}`"
          type="checkbox"
          name="members"
          class="opacity-0 absolute hidden"
          @change="toggleSelectUser(user.username)"
        />
        <input
          v-else
          :id="`user-${index}`"
          type="radio"
          name="members"
          class="opacity-0 absolute hidden"
          @change="toggleSelectUser(user.username)"
        />
        <div class="flex items-center">
          <div
            class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
            :class="[checkValidation(user.username) ? 'bg-indigo-500 shadow-large' : 'bg-indigo-100 text-indigo-400']"
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
