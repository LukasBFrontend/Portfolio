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
  animation: shake 1s;

  /* When the animation is finished, start again */
  animation-iteration-count: 1;
  }

  @keyframes shake {
  0%   { transform: rotate(0deg) translate(1px, 1px); }
  25%  { transform: rotate(4deg) translate(-2px, -1px); }
  50%  { transform: rotate(-4deg) translate(2px, 1px); }
  75%  { transform: rotate(3deg) translate(-1px, -1px); }
  100% { transform: rotate(0deg) translate(0px, 0px); }
}
</style>
