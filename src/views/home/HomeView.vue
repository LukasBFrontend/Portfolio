<script setup>
  import HeroSection from './sections/HeroSection.vue';
  import StackSection from './sections/StackSection.vue';
  import ProjectsSection from './sections/ProjectsSection.vue';
  import AboutSection from './sections/AboutSection.vue';
</script>

<template>
  <HeroSection/>
  <div class="grid">
    <projects-section class="section" />
    <hr />
    <stack-section class="section" />
    <hr />
    <about-section class="section about" />
  </div>
</template>

<style scoped>
  .grid {
    padding: 3rem;
    display: grid;
  }

  .about {
    margin: 0 auto;
  }

  hr {
    margin: 3rem 0;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    color: #333;
  }

  @media (min-width: 1200px) {
    .grid {
      padding: 3rem 1rem;
    }
  }
</style>
