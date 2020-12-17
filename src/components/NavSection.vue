<template>
  <nav class="p-4">
    <div class="bg-white max-w-full mx-auto px-4 rounded-lg shadow-card">
      <div class="flex items-center h-16 space-x-4">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-100 text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
        <a href="#" class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Team</a>
        <a href="#" class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
        <a href="#" class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
        <a href="#" class="text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Reports</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavSection",
};
</script>
