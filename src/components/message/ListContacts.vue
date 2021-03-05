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
        <div :key="user.username" class="flex items-center py-3 px-2 hover:bg-gray-50">
          <div
            class="bg-indigo-400 flex items-center justify-center rounded shadow-small w-10 h-8 text-md text-white font-medium cursor-default"
          >
            {{ user.fullname | avatarId }}
          </div>
          <div class="ml-4 font-medium tracking-wide text-gray-600 text-sm">
            {{ user.fullname }}
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
