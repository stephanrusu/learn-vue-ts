import initialProjects from "@/constants/initialProjects";

const project = {
  state: {
    list: initialProjects,
    active: {},
  },
  getters: {
    listProjects: (state) => state.list,
    activeProject: (state) => state.active,
  },
};

export default project;
