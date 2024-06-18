import { MutationTree } from 'vuex'
import { State } from './state'

const mutations: MutationTree<State> = {
  setGameStatus (state, payload: typeof state.gameStatus) {
    state.gameStatus = payload
  },
  generateSchedule (state, payload: typeof state.schedule) {
    state.schedule = payload
    state.activeLap = 0
  },
  setActiveLap (state) {
    state.activeLap = state.activeLap + 1
  },
  setActiveLapResult(state, payload: any){
    if(!state.schedule.results[state.activeLap].results.find((item: any) => item.number === payload.number)){
      state.schedule.results[state.activeLap].results.push(payload)
    }
  }
}

export default mutations
