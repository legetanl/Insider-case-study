<template>
  <div class="result-list-details">
    <div class="result-details">
      <p>{{result.lap}} Lap - {{result.trackLength}}m {{ getRaceStatus() }}</p>
      <table>
        <tr>
          <th>Position</th>
          <th>Name</th>
        </tr>
        <tr v-for="(horse, index) in result.results" :key="index">
          <td>{{index+1}}</td>
          <td>{{horse.name}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GAMESTATUS } from '@/constants/labels'

export default {
  name: 'ResultListDetails',
  props: {
    result:{
      type: Object,
      required: true
    },
    runningIndex:{
      required: false
    }
  },
  computed:{
    ...mapGetters(['getActiveLap', 'getGameStatus'])
  },
  methods:{
    getRaceStatus(){
      if(this.getActiveLap && this.getActiveLap.lap){
        if(this.getGameStatus === GAMESTATUS.NOTSTARTED){
          return GAMESTATUS.NOTSTARTED
        }
        return this.getActiveLap.lap-1 === this.runningIndex ? 'Running' : this.getActiveLap.lap-1 > this.runningIndex ? 'finished' : 'not started'
      }
    }
  }
}
</script>

<style scoped lang="scss" >
.result-details{
  &__header{
    display: flex;
    background-color: #BDBDBD;
    &--position{
      flex: 0 0 15%;
      text-align: center;
      min-width: 40px;
    }
    &--name{
      flex: 0 0 85%;
      text-align: center;
      min-width: 40px;
    }
  }
  &__content{
    display: flex;
    &--position{
      flex: 0 0 15%;
      text-align: center;
      min-width: 40px;
    }
    &--name{
      flex: 0 0 85%;
      text-align: center;
      min-width: 40px;
    }
  }
}
.result-list-details{
  display: flex;
  &__results{
    min-height: 184px;
  }
}

</style>
