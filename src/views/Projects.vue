<template>
  <div class="px-4 pb-4 font-sans">
    <nav-section />
    <projects-page />
  </div>
</template>

<script>
import ProjectsPage from "@/components/ProjectsPage.vue";
import NavSection from "@/components/NavSection.vue";

export default {
  name: "Projects",
  components: { ProjectsPage, NavSection },
};
</script>
