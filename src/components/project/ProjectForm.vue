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
              type="text"
              name="project-title"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium"
            />
          </div>
          <div class="space-y-2">
            <label for="projectDescription" class="text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="projectDescription"
              name="project-description"
              class="focus:border-indigo-300 block w-full sm:text-sm border-gray-300 rounded-md shadow-small focus:shadow-medium resize-none"
              rows="3"
            ></textarea>
          </div>
        </div>
        <users-select
          v-if="stepList[currentStep].key === 'members'"
          :key="currentStep"
          :users="users"
          :multiple="true"
          class="p-2"
        />
        <div v-if="stepList[currentStep].key === 'boards'" :key="currentStep" class="py-2 px-4"></div>
        <div v-if="stepList[currentStep].key === 'preview'" :key="currentStep" class="py-2 px-4 space-y-3">
          <div class="">
            <label class="text-xs font-medium text-gray-400">Title</label>
            <div class="text-sm text-gray-700">Project Endless</div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Description</label>
            <div class="text-sm text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore in architecto nam labore, cupiditate.
            </div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Team members</label>
            <div class="flex items-center space-x-2 mt-2">
              <user-avatar>MR</user-avatar>
              <user-avatar>SR</user-avatar>
            </div>
          </div>
          <div class="">
            <label class="text-xs font-medium text-gray-400">Boards</label>
            <div class="text-gray-700"></div>
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
import listUsers from "@/constants/listUsers";
export default {
  name: "ProjectForm",
  components: { KanbanOverlay, UsersSelect, UserAvatar },
  data() {
    return {
      currentStep: 0,
      users: listUsers,
      stepList: [
        {
          name: "Details",
          key: "details",
        },
        {
          name: "Members",
          key: "members",
        },
        {
          name: "Boards",
          key: "boards",
        },
        {
          name: "Preview",
          key: "preview",
        },
      ],
    };
  },
  methods: {
    updateStep(direction) {
      this.currentStep += direction;
    },
  },
};
</script>

<style lang="scss" scoped></style>
