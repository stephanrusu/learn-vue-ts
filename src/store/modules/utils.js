const utils = {
  state: {
    slideOverlay: false,
    notificationActive: false,
  },
  actions: {
    slideOverlay({ commit }) {
      commit("slideOverlay");
    },
    toggleNotificationActive({ commit }) {
      commit("toggleNotificationActive");
    },
  },
  getters: {
    getSlideOverlay: (state) => state.slideOverlay,
    getNotificationActive: (state) => state.notificationActive,
  },
  mutations: {
    slideOverlay(state) {
      state.slideOverlay = !state.slideOverlay;
    },
    toggleNotificationActive(state) {
      state.notificationActive = !state.notificationActive;
    },
  },
};

export default utils;
