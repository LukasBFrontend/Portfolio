<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent/>
    <HomeView/>
  </div>
</template>

<style scoped>
  .wrapper{
    width: 1500px;
    margin: 0 auto;
  }
</style>
