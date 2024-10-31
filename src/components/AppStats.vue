<template>
  <section class="container py-10 gallery-container">
    <h2 class="mb-4 text-4xl font-semibold text-gray-800">Photo Gallery</h2>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        :class="getFixedSize(index)"
        @click="openModal(image)"
      >
        <img :src="image.src" :alt="image.alt" class="gallery-thumbnail" />
        <div class="description-overlay">
          <p class="description-text">{{ image.alt }}</p>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="modal-image"
        />
        <button class="close-button" @click="closeModal">✖</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Image {
  src: string
  alt: string
}

const images = ref<Image[]>([
  {
    src: 'https://tsu.ru/upload/iblock/c32/7teotuwxqua9r0p27wawfb77afyh25s2/DSC_9081.JPG',
    alt: 'Event Highlights 1',
  },
  {
    src: 'https://tsu.ru/upload/iblock/c32/7teotuwxqua9r0p27wawfb77afyh25s2/DSC_9081.JPG',
    alt: 'Community Gathering',
  },
  {
    src: 'https://tsu.ru/upload/iblock/c32/7teotuwxqua9r0p27wawfb77afyh25s2/DSC_9081.JPG',
    alt: 'Innovative Projects',
  },
  {
    src: 'https://tsu.ru/upload/iblock/c32/7teotuwxqua9r0p27wawfb77afyh25s2/DSC_9081.JPG',
    alt: 'Tech Conference',
  },
  {
    src: 'https://tsu.ru/upload/iblock/c32/7teotuwxqua9r0p27wawfb77afyh25s2/DSC_9081.JPG',
    alt: 'Art Exhibition',
  },
])

const showModal = ref(false)
const selectedImage = ref<Image | any>(null)

const openModal = (image: Image) => {
  selectedImage.value = image
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedImage.value = null
}

// Function to assign a specific CSS class to each card based on index
const getFixedSize = (index: number) => {
  const classes = ['large', 'tall', 'tall', 'small', 'small']
  return classes[index % classes.length] // Repeat pattern for each row
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-thumbnail {
  transform: scale(1.05);
}

/* Description overlay styles */
.description-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  box-sizing: border-box;
  color: white;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.4;
  display: flex;
  align-items: flex-end;
}

.description-text {
  margin: 0;
}

/* Specific sizes for the grid items */
.large {
  grid-column: span 3;
  grid-row: span 2;
}

.tall {
  grid-column: span 1;
  grid-row: span 2;
}

.small {
  grid-column: span 1;
  grid-row: span 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  overflow: hidden;
  border-radius: 8px;
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: cover;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
</style>
