<template>
  <div class="text-green-800 grid grid-cols-4 gap-8">
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 1</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 2</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 3</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 4</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 5</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 6</div>
    <div class="bg-white shadow-card rounded-md p-4 h-60">card 7</div>
    <div class="bg-gray-100 rounded-md p-4 h-60 flex items-center justify-center">
      <button
        type="button"
        class="text-indigo-600 px-4 py-2 rounded-md text-sm font-medium tracking-wide shadow-card bg-white hover:bg-gray-50 ease-in transition-colors flex items-center"
      >
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
          class="feather feather-plus stroke-current w-5 h-5 text-indigo-600 mr-2"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span>New project</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
};
</script>
