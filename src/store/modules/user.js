import listUsers from "@/constants/listUsers";

const user = {
  state: {
    list: listUsers,
  },
  actions: {},
  getters: {
    listUsers: (state) => state.list,
  },
  mutations: {},
};

export default user;
