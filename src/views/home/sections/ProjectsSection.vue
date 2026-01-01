<script setup>
  import ProjectCard from '../../../components/ProjectCard.vue';
</script>

<template>
  <section id="projects">
  <h2>Projects</h2>
  <div class="grid">
    <ProjectCard
      class="card"
      projectLink="https://my-exercise-bank.vercel.app/"
      image-src="/images/exercise_bank.png" title="Exercise Bank"
      description="A mock webapplication allowing the user to search a bank of exercises and display information about them. Meant to help in exercise selection for your workout."
    />
    <ProjectCard
      class="card"
      projectLink="https://github.com/LukasBFrontend/Flappy-Dragon"
      image-src="/images/flappy_dragon.png"
      title="Flappy Dragon"
      description="A unity passion project made in collaboration with my good friend Viktor Stambert, who is responsible for the artwork. Scripted using C#."
    />
    <ProjectCard
      class="card"
      projectLink="https://lukasbfrontend.github.io/HTML_och_CSS_Labb_2/"
      image-src="/images/musclemania.png"
      title="Coaching website"
      description="A responsive webpage advertising a made up company specializing in coaching, exercise programs and supplements. Made using HTML and CSS."
    />
    <ProjectCard
      class="card"
      :isImageLink="true"
      image-src="/images/en_slemmig_torsk.png"
      title="En slemmig torsk"
      description="Scene modelled and captured in Blender. The image is a reference to a song by Swedish punk rock KSMB called 'En slemmig torsk', translating to 'A slimy cod' in English."
    />
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

  @media (min-width: 1200px) {
    .grid{
        justify-content: space-between;
    }
  }
</style>
