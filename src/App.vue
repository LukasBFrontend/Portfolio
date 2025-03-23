<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue';
import HeroSection from './components/HeroSection.vue';
import ProjectCard from './components/ProjectCard.vue';
import StackSection from './components/StackSection.vue';
</script>

<template>
  <HeaderComponent/>
  <HeroSection/>
  <StackSection/>
  <project-card image-src="/exercise_bank.png" title="Exercise Bank" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptas? Ducimus doloremque magni quibusdam, tenetur voluptates rerum."></project-card>
</template>

<style scoped>

</style>
