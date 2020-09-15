const state = {
  formList: [],
}

const mutations = {
  SET_FORM_LIST: (state, list) => {
    state.formList = list;
  },
}

const actions = {
  setFormList({ commit }, list) {
    commit('SET_FORM_LIST', list)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
