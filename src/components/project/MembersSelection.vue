<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-t-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Team</div>
          <div class="text-sm text-gray-500">Select the team members involved in this project</div>
        </div>
      </div>
    </template>
    <template #main>
      <users-select
        :multiple="multiple"
        class="py-4 px-2"
        :selection="selectedProject.teamMembers"
        @userSelection="updateMembers"
      />
    </template>
    <template #footer="{ slideAction }">
      <div class="flex flex-row space-x-2 ml-auto">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-gray-100 ease-in transition-colors"
          @click="
            slideAction();
            $router.go(-1);
          "
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="
            slideAction();
            $router.go(-1);
          "
        >
          Select team
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import UsersSelect from "../kanban/common/UsersSelect.vue";
import KanbanOverlay from "../KanbanOverlay.vue";
import { objectClone } from "@/utils";
export default {
  name: "MembersSelection",
  components: { KanbanOverlay, UsersSelect },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      members: [],
    };
  },
  computed: {
    selectedProject() {
      return objectClone(this.$store.getters.selectedProject(this.$route.params.projectId));
    },
  },
  methods: {
    updateMembers(list) {
      this.members = list;
    },
  },
};
</script>
