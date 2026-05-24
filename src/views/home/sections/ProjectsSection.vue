<script setup>
  import { h } from 'vue';
  import ProjectCard from '../../../components/ProjectCard.vue';

  const textualAiChatDescription = () =>
    h('span', [
      'I created and implemented an AI chat interface for Textual AB. Database and API-connections use Django while the Frontend uses React typescript.',
      h('br', { style: 'display: block; margin: 1rem 0;' }),
      'The end result was more or less set in stone but I was given a large amount of freedom in achieving it. I made a conscious effort to write easy-to-maintain, semantic code and placed heavy emphasis on user friendliness.'
    ]);
</script>

<template>
  <section id="projects">
  <h2>PROJECTS</h2>
  <div class="grid">
    <ProjectCard
      class="card"
      :isImageLink="true"
      projectLink="https://github.com/LukasBFrontend/Flappy-Dragon"
      :image-srcs="['/images/flappy_dragon.png', '/images/flappy_dragon_crab.png', '/images/flappy_dragon_boss_1.png', '/images/flappy_dragon_boss_2.png']"
      title="Flappy Dragon"
      description="A unity passion project made in collaboration with my good friend Viktor Stambert, who is responsible for the artwork. Scripted using C#."
      />
    <ProjectCard
      class="card"
      :isImageLink="true"
      project-link="https://pokedex-lubr.vercel.app/"
      :imageSrcs="['/images/pokedex.png', '/images/pokedex_2.png', '/images/pokedex_4.png']"
      title="Pokédex web-app"
      description="A fully responsive web-application wrapping around an extensive API called PokéAPI. Let's the user search for and browse through pokemon. As my first personal project after my internship at TextualAI, I wanted to implement what I'd learned by making an effort to build a maintainable project infrastructure."
    />
    <ProjectCard
      class="card"
      :isImageLink="true"
      :image-srcs="['/images/textual_ai_chat_0.png', '/images/textual_ai_chat_1.png', '/images/textual_ai_chat_2.png', '/images/textual_ai_chat_3.png']"
      title="Textual AI chat"
      :description="textualAiChatDescription"
    />
    <ProjectCard
      class="card"
      :isImageLink="true"
      projectLink="https://github.com/LukasBFrontend/RPG-shooter"
      :image-srcs="['/images/dungeon_shooter.png', '/images/dungeon_shooter_spikeball.png', '/images/dungeon_shooter_bats.png']"
      title="Dungeon Shooter"
      description="A unity top down zelda-inspired dungeon crawler with flintlocks, muskets and aliens. Still very much in progress. Made in unity with Viktor Stambert, who is responsible for the artwork."
    />
    <ProjectCard
      class="card"
      :isImageLink="true"
      projectLink="https://my-exercise-bank.vercel.app/"
      image-src="/images/exercise_bank.png" title="Exercise Bank"
      description="A mock webapplication allowing the user to search a bank of exercises and display information about them. Meant to showcase API-connection with queries."
    />
    <ProjectCard
      class="card"
      :isImageLink="true"
      projectLink="https://lukasbfrontend.github.io/ITHS-HTML-och-CSS-Labb-2/"
      image-src="/images/musclemania.png"
      title="Coaching website"
      description="A responsive webpage advertising a made up company specializing in coaching, exercise programs and supplements. Made using HTML and CSS."
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

  @media (min-width: 1200px) {
    .grid{
        justify-content: space-between;
    }
  }
</style>
