<script setup>
import { ref } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import StackSection from '../components/StackSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ProjectCard from '../components/ProjectCard.vue';
</script>

<template>
  <div class="grid">
    <stack-section class="section"></stack-section>
    <hr />
    <projects-section class="section"></projects-section>
  </div>
</template>

<style scoped>
  .grid {
    padding: 3rem;

    display: grid;
  }

  hr {
  border: 3px solid #474747;
  border-radius: 6px;
  color: #333;
  margin: 3rem 0;
}
</style>
