<script setup>
  import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';

  const props = defineProps({
    imageSrc: {
      type: String,
      default: 'default-image.jpg'
    },
    imageSrcs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: 'Title'
    },
    projectLink: {
      type: String,
      default: null
    },
    isImageLink: {
      type: Boolean,
      default: false
    },
    description: {
      type: [String, Object, Function],
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis eligendi laboriosam unde repudiandae. Velit quidem laborum in numquam corporis?'
    }
  });

  const showScreenOverlay = ref(false);
  const carouselIndex = ref(0);
  const overlayEl = ref(null);
  const hasOverlayOverflow = ref(false);
  const canScrollDown = ref(false);

  const images = computed(() => {
    const list = Array.isArray(props.imageSrcs)
      ? props.imageSrcs.filter((u) => typeof u === 'string' && u.length > 0)
      : [];
    if (list.length > 0) return list;
    return [props.imageSrc];
  });

  const hasMultipleImages = computed(() => images.value.length > 1);

  const prevIndex = computed(() => {
    const n = images.value.length;
    return n > 0 ? (carouselIndex.value - 1 + n) % n : 0;
  });

  const nextIndex = computed(() => {
    const n = images.value.length;
    return n > 0 ? (carouselIndex.value + 1) % n : 0;
  });

  const showPrevPeek = computed(() => images.value.length >= 3);
  const showNextPeek = computed(() => images.value.length >= 2);
  const showScrollHint = computed(() => hasOverlayOverflow.value && canScrollDown.value);
  const hasRichDescription = computed(
    () => typeof props.description === 'function' || (props.description && typeof props.description === 'object')
  );
  const descriptionRenderer = computed(() => {
    if (typeof props.description === 'function') {
      return { render: props.description };
    }
    if (props.description && typeof props.description === 'object') {
      return props.description;
    }
    return null;
  });

  function openImageOverlay() {
    showScreenOverlay.value = true;
  }

  function closeImageOverlay() {
    showScreenOverlay.value = false;
  }

  watch(showScreenOverlay, (open) => {
    if (open) carouselIndex.value = 0;
  });

  function nextSlide() {
    const n = images.value.length;
    if (n < 2) return;
    carouselIndex.value = (carouselIndex.value + 1) % n;
  }

  function prevSlide() {
    const n = images.value.length;
    if (n < 2) return;
    carouselIndex.value = (carouselIndex.value - 1 + n) % n;
  }

  function resetOverlayScroll(event) {
    const overlay = event.currentTarget.querySelector('.overlay-content');
    if (!overlay) return;
    overlay.scrollTop = 0;
    updateOverlayScrollHint();
  }

  function updateOverlayScrollHint() {
    const overlay = overlayEl.value;
    if (!overlay) return;

    const overflows = overlay.scrollHeight - overlay.clientHeight > 1;
    hasOverlayOverflow.value = overflows;
    canScrollDown.value =
      overflows && overlay.scrollTop + overlay.clientHeight < overlay.scrollHeight - 1;
  }

  function onOverlayScroll() {
    updateOverlayScrollHint();
  }

  function onWindowResize() {
    updateOverlayScrollHint();
  }

  watch(
    () => [props.description, props.projectLink],
    async () => {
      await nextTick();
      updateOverlayScrollHint();
    }
  );

  onMounted(async () => {
    await nextTick();
    updateOverlayScrollHint();
    window.addEventListener('resize', onWindowResize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', onWindowResize);
  });
</script>

<template>
  <div v-if="!isImageLink" class="card" @mouseleave="resetOverlayScroll">
    <a :href="projectLink" target="_blank" class="image" :style="{ backgroundImage: `url(${images[0]})` }"></a>
    <div
      class="overlay"
      :class="{ 'overlay--scrollable': showScrollHint }"
    >
      <div
        ref="overlayEl"
        class="overlay-content"
        @mouseenter="updateOverlayScrollHint"
        @scroll="onOverlayScroll"
      >
        <div class="description-header" style="margin-bottom: .5rem"><i class="fa-solid fa-align-left" style="font-size:larger; margin-right: 1rem;"></i>Description</div>
        <section class="text">
          <p v-if="!hasRichDescription">{{ description }}</p>
          <component :is="descriptionRenderer" v-else />
        </section>
        <div class="link">
          <a v-if="projectLink" :href="projectLink" target="_blank">
            <span class="link-text">{{ projectLink }}</span>
            <i style="margin-left: .5rem"class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <h2 class="button">{{ title }}</h2>
  </div>

  <div v-else>
    <div class="card" @mouseleave="resetOverlayScroll">
      <div class="image"  @click="openImageOverlay" :style="{ backgroundImage: `url(${images[0]})` }"></div>
      <div
        class="overlay"
        :class="{ 'overlay--scrollable': showScrollHint }"
      >
        <div
          ref="overlayEl"
          class="overlay-content"
          @mouseenter="updateOverlayScrollHint"
          @scroll="onOverlayScroll"
        >
          <div class="description-header" style="margin-bottom: .5rem"><i class="fa-solid fa-align-left" style="font-size:larger; margin-right: 1rem;"></i>Description</div>
          <section class="text">
            <p v-if="!hasRichDescription">{{ description }}</p>
            <component :is="descriptionRenderer" v-else />
          </section>
          <div class="link">
          
          <a v-if="projectLink" :href="projectLink" target="_blank">
            <span class="link-text">{{ projectLink }}</span>
            <i style="margin-left: .5rem"class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
      <h2 class="button">{{ title }}</h2>

      <div v-show="showScreenOverlay" class="screen-overlay">
        <div class="image-overlay">
          <button type="button" class="close-button" @click="closeImageOverlay">
            Close <i class="fa-solid fa-xmark"></i>
          </button>

          <div class="carousel-viewport">
            <div
              v-if="showPrevPeek"
              class="carousel-slide carousel-slide--prev"
              :style="{ backgroundImage: `url(${images[prevIndex]})` }"
              @click.stop="prevSlide"
            ></div>

            <div
              class="carousel-slide carousel-slide--current"
              :style="{ backgroundImage: `url(${images[carouselIndex]})` }"
            ></div>

            <div
              v-if="showNextPeek"
              class="carousel-slide carousel-slide--next"
              :style="{ backgroundImage: `url(${images[nextIndex]})` }"
              @click.stop="nextSlide"
            ></div>
          </div>

          <div v-if="hasMultipleImages" class="carousel-controls">
            <button
              type="button"
              class="carousel-arrow"
              aria-label="Previous image"
              @click.stop="prevSlide"
            >
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div class="carousel-dots" role="tablist" aria-label="Image carousel">
              <button
                v-for="(_, i) in images"
                :key="i"
                type="button"
                role="tab"
                :aria-selected="i === carouselIndex"
                :aria-label="`Image ${i + 1} of ${images.length}`"
                class="carousel-dot"
                :class="{ active: i === carouselIndex }"
                @click.stop="carouselIndex = i"
              ></button>
            </div>

            <button
              type="button"
              class="carousel-arrow"
              aria-label="Next image"
              @click.stop="nextSlide"
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  display: block;
}

