<template>
  <div class="px-4 pb-4 font-sans">
    <nav-section />
    <projects-page />
    <notification-container />
    <members-selection />
  </div>
</template>

<script>
import ProjectsPage from "@/components/ProjectsPage.vue";
import NavSection from "@/components/NavSection.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";
import MembersSelection from "../components/MembersSelection.vue";

export default {
  name: "Home",
  components: { ProjectsPage, NavSection, NotificationContainer, MembersSelection },
};
</script>
