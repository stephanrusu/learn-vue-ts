<template>
  <div>
    <div class="flex flex-row mb-4">
      <input
        type="text"
        name="text"
        class="focus:border-indigo-300 mr-4 w-full sm:text-sm border-gray-300 rounded shadow-small focus:shadow-small-2"
      />
      <button
        type="button"
        class="rounded p-2 shadow-small bg-indigo-500 hover:text-indigo-600 ease-in transition-colors"
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
          class="feather feather-plus stroke-current w-5 h-5 text-white"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
    <div class="shadow-small">
      <div class="flex flex-row items-center justify-between border p-3 border-gray-300 rounded-tr rounded-tl">
        <label class="flex flex-row items-center" for="inputCheckbox">
          <input id="inputCheckbox" type="checkbox" class="opacity-0 absolute d-none" />
          <label
            for="inputCheckbox"
            class="rounded p-1 shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors mr-3"
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
              class="feather feather-check stroke-current w-4 h-4 text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </label>
          <div class="text-md text-gray-400">Some text here</div>
        </label>
        <button type="button" class="rounded p-2 shadow-small bg-red-300 hover:bg-red-400 ease-in transition-colors">
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
            class="feather feather-plus stroke-current w-4 h-4 text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="flex flex-row items-center justify-between border p-3 border-gray-300 rounded-br rounded-bl -mt-px">
        <label class="flex flex-row items-center" for="inputCheckbox">
          <input id="inputCheckbox" type="checkbox" class="opacity-0 absolute d-none" />
          <label
            for="inputCheckbox"
            class="rounded-md p-1 shadow-small bg-gray-100 hover:bg-gray-200 ease-in transition-colors mr-3"
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
              class="feather feather-check stroke-current w-4 h-4 text-white"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </label>
          <div class="text-md text-gray-700">Some text here</div>
        </label>
        <button type="button" class="rounded-md p-2 shadow-small bg-red-300 hover:bg-red-400 ease-in transition-colors">
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
            class="feather feather-plus stroke-current w-4 h-4 text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanSubTasksList",
};
</script>

<style lang="scss" scoped></style>
