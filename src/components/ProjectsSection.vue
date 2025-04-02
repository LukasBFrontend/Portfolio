<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
</script>

<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="grid">
      <project-card class="card" projectLink="https://my-exercise-bank.vercel.app/" image-src="/images/exercise_bank.png" title="Exercise Bank" description="A mock webapplication allowing the user to search a bank of exercises and display information about them. Meant to help in exercise selection for your workout."></project-card>
      <project-card class="card" :isImageLink="true" image-src="/images/en_slemmig_torsk.png" title="En slemmig torsk" description="Scene modelled and captured in Blender. The image is a reference to a song by Swedish
      punk rock KSMB called 'En slemmig torsk', translating to 'A slimy cod' in English."></project-card>
      <project-card class="card" projectLink="https://lukasbfrontend.github.io/HTML_och_CSS_Labb_2/" image-src="/images/musclemania.png" title="Coaching website" description="A responsive webpage advertising a made up company specializing in coaching, exercise programs and supplements. Made using HTML and CSS."></project-card>
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

  h2{
    text-decoration: underline dotted #FFF44F;
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
