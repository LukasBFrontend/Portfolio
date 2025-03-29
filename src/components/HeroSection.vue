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
      <div class="link-wrapper">
        <a href="https://www.linkedin.com/in/lukas-br%C3%A5kenhielm-7724ab2ba/" target="_blank" class="links"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="mailto:brakenhielmlukas@gmail.com" class="links"><i class="fa-regular fa-envelope"></i></a>
        <a href="https://github.com/LukasBFrontend" target="_blank" class="links"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <img class="profile" src="/images/profile.png" alt="profil">
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
    background: darkcyan;
  }

  h1{
    font-size: 4rem;
    color: black;
  }

  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: space-between;
  }

  .link-wrapper{
    display: flex;
    gap: 2rem;
  }

  .links{
    border-radius: 50%;
    width: 68px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.5rem;
    color: white;
    background: black;

    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  .links:hover{
    transform: translateY(-10px);
  }
</style>
