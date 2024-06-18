<template>
  <div class="schedule-details">
    <p>Lap {{schedule.lap}}  - {{schedule.trackLength}}</p>
    <table>
      <tr>
        <th>Position</th>
        <th>Name</th>
      </tr>
      <tr v-for="(horse, index) in schedule.horses" :key="index">
        <td>{{index+1}}</td>
        <td>{{horse.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ScheduleDetails',
  props: {
    schedule:{
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.schedule-details{

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


</style>
