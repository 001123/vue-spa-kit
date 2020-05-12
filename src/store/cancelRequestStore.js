const cancelRequestStore = {
  namespaced: true,
  state: {
    cancelTokens: [],
  },
  getters: {},
  mutations: {
    ADD_CANCEL_TOKEN(state, token) {
      state.cancelTokens.push(token);
    },
    CLEAR_CANCEL_TOKENS(state) {
      state.cancelTokens = [];
    },
  },
  actions: {
    CANCEL_PENDING_REQUESTS(context) {
      // Cancel all request where a token exists
      context.state.cancelTokens.forEach((request) => {
        if (request.cancel) {
          request.cancel();
        }
      });

      // Reset the cancelTokens store
      context.commit('CLEAR_CANCEL_TOKENS');
    },
  },
};
export default cancelRequestStore;
