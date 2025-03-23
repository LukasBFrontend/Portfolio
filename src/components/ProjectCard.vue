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
  <div class="container">
    <div class="image" :style="{backgroundImage: `url(${imageSrc})`}">
    </div>
    <div class="overlay">
        <section class="text"><h3>Description</h3><p>{{ description }}</p></section>
      </div>
    <h2 class="button">{{ title }}</h2>
  </div>
</template>

<style scoped>
  .container{
    width: 400px;
    height: 340px;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    background-position: center;
    background-size: cover;
  }

  h2 {
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
  }

  .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 0px 0px 8px 8px;
  background-color: #645cfa;
  overflow: hidden;
  width: 100%;
  height: 5px;
  padding: .5rem 1.5rem;
  transition: .5s ease;
}

.overlay:hover {
  height: 70%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
}
</style>
