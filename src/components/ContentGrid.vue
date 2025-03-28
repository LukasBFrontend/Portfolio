<script setup>
import { ref } from 'vue';
import StackSection from '../components/StackSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import AboutSection from './AboutSection.vue';
</script>

<template>
  <div class="grid">
    <stack-section class="section"></stack-section>
    <hr />
    <projects-section class="section"></projects-section>
    <hr />
    <about-section class="section about"></about-section>
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
  border: 3px solid #474747;
  border-radius: 6px;
  color: #333;
  margin: 3rem 0;
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
    .grid {
    padding: 3rem 1rem;
    }
  }

  /* Ultra-wide screens (1440px and up) */
  @media (min-width: 1440px) {

  }
</style>
