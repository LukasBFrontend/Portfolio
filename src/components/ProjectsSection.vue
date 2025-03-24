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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .card{
    margin: 0 auto;
  }
</style>
