import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import * as getters from './getters'

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    getters
  })
}

export default createStore
