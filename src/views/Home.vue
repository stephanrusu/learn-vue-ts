<template>
  <div class="px-4 pb-4 font-sans">
    <nav-section />
    <projects-page />
    <notification-container />
  </div>
</template>

<script>
import ProjectsPage from "@/components/ProjectsPage.vue";
import NavSection from "@/components/NavSection.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";

export default {
  name: "Home",
  components: { ProjectsPage, NavSection, NotificationContainer },
};
</script>
