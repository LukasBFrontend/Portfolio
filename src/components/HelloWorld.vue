<script setup>
import { ref, onMounted } from 'vue';
import { getWelcome, patchEdgeConfig, createEdgeItems } from '../script/fetch';

const greeting = ref('Loading...');

onMounted( async () => {greeting.value = await getWelcome()});
</script>

<template>
  <h1>{{ greeting }}</h1>
  <button @click="createEdgeItems([{person1: 'John'}, {person2: 'Sophie'}])">Testa!</button>
</template>
