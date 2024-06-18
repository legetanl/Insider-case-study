<template>
  <div class="schedule-list">
    <div class="schedule-list__program">Program</div>
    <ScheduleDetails :schedule="schedule" v-for="(schedule, index) in getScheduleList" :key="index"/>
  </div>
</template>

<script>
import ScheduleDetails from '@/components/gameBoard/schedules/scheduleDetails/ScheduleDetails'
import { mapGetters } from 'vuex'
export default {
  name: 'ScheduleList',
  components: { ScheduleDetails },
  computed:{
    ...mapGetters(['getScheduleList'])
  }
}
</script>

<style scoped lang="scss" >
.schedule-list{
  display: flex;
  flex-flow: column;
  flex: 0 0 50%;
  &__program{
    background-color: #1581D8;
    font-size: 20px;
    padding: 5px;
  }
}
</style>

