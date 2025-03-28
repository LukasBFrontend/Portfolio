<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import HomeView from './views/HomeView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent/>
    <RouterView/>
  </div>
</template>

<style scoped>
  /* Small devices (phones, 576px and up) */
  @media (min-width: 576px) {
      /* Styles for standard phones */
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
      /* Styles for tablets */
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {

  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
      .wrapper{
      width: 1200px;
      margin: 0 auto;
    }
  }

  /* Ultra-wide screens (1440px and up) */
  @media (min-width: 1440px) {
    .wrapper{
      width: 1400px;
      margin: 0 auto;
    }
  }
</style>
