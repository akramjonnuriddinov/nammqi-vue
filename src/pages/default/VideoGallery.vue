<script lang="ts" setup>
import { ref } from 'vue'
import { PlayIcon } from '@heroicons/vue/24/solid'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import VideoModal from '@/components/shared/VideoModal.vue'

const categories = [
  { title: 'All', link: 'all' },
  { title: 'Fashion', link: 'fashion' },
  { title: 'Game', link: 'game' },
  { title: 'Sports', link: 'sports' },
  { title: 'Technology', link: 'technology' },
  { title: 'Video', link: 'video' },
]

const videos = ref([
  {
    title: 'Video Created by Vidio',
    link: 'https://www.youtube.com/AnVO_pFyz7o',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '6.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-17.jpg',
  },
  {
    title: '30 yoshda afsuslanmaslik uchun nima qilish kerak?',
    link: 'https://youtu.be/Ytu7-4HQGwk',
    date: 'Dekabr 19, 2024',
    owner: 'Asadbek Avazbekov',
    views: '9.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-1.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://youtu.be/Ytu7-4HQGwk',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '12.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-8.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://www.youtube.com/AnVO_pFyz7o',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '6.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-17.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://www.youtube.com/AnVO_pFyz7o',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '9.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-1.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://youtu.be/Ytu7-4HQGwk',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '12.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-8.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://www.youtube.com/AnVO_pFyz7o',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '6.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-17.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://www.youtube.com/AnVO_pFyz7o',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '9.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-1.jpg',
  },
  {
    title: 'Video Created by Vidio',
    link: 'https://youtu.be/Ytu7-4HQGwk',
    date: 'Dekabr 19, 2024',
    owner: 'Akramjon Nuriddinov',
    views: '12.267K',
    image:
      'https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-8.jpg',
  },
])

const isModalOpen = ref(false)
const selectedVideo = ref<string | null>(null)

const openModal = (videoLink: string) => {
  selectedVideo.value = videoLink
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedVideo.value = null
}

const loadMore = () => {
  alert('Load more...')
}
</script>

<template>
  <section class="min-h-screen py-10 bg-[#f6f6f6]">
    <div class="container p-6 mx-auto">
      <span class="flex w-full mb-2 text-sm text-primary-blue">
        Namangan Muhandislik Qurilish Instituti
      </span>
      <h2 class="mb-6 text-4xl font-bold">Videogalareya</h2>
      <div class="relative mb-6">
        <input
          class="w-full px-20 py-4 border border-[#b4b4b4]"
          placeholder="Videoni qidirish"
          type="text"
        />
        <SearchIcon
          class="absolute w-4 -translate-y-1/2 text-primary-blue left-4 top-1/2"
        />
      </div>
      <div class="flex items-center gap-10 border-b">
        <h2
          class="py-5 mr-10 text-2xl font-medium border-b border-primary-blue"
        >
          Kategoriyalar
        </h2>
        <ul class="flex flex-wrap items-center space-x-4 text-gray-600">
          <li
            v-for="category in categories"
            :key="category.link"
            class="transition-colors duration-0 hover:text-primary-blue"
          >
            <button class="whitespace-nowrap">{{ category.title }}</button>
          </li>
        </ul>
      </div>
      <ul class="grid grid-cols-3 gap-10 py-10">
        <li v-for="(video, index) in videos" :key="index" class="flex flex-col">
          <div class="relative group">
            <img class="rounded" :src="video.image" alt="" />
            <button
              @click="openModal(video.link)"
              class="absolute z-20 hidden text-white -translate-x-1/2 -translate-y-1/2 group-hover:flex top-1/2 left-1/2"
            >
              <PlayIcon class="w-14" />
            </button>
            <div
              class="absolute top-0 z-10 w-full h-full rounded bg-black/50"
            ></div>
          </div>
          <div class="flex flex-col">
            <h3 class="my-2">{{ video.title }}</h3>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span class="text-sm">{{ video.owner }}</span>
              <span class="text-sm">{{ video.date }}</span>
              <span class="text-sm">{{ video.views }} views</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex items-center justify-center py-10">
        <button
          @click="loadMore"
          class="flex items-center justify-center px-10 py-2 text-white bg-primary-blue hover:opacity-80"
        >
          Ko'proq yuklash...
        </button>
      </div>
    </div>

    <VideoModal v-if="isModalOpen" :link="selectedVideo" @close="closeModal" />
  </section>
</template>
