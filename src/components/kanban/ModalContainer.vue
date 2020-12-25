<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
    </div>
    <div class="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 id="modal-headline" class="text-lg leading-6 font-medium text-gray-900">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your data will be permanently removed. This
                  action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Deactivate
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="absolute z-20 top-6 right-6 p-2 hover:bg-gray-600 rounded-full"
      @click="$emit('modalToggle')"
    >
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
        class="feather feather-x stroke-current text-white"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",
  props: {
    modalOpen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
  destroyed() {
    document.body.style = "";
  },
};
</script>
