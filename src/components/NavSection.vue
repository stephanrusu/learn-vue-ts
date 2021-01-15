<template>
  <nav class="py-4">
    <div class="bg-white max-w-full mx-auto p-4 rounded-lg shadow-card">
      <div class="flex items-center space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link :to="{ name: 'home' }" class="bg-gray-100 text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
          Home
        </router-link>
        <router-link
          :to="{ name: 'kanban' }"
          class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          Kanban
        </router-link>
        <router-link
          :to="{ name: 'sign-in' }"
          class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
        >
          Sign in
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavSection",
};
</script>
