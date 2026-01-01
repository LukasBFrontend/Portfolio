<template>
  <header id="header">
    <span class="logo">Lukas developer portfolio! <i class="fa-solid fa-laptop"></i></span>
    <nav>
      <router-link class="button" :to="{ path: '/'}" >Home</router-link>
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
  }

  nav{
    display: flex;
    gap: 3rem;
  }

  nav a{
    padding: .5rem .8rem;
    font-size: 2rem;
    font-weight: 100;

    transition: background 0.2s, color 0.2s;
  }

  nav a:hover{
    background: #FFF44F;
    color: rgb(65, 65, 70);
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
