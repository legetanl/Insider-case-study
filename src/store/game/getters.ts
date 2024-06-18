import { GetterTree } from 'vuex'
import { State } from './state'

const getters: GetterTree<State, any> = {
  getGameStatus (state): typeof state.gameStatus {
    return state.gameStatus
  },
  getHorseList(state): any[] {
    return state.schedule.horses
  },
  getScheduleList(state): any[] {
    return state.schedule.rounds
  },
  getResults(state): any[] {
    return state.schedule.results
  },
  getActiveLap(state): any {
    return state.schedule.rounds[state.activeLap]
  },
}

export default getters
