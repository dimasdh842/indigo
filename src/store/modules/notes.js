const state = () => ({
  notes: [],
});

const getters = {
  getNotes(state) {
    return state.notes
  },
};

const mutations = {
  setNotes(state, notes) {
    state.notes = notes
  },
  setNote(state,note){
    state.notes.push(note)
  }
};

const actions = {
  setNotes({ commit }, notes) {
    commit('setNotes', notes);
  },
  setNote({ commit }, note) {
    commit('setNotes', note);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
