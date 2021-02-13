<template>
  <nav class="py-4">
    <div class="bg-white p-2 rounded-lg shadow-card flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <router-link
          :to="{ name: 'projects' }"
          class="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Projects
        </router-link>
        <router-link
          :to="{ name: 'sign-in' }"
          class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          Sign in
        </router-link>
        <router-link
          :to="{ name: 'calendar' }"
          class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          Calendar
        </router-link>
        <router-link
          :to="{ name: 'data-table' }"
          class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          DataTable
        </router-link>
      </div>

      <div
        class="w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 duration-300 ease-in-out shadow-small cursor-pointer"
        :class="{ 'bg-indigo-400': toggleActive }"
        @click="toggleActive = !toggleActive"
      >
        <div
          class="bg-white w-4 h-4 rounded-full shadow-large transform duration-300 ease-in-out"
          :class="{ 'translate-x-4': toggleActive }"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavSection",
  data() {
    return {
      toggleActive: false,
    };
  },
};
</script>
