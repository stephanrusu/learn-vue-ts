<template>
  <nav class="py-4">
    <div class="bg-white p-2 rounded-lg shadow-card flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link :to="{ name: 'home' }" class="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
          Projects
        </router-link>
        <router-link
          :to="{ name: 'sign-in' }"
          class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          Sign in
        </router-link>
      </div>

      <div
        class="w-10 h-6 flex items-center bg-gray-200 rounded-full p-1 duration-300 ease-in-out shadow-small"
        :class="{ 'bg-indigo-400': toggleActive }"
        @click="toggleActive = !toggleActive"
      >
        <div
          class="bg-white w-4 h-4 rounded-full shadow-small-3 transform duration-300 ease-in-out"
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
