<template>
  <div class="carousel flex justify-center items-center">
    <div class="carousel w-full">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item w-full"
        :class="{ 'active': index === currentIndex }"
      >
        <img :src="image" class="w-full object-scale-down" />
        <div class="absolute left-5 right-5 top-1/3 flex -translate-y-1/2 transform justify-between" v-if="images.length > 1">
          <a @click="prev" class="btn btn-sm">❮</a>
          <a @click="next" class="btn btn-sm">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);
let interval = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  resetAutoplay();
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  resetAutoplay();
};

const startAutoplay = () => {
  interval = setInterval(next, 5000);
};

const stopAutoplay = () => {
  clearInterval(interval);
};

const resetAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<style scoped>
.carousel-item {
  display: none;
}
.carousel-item.active {
  display: block;
}
.carousel-item img {
  width: 100%;
  height: 300px; 
  object-fit: cover;
}
</style>