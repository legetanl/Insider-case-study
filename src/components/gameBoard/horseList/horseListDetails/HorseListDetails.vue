<template>
  <div class="horse-list-details">
    <div>{{ horse.name }}</div>
    <div>{{ horse.condition }}</div>
    <div>{{ horse.color }}</div>
  </div>
</template>

<script>
export default {
  name: 'HorseListDetails',
  props:{
    horse:{
      type:Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss" >
.horse-list-details{
  display: flex;
  div{
    flex: 0 0 33%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
}
 </style>
