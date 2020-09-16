const state = {
  formList: [{
    id: 1234567890,
    type: 'baseWidget',
    select: true,
    config: {
      tag: 'inputText',
    },
    data: {
      request: false,
      label: '单行文本',
      desc: ''
    }
  }],
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
