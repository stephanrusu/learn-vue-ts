<template>
  <div class="block cursor-pointer mr-4">
    <label
      :for="inputCheckbox"
      :class="[
        'flex items-center justify-center rounded p-1 shadow-sm ease-in transition-colors cursor-pointer',
        checkboxSelected ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
      ]"
    >
      <input id="inputCheckbox" type="checkbox" name="members" class="opacity-0 absolute hidden" />
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

    <label
      :for="inputRadio"
      :class="[
        'flex items-center justify-center rounded-full p-2 shadow-sm ease-in transition-colors cursor-pointer',
        radioSelected ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-100 hover:bg-gray-200',
      ]"
    >
      <input id="inputRadio" type="radio" name="members" class="opacity-0 absolute hidden" />
      <div class="w-2 h-2 rounded-full" :class="[radioSelected ? 'bg-white' : 'bg-gray-100']"></div>
    </label>

    <div class="mt-3">
      <div class="flex items-center p-2 bg-gray-50">
        <div
          class="hover:z-10 flex items-center justify-center rounded shadow-small w-10 h-8 text-md bg-indigo-400 text-white font-medium cursor-default"
        >
          SR
        </div>
        <div class="ml-4 font-medium tracking-wide">
          <div class="text-sm text-indigo-600">Sam Reid</div>
          <div class="text-xs text-gray-400">@sam.reid</div>
        </div>
      </div>
      <button
        type="button"
        class="rounded-md mt-2 p-2 hover:bg-gray-50 ease-in transition-colors text-gray-400 text-sm font-medium"
        @click="toggleSelectUser"
      >
        Change
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCheckboxRadio",
  data() {
    return {
      checkboxSelected: true,
      radioSelected: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
