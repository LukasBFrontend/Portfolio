<script setup>
import { ref } from 'vue';
</script>

<template>
  <section class="hero-section">
    <div class="text">
      <h1>
        Hi,
        <br/>
        I'm Lukas
        <br/>
        Frontend developer
      </h1>
      <button class="button">Contact</button>
    </div>
    <img class="profile" src="../../public/profile.png" alt="profil">
  </section>
</template>

<style scoped>
  .hero-section{
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 0;
  }

  .profile{
    height: 400px;
    border-radius: 50%;
    background: rgb(107, 107, 255);
  }

  h1{
    font-size: 4rem;
    color: black;
  }

  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button{
    width: fit-content
  }
</style>
