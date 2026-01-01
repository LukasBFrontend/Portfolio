<script setup>
  import { ref } from 'vue';
  const imgWidth = ref('80px')
</script>

<template>
  <section id="skills">
    <h2>Tech stack</h2>
    <div class="grid">
      <img class="icon" src="/images/techstack/Csharp.svg" alt="C-sharp">
      <img class="icon" src="/images/techstack/CSS3.svg" alt="CSS">
      <img class="icon" src="/images/techstack/Git.svg" alt="Git">
      <img class="icon" src="/images/techstack/HTML5.svg" alt="HTML5">
      <img class="icon" src="/images/techstack/JavaScript.svg" alt="Javascript">
      <img class="icon" src="/images/techstack/React.svg" alt="React">
      <img class="icon" src="/images/techstack/TypeScript.svg" alt="Typescript">
      <img class="icon" src="/images/techstack/Vue.js.svg" alt="Vue">
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="url(#a)" d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"/><path fill="url(#b)" d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.38s-13.5-.218-13.5 13.047v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"/><defs><linearGradient id="a" x1="9.61" x2="59.167" y1="8.948" y2="58.01" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="40.028" x2="93.247" y1="40.453" y2="90.762" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
    </div>
  </section>
</template>

<style scoped>
  h2 {
    text-align: center;
    margin-bottom: 52px;
    text-decoration: underline dotted #FFF44F;
  }
  section {
    --img-width: v-bind(imgWidth);

    margin: 0 auto;
  }

  .icon {
    width: var(--img-width);
  }

  .grid{
    display: grid;
    grid-template-columns: repeat(3, var(--img-width));
    gap: 64px 100px;
  }

  .icon:hover {
    animation: shake 1s;
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
