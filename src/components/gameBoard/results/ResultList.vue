<template>
  <div class="result-list">
    <div class="result-list__results">Results</div>
    <ResultListDetails :result="result" :runningIndex="index" v-for="(result, index) in getResults" :key="result.lap"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ResultListDetails from '@/components/gameBoard/results/resultListDetails/ResultListDetails'

export default {
  name: 'ResultList',
  components: { ResultListDetails },
  computed:{
    ...mapGetters(['getResults'])
  }
}
</script>

<style scoped lang="scss">
.result-list{
  display: flex;
  flex-flow: column;
  flex: 0 0 50%;
  &__results{
    background-color: #65C41D;
    font-size: 20px;
    padding: 5px;
  }
}
</style>

