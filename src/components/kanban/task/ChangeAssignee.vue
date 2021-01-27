<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-tl-md rounded-tr-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Team</div>
          <div class="text-sm text-gray-500">Select the team members involved in this project</div>
        </div>
      </div>
    </template>
    <template #main>
      <users-select :users="users" :multiple="multiple" />
    </template>
    <template #footer>
      <div class="flex flex-row space-x-2">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <button
          type="button"
          class="text-white px-10 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
        >
          Select user
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import UsersSelect from "../../kanban/common/UsersSelect.vue";
import KanbanOverlay from "../../KanbanOverlay.vue";

export default {
  name: "ChangeAssignee",
  components: { KanbanOverlay, UsersSelect },
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      users: [
        {
          fullname: "Zoey Ryan",
          username: "zoey.ryan",
          email: "zoey.ryan@example.com",
        },
        {
          fullname: "Cameron Simmons",
          username: "cameron.simmons",
          email: "cameron.simmons@example.com",
        },
        {
          fullname: "Josephine Davidson",
          username: "josephine.davidson",
          email: "josephine.davidson@example.com",
        },
        {
          fullname: "Mia Russo",
          username: "mia.russo",
          email: "mia.russo@example.com",
        },
        {
          fullname: "Dean Hale",
          username: "dean.hale",
          email: "dean.hale@example.com",
        },
        {
          fullname: "Jaime Garcia",
          username: "jamie.garcia",
          email: "jamie.garcia@example.com",
        },
        {
          fullname: "Sam Reid",
          username: "sam.reid",
          email: "sam.reid@example.com",
        },
        {
          fullname: "Tara Barnett",
          username: "tara.barnett",
          email: "tara.barnett@example.com",
        },
        {
          fullname: "Bianca Cruz",
          username: "bianca.cruz",
          email: "bianca.cruz@example.com",
        },
      ],
    };
  },
};
</script>
