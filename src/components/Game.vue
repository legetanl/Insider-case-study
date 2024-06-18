<template>
    <div class="game">
      <div class="game--top">
        <GameOptions/>
      </div>
      <div class="game--main">
        <GameBoard/>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import GameOptions from '../components/gameOptions/GameOptions.vue'
  import GameBoard from '../components/gameBoard/GameBoard.vue'
  export default {
    name: 'Game',
    components: { GameBoard, GameOptions },
    props: {},
  }
  </script>
  
  <style lang="scss" scoped> 
  .game{
    margin-right: auto;
    margin-left: auto;
    &--main{
      margin-top: 2em;
    }
  }
  
  </style>
  