import initialProjects from "@/constants/initialProjects";

const project = {
  state: {
    active: {},
    list: initialProjects,
  },
  actions: {},
  getters: {
    listProjects: (state) => state.list,
    activeProject: (state) => state.active,
    selectedProject: (state) => (projectId) => state.list[projectId],
  },
  mutations: {},
};

export default project;
