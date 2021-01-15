<template>
  <div class="px-4 pb-4 font-sans">
    <nav-section />
    <projects-page />
  </div>
</template>

<script>
import ProjectsPage from "@/components/project/ProjectsPage.vue";
import NavSection from "@/components/NavSection.vue";

export default {
  name: "Home",
  components: { ProjectsPage, NavSection },
};
</script>
