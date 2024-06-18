import { GAMESTATUS } from '@/constants/labels'

interface Schedule {
  horses: any[];
  rounds: any[];
  results: any[];
}

export interface State { 
  namespaced: boolean;
  namespace: boolean;
  gameStatus: typeof GAMESTATUS[keyof typeof GAMESTATUS];
  schedule: Schedule;
  activeLap: number;
}

const state: State = {
  namespaced: true,
  namespace: true,
  gameStatus: GAMESTATUS.NOTSTARTED,
  schedule: {
    horses: [],
    rounds: [],
    results: []
  },
  activeLap: 0
}

export default state
