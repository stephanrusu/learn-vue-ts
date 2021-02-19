<template>
  <div class="space-y-2">
    <template v-for="(user, index) in users">
      <label
        :key="user.username"
        :for="`user-${index}`"
        class="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        :class="{ 'bg-gray-50': checkValidation(user) }"
      >
        <input
          v-if="multiple"
          :id="`user-${index}`"
          type="checkbox"
          name="members"
          class="opacity-0 absolute hidden"
          @change="toggleSelectUser(user)"
        />
        <input
          v-else
          :id="`user-${index}`"
          type="radio"
          name="members"
          class="opacity-0 absolute hidden"
          @change="toggleSelectUser(user)"
        />
        <div class="flex items-center">
          <div
            class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
            :class="[checkValidation(user) ? 'bg-indigo-500 shadow-large' : 'bg-indigo-100 text-indigo-400']"
          >
            {{ user.fullname | avatarId }}
          </div>
          <div class="ml-4 font-medium tracking-wide">
            <div :class="['text-sm', checkValidation(user) ? 'text-indigo-600' : 'text-gray-600']">
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
    selection: {
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
  computed: {
    users() {
      return this.$store.getters.listUsers;
    },
  },
  mounted() {
    if (this.selection !== undefined) {
      this.selectedUsers = this.selection;
    }
  },
  methods: {
    checkValidation(user) {
      if (this.multiple) {
        return this.selectedUsers.indexOf(user) >= 0;
      } else {
        return this.selectedUsers === user;
      }
    },
    toggleSelectUser(user) {
      if (this.multiple) {
        let indexUser = this.selectedUsers.indexOf(user);

        if (indexUser < 0) {
          this.selectedUsers.push(user);
        } else {
          this.selectedUsers.splice(indexUser, 1);
        }
      } else {
        this.selectedUsers = user;
      }

      this.$emit("userSelection", this.selectedUsers);
    },
  },
};
</script>

<style lang="scss" scoped></style>
