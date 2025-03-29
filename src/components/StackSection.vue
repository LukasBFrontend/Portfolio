<script setup>
import { ref } from 'vue';

const imgWidth = ref('80px')
</script>

<template>
  <section id="skills">
    <h2>Tech stack</h2>
    <div class="grid">
      <img src="/images/techstack/Csharp.svg" alt="C-sharp">
      <img src="/images/techstack/CSS3.svg" alt="">
      <img src="/images/techstack/Git.svg" alt="">
      <img src="/images/techstack/HTML5.svg" alt="">
      <img src="/images/techstack/JavaScript.svg" alt="">
      <img src="/images/techstack/React.svg" alt="">
      <img src="/images/techstack/TypeScript.svg" alt="">
      <img src="/images/techstack/Vue.js.svg" alt="">
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

  img:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: 2;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
</style>
