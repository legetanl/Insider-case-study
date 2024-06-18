<template>
  <div class="horse">
    <div v-for="(horse, index) in activeLap && activeLap.horses" :key="index" class="horse-racing">
      <div class="game-track__content--lane">{{index+1}}</div>
      <div class="game-track__content--race" :style="{width: `${activeLap.trackLength/4}px`}">
        <HorseDetails :horse="horse" :width="activeLap.trackLength"/>
      </div>
    </div>
    <h4> {{activeLap && activeLap.lap || '-' }}. Lap {{activeLap && activeLap.trackLength || '-' }}m </h4>
  </div>
</template>

<script>
import HorseDetails from '@/components/gameBoard/horse/horseDetails/HorseDetails'
export default {
  name: 'Horse.vue',
  components: { HorseDetails },
  props: {
    activeLap: {
      type:Object,
    }
  },
}
</script>

<style scoped lang="scss">
.horse{
  &-racing{
    width: 100%;
    display: flex;
  }
}
.game-track{
  &__content--lane{
    display: flex;
    align-items: center;
    background: #42b983;
    width: 20px;
    justify-content: center;
    color: white;
    border: 1px solid white;
  }
  &__content--race{
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
    border-right: 5px solid red;
    width: 500px;
    height: 60px;
    position: relative;
  }
}
</style>
