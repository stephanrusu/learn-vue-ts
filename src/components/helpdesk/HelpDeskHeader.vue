<template>
  <nav class="bg-indigo-800">
    <div class="max-w-5/6 xl:max-w-3/4 mx-auto flex items-center justify-between h-16">
      <div>
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
          class="feather feather-acme-logo w-8 h-8 stroke-current text-white"
        >
          <path d="M20 16V8" />
          <path d="M4 16V8" />
          <path d="M12 16V8" />
          <path d="M16 20V4" />
          <path d="M8 20V4" />
        </svg>
      </div>
      <div>
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#" class="bg-indigo-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>

          <a
            href="#"
            class="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Team
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Calendar
          </a>

          <a
            href="#"
            class="text-gray-300 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Reports
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelpdeskHeader",
};
</script>
