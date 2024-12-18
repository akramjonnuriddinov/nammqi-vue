<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface Video {
  id: string
  title: string
  url: string
}

const videos = ref<Video[]>([])
const showModal = ref(false)
const selectedVideo = ref<Video | null>(null)
const loading = ref(false)
const scrollTrigger = ref<HTMLElement | null>(null)

const fetchVideos = async () => {
  loading.value = true
  // Simulating API call (use actual API if needed)
  setTimeout(() => {
    const newVideos: Video[] = [
      {
        id: 'O3Im9yVlnPU',
        title: 'Sample Video 1',
        url: 'https://youtu.be/O3Im9yVlnPU',
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Sample Video 2',
        url: 'https://youtu.be/dQw4w9WgXcQ',
      },
      {
        id: 'sBws8MSXN7A',
        title: 'Sample Video 3',
        url: 'https://youtu.be/sBws8MSXN7A',
      },
      {
        id: 'O3Im9yVlnPU',
        title: 'Sample Video 1',
        url: 'https://youtu.be/O3Im9yVlnPU',
      },
      {
        id: 'sBws8MSXN7A',
        title: 'Sample Video 3',
        url: 'https://youtu.be/sBws8MSXN7A',
      },
      {
        id: 'O3Im9yVlnPU',
        title: 'Sample Video 1',
        url: 'https://youtu.be/O3Im9yVlnPU',
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Sample Video 2',
        url: 'https://youtu.be/dQw4w9WgXcQ',
      },
      {
        id: 'sBws8MSXN7A',
        title: 'Sample Video 3',
        url: 'https://youtu.be/sBws8MSXN7A',
      },
      {
        id: 'O3Im9yVlnPU',
        title: 'Sample Video 1',
        url: 'https://youtu.be/O3Im9yVlnPU',
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Sample Video 2',
        url: 'https://youtu.be/dQw4w9WgXcQ',
      },
      {
        id: 'sBws8MSXN7A',
        title: 'Sample Video 3',
        url: 'https://youtu.be/sBws8MSXN7A',
      },
      {
        id: 'O3Im9yVlnPU',
        title: 'Sample Video 1',
        url: 'https://youtu.be/O3Im9yVlnPU',
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Sample Video 2',
        url: 'https://youtu.be/dQw4w9WgXcQ',
      },
      {
        id: 'sBws8MSXN7A',
        title: 'Sample Video 3',
        url: 'https://youtu.be/sBws8MSXN7A',
      },
    ]
    videos.value.push(...newVideos)
    loading.value = false
  }, 1000)
}

const getVideoId = (video: Video | any): string => {
  const url = new URL(video.url)
  return url.pathname.split('/')[1]
}

const openModal = (video: Video) => {
  selectedVideo.value = video
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedVideo.value = null
}

const handleScroll = () => {
  if (scrollTrigger.value) {
    const rect = scrollTrigger.value.getBoundingClientRect()
    if (rect.top <= window.innerHeight) {
      fetchVideos()
    }
  }
}

onMounted(() => {
  fetchVideos()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="container p-6 mx-auto">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg"
      >
        <img
          :src="`https://img.youtube.com/vi/${getVideoId(video)}/hqdefault.jpg`"
          :alt="`Thumbnail of ${video.title}`"
          class="object-cover w-full cursor-pointer h-60"
          @click="openModal(video)"
        />
        <div
          class="absolute bottom-0 left-0 w-full p-2 text-center text-white bg-black bg-opacity-50"
        >
          {{ video.title }}
        </div>
      </div>
    </div>

    <!-- Infinite Scroll Trigger -->
    <div ref="scrollTrigger" class="py-4 mt-6 text-center" v-if="loading">
      <span>Loading...</span>
    </div>

    <!-- Modal for playing video -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="w-4/5 p-4 bg-white rounded-lg md:w-2/3">
        <iframe
          :src="`https://www.youtube.com/embed/${getVideoId(selectedVideo)}?autoplay=1`"
          frameborder="0"
          allow="autoplay; encrypted-media"
          class="w-full h-[500px]"
        ></iframe>
        <div class="mt-4 text-center">
          <button @click="closeModal" class="text-red-500 hover:text-red-700">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>
