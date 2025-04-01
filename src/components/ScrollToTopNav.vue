<script setup>
import { ref, onUnmounted, Transition } from 'vue';
import { useWindowScroll } from '@vueuse/core'

const isDisplayed = ref(false)
const { y } = useWindowScroll()
const height = ref(window.innerHeight)
const width = ref(window.innerWidth)
const documentHeight = ref(document.body.scrollHeight)

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleResize);


onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize);
})

function handleScroll(event) {
  height.value = window.innerHeight;
  console.log(y.value + height.value, documentHeight.value);

  setIsDisplayed(0)
}

function handleResize() {
  height.value = window.innerHeight;
  width.value = window.innerWidth;
  documentHeight.value = document.body.scrollHeight;
  console.log(y.value + height.value, documentHeight.value);
  setIsDisplayed(200);
}

function setIsDisplayed(offset) {
  isDisplayed.value = y.value + height.value + offset > documentHeight.value;
}
</script>



<template>
  <div class="background">

    <Transition>
      <div v-show="isDisplayed" class="overlay" v-on:scroll="handleScroll">
        <router-link class="button" :to="{ hash: '#header'}" >CONNECT</router-link>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.overlay{
  background: linear-gradient(rgba(48, 48, 51), rgb(15, 15, 15));

  height: 100%;
  display:flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1.2rem
}

.background{
  height: 140px;
  width: 100%;
  position: absolute;
  left: 0;
  background: rgba(48, 48, 51);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
