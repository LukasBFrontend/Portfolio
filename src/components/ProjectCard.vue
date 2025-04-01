<script setup>
import { ref, nextTick, defineProps } from 'vue';

const showScreenOverlay = ref(false)

defineProps({
  imageSrc: {
    type: String,
    default: 'default-image.jpg'
  },
  title: {
    type: String,
    default: 'Title'
  },
  projectLink: {
    type: String,
    default: '/'
  },
  isImageLink: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis eligendi laboriosam unde repudiandae. Velit quidem laborum in numquam corporis?'
  }
});

function openImageOverlay(event) {
  showScreenOverlay.value = true;
}

function closeImageOverlay(event) {
  showScreenOverlay.value = false;
}
</script>

<template>
  <div v-if="!isImageLink" class="card" >
    <a :href="projectLink" target="_blank" class="image" :style="{ backgroundImage: `url(${imageSrc})` }"></a>
    <div class="overlay">
      <div class="line"></div>
      <section class="text"><p>{{ description }}</p></section>
    </div>
    <h2 class="button">{{ title }}</h2>
  </div>

  <div v-else>
    <div class="card">
      <div class="image"  @click="openImageOverlay" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
      <div class="overlay">
        <div class="line"></div>
        <section class="text"><p>{{ description }}</p></section>
      </div>
      <h2 class="button">{{ title }}</h2>

      <div v-show="showScreenOverlay" class="screen-overlay">
        <div class="image-overlay" :style="{ backgroundImage: `url(${imageSrc})` }">
          <button class="close-button" @click="closeImageOverlay">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .card{
    border-radius: 8px;
    width: 160px;
    height: 100px;
    position: relative;
    overflow: hidden;

    transition: .3s box-shadow;
  }

  .card:hover{
    box-shadow: 0px 0px 0px 10px rgba(173, 216, 230, 1);
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    cursor: pointer;

    background-position: center;
    background-size: cover;
  }

  .screen-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .5);
  }

  .image-overlay{
    width: 1200px;
    max-width: 100%;
    border-radius: 6px;
    height: auto;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    aspect-ratio: 16 / 9;
  }

  .close-button{
    position: absolute;
    background: none;
    top: 1rem;
    right: 1rem;
    color: rgb(20, 20, 20);
    font-size: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .close-button:hover{
    cursor: pointer;
  }

  h2 {
    min-width: fit-content;
    width: 50%;
    float: left;
    position: absolute;
    left: 0px;
    top: 1rem;
    z-index: 0;
    border-radius: 0px 8px 8px 0px;
    text-wrap-mode: nowrap;

    font-weight: 400;
    color: black;
    background: white;
    /* box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4); */

    transition: width .5s ease;
  }

  h3 {
    margin-bottom: .5rem;
  }

  a{
    display: block;
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0px 0px 8px 8px;
    background-color: rgb(0, 0, 0);
    overflow: hidden;
    width: 100%;
    height: 20px;
    padding: .5rem 1.5rem;
    transition:all 0.5s ease;
    scrollbar-gutter: stable;
  }

  .overlay:hover, .overlay:has(+ h2:hover) {
    height: 82%;
    animation: enableScroll 1.5s forwards;
  }

  .overlay:hover + h2, h2:hover{
    width: 102%;
  }

  @keyframes enableScroll {
    to {
      overflow-y: auto;
    }
  }

  .line{
    border: 2px solid rgba(88, 88, 88, 0.5);
    border-radius: 8px;
    margin-bottom: 1rem;
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
    .overlay:hover, .overlay:has(+ h2:hover) {
    height: 84%;
    }
  }
</style>
