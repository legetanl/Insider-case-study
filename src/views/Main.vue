<template>
    <div class="main">
      <Game msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script lang="ts">
  import Game from '@/components/Game.vue'
  
  export default {
    name: 'Main',
    components: {
      Game
    }
  }
  
  </script>
  