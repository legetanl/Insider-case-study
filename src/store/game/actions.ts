import { ActionTree } from 'vuex'
import state, { State } from './state'

const actions: ActionTree<State, any> = {
  setGameStatus ({ commit }, payload: typeof state.gameStatus) {
    commit('setGameStatus', payload)
  },
  generateSchedule({commit}, payload: typeof state.schedule){
    commit('generateSchedule', payload)
  },
  setActiveLap({commit}){
    commit('setActiveLap')
  },
  setActiveLapResult({commit}, payload: any){
    commit('setActiveLapResult', payload)
  }
}

export default actions
