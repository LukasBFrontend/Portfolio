<script setup>
import { ref } from 'vue';
</script>

<template>
  <header>
    <span class="logo">Developer portfolio <i class="fa-solid fa-laptop"></i></span>
    <nav>
      <router-link :to="{ path: '/'}">Home</router-link>
      <router-link :to="{ hash: '#about' }">About</router-link>
      <router-link :to="{ hash: '#projects' }">Projects</router-link>
      <router-link :to="{ hash: '#skills' }">Skills</router-link>
    </nav>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 3rem;
    max-width: 100%;
  }
  .logo{
    font-size: 2.5rem;
    font-family: 'Raleway';
    font-weight: 900;
  }

  nav{
    display: flex;
    gap: 3rem;
  }

  nav a{
    font-size: 2rem;
    font-weight: 100
  }

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
    .container{
      width: calc(160px*2.2);
      height: calc(130px*2.2);
    }
    header {
      padding: 4rem 0rem;
    }
  }

  /* Ultra-wide screens (1440px and up) */
  @media (min-width: 1440px) {
    .container{
      width: calc(160px*2.5);
      height: calc(130px*2.5);
    }
  }
</style>
