<template>
  <kanban-overlay>
    <template #header>
      <div class="p-4 bg-gray-50 rounded-t-md shadow-small">
        <div class="flex flex-col">
          <div class="mb-1 text-lg text-gray-800 font-medium tracking-wide">Project information</div>
          <div class="text-sm text-gray-500">Get started by filling the information below to create a new project</div>
        </div>
      </div>
    </template>
    <template #main>
      <div class="flex flex-row pt-4 pb-2 px-4 space-x-4 border-b">
        <template v-for="(step, index) in stepList">
          <div :key="step.key" class="flex-1 relative cursor-default">
            <div
              class="absolute h-1 top-0 rounded-sm w-full"
              :class="[currentStep >= index ? 'bg-indigo-500 shadow-medium' : 'bg-gray-300']"
            />
            <div class="pt-3">
              <div class="text-xs font-medium" :class="[currentStep >= index ? 'text-indigo-500' : 'text-gray-300']">
                Step {{ index + 1 }}
              </div>
              <div class="text-sm font-medium" :class="[currentStep >= index ? 'text-gray-600' : 'text-gray-400']">
                {{ step.name }}
              </div>
            </div>
          </div>
        </template>
      </div>
      <transition
        appear
        enter-active-class="transition ease-in-out duration-500"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-500"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
        tag="div"
        class="relative"
      >
        <div v-if="stepList[currentStep].key === 'details'" :key="currentStep" class="py-2 px-4 space-y-3">
          <div class="space-y-2">
            <label for="projectTitle" class="text-sm font-medium text-gray-700">Title</label>
            <input
              id="projectTitle"
              v-model="projectData.title"
              type="text"
              name="project-title"
              class="focus:border-indigo-300 block w-full text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
            />
          </div>
          <div class="space-y-2">
            <label for="projectDescription" class="text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="projectDescription"
              v-model="projectData.description"
              name="project-description"
              class="focus:border-indigo-300 block w-full text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium resize-none"
              rows="3"
            ></textarea>
          </div>
          <div class="space-y-2">
            <label for="projectCode" class="text-sm font-medium text-gray-700">Referrence</label>
            <input
              id="projectCode"
              v-model="projectData.code"
              type="text"
              name="project-code"
              class="focus:border-indigo-300 block w-full text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
            />
          </div>
        </div>
        <users-select
          v-if="stepList[currentStep].key === 'members'"
          :key="currentStep"
          :selection="projectData.members"
          :multiple="true"
          class="p-2"
          @userSelection="updateMembers"
        />
        <div v-if="stepList[currentStep].key === 'boards'" :key="currentStep" class="px-4 py-2 space-y-3">
          <template v-for="n in 4">
            <div :key="n" class="flex flex-col">
              <label class="text-sm font-medium text-gray-700 mb-2">Board name</label>
              <div class="flex flex-row items-center space-x-2 flex-1">
                <board-color-selection />
                <input
                  type="text"
                  placeholder="Board name"
                  class="focus:border-indigo-300 block w-full text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
                />
                <div class="flex shadow-small">
                  <button
                    type="button"
                    class="flex-auto p-2 hover:bg-gray-100 bg-gray-50 border rounded-l hover:z-10 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-up w-5 h-5 stroke-current text-gray-700"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="flex-auto p-2 hover:bg-gray-100 bg-gray-50 border -ml-px hover:z-10 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-down w-5 h-5 stroke-current text-gray-700"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="flex-auto p-2 hover:bg-gray-100 bg-gray-50 border -ml-px rounded-r hover:z-10 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-plus stroke-current text-red-500 w-4 h-4"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </template>
          <div class="flex justify-center py-4">
            <button
              type="button"
              class="border-2 border-indigo-200 text-indigo-400 bg-white hover:border-indigo-500 hover:text-white hover:bg-indigo-500 px-6 py-1 rounded-md text-sm font-medium tracking-wide shadow-small ease-in transition-colors"
            >
              New board
            </button>
          </div>
        </div>
        <div v-if="stepList[currentStep].key === 'preview'" :key="currentStep" class="py-2 px-4 space-y-2">
          <div class="">
            <label class="text-xs font-medium text-gray-400">Title</label>
            <div class="text-sm text-gray-700">{{ projectData.title }}</div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Description</label>
            <div class="text-sm text-gray-700">
              {{ projectData.description }}
            </div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Referrence</label>
            <div class="text-sm text-gray-700">{{ projectData.code }}</div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Team members</label>
            <div class="flex items-center space-x-2 mt-2">
              <template v-for="member in projectData.members">
                <user-avatar :key="member.username">{{ member.fullname | avatarId }}</user-avatar>
              </template>
            </div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Boards</label>
            <div class="flex flex-row space-x-2 mt-2">
              <div class="flex-auto p-2 text-sm font-medium text-white bg-indigo-500 rounded shadow-small">To Do</div>
              <div class="flex-auto p-2 text-sm font-medium text-white bg-blue-500 rounded shadow-small">
                In Progress
              </div>
              <div class="flex-auto p-2 text-sm font-medium text-white bg-cyan-500 rounded shadow-small">In Review</div>
              <div class="flex-auto p-2 text-sm font-medium text-white bg-green-500 rounded shadow-small">Done</div>
            </div>
          </div>
        </div>
      </transition>
    </template>
    <template #footer>
      <div class="flex flex-row items-center flex-auto">
        <button
          type="button"
          class="text-gray-500 px-10 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-gray-100 ease-in transition-colors mx-4"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
        <div class="space-x-2 ml-auto">
          <button
            v-if="currentStep > 0"
            type="button"
            class="text-gray-700 w-24 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-white hover:bg-gray-100 ease-in transition-colors"
            @click="updateStep(-1)"
          >
            Previous
          </button>
          <button
            v-if="currentStep < stepList.length - 1"
            type="button"
            class="text-gray-700 w-24 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-white hover:bg-gray-100 ease-in transition-colors"
            @click="updateStep(1)"
          >
            Next
          </button>
        </div>
        <button
          v-if="currentStep === stepList.length - 1"
          type="button"
          class="text-white ml-2 px-6 py-2 rounded-md text-sm font-medium tracking-wide shadow-small bg-indigo-500 hover:bg-indigo-600 ease-in transition-colors"
          @click="$router.go(-1)"
        >
          Save project
        </button>
      </div>
    </template>
  </kanban-overlay>
