<template>
  <div v-frag>
    <div class="flex flex-row items-center justify-between bg-white p-4 shadow-card mt-4">
      <div class="text-sm text-gray-700">
        Showing
        <span class="font-medium">60</span>
        to
        <span class="font-medium">70</span>
        of
        <span class="font-medium">146</span>
        results
      </div>
      <div class="flex flex-row items-center">
        <div class="text-sm text-gray-700 mr-4">Items per page</div>
        <div class="relative">
          <button
            id="options-menu"
            type="button"
            class="inline-flex justify-center px-3 py-1 w-14 bg-cyan-500 text-white hover:bg-cyan-600 rounded text-md font-medium"
            :class="{ 'bg-cyan-600': itemsToggle }"
            aria-haspopup="true"
            aria-expanded="true"
            @click="toggleAction"
          >
            {{ itemsSelected }}
          </button>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
            mode="out-in"
            appear
          >
            <div
              v-if="itemsToggle"
              class="origin-top-right absolute right-0 mt-2 w-14 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div class="p-2 space-y-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <template v-for="value in itemsValues">
                  <button
                    :key="value"
                    class="rounded block w-full p-2 text-sm text-center"
                    :class="[
                      itemsSelected === value
                        ? 'text-white bg-cyan-500 hover:text-white hover:bg-cyan-600'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-800',
                    ]"
                    role="menuitem"
                    @click="selectAction(value)"
                  >
                    {{ value }}
                  </button>
                </template>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <slot />
    <div class="flex flex-row items-center justify-between bg-white p-4 shadow-card">
      <nav class="flex flex-row items-center" role="navigation" aria-label="pagination">
        <!-- previous -->
        <button
          class="flex flex-1 py-2 w-10 rounded bg-gray-50 hover:bg-gray-100 items-center justify-center ease-in transition-colors mr-10"
          aria-label="Previous page"
        >
          <svg
            fill="none"
            height="24"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            view-box="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            class="feather text-gray-800"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <!-- next -->
        <button
          class="flex flex-1 py-2 w-10 rounded bg-gray-50 hover:bg-gray-100 items-center justify-center ease-in transition-colors order-3 ml-10"
          aria-label="Next page"
        >
          <svg
            fill="none"
            height="24"
            stroke="#000"
            troke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            view-box="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            class="feather text-gray-800"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <!-- pages -->
        <ul class="flex flex-row space-x-4">
          <li>
            <button
              class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              aria-label="Goto page 1"
            >
              1
            </button>
          </li>
          <li>
            <span class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium items-center justify-center"
              >&hellip;</span
            >
          </li>
          <li>
            <button
              class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              aria-label="Goto page 5"
            >
              5
            </button>
          </li>
          <li>
            <button
              class="flex flex-1 py-2 w-10 rounded font-medium text-white bg-cyan-500 hover:bg-cyan-600 items-center justify-center ease-in transition-colors shadow-medium"
              aria-label="Page 6"
              aria-current="page"
            >
              6
            </button>
          </li>
          <li>
            <button
              class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              aria-label="Goto page 7"
            >
              7
            </button>
          </li>
          <li>
            <span class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium items-center justify-center"
              >&hellip;</span
            >
          </li>
          <li>
            <button
              class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              aria-label="Goto page 15"
            >
              15
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row items-center">
        <label class="text-sm font-medium text-gray-500 mr-4" for="goToPage">Go to page</label>
        <input
          id="goToPage"
          type="text"
          name="goToPage"
          class="focus:border-indigo-300 block w-14 sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium text-gray-600 placeholder-gray-300"
        />
        <button
          type="button"
          class="rounded py-2 px-3 shadow-small bg-white text-gray-500 ease-in transition-colors bg-white hover:bg-gray-100 border ml-4"
        >
          Go
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataTablePagination",
  data() {
    return {
      itemsToggle: false,
      itemsSelected: 10,
      itemsValues: [10, 30, 50, 100],
    };
  },
  methods: {
    toggleAction() {
      this.itemsToggle = !this.itemsToggle;
    },
    selectAction(value) {
      this.itemsSelected = value;
      this.toggleAction();
    },
  },
};
</script>
