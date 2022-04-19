const state = () => ({
  user: {},
  token: "",
  authenticated:false
});

const getters = {
  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  },
  getAuthenticated(state) {
    return state.authenticated
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setToken(state,tokenBearer) {
    state.token = tokenBearer
  },
  setAuthenticated(state,authenticated) {
    state.authenticated = authenticated
  }
};

const actions = {
  setUser({ commit }, user) {
    commit('setUser', user);
  },
  reset({ commit}) {
    commit('setUser', {});
  },
  setToken({commit},token) {
    commit('setToken', token)
  },
  setAuthenticated({commit},authenticated) {
    commit('setAuthenticated', authenticated)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
