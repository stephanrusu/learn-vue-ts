<template>
  <div v-frag>
    <help-desk-header />
    <help-desk-hero />
    <help-desk-categories />
    <help-desk-questions />
    <help-desk-team />
  </div>
</template>

<script>
import HelpDeskCategories from "./helpdesk/HelpDeskCategories.vue";
import HelpDeskHeader from "./helpdesk/HelpDeskHeader.vue";
import HelpDeskHero from "./helpdesk/HelpDeskHero.vue";
import HelpDeskQuestions from "./helpdesk/HelpDeskQuestions.vue";
import HelpDeskTeam from "./helpdesk/HelpDeskTeam.vue";
export default {
  name: "HelpDeskPage",
  components: { HelpDeskHeader, HelpDeskHero, HelpDeskCategories, HelpDeskTeam, HelpDeskQuestions },
};
</script>
