export const GAME: Readonly<{
    GENERATE_PROGRAM: string;
    START: string;
    PAUSE: string;
    RESET: string;
    TITLE: string;
  }> = Object.freeze({
    GENERATE_PROGRAM: 'Generate Schedule',
    START: 'Start',
    PAUSE: 'Pause',
    RESET: 'Reset',
    TITLE: 'Horse Racing'
  });
  
  export const GAMESTATUS: Readonly<{
    RUNNING: string;
    NOTSTARTED: string;
    PAUSED: string;
    FINISHED: string;
  }> = Object.freeze({
    RUNNING: 'running',
    NOTSTARTED: 'notStarted',
    PAUSED: 'paused',
    FINISHED: 'finished'
  });
  