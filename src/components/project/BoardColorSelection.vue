<template>
  <div class="relative">
    <button
      type="button"
      class="p-2 rounded hover:z-10 shadow-small"
      :class="[activeColor.className]"
      @click="toggleAction"
    >
      <div class="w-5 h-5"></div>
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
      <div v-if="toggleOptions" class="origin-top-left absolute left-0 mt-2 w-52 rounded-md shadow-lg bg-white z-50">
        <div
          class="p-2 grid grid-cols-6 grid-flow-row gap-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <template v-for="color in colorList">
            <button
              :key="color.name"
              type="button"
              class="cursor-pointer rounded h-6"
              :class="[color.className, { 'shadow-large': color.name === activeColor.name }]"
              @click="colorSelect(color)"
            ></button>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BoardColorSelection",
  data() {
    return {
      toggleOptions: false,
      activeColor: { name: "blue", className: "bg-blue-500" },
      colorList: [
        {
          name: "red",
          className: "bg-red-500",
        },
        {
          name: "orange",
          className: "bg-orange-500",
        },
        {
          name: "amber",
          className: "bg-amber-500",
        },
        {
          name: "yellow",
          className: "bg-yellow-500",
        },
        {
          name: "lime",
          className: "bg-lime-500",
        },
        {
          name: "green",
          className: "bg-green-500",
        },
        {
          name: "emerald",
          className: "bg-emerald-500",
        },
        {
          name: "teal",
          className: "bg-teal-500",
        },
        {
          name: "cyan",
          className: "bg-cyan-500",
        },
        {
          name: "light-blue",
          className: "bg-light-blue-500",
        },
        {
          name: "blue",
          className: "bg-blue-500",
        },
        {
          name: "indigo",
          className: "bg-indigo-500",
        },
        {
          name: "purple",
          className: "bg-purple-500",
        },
        {
          name: "fuchsia",
          className: "bg-fuchsia-500",
        },
        {
          name: "pink",
          className: "bg-pink-500",
        },
      ],
    };
  },
  methods: {
    toggleAction() {
      this.toggleOptions = !this.toggleOptions;
    },
    colorSelect(value) {
      this.activeColor = value;
      this.toggleAction();
    },
  },
};
</script>
