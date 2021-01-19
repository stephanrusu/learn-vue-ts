<template>
  <div class="fixed bottom-6 px-10 font-sans w-full -ml-4">
    <div class="bg-gray-900 rounded-lg shadow-lg flex items-center py-4 px-6">
      <p class="text-white font-bold tracking-wide">tailwindUI</p>
      <p class="text-gray-100 flex-grow ml-10">
        <span class="text-white font-semibold">Now in early access!</span> Beautiful UI components, crafted by the
        creators of Tailwind CSS.
      </p>
      <button class="bg-white text-gray-900 py-2 px-3 rounded mr-4 text-sm font-medium hover:bg-gray-100">
        Learn more
      </button>
      <button class="font-bold text-white p-2 hover:bg-gray-700 rounded">
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
          class="feather feather-x stroke-current text-white w-5 h-5"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationContainer",
};
</script>
