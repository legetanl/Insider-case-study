import { TRACKLENGTH } from '@/constants/trackSpecs';
import { getRandomNumbersFromArray } from '../utils/function';
import { GAMESTATUS } from '@/constants/labels';

interface Horse {
  color: string;
  number: number;
  condition: number;
  status: string;
  name: string;
  speed: number;
  position: string | '-';
}

interface Track {
  horses: Horse[];
  trackLength: number;
  status: string;
  lap: number;
  results: any[]; // Assuming results can be of any type
}

export default class Round {
  list: any[];
  trackLength: number | null;
  status: string;

  constructor(
    list: any[] = [],
    trackLength: number | null = null,
    status: string = GAMESTATUS.NOTSTARTED
  ) {
    this.list = list;
    this.trackLength = trackLength;
    this.status = status;
  }

  generate(horses: Horse[]): Track[] {
    const tracks: Track[] = [];
    for (let i = 1; i <= 6; i++) {
      tracks.push({
        horses: this.getHorseListForTrack(horses),
        trackLength: TRACKLENGTH[i - 1],
        status: GAMESTATUS.NOTSTARTED,
        lap: i,
        results: []
      });
    }
    return tracks;
  }

  getHorseListForTrack(horses: Horse[]): Horse[] {
    const randomNumber: number[] = [...Array(21).keys()].slice(1);
    const trackHorses: Horse[] = [];
    for (let i = 1; i <= 10; i++) {
      const number = getRandomNumbersFromArray(randomNumber);
      const horse = horses[number - 1];
      horse.position = '-';
      trackHorses.push(horses[number - 1]);
      randomNumber.splice(randomNumber.indexOf(number), 1);
    }
    return trackHorses;
  }
}
