<template>
  <div style="display:flex">
    <Game type="self"></Game>
    <Game type="rival"></Game>
    <button @click="handleStartGame">startGame</button>
  </div>
</template>

<script setup>
import Game from "./components/Game.vue";
import { startGame } from "./game";
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
const handleStartGame = () => {
  startGame();
}; 
</script>

<style>
</style>
