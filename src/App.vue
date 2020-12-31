<template>
  <div id="app" class="container mx-auto box-border">
    <!-- <nav-section /> -->
    <transition name="fade" mode="out-in" :duration="300" appear>
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

html,
body {
  background-color: rgb(250, 251, 255);
}

html {
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