</template>

<script>
import UsersSelect from "@/components/kanban/common/UsersSelect.vue";
import KanbanOverlay from "../KanbanOverlay.vue";
import UserAvatar from "../kanban/common/UserAvatar.vue";
import BoardColorSelection from "./BoardColorSelection.vue";
import { objectClone } from "@/utils";

export default {
  name: "ProjectForm",
  components: { KanbanOverlay, UsersSelect, UserAvatar, BoardColorSelection },
  data() {
    return {
      currentStep: 0,
      stepList: [
        {
          name: "Details",
          key: "details",
        },
        {
          name: "Members",
          key: "members",
        },
        // {
        //   name: "Boards",
        //   key: "boards",
        // },
        {
          name: "Preview",
          key: "preview",
        },
      ],
      projectData: {
        title: "",
        description: "",
        code: "",
        boards: [],
        members: [],
      },
    };
  },
  computed: {
    selectedProject() {
      return objectClone(this.$store.getters.selectedProject(this.$route.params.projectId));
    },
  },
  mounted() {
    if (this.$route.params.projectId !== undefined) {
      this.projectData.title = this.selectedProject.title;
      this.projectData.description = this.selectedProject.description;
      this.projectData.code = this.selectedProject.code;
      this.projectData.members = this.selectedProject.teamMembers;
    }
  },
  methods: {
    updateStep(direction) {
      this.currentStep += direction;
    },
    updateMembers(list) {
      this.projectData.members = list;
    },
  },
};
</script>

<style lang="scss" scoped></style>
