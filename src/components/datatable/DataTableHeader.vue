<template>
  <div class="bg-white p-2 rounded-lg shadow-card flex items-center justify-between mt-4">
    <div class="flex items-center">
      <router-link
        :to="{ name: 'projects' }"
        class="text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
      >
        Projects
      </router-link>
      <div class="mx-1 cursor-default">
        <svg
          fill="none"
          height="24"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          class="feather chevron-right w-5 h-5 stroke-current text-gray-400"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      <router-link
        :to="{ name: 'data-table' }"
        class="bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        DataTable
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTableHeader",
};
</script>

<style lang="scss" scoped></style>
