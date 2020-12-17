<template>
  <div id="app" class="container mx-auto">
    <nav-section />
    <router-view />
  </div>
</template>

<script>
import NavSection from "@/components/NavSection.vue";

export default {
  name: "App",
  components: {
    NavSection,
  },
};
</script>
