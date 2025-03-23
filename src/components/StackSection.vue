<script setup>
import { ref } from 'vue';

const imgWidth = ref('80px')
</script>

<template>
  <section>
    <h2>Tech stack</h2>
    <div class="grid">
      <img src="/techstack/Csharp.svg" alt="C-sharp">
      <img src="/techstack/CSS3.svg" alt="">
      <img src="/techstack/Git.svg" alt="">
      <img src="/techstack/HTML5.svg" alt="">
      <img src="/techstack/JavaScript.svg" alt="">
      <img src="/techstack/React.svg" alt="">
      <img src="/techstack/TypeScript.svg" alt="">
      <img src="/techstack/Vue.js.svg" alt="">
    </div>
  </section>
</template>

<style scoped>
  h2 {
    text-align: center;
    margin-bottom: 52px;
  }
  section {
    --img-width: v-bind(imgWidth);

    margin: 0 auto;
  }

  img {
    width: var(--img-width);
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(4, var(--img-width));
    gap: 64px 100px;
  }
</style>
