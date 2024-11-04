<template>
  <section class="py-10 bg-blue-50">
    <div class="container mx-auto px-4">
      <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">Photo Gallery</h2>
      <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[150px] sm:auto-rows-[200px]">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="relative cursor-pointer overflow-hidden group transition-transform duration-300 ease-in-out"
          :class="getFixedSize(index)"
          @click="openModal(image)"
        >
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
          <div class="absolute inset-0 bg-black bg-opacity-60 flex items-end p-2 text-white text-sm leading-tight">
            <p class="w-full">{{ image.alt }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" @click.self="closeModal">
      <div class="relative max-w-[90%] max-h-[90%] bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="w-full max-h-[80vh] object-cover" />
        <button class="absolute w-8 h-8 bg-primary-blue top-2 right-2 text-white text-2xl" @click="closeModal">
          <XMarkIcon />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

interface Image {
  src: string
  alt: string
}

const images = ref<Image[]>([
  {
    src: 'https://my.nammqi.uz/storage/qabul-2024/image-2024-07-01-18-24-55.png',
    alt: 'Event Highlights 1',
  },
  {
    src: 'https://my.nammqi.uz/storage/elon-4.jpg',
    alt: 'Community Gathering',
  },
  {
    src: 'https://my.nammqi.uz/storage/infograph/banner.png',
    alt: 'Innovative Projects',
  },
  {
    src: 'https://my.nammqi.uz/storage/ijara-bulimi/2024-iil1-kengas2-masala-at-1x-1-1.jpg',
    alt: 'Tech Conference',
  },
  {
    src: 'https://my.nammqi.uz/themes/nammqi/images/institute.png',
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
  const classes = [
    'col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-3 row-span-2',
    'col-span-2 sm:col-span-1 row-span-2',
    'col-span-2 sm:col-span-1 row-span-2',
    'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1',
    'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1',
  ]
  return classes[index % classes.length]
}
</script>
