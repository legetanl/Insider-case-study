<template>
    <div class="game-board">
      <div class="game-board--left"><HorseList/></div>
      <div class="game-board--center"><Track/></div>
      <div class="game-board--right">
        <ScheduleList/>
        <ResultList/>
      </div>
    </div>
</template>

<script>
import HorseList from '@/components/gameBoard/horseList/HorseList'
import Track from '@/components/gameBoard/track/Track'
import ScheduleList from '@/components/gameBoard/schedules/ScheduleList'
import ResultList from '@/components/gameBoard/results/ResultList'
export default {
  name: 'GameBoard',
  components: { ResultList, ScheduleList, Track, HorseList }
}
</script>

<style scoped lang="scss">
.game-board{
  display: flex;
  &--left{
    display: flex;
    flex: 0 0 25%;
    max-height: 750px;
    overflow: auto;
  }
  &--center{
    display: flex;
    flex: 0 0 40%;
    max-height: 750px;
    overflow: auto;
  }
  &--right{
    display: flex;
    flex: 0 0 35%;
    max-height: 750px;
    overflow: auto;
  }
}

</style>
