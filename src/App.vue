<script setup>
  import Navbar from './components/Navbar.vue';
  import ScrollToTopNav from './components/ScrollToTopNav.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <Navbar/>
    <RouterView/>
    <ScrollToTopNav/>
  </div>
</template>

<style scoped>
  @media (min-width: 1200px) {
      .wrapper{
      width: 1200px;
      margin: 0 auto;
    }
  }

  @media (min-width: 1440px) {
    .wrapper{
      width: 1400px;
      margin: 0 auto;
    }
  }
</style>
