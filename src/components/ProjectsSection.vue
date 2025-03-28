<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section>
    <h2>Projects</h2>
    <div class="grid">
      <project-card class="card" image-src="/images/exercise_bank.png" title="Exercise Bank" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptas? Ducimus doloremque magni quibusdam, tenetur voluptates rerum."></project-card>
      <project-card class="card" image-src="/images/exercise_bank.png" title="Exercise Bank" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptas? Ducimus doloremque magni quibusdam, tenetur voluptates rerum."></project-card>
      <project-card class="card" image-src="/images/exercise_bank.png" title="Exercise Bank" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptas? Ducimus doloremque magni quibusdam, tenetur voluptates rerum."></project-card>
    </div>
  </section>
</template>

<style scoped>
  .grid{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 100px;
  }
    /* Small devices (phones, 576px and up) */
    @media (min-width: 576px) {

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
    .grid{
      justify-content: space-between;
    }
  }

  /* Ultra-wide screens (1440px and up) */
  @media (min-width: 1440px) {

  }
</style>