.description-header {
  transition: color 0.5s ease;
}

.overlay:hover .description-header,
.overlay:has(+ h2:hover) .description-header {
  color: rgba(255, 255, 255, 0);
}

.card {
  border-radius: 8px;
  box-shadow: 0px 0px 2px 2px #78ff4f;
  height: 100px;
  overflow: hidden;
  position: relative;
  transition: 0.3s box-shadow;
  width: 160px;
}

.card:hover {
  box-shadow: 0px 0px 0px 6px #78ff4f;
}

.image {
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.screen-overlay {
  align-items: center;
  background: rgba(0, 0, 0, 0.685);
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
}

.image-overlay {
  max-width: 85%;
  position: relative;
  width: 1200px;
}

.carousel-viewport {
  aspect-ratio: 4 / 3;
  position: relative;
  width: 100%;
}

.carousel-slide {
  aspect-ratio: 4 / 3;
  border-radius: 6px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transition: transform 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
  width: 75%;
}

.carousel-slide::before,
.carousel-slide::after {
  background-image: inherit;
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.carousel-slide::before {
  background-color: rgba(0, 0, 0, 0.425);
  background-size: cover;
  background-blend-mode: multiply;
  filter: blur(14px);
  opacity: 0.95;
  transform: scale(1.08);
}

.carousel-slide::after {
  background-size: contain;
  z-index: 1;
}

.carousel-slide--current {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  transform: translate(-50%, -50%) scale(1);
  z-index: 3;
}

.carousel-slide--prev {
  cursor: pointer;
  filter: brightness(0.45);
  transform: translate(-50%, -50%) translateX(-35%) scale(0.85);
  z-index: 1;
}

.carousel-slide--next {
  cursor: pointer;
  filter: brightness(0.45);
  transform: translate(-50%, -50%) translateX(35%) scale(0.85);
  z-index: 1;
}

.carousel-slide--prev:hover,
.carousel-slide--next:hover {
  filter: brightness(0.75);
}

.carousel-controls {
  align-items: center;
  border-radius: 999px;
  bottom: 12.5%;
  display: flex;
  gap: 1rem;
  left: 50%;
  padding: 0.3rem 0.6rem;
  position: absolute;
  transform: translate(-50%, calc(100% + 0.5rem));
  z-index: 3;
}

.carousel-arrow {
  align-items: center;
  background: rgba(255, 255, 255, 0.18);
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 0.75rem;
  height: 2rem;
  justify-content: center;
  padding: 0;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  width: 2rem;
}

.carousel-arrow:hover {
  background: #78ff4f;
  color: #000;
  transform: scale(1.1);
}

.carousel-dots {
  align-items: center;
  display: flex;
  gap: 1rem;
}

.carousel-dot {
  background: rgba(255, 255, 255, 0.45);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 0.55rem;
  padding: 0;
  transition: background 0.2s ease, transform 0.2s ease;
  width: 0.55rem;
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.75);
}

.carousel-dot.active {
  background: #78ff4f;
  transform: scale(1.15);
}

.close-button {
  align-items: center;
  background: rgba(255, 255, 255, 0.18);
  border: none;
  border-radius: 2rem;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  gap: 0.5rem;
  height: 2.1rem;
  justify-content: center;
  line-height: 1;
  padding: 0.375rem 0.75rem 0.25rem;
  position: absolute;
  right: 16.75%;
  top: 12.5%;
  transform: translate(50%, calc(-100% - 0.5rem));
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  z-index: 4;
}

.close-button:hover {
  background: #78ff4f;
  color: #000;
}

h2 {
  background: rgb(19, 19, 19);
  border-radius: 0px 8px 8px 0px;
  color: #6ae445;
  float: left;
  font-weight: 400;
  left: 0px;
  min-width: fit-content;
  position: absolute;
  text-wrap-mode: nowrap;
  top: 1rem;
  transition: width 0.5s ease;
  width: 50%;
  z-index: 0;
}

h3 {
  margin-bottom: 0.5rem;
}

.overlay {
  background-color: rgb(19, 19, 19);
  bottom: -3.5rem;
  box-sizing: border-box;
  height: 43px;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  scrollbar-width: none;
  transition: all 0.5s ease;
  width: 100%;
}

.overlay::after {
  background: linear-gradient(to bottom, rgba(19, 19, 19, 0), rgba(19, 19, 19, 0.9));
  bottom: 0;
  content: '';
  height: 2.25rem;
  left: 1.5rem;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 1.5rem;
  transition: opacity 0.25s ease;
}

.overlay-content {
  -ms-overflow-style: none;
  box-sizing: border-box;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.75rem 1.5rem 3rem;
  scrollbar-width: none;
  width: 100%;
}

.overlay-content::-webkit-scrollbar {
  display: none;
}

.card:hover .overlay {
  bottom: 0rem;
}

.overlay:hover,
.overlay:has(+ h2:hover) {
  height: 90%;
}

.overlay--scrollable:hover::after,
.overlay--scrollable:has(+ h2:hover)::after {
  opacity: 1;
}

.overlay--scrollable {
  padding-bottom: 0;
}

.overlay:hover .link,
.overlay:has(+ h2:hover) .link {
  opacity: 100%;
  transition: all 0.75s ease;
  transition-delay: 0.35s;
}

.overlay:hover + h2,
h2:hover {
  width: 102%;
}

.link {
  margin-top: 1.5rem;
  opacity: 0%;
  position: relative;
  transition: 0s;
  transition-delay: 0s;
  width: 100%;
}

.link a {
  font-size: inherit;
  text-align: right;
  word-break: break-all;
}

.link a:hover {
  color: #5275df;
  text-decoration: underline;
}

.link i {
  font-size: 1.5rem;
}

.link-text {
  display: none;
}

.text {
  color: #ffffff;
  font-size: 20px;
  overflow-y: hidden;
  width: 100%;
}

@media (min-width: 576px) {
  .card {
    height: calc(130px * 2);
    width: calc(160px * 2);
  }
}

@media (min-width: 1200px) {
  .card {
    height: calc(130px * 2.2);
    width: calc(160px * 2.2);
  }
}

@media (min-width: 1440px) {
  .card {
    height: calc(130px * 2.5);
    width: calc(160px * 2.5);
  }

  .overlay:hover,
  .overlay:has(+ h2:hover) {
    height: 90%;
  }

  .link-text {
    display: inline;
  }

  .link a {
    line-height: 120%;
    text-align: left;
  }

  .link i {
    font-size: 1rem;
  }
}
</style>
