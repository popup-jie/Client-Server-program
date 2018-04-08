export const state = () => ({
  tab: 1
})

export const mutations = {
  GET_TABLE_SUCCESS(state, result) {
    // console.log3
    state.tab = result
  }
}

export const actions = {
  setChatTab({ commit }, params) {
    commit('GET_TABLE_SUCCESS', params)
  }
}