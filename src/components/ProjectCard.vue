<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  imageSrc: String,
  title: String,
  projectLink: String,
  description: String,
})
</script>

<template>
  <a class="card" href={projectLink} target="_blank">
    <div class="image" :style="{backgroundImage: `url(${imageSrc})`}">
    </div>
    <div class="overlay">
        <div class="line"></div>
        <section class="text"><h3>Description</h3><p>{{ description }}</p></section>
      </div>
    <h2 class="button">{{ title }}</h2>
  </a>
</template>

<style scoped>

  .card{
    border-radius: 8px;
    width: 160px;
    height: 100px;
    position: relative;

    transition: .3s box-shadow;
  }

  .card:hover{
    box-shadow: 0px 0px 0px 10px rgba(173, 216, 230, 1);
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    background-position: center;
    background-size: cover;
  }

  h2 {
    width: 50%;
    float: left;
    position: absolute;
    left: 0px;
    top: 1rem;
    z-index: 1000;
    border-radius: 0px 8px 8px 0px;

    font-weight: 400;
    color: black;
    background: white;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);

    transition: width .5s ease;
  }

  h3 {
    margin-bottom: .5rem;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0px 0px 8px 8px;
    background-color: darkcyan;
    overflow: hidden;
    width: 100%;
    height: 20px;
    padding: .5rem 1.5rem;
    transition: .5s ease;
  }

  .overlay:hover, .overlay:has(+ h2:hover) {
    height: 75%;
  }

  .overlay:hover + h2, h2:hover{
    width: 102%;
  }

  .line{
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
  }

  /* Small devices (phones, 576px and up) */
  @media (min-width: 576px) {
    .card{
      width: calc(160px*2);
      height: calc(130px*2);
    }
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
    .card{
      width: calc(160px*2.2);
      height: calc(130px*2.2);
    }
  }

  /* Ultra-wide screens (1440px and up) */
  @media (min-width: 1440px) {
    .card{
      width: calc(160px*2.5);
      height: calc(130px*2.5);
    }
  }
</style>
