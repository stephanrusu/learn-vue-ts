<template>
  <div>
    <div class="flex flex-row items-center justify-between bg-white p-4 shadow-card mt-4">
      <div class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{{ (currentPage - 1) * itemsSelected }}</span>
        to
        <span class="font-medium">{{ currentPage * itemsSelected > total ? total : currentPage * itemsSelected }}</span>
        of
        <span class="font-medium">{{ total }}</span>
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
          :disabled="!hasPrev"
          @click="prev"
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
          :disabled="!hasNext"
          @click="next"
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
          <li v-if="hasFirst">
            <button
              class="flex flex-1 py-2 w-10 rounded font-medium text-gray-700 hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              aria-label="Goto page 1"
              @click="first"
            >
              1
            </button>
          </li>
          <li v-if="hasFirstEllipsis">
            <span class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium items-center justify-center">
              &hellip;
            </span>
          </li>
          <li v-for="page in pagesInRange" :key="page.number">
            <button
              class="flex flex-1 py-2 w-10 rounded font-medium items-center justify-center ease-in transition-colors"
              :aria-label="`Goto page ${page.number}`"
              :class="[page.isCurrent ? 'text-white bg-cyan-500 hover:bg-cyan-600' : 'text-gray-700 hover:bg-gray-100']"
              @click="goToPage(page.number)"
            >
              {{ page.number }}
            </button>
          </li>
          <li v-if="hasLastEllipsis">
            <span class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium items-center justify-center">
              &hellip;
            </span>
          </li>
          <li v-if="hasLast">
            <button
              class="flex flex-1 py-2 w-10 rounded text-gray-700 font-medium hover:bg-gray-100 items-center justify-center ease-in transition-colors"
              :aria-label="`Goto page ${pageCount}`"
              @click="last"
            >
              {{ pageCount }}
            </button>
          </li>
        </ul>
      </nav>
      <div class="flex flex-row items-center">
        <label class="text-sm font-medium text-gray-500 mr-4" for="goToPage">Go to page</label>
        <input
          id="goToPage"
          v-model="pageSelect"
          type="number"
          min="1"
          step="1"
          :max="total"
          name="goToPage"
          class="appereance-none focus:border-indigo-300 block w-14 sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium text-gray-600 placeholder-gray-300"
        />
        <button
          type="button"
          class="rounded py-2 px-3 shadow-small bg-white text-gray-500 ease-in transition-colors bg-white hover:bg-gray-100 border ml-4"
          @click="goToPage(pageSelect)"
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
      itemsValues: [10, 30, 50, 100],
      beforeCurrent: 1,
      afterCurrent: 1,
      pageSelect: "0",
    };
  },
  computed: {
    /**
     * getters
     */
    total() {
      return this.$store.getters.listDataSize;
    },
    itemsSelected() {
      return this.$store.getters.pageSize;
    },
    pageCount() {
      return this.$store.getters.pageCount;
    },
    currentPage() {
      return this.$store.getters.pageNumber;
    },
    /**
     * Check if previous button is available.
     */
    hasPrev() {
      return this.currentPage > 1;
    },

    /**
     * Check if next button is available.
     */
    hasNext() {
      return this.currentPage < this.pageCount;
    },

    /**
     * Check if first page button should be visible.
     */
    hasFirst() {
      return this.currentPage >= this.beforeCurrent + 2;
    },

    /**
     * Check if first ellipsis should be visible.
     */
    hasFirstEllipsis() {
      return this.currentPage >= this.beforeCurrent + 4;
    },

    /**
     * Check if last page button should be visible.
     */
    hasLast() {
      return this.currentPage <= this.pageCount - (this.afterCurrent + 1);
    },

    /**
     * Check if last ellipsis should be visible.
     */
    hasLastEllipsis() {
      return this.currentPage < this.pageCount - (this.afterCurrent + 2);
    },

    /**
     * Display the first and last 3 pages on edges,
     * after that, 1 before and 1 after the current.
     */
    pagesInRange() {
      let left = Math.max(1, this.currentPage - this.beforeCurrent);
      if (left - 1 === 2) {
        left -= 1; // Do not show the ellipsis if there is only one to hide
      }
      let right = Math.min(this.currentPage + this.afterCurrent, this.pageCount);
      if (this.pageCount - right === 2) {
        right += 1; // Do not show the ellipsis if there is only one to hide
      }
      const pages = [];
      for (let i = left; i <= right; i += 1) {
        pages.push({
          number: i,
          isCurrent: this.currentPage === i,
        });
      }
      return pages;
    },
  },
  watch: {
    /**
     * If current page is trying to be greater than page count, set to last.
     */
    pageCount(value) {
      if (this.currentPage > value) this.last();
    },
  },
  beforeDestroy() {
    this.first();
  },
  methods: {
    toggleAction() {
      this.itemsToggle = !this.itemsToggle;
    },
    selectAction(value) {
      this.$store.dispatch("update:itemsPerPage", value);
      this.toggleAction();
    },
    /**
     * Previous button click listener.
     */
    prev() {
      if (!this.hasPrev) return;
      this.$store.dispatch("update:currentPage", this.currentPage - 1);
    },

    /**
     * First button click listener.
     */
    first() {
      this.$store.dispatch("update:currentPage", 1);
    },

    /**
     * Last button click listener.
     */
    last() {
      this.$store.dispatch("update:currentPage", this.pageCount);
    },

    /**
     * Next button click listener.
     */
    next() {
      if (!this.hasNext) return;
      this.$store.dispatch("update:currentPage", this.currentPage + 1);
    },

    /**
     * Go to a specific page
     */
    goToPage(page) {
      if (this.currentPage === parseInt(page, 10)) return;
      this.$store.dispatch("update:currentPage", parseInt(page, 10));
    },
  },
};
</script>
<style scoped>
.appereance-none {
  -moz-appearance: textfield;
}
</style>
