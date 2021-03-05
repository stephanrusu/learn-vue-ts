<template>
  <div id="app" class="container mx-auto box-border">
    <!-- <nav-section /> -->
    <transition
      enter-active-class="transition-opacity ease-in-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
// import NavSection from "@/components/NavSection.vue";

export default {
  name: "App",
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  overflow-y: scroll;
}
</style>
