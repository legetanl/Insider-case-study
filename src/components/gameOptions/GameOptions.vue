<template>
  <div class="game-options">
    <div class="game-options__title">Horse Racing</div>
    <div class="game-options__buttons">
      <button class="game-options__buttons--generator" @click="generateSchedule">{{GameOptionsLabels.GENERATE_PROGRAM}}</button>
      <button class="game-options__buttons--starter" @click="setGameCurrentStatus">{{gameStatus !== GameStatusLabel.RUNNING ? GameOptionsLabels.START : GameOptionsLabels.PAUSE}}</button>
    </div>
  </div>
</template>

<script>
import { GAME, GAMESTATUS } from '@/constants/labels'
import { mapGetters } from 'vuex'
import Horse from '@/utils/horse'
import Round from '@/utils/round'
export default {
  name: 'GameOptions',
  data () {
    return {
      GameOptionsLabels: GAME,
      GameStatusLabel: GAMESTATUS
    }
  },
  computed: {
    ...mapGetters({
      gameStatus: 'getGameStatus',
      activeLap: 'getActiveLap'
    })
  },
  methods: {
    generateSchedule () {
      let horses = new Horse().generate()
      let rounds = new Round().generate(horses)
      let results = rounds
      let schedule = {horses, rounds, results}
      this.$store.dispatch('generateSchedule', schedule)
    },
    setGameCurrentStatus(){
      let gameStatus
      switch (this.gameStatus) {
        case GAMESTATUS.NOTSTARTED:
          gameStatus = GAMESTATUS.RUNNING
          break;
        case GAMESTATUS.RUNNING:
          gameStatus = GAMESTATUS.PAUSED
          break;
        case GAMESTATUS.PAUSED:
          gameStatus = GAMESTATUS.RUNNING
          break;
        default:
          break
      }
      this.$store.dispatch('setGameStatus', gameStatus)
    }
  }
}
</script>

<style scoped lang="scss">
.game-options{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFA17F;
  padding: 1rem;
  font-size: 20px;
  &__buttons{
    display: flex;
    gap: 0.5rem;
    &--generator{
      height: 2rem;
    }
    &--starter{
      height: 2rem;
    }
  }
}
</style>
