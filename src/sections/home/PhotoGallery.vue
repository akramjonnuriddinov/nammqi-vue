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

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
}


</script>

<template>
  <section class="py-10 bg-blue-50">
    <div class="container flex flex-col mx-auto px-4">
      <h2 class="mb-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
        Photo Gallery
      </h2>
      <div class="flex gap-7">
        <div v-for="(image, index) in images" :key="index" @click="openModal(image)"
          class="h-[450px] relative transition-all duration-500 ease-in-out " :class="{
            'w-[16.6667%]': activeIndex !== index,
            'w-[50%]': activeIndex === index,

          }" @mouseover="setActive(index)">
          <img :src="image.src" :alt="image.alt"
            class="w-full h-full object-cover object-center transition-all duration-300 ease-in-out" />
          <div class="absolute inset-0 bg-black/60">
            <div class="flex absolute inset-0 items-end  text-white text-sm leading-tight p-7">
              <div class="transition-all"
                :class="activeIndex !== index ? 'opacity-0 invisible duration-100 ' : 'duration-500  opacity-1 visible delay-500'">
                <h3 class="text-3xl font-bold">{{ image.alt }}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quod laborum tempora veniam
                  doloremque eaque explicabo nulla minus doloribus minima? Ea nostrum aut quisquam saepe ad consectetur
                  sapiente quod asperiores.</p>
              </div>
            </div>
            <div class="flex absolute inset-0 items-end  text-white text-sm leading-tight p-7">
              <h3 class="vertical-text text-white transition-all  text-3xl font-bold"
                :class="activeIndex === index ? 'duration-100  opacity-0 invisible' : 'duration-500  delay-500 opacity-1 visible'">
                {{ image.alt }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed  inset-0 flex items-center justify-center bg-black/50 z-50"
      @click.self="closeModal">
      <div class="relative max-w-[90%] max-h-[90%] bg-white overflow-hidden p-4 sm:p-6 lg:p-8">
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="w-full max-h-[80vh] object-cover" />
        <button class="absolute w-8 h-8 bg-primary-blue top-2 right-2 text-white text-2xl" @click="closeModal">
          <XMarkIcon />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.vertical-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin: 0 auto;
}
</style>
