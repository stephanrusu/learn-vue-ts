<template>
  <div>
    <div class="flex flex-row">
      <input
        type="text"
        name="text"
        placeholder="Find users"
        class="focus:border-indigo-300 w-full border-gray-300 rounded shadow-small focus:shadow-medium text-xs"
      />
    </div>
    <div class="flex flex-col mt-4">
      <template v-for="user in users">
        <div :key="user.username" class="flex items-center py-3 px-1 hover:bg-gray-50">
          <div
            class="bg-indigo-400 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
          >
            {{ user.fullname | avatarId }}
          </div>
          <div class="ml-4 font-medium tracking-wide text-gray-600 text-sm">
            {{ user.fullname }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContacts",
  computed: {
    users() {
      return this.$store.getters.listUsers;
    },
  },
};
</script>
