<template>
  <div class="horse-list">
    <div class="horse-list__title">Horse List (1-20)</div>
    <div class="horse-list__content">
      <div class="horse-list__content-header">
        <div>Name</div>
        <div>Condition</div>
        <div>Color</div>
      </div>
      <div class="horse-list__content-body" v-for="horse in getHorseList" :key="horse.number">
        <HorseListDetails :horse="horse"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HorseListDetails from '@/components/gameBoard/horseList/horseListDetails/HorseListDetails'

export default {
  name: 'HorseList',
  components: { HorseListDetails },
  computed:{
    ...mapGetters(['getHorseList'])
  }
}
</script>

<style scoped lang="scss"> 
.horse-list{
  width: 95%;
  &__title{
    padding: 5px;
    background-color: #C6D258;
    font-size: 30px;
  }
  &__content{
     &-header{
       display: flex;
       background-color: #BDBDBD;
       font-size: 1em;
           padding: 1em 0;
       div{
         flex: 0 0 33%;
       }
     }
    &-body{
      border: 1px solid gray;
      font-size: 1em;
          padding: 1em 0;
    }
  }
}
</style>
