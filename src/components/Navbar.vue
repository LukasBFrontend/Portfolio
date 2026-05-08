<template>
  <header id="header">
    <a href="https://github.com/LukasBFrontend" target="_blank" class="logo">Lukas developer portfolio <i class="fa-solid fa-laptop logo-icon"></i></a>
    <nav>
      <router-link class="button" :to="{ hash: '#about' }">About</router-link>
      <router-link class="button" :to="{ hash: '#projects' }">Projects</router-link>
      <router-link class="button" :to="{ hash: '#skills' }">Skills</router-link>
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
    transition: color 0.3s ease;
  }

  .logo:hover{
    color: #78ff4f;
  }

  .logo-icon{
    display: inline-block;
    transform-origin: center;
  }

  .logo:hover .logo-icon{
    animation: windup-spin 3.5s ease-in-out infinite;
  }

  @keyframes windup-spin {
    0% {
      transform: rotate(0deg);
      animation-timing-function: ease-in;
    }
    18% {
      transform: rotate(-35deg);
      animation-timing-function: ease-in;
    }
    25% {
      transform: rotate(-35deg);
      animation-timing-function: cubic-bezier(0.5, 0, 0.2, 1);
    }
    40% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  nav{
    display: flex;
    gap: 3rem;
  }

  nav a{
    padding: 0rem;
    font-size: 1.75rem;
    font-weight: 100;
    border-radius: 1rem;

    transition: all 0.2s, color 0.2s;
  }

  nav a:hover{
    color: #78ff4f;
    /* color: rgb(0, 0, 0); */
  }

  @media (min-width: 1200px) {
    .container{
      width: calc(160px*2.2);
      height: calc(130px*2.2);
    }
    header {
      padding: 4rem 0rem;
    }
  }

  @media (min-width: 1440px) {
    .container{
      width: calc(160px*2.5);
      height: calc(130px*2.5);
    }
  }
</style>
