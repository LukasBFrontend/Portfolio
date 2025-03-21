<script setup>
import { ref } from 'vue';
</script>

<template>
  <header>
    <span class="logo">Developer portfolio <i class="fa-solid fa-laptop"></i></span>
    <nav>
      <a href="">
        Home
      </a>
      <a href="">
        About
      </a>
      <a href="">
        Projects
      </a>
      <a href="">
        Skills
      </a>
    </nav>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
  }
  .logo{
    font-size: 2.5rem;
    font-family: 'Raleway';
    font-weight: 900;
  }

  nav{
    display: flex;
    gap: 2rem;
  }

  nav a{
    font-size: 2rem;
    font-weight: 100
  }
</style>
